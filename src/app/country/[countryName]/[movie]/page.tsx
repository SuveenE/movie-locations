"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Movie } from "@/utils/types";

export interface Props {
  params: {
    movie: string;
  };
}

const CountryHome = ({ params }: Props) => {
//   const [movies, setMovies] = useState<Movie[]>([]);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchMovies = async () => {
//       const moviesList = await movieData;
//       const movies = (moviesList as { [key: string]: Movie[] })[
//         params.countryName
//       ] as Movie[];
//       setMovies(movies as Movie[]);
//     };

//     fetchMovies();
//   }, [params.countryName]);
  return (
    <div className="flex flex-col w-full font-mono">
      <p className=" m-2 p-2 mx-auto text-lg text-lime-300">
        {params.movie}
      </p>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-4 w-fit mx-auto">
        </div>
    </div>
  );
};

export default CountryHome;