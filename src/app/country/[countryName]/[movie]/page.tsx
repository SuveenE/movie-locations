"use client";

import MoviePage from "@/app/components/movie";

export interface Props {
  params: {
    movie: string;
  };
}

const MovieHome = ({ params }: Props) => {
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
    <MoviePage params={params} />
  );
};

export async function generateStaticParams() {
    const movieNames = ['bridge-on-the-river-kwai', 'crazy-rich-asians']; 
    return movieNames.map((movieName) => ({
      movie: movieName,
    }));
  }

export default MovieHome;