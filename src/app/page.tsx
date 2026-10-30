import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import HeroSection from "../components/home/HeroSection";
import WhyWttSection from "../components/home/WhyWttSection";
import ClientsSection from "../components/home/ClientsSection";
import AwardsSection from "../components/home/AwardsSection";
import WhatWeDoSection from "../components/home/WhatWeDoSection";
import SectionSnap from "../components/home/SectionSnap";

export default async function HomePage() {
  return (
    <>
      <SectionSnap />

      <main className="w-full max-w-full overflow-x-hidden bg-black">
        <Header />

        <section
          data-snap-section
          className="w-full max-w-full overflow-hidden"
        >
          <HeroSection />
        </section>

        <section
          data-snap-section
          className="w-full max-w-full overflow-hidden"
        >
          <WhatWeDoSection />
        </section>

        <section
          data-snap-section
          className="w-full max-w-full overflow-hidden"
        >
          <WhyWttSection />
        </section>

        <section
          data-snap-section
          className="w-full max-w-full overflow-hidden"
        >
          <ClientsSection />
        </section>

        <section
          data-snap-section
          className="w-full max-w-full overflow-hidden"
        >
          <AwardsSection />
        </section>
        <section
          data-snap-section
          className="w-full max-w-full overflow-hidden"
        >
          <Footer />
        </section>
      </main>
    </>
  );
}
