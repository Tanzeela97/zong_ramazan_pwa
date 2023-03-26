import { writable } from "svelte/store";
import { CITIES_LIST } from "../assets/data/constants";
import { toLocalStorage, fromLocalStorage } from "./storage";

export const phoneNumberInitialValue = fromLocalStorage("phoneNumber", null);
export const phoneNumber = writable(phoneNumberInitialValue);
toLocalStorage(phoneNumber, "phoneNumber");

export const isHanafiInitialValue = fromLocalStorage("isHanafi", true);
export const isHanafi = writable(isHanafiInitialValue);
toLocalStorage(isHanafi, "isHanafi");

export const currentCityInitialValue = fromLocalStorage(
  "currentCity",
  CITIES_LIST[2]
);
export const selectedCity = writable(currentCityInitialValue);
toLocalStorage(selectedCity, "currentCity");

export const citiesListInitialValue = fromLocalStorage(
  "citiesList",
  CITIES_LIST
);
export const citiesList = writable(citiesListInitialValue);
toLocalStorage(citiesList, "citiesList");

export const notificationInitialValue = fromLocalStorage("notification", false);
export const notification = writable(notificationInitialValue);
toLocalStorage(notification, "notification");

export const isLoading = writable(false);

// export const currentCity = writable(CITIES_LIST[2]);
// export const geoLocation = writable([24.7, 67.0]);
// export const citiesList = writable(CITIES_LIST);
// export const prayerTime = writable({});
// export const notification = writable(false);
// citiesList.subscribe((val) => { browser && localStorage.setItem("citiesList", JSON.stringify(val)); });
// currentCity.subscribe((val) => { browser && localStorage.setItem("currentCity", JSON.stringify(val)); });
