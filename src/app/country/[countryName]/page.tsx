export interface Props {
  params: {
    countryName: string;
  };
}

const CountryHome = ({ params }: Props) => {
  return (
    <div className="flex flex-col w-full">
      {params.countryName.replace("%20", " ")}
    </div>
  );
};

export async function generateStaticParams() {
  const countryNames = ['Singapore', 'Sri Lanka']; 
  return countryNames.map((countryName) => ({
    countryName: countryName.replace(' ', '%20'), 
  }));
}

export default CountryHome;
