import Image from "next/image";
import movieData from "../../../utils/movies.json";

export interface Props {
  params: {
    countryName: string;
  };
}

const CountryHome = ({ params }: Props) => {
  return (
    <div className="flex flex-col w-full font-mono">
      <p className=" m-2 p-2 mx-auto text-lg text-lime-300">{params.countryName}</p>
      <div className="m-2 p-4 bg-slate-800 max-w-[500px] mx-auto rounded-md">
        <p>Crazy Rich Asians (2018)</p>
        <Image
          className="mx-auto rounded-lg mt-2"
          src="/singapore/crazy-rich-asians.jpg"
          alt="Crazy Rich Asians"
          width={200}
          height={200}
          priority
        />
      </div>
    </div>
  );
};

export async function generateStaticParams() {
  const countryNames = ['Singapore', 'SriLanka']; 
  return countryNames.map((countryName) => ({
    countryName: countryName.replace(' ', '%20'), 
  }));
}

export default CountryHome;
