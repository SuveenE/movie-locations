import { GetStaticPaths, GetStaticProps } from "next";
import geojsonData from "../../ne_110m_populated_places_simple.json";
import { Feature } from "@/utils/types";

export interface Props {
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

async function generateStaticParams() {
    const { features } = await geojsonData;
    if (features){
      return features.map((feature: { properties: { sov0name: string } }) => ({
        params: {
          countryName: feature.properties.sov0name.replace(' ', '%20'), // URL encode the country name
        },
      }));
    }
    return [];
  }
  
const getStaticPaths: GetStaticPaths = async () => {
    const paths = (await generateStaticParams()).map((params: any) => ({
      params,
    }));
  
    return {
      paths,
      fallback: false, // or true if you want fallback behavior
    };
  };
  
  
  export default CountryHome;