import type { TCityData } from "../assets/data/constants";
import { isHanafi } from "../stores/store";
import { get } from "svelte/store";
import {
  currentCityMonthSchedule,
  currentCityDailyPrayerTime,
} from "../stores/prayerTime";

export const fetchCityPrayerTime = async (city: TCityData) => {
  console.log("getting prayer timings");
  let calcMethod;
  if (get(isHanafi)) {
    calcMethod = "KARACHI";
    // console.log("------------is Hanafi should be true = ", calcMethod);
  } else {
    calcMethod = "QUM";
    // console.log("------------is Hanafi should be false = ", calcMethod);
  }

  const url = `https://ap-1.ixon.cc/api/v3/prayertime/pt?lt=${city.location.coordinates[0]}&lg=${city.location.coordinates[1]}&m=${calcMethod}&a=HANAFI&tz=5&f=12h`;
  // console.log(url);
  const response = await fetch(url);
  const data = await response.json();

  currentCityDailyPrayerTime.set(data);
  return data;
};

export const fetchCityMonthCalendar = async (city: TCityData) => {
  const url = `https://ap-1.ixon.cc/api/v3/prayertime/pt/range?lt=${city.location.coordinates[0]}&lg=${city.location.coordinates[1]}&m=${city.name}&a=HANAFI&tz=5&f=12hNS&std=2023-03-23&dys=30`;
  // console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data);
  currentCityMonthSchedule.set(data);
  return data;
};
