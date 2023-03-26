// import { get } from "svelte/store";
import { citiesList } from "../stores/store";

import { CITIES_LIST_EXTENDED } from "../assets/data/constants";

export const load = async ({ fetch }: { fetch: any }) => {
  // async function getAllCities() {
  //   isLoading.set(true);
  //   const url =
  //     "https://zongislamicv1.vectracom.com/api/index.php?msisdn=null&operator=Zong&menu=getAllCity";
  //   // try {
  //   const response = await fetch(url);

  //   const data = await response.json();
  //   // if (response.ok) {
  //   citiesList.set(data.data);

  //   isLoading.set(false);
  //   return data.data;
  // }

  citiesList.set(CITIES_LIST_EXTENDED);
  return {
    cities: CITIES_LIST_EXTENDED,
  };
};
