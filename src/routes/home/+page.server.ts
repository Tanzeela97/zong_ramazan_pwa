import { currentCityDailyPrayerTime } from "../../stores/store";

export const load = async ({ fetch }: { fetch: any }) => {
  async function fetchPrayerTime() {
    const url =
      "https://ap-1.ixon.cc/api/v3/prayertime/pt?lt=24.7&lg=67.0&m=KARACHI&a=HANAFI&tz=5&f=12h";
    // console.log(url);
    const response = await fetch(url);
    const data = await response.json();

    currentCityDailyPrayerTime.set(data);
    return data;
  }
  return {
    prayerTime: fetchPrayerTime(),
  };
};
