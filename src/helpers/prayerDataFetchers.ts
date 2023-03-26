import type { TCityData } from "../assets/data/constants";
import {
  currentCityMonthSchedule,
  currentCityDailyPrayerTime,
} from "../stores/store";

export const fetchCityPrayerTime = async (city: TCityData) => {
  const url = `https://ap-1.ixon.cc/api/v3/prayertime/pt?lt=${city.location.coordinates[0]}&lg=${city.location.coordinates[1]}&m=${city.name}&a=HANAFI&tz=5&f=12h`;
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
