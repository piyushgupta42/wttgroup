"use client";

import {
  APIProvider,
  AdvancedMarker,
  InfoWindow,
  Map,
  useMap,
} from "@vis.gl/react-google-maps";

import {
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import { motion } from "framer-motion";

export interface Office {
  city: string;
  address: string;
  lat: number;
  lng: number;
  phone?: string;
}

export const offices: Office[] = [
    {
      city: "Mumbai",
      address:
        "Walk The Talk Communications Pvt. Ltd., 910, Summit Business Park, Behind Guru Nanak Petrol Pump, Off Andheri Kurla Road, Andheri (East), Mumbai - 400093.",
      lat: 19.1164,
      lng: 72.8567,
    },
    {
      city: "Delhi",
      address:
        "Walk The Talk Communications Pvt. Ltd., 401-402 Thapar House, Yusuf Sarai Community Center, New Delhi - 110049.",
      lat: 28.5609,
      lng: 77.2047,
    },
    {
      city: "Kolkata",
      address:
        "Walk The Talk Communications Pvt. Ltd., Godrej Waterside, 12th Floor, Tower 2, D-5, DP Block, Sector V, Bidhan Nagar, Kolkata - 700091.",
      lat: 22.5797,
      lng: 88.433,
    },
    {
      city: "Chennai",
      address:
        "Walk The Talk Communications Pvt. Ltd., No 11/38, Status Quo Building, Sterling Road, Seetha Nagar, Nungambakkam, Chennai - 600034.",
      lat: 13.0604,
      lng: 80.2496,
    },
    {
      city: "Bengaluru",
      address:
        "Walk The Talk Communications Pvt. Ltd., A/509, Mittal Towers, MG Road, Bengaluru - 560001.",
      lat: 12.9756,
      lng: 77.6033,
    },
    {
      city: "Hyderabad",
      address:
        "Walk The Talk Communications Pvt. Ltd., 505, No. 6-3-252/2, Sri Ram Nest, Mega City, Irram Manzil Colony, Banjara Hills, Hyderabad - 500082.",
      lat: 17.4156,
      lng: 78.4486,
    },
  ];

interface OfficeMapProps {
  selectedOffice?: Office;
}

function MapController({
  selectedOffice,
}: {
  selectedOffice?: Office;
}) {
  const map = useMap();

  useEffect(() => {
    if (!map || !selectedOffice) {
      return;
    }

    map.panTo({
      lat: selectedOffice.lat,
      lng: selectedOffice.lng,
    });

    map.setZoom(11);
  }, [map, selectedOffice]);

  return null;
}

function FitAllOffices() {
  const map = useMap();

  useEffect(() => {
    if (!map) {
      return;
    }

    const bounds = new google.maps.LatLngBounds();

    offices.forEach((office) => {
      bounds.extend({
        lat: office.lat,
        lng: office.lng,
      });
    });

    map.fitBounds(bounds, 70);
  }, [map]);

  return null;
}

function OfficeMarker({
  office,
  index,
  selected,
  onClick,
}: {
  office: Office;
  index: number;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <AdvancedMarker
      position={{
        lat: office.lat,
        lng: office.lng,
      }}
      onClick={onClick}
      title={`${office.city} WTT Office`}
    >
      <button
        type="button"
        aria-label={`View ${office.city} office`}
        className="group relative outline-none"
      >
        {/* Pulse */}
        <motion.span
          animate={{
            scale: selected ? [1, 1.8, 1] : 1,
            opacity: selected ? [0.4, 0, 0.4] : 0,
          }}
          transition={{
            duration: 2,
            repeat: selected ? Infinity : 0,
          }}
          className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#007aff]"
        />

        {/* Marker */}
        <motion.span
          animate={{
            y: selected ? [0, -4, 0] : 0,
          }}
          transition={{
            duration: 1.8,
            repeat: selected ? Infinity : 0,
            ease: "easeInOut",
          }}
          className={`relative flex h-11 w-11 items-center justify-center rounded-full border-2 shadow-xl transition-all ${
            selected
              ? "border-white bg-[#007aff] shadow-[0_0_30px_rgba(0,122,255,.7)]"
              : "border-white/80 bg-[#050509] group-hover:bg-[#007aff]"
          }`}
        >
          <MapPin
            size={17}
            className="text-white"
            fill={selected ? "white" : "transparent"}
          />

          {/* Number */}
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[7px] font-black text-black">
            {index + 1}
          </span>
        </motion.span>
      </button>
    </AdvancedMarker>
  );
}

export default function OfficeMap({
  selectedOffice: externalSelectedOffice,
}: OfficeMapProps) {
  const [selectedOffice, setSelectedOffice] =
    useState<Office | null>(
      externalSelectedOffice ?? null
    );

  useEffect(() => {
    if (externalSelectedOffice) {
      setSelectedOffice(externalSelectedOffice);
    }
  }, [externalSelectedOffice]);

  /*
   * Allows ContactPage city cards to control the map.
   */
  useEffect(() => {
    const handleOfficeSelect = (
      event: Event
    ) => {
      const customEvent =
        event as CustomEvent<Office>;

      if (customEvent.detail) {
        setSelectedOffice(customEvent.detail);
      }
    };

    window.addEventListener(
      "wtt-office-select",
      handleOfficeSelect
    );

    return () => {
      window.removeEventListener(
        "wtt-office-select",
        handleOfficeSelect
      );
    };
  }, []);

  const apiKey = "AIzaSyAMSQec30b6lqEAUMzLYJUHbKzEnsaVlTY";

  const mapId = `"6f2e8c7a4b93d1ab" || "DEMO_MAP_ID"`;

  if (!apiKey) {
    return (
      <div className="flex h-full min-h-[400px] items-center justify-center bg-[#0a0a0d] p-8 text-center">
        <div>
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#007aff]/10 text-[#007aff]">
            <MapPin size={22} />
          </div>

          <h3 className="mt-5 text-lg font-bold text-white">
            Google Maps API key required
          </h3>

          <p className="mx-auto mt-2 max-w-sm text-xs leading-5 text-white/40">
            Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
            to your .env.local file.
          </p>
        </div>
      </div>
    );
  }

  return (
    <APIProvider apiKey={apiKey}>
      <div className="relative h-full min-h-[400px] w-full overflow-hidden bg-[#0b0b0f]">
        <Map
          defaultCenter={{
            lat: 21.5,
            lng: 79,
          }}
          defaultZoom={5}
          mapId={mapId}
          gestureHandling="cooperative"
          disableDefaultUI
          zoomControl
          streetViewControl={false}
          fullscreenControl={false}
          mapTypeControl={false}
          clickableIcons={false}
          keyboardShortcuts={true}
          reuseMaps
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {/* Initial map positioning */}
          {!externalSelectedOffice && (
            <FitAllOffices />
          )}

          {/* Selected office controller */}
          <MapController
            selectedOffice={
              selectedOffice ?? undefined
            }
          />

          {/* Markers */}
          {offices.map((office, index) => (
            <OfficeMarker
              key={office.city}
              office={office}
              index={index}
              selected={
                selectedOffice?.city ===
                office.city
              }
              onClick={() =>
                setSelectedOffice(office)
              }
            />
          ))}

          {/* Info window */}
          {selectedOffice && (
            <InfoWindow
              position={{
                lat: selectedOffice.lat,
                lng: selectedOffice.lng,
              }}
              onCloseClick={() =>
                setSelectedOffice(null)
              }
              pixelOffset={[0, -10]}
            >
              <div className="min-w-[230px] p-1 text-[#050509]">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#007aff]">
                      WTT Office
                    </p>

                    <h3 className="mt-1 text-lg font-black">
                      {selectedOffice.city}
                    </h3>
                  </div>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#007aff]/10 text-[#007aff]">
                    <MapPin size={14} />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin
                      size={13}
                      className="mt-0.5 shrink-0 text-[#007aff]"
                    />

                    <div className="min-w-[230px] p-1 text-[#050509]">
                      {selectedOffice.address}
                    </div>
                  </div>

                  {selectedOffice.phone && (
                    <div className="flex items-center gap-2">
                      <Phone
                        size={13}
                        className="shrink-0 text-[#007aff]"
                      />

                      <p className="text-xs font-semibold">
                        {selectedOffice.phone}
                      </p>
                    </div>
                  )}
                </div>

                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${selectedOffice.lat},${selectedOffice.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#050509] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#007aff]"
                >
                  <Navigation size={12} />
                  Get Directions
                </a>
              </div>
            </InfoWindow>
          )}
        </Map>

        {/* Top left map status */}
        <div className="pointer-events-none absolute left-5 top-5 z-10">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#050509]/70 px-3 py-2 backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#007aff] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#007aff]" />
            </span>

            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/60">
              WTT Live Network
            </span>
          </div>
        </div>

        {/* Bottom map cities */}
        <div className="absolute bottom-5 left-5 right-5 z-10">
          <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {offices.map((office) => {
              const active =
                selectedOffice?.city ===
                office.city;

              return (
                <button
                  key={office.city}
                  type="button"
                  onClick={() =>
                    setSelectedOffice(office)
                  }
                  className={`shrink-0 rounded-full border px-3 py-2 text-[9px] font-bold uppercase tracking-[0.12em] backdrop-blur-xl transition ${
                    active
                      ? "border-[#007aff] bg-[#007aff] text-white"
                      : "border-white/10 bg-[#050509]/70 text-white/50 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {office.city}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </APIProvider>
  );
}
