"use client";

import { useEffect, useState } from "react";
import { Feature } from "../utils/types";
import geojsonData from "../utils/ne_110m_populated_places_simple.json";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Image from "next/image";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const Home = () => {
  const [places, setPlaces] = useState<Feature[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPlaces = async () => {
      const { features } = await geojsonData;
      setPlaces(features as Feature[]);
    };

    fetchPlaces();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-mono">
      <p className="text-center fixed top-1 left-1/2 transform -translate-x-1/2 text-white p-4 font-mono bg-black z-50 rounded-lg shadow-md max-w-[500px]">
        Movie Locations Around the world
        <span className="block mt-2 text-sm text-gray-400">
          Click on a country to explore the exact filming locations of your
          favorite movies and recreate those iconic scenes.
        </span>
      </p>
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        labelsData={places} // Type assertion here
        labelLat={(d) => (d as Feature).properties.latitude}
        labelLng={(d) => (d as Feature).properties.longitude}
        labelText={(d) => (d as Feature).properties.sov0name}
        labelSize={1}
        labelDotRadius={1}
        labelColor={() => "rgba(255, 165, 0, 0.75)"}
        labelResolution={2}
        onLabelClick={(d) =>
          router.push(
            `/country/${(d as Feature).properties.sov0name || "singapore"}`
          )
        }
      />
      <div className="text-center flex flex-row gap-2 items-center fixed bottom-1 left-1/2 transform -translate-x-1/2 text-white p-2 font-mono bg-black z-50 rounded-lg shadow-md max-w-[500px]">
        <Image
          className="ml-auto rounded-lg"
          src="/github-logo.png"
          alt="Github logo"
          width={30}
          height={30}
          priority
        />
        <a
          className="block text-sm text-gray-400"
          href="https://github.com/SuveenE/movie-locations"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </main>
  );
};

export default Home;
