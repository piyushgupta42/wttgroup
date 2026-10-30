"use client";

import { useEffect } from "react";

export default function SectionSnap() {
  useEffect(() => {
    if (window.innerWidth < 768) return;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-snap-section]")
    );

    if (!sections.length) return;

    const ANIMATION_DURATION = 650;
    const GESTURE_LOCK = 850;
    const WHEEL_THRESHOLD = 18;

    let currentIndex = 0;
    let isAnimating = false;

    let wheelDelta = 0;
    let gestureTimer: number | null = null;
    let animationFrame: number | null = null;

    const getSectionTop = (section: HTMLElement) => {
      return section.getBoundingClientRect().top + window.scrollY;
    };

    const getCurrentIndex = () => {
      const scrollY = window.scrollY;

      let closestIndex = 0;
      let closestDistance = Infinity;

      sections.forEach((section, index) => {
        const distance = Math.abs(
          scrollY - getSectionTop(section)
        );

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      return closestIndex;
    };

    currentIndex = getCurrentIndex();

    const easeInOut = (t: number) => {
      return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const moveToSection = (index: number) => {
      if (isAnimating) return;

      const targetSection = sections[index];

      if (!targetSection) return;

      const startY = window.scrollY;
      const targetY = getSectionTop(targetSection);

      if (Math.abs(targetY - startY) < 2) {
        currentIndex = index;
        return;
      }

      isAnimating = true;
      currentIndex = index;

      const startTime = performance.now();

      const animate = (time: number) => {
        const elapsed = time - startTime;
        const progress = Math.min(
          elapsed / ANIMATION_DURATION,
          1
        );

        const eased = easeInOut(progress);

        window.scrollTo(
          0,
          startY + (targetY - startY) * eased
        );

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          window.scrollTo(0, targetY);

          animationFrame = null;

          window.setTimeout(() => {
            isAnimating = false;
          }, 150);
        }
      };

      animationFrame = requestAnimationFrame(animate);
    };

    const moveNext = () => {
      if (currentIndex >= sections.length - 1) return;

      moveToSection(currentIndex + 1);
    };

    const movePrevious = () => {
      if (currentIndex <= 0) return;

      moveToSection(currentIndex - 1);
    };

    const handleWheel = (event: WheelEvent) => {
      if (window.innerWidth < 768) return;

      // Ignore horizontal trackpad movement
      if (
        Math.abs(event.deltaX) >
        Math.abs(event.deltaY)
      ) {
        return;
      }

      if (Math.abs(event.deltaY) < 1) return;

      /*
       * IMPORTANT:
       * While animation is running, completely block
       * all additional wheel movement.
       */
      if (isAnimating) {
        event.preventDefault();
        return;
      }

      /*
       * Always prevent the browser's native vertical scroll
       * while we are handling the section transition.
       */
      event.preventDefault();

      wheelDelta += event.deltaY;

      /*
       * Prevent one wheel gesture from triggering
       * multiple section changes.
       */
      if (gestureTimer !== null) {
        window.clearTimeout(gestureTimer);
      }

      gestureTimer = window.setTimeout(() => {
        wheelDelta = 0;
        gestureTimer = null;
      }, GESTURE_LOCK);

      /*
       * Wait until the wheel gesture has enough movement.
       */
      if (Math.abs(wheelDelta) < WHEEL_THRESHOLD) {
        return;
      }

      const direction = wheelDelta > 0 ? 1 : -1;

      // Reset BEFORE moving
      wheelDelta = 0;

      if (direction > 0) {
        moveNext();
      } else {
        movePrevious();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (window.innerWidth < 768) return;

      if (
        event.key === "ArrowDown" ||
        event.key === "PageDown"
      ) {
        event.preventDefault();

        if (!isAnimating) {
          moveNext();
        }

        return;
      }

      if (
        event.key === "ArrowUp" ||
        event.key === "PageUp"
      ) {
        event.preventDefault();

        if (!isAnimating) {
          movePrevious();
        }
      }
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        if (animationFrame !== null) {
          cancelAnimationFrame(animationFrame);
        }

        isAnimating = false;
      }
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);

      if (gestureTimer !== null) {
        window.clearTimeout(gestureTimer);
      }

      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return null;
}