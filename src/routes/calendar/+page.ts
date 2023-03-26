import { get } from "svelte/store";
import {
  currentCityMonthSchedule,
  prayerSettings,
} from "../../stores/prayerTime";
import { selectedCity, isHanafi } from "../../stores/store";

export const load = async ({ fetch }: { fetch: any }) => {
  let city = get(selectedCity);
  async function fetchPrayerCalendar() {
    // const { calcMethod, asrMethod, timeZone, timeFormat } = get(prayerSettings);
    const nOfDays = 30;
    let calcMethod;
    if (get(isHanafi)) {
      calcMethod = "KARACHI";
      // console.log("------------is Hanafi should be true = ", calcMethod);
    } else {
      calcMethod = "QUM";
      // console.log("------------is Hanafi should be false = ", calcMethod);
    }

    // const url = `https://ap-1.ixon.cc/api/v3/prayertime/pt/range?lt=${city.location.coordinates[0]}&lg=${city.location.coordinates[1]}&m=${city.name}&a=HANAFI&tz=5&f=12hNS&std=2023-03-23&dys=30`;
    const url = `https://ap-1.ixon.cc/api/v3/prayertime/pt/range?lt=${city.location.coordinates[0]}&lg=${city.location.coordinates[1]}&m=${calcMethod}&a=HANAFI&tz=5&f=12hNS&std=2023-03-23&dys=${nOfDays}`;
    // const url = `https://ap-1.ixon.cc/api/v3/prayertime/pt/range?lt${city.location.coordinates[0]}&lg=${city.location.coordinates[1]}&m=${calcMethod}&a=${asrMethod}&tz=${timeZone}&f=${timeFormat}&std=${startDate}&dys=${nOfDays}`;
    // console.log(url);
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
