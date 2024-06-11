export interface Props {
  params: {
    countryName: string;
  };
}

const CountryHome = ({ params }: Props) => {
  return (
    <div className="flex flex-col w-full">
      {params.countryName}
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
