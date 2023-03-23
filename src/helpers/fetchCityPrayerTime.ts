import { city, currentCitySchedule } from "../stores/store";
export const fetchCityPrayerTime = async (
  cityName: String,
  latitude: Number,
  longitude: Number
) => {
  // console.log(cityName);
  // console.log(latitude);
  // console.log(longitude);

  // console.log(API_URL_PRAYER_TIME);
  // const params = `lt=24.7&lg=67.0&m=KARACHI&a=HANAFI&tz=5`;
  // const url = `${API_URL_PRAYER_TIME}?${params}`;
  // const url = 'https://vp.vxt.net:31443/api/pt?lt=24.7&lg=67.0&m=KARACHI&a=HANAFI&tz=5';
  const url = `https://ap-1.ixon.cc/api/v3/prayertime/pt?lt=${latitude}&lg=${longitude}&m=${cityName}&a=HANAFI&tz=5&f=12h`;
  console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  console.log("fetched city data", data);

  currentCitySchedule.set(data);
  return data;
};

// module.exports = {
//   fetchCityPrayerTime: fetchCityPrayerTime,
// };
