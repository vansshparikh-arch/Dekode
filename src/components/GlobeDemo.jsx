import React from "react";
import { World } from "./ui/Globe";

export function GlobeDemo() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#0a0a0f", // matches --color-bg-dark
    showAtmosphere: true,
    atmosphereColor: "#3576C1",
    atmosphereAltitude: 0.15,
    emissive: "#2d2d5bff",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#dc0f0fff",
    directionalTopLight: "#a41515ff",
    pointLight: "#db1212ff",
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: -5, lng: 105 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const colors = ["#3576C1", "#FEB611", "#3576C1", "#FEB611"];

  // Coordinates:
  // Canada: 56.13, -106.34
  // UAE: 23.42, 53.84
  // Australia: -25.27, 133.77
  // India: 20.59, 78.96
  // UK: 55.37, -3.43

  const locations = [
    { lat: 56.13, lng: -106.34 }, // Canada
    { lat: 55.37, lng: -3.43 },   // UK
    { lat: 23.42, lng: 53.84 },   // UAE
    { lat: 20.59, lng: 78.96 },   // India
    { lat: -25.27, lng: 133.77 }, // Australia
  ];

  const arcs = [];
  // Connect them in a chain
  for (let i = 0; i < locations.length - 1; i++) {
    arcs.push({
      order: i + 1,
      startLat: locations[i].lat,
      startLng: locations[i].lng,
      endLat: locations[i + 1].lat,
      endLng: locations[i + 1].lng,
      arcAlt: 0.3,
      color: colors[i % colors.length],
    });
  }
  // Connect Australia back to Canada
  arcs.push({
    order: locations.length,
    startLat: locations[locations.length - 1].lat,
    startLng: locations[locations.length - 1].lng,
    endLat: locations[0].lat,
    endLng: locations[0].lng,
    arcAlt: 0.4,
    color: colors[locations.length % colors.length],
  });

  return (
    <div className="globe-interactive-container" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, cursor: 'grab' }}>
      <div style={{ width: '100%', aspectRatio: '1 / 1', maxWidth: '800px', maxHeight: '800px' }}>
        <World data={arcs} globeConfig={globeConfig} />
      </div>
    </div>
  );
}
