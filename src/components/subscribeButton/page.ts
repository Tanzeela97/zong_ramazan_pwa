import { get } from "svelte/store";
import { phoneNumber } from "../../stores/store";

export const getOTP = async () => {
  const MSISDNToSubscribe = get(phoneNumber);
  // console.log('-----------------------before fetch');
  try {
    const res = await fetch(
      `https://islamic.vectracom.com/api_zong/index.php?msisdn=${phoneNumber}&operator=zong&menu=cureg_ckey`
    );
    console.log("-----------------------after fetch");
    console.log("-------------full res", res);
    console.log("-------------body", res.body);
    console.log("-------------res.status", res.status);
    console.log("-------------bodyUsed", res.bodyUsed);
    console.log("-------------text", res.text());
    console.log("-------------type", res.type);
  } catch (e) {
    // console.log('!!!!!!!!!!!!!!ERROR OCCURED');
    throw e;
    // console.log(e)
  }
  // console.log('-------------type', res.);
  const res_otp = await res.json();
  console.log(res_otp);
  return { otp_status: res_otp };
};

export const subscribeUser = async () => {
  const MSISDNToSubscribe = get(phoneNumber);
  // console.log('-----------------------before fetch');
  try {
    const res = await fetch(
      `https://islamic.vectracom.com/api_zong/index.php?msisdn=${phoneNumber}&operator=zong&menu=cureg_ckey`
    );
    // console.log('-----------------------after fetch');
    // console.log('-------------full res', res);
    // console.log('-------------body', res.body);
    // console.log('-------------res.status', res.status);
    // console.log('-------------bodyUsed', res.bodyUsed);
    // console.log('-------------text', res.text());
    // console.log('-------------type', res.type);
  } catch (e) {
    // console.log('!!!!!!!!!!!!!!ERROR OCCURED');
    throw e;
    // console.log(e)
  }
  // console.log('-------------type', res.);
  const res_otp = await res.json();
  console.log(res_otp);
  return { otp_status: res_otp };
};
