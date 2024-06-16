"use client";
import Image from "next/image";
import movieData from "../../../utils/movies.json";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Movie } from "@/utils/types";

export interface Props {
  params: {
    countryName: string;
  };
}

const CountryHome = ({ params }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesList = await movieData;
      const movies = (moviesList as { [key: string]: Movie[] })[
        params.countryName
      ] as Movie[];
      setMovies(movies as Movie[]);
    };

    fetchMovies();
  }, [params.countryName]);
  return (
    <div className="flex flex-col w-full font-mono">
      <p className=" m-2 p-2 mx-auto text-lg text-lime-300">
        {params.countryName}
      </p>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-4 w-fit mx-auto">
      {movies &&
        movies.map((movie) => (
          <div
            key={movie.title}
            className="m-2 p-4 bg-slate-800 max-w-[360px] mx-auto  rounded-md"
            onClick={() => router.push(`/country/${params.countryName}/${movie.pathname}`)}
          >
            <p className="w-fit max-w-[240px] text-center">{movie.title}</p>
            <Image
              className="rounded-lg mt-2 mx-auto"
              src={movie.image}
              alt={movie.title}
              width={200}
              height={200}
              priority
            />
          </div>
        ))}
        </div>
    </div>
  );
};

export default CountryHome;
