import CountryPage from "@/app/components/country";

export interface Props {
  params: {
    countryName: string;
  };
}

const CountryHome = ({ params }: Props) => {
  return (
     <CountryPage params={params} />
  );
};

export async function generateStaticParams() {
  const countryNames = ['Singapore', 'SriLanka']; 
  return countryNames.map((countryName) => ({
    countryName: countryName.replace(' ', '%20'), 
  }));
}

export default CountryHome;

