import MoviePage from "@/app/components/movie";

export interface Props {
  params: {
    movieName: string;
  };
}

export async function generateStaticParams() {
  const movieNames = ["/bridge-on-the-river-kwai", "/crazy-rich-asians"];
  return movieNames.map((movieName) => ({
    movieName: movieName.replace(" ", "%20"),
  }));
}

const MovieHome = ({ params }: Props) => {
  return <MoviePage params={params} />;
};

export default MovieHome;
