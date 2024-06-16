// Define the interface for the geometry object
interface Geometry {
  type: string;
  coordinates: number[];
}

// Define the interface for the properties object
interface Properties {
  scalerank: number;
  natscale: number;
  labelrank: number;
  featurecla: string;
  name: string;
  namepar: string | null;
  namealt: string | null;
  diffascii: number;
  nameascii: string;
  adm0cap: number;
  capalt: string | null;
  capin: string | null;
  worldcity: number;
  megacity: number;
  sov0name: string;
  sov_a3: string;
  adm0name: string;
  adm0_a3: string;
  adm1name: string | null;
  iso_a2: string;
  note: string | null;
  latitude: number;
  longitude: number;
  changed: number;
  namediff: number;
  diffnote: string | null;
  pop_max: number;
  pop_min: number;
  pop_other: number;
  rank_max: number;
  rank_min: number;
  geonameid: number;
  meganame: string | null;
  ls_name: string;
  ls_match: number;
  checkme: number;
  min_zoom: number;
}

// Define the interface for each feature object
export interface Feature {
  type: string;
  properties: Properties;
  bbox: number[];
  geometry: Geometry;
}

// Define the interface for the FeatureCollection object
export interface FeatureCollection {
  type: string;
  features: Feature[];
}

export interface Movie {
  title: string;
  image: string;
  pathname: string;
}