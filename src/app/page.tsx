'use client'

import { useEffect, useState } from 'react';
import Globe from 'react-globe.gl';
import { Feature } from '../utils/types';
import geojsonData from './ne_110m_populated_places_simple.json'; 
import { useRouter } from 'next/navigation';

export default function Home() {
  const [places, setPlaces] = useState<Feature[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPlaces = async () => {
      const { features } = await geojsonData; 
      setPlaces(features as Feature[]); 
    }

    fetchPlaces();
    
  }, []);

  console.log(places)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <p className='p-4 '>Movie Locations Around the world</p> */}
        <Globe
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          labelsData={places as unknown as Feature[]} // Type assertion here
          labelLat={(d) => (d as Feature).properties.latitude}
          labelLng={(d) => (d as Feature).properties.longitude}
          labelText={(d) => (d as Feature).properties.sov0name}
          labelSize={1}
          labelDotRadius={1}
          labelColor={() => 'rgba(255, 165, 0, 0.75)'}
          labelResolution={2}
          onLabelClick = {(d) => router.push(`/country/${(d as Feature).properties.sov0name}`)}
        />
    </main>
  );
}
