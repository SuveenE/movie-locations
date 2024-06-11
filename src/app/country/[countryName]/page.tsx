import countryData from "../../../utils/countries.json";

export interface Props {
  params: {
    countryName: string;
  };
}

type CountryDataType = {
  [key: string]: string;
};

const CountryHome = ({ params }: Props) => {
  return (
    <div className="flex flex-col w-full">
      {countryData[params.countryName as keyof typeof countryData]}
    </div>
  );
};

export async function generateStaticParams() {
  const countryNames = ['SGP', 'LKA']; 
  return countryNames
}

export default CountryHome;
