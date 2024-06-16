import MoviePage from "@/app/components/movie";

export interface Props {
  params: {
    movie: string;
  };
}

export async function generateStaticParams() {
    const movieNames = ['SriLanka/bridge-on-the-river-kwai', 'Singapore/crazy-rich-asians']; 
    return movieNames.map((movieName) => ({
      movie: movieName,
    }));
  }

const MovieHome = ({ params }: Props) => {
  return (
    <MoviePage params={params} />
  );
};



export default MovieHome;