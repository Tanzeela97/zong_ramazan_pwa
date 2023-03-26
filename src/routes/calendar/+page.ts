import { get } from "svelte/store";
import { selectedCity, currentCityMonthSchedule } from "../../stores/store";

export const load = async ({ fetch }: { fetch: any }) => {
  let city = get(selectedCity);
  async function fetchPrayerCalendar() {
    const url = `https://ap-1.ixon.cc/api/v3/prayertime/pt/range?lt=${city.location.coordinates[0]}&lg=${city.location.coordinates[1]}&m=${city.name}&a=HANAFI&tz=5&f=12hNS&std=2023-03-23&dys=30`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    currentCityMonthSchedule.set(data);
    return data;
  }
  return {
    prayerCalendar: fetchPrayerCalendar(),
  };
};
//  satisfies PageLoad;
