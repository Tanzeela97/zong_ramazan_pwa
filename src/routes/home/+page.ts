// import { API_URL_PRAYER_TIME } from '$env/static/private';
// import type { PageLoad } from './$types';
export const load = async () => {
    async function fetchPrayerTime () {
        // console.log(API_URL_PRAYER_TIME);
        // const params = `lt=24.7&lg=67.0&m=KARACHI&a=HANAFI&tz=5`;
        // const url = `${API_URL_PRAYER_TIME}?${params}`;
        // const url = 'https://vp.vxt.net:31443/api/pt?lt=24.7&lg=67.0&m=KARACHI&a=HANAFI&tz=5';
        const url = 'https://ap-1.ixon.cc/api/v3/prayertime/pt?lt=24.7&lg=67.0&m=KARACHI&a=HANAFI&tz=5&f=12h';
        console.log(url);
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        return data;

    }
    return {
        prayerTime: fetchPrayerTime()
    };
}
//  satisfies PageLoad;