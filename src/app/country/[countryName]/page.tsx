interface Props {
    params: {
      countryName: string;
    };
  }

  const CountryHome = ({ params }: Props) => {
    return (
      <div className="flex flex-col w-full" >
        {params.countryName.replace('%20', ' ')}
      </div>
    );
  };
  
  export default CountryHome;