'use client'

import { useEffect, useState } from 'react';
import Globe from 'react-globe.gl';
import { Feature } from './utils/types';

export default function Home() {
  const [places, setPlaces] = useState<Feature[]>([]);

  useEffect(() => {
    fetch('../ne_110m_populated_places_simple.geojson')
      .then((res) => res.json())
      .then(({ features }) => setPlaces(features));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <Globe
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          labelsData={places}
          // labelLat={(d: Feature) => d.properties.latitude}
          // labelLng={(d: Feature) => d.properties.longitude}
          // labelText={(d: Feature) => d.properties.name}
          // labelSize={(d: Feature) => Math.sqrt(d.properties.pop_max) * 4e-4}
          // labelDotRadius={(d: Feature) => Math.sqrt(d.properties.pop_max) * 4e-4}
          labelColor={() => 'rgba(255, 165, 0, 0.75)'}
          labelResolution={2}
        />
    </main>
  );
}
