type TCoordinates = {
  coordinates: [string, string];
};
export type TCityData = {
  name: string;
  location: TCoordinates;
};

export const CITIES_LIST = [
  { name: "Karachi", location: { coordinates: ["24.86", "67.0"] } },
  { name: "Lahore", location: { coordinates: ["31.52", "74.36"] } },
  { name: "Islamabad", location: { coordinates: ["33.68", "73.05"] } },
] satisfies TCityData[];

export const HIJRI_MONTHS_LIST = [
  "Muharram",
  "Safar",
  "Rabi-Ul_Awwal",
  "Rabi-Us-Saani",
  "Jamadi-Ul-Awwal",
  "Jamadi-Us-Saani",
  "Rajab",
  "Shaban",
  "Ramadan",
  "Shawwal",
  "Dhi'quad",
  "Dhul'hijja",
];

export const RAMADAN_MONTH_NO = 9;
