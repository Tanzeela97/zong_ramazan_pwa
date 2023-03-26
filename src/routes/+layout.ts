// import { get } from "svelte/store";
import type { TCityData } from "../assets/data/constants";
import { selectedCity, citiesList, isLoading } from "../stores/store";

export const load = async ({ fetch }: { fetch: any }) => {
  async function getAllCities() {
    isLoading.set(true);
    const url =
      "https://zongislamicv1.vectracom.com/api/index.php?msisdn=null&operator=Zong&menu=getAllCity";
    // try {
    const response = await fetch(url);

    const data = await response.json();
    // if (response.ok) {
    citiesList.set(data.data);
    selectedCity.set(data.data[2]);

    isLoading.set(false);
    return data.data;
  }

  return {
    // prayerTime: fetchPrayerTime(),
    cities: getAllCities(),
  };
};
