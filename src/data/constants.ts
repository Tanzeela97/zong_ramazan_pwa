export type TCityData = {
    name: string;
    key: string;
    geoloc: Array<number>;
};

export const CITIES_LIST = [
    { name: "Karachi", key: "karachi", geoloc: [24.86, 67.0] },
    { name: "Lahore", key: "Lahore", geoloc: [31.52, 74.36] },
    { name: "Islamabad", key: "islamabad", geoloc: [33.68, 73.05] },
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
    "Dhul'hijja"
];

export const RAMADAN_MONTH_NO = 9;
