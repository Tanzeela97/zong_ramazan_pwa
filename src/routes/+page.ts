import { cities } from '../stores/store';
export const load = async () => {
    async function getAllCities () {
        const url = 'https://zongislamicv1.vectracom.com/api/index.php?msisdn=null&operator=Zong&menu=getAllCity';
        const response = await fetch(url);
        const data = await response.json();
        // console.log(cities);
        // console.log(data);
        cities.set(data.data);
        return data.data;
    }
    return {
        cities: getAllCities()
    };
};