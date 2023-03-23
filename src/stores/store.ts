import { writable } from 'svelte/store';

export const GeoLocation = writable([24.7, 67.0]);
export const City = writable('karachi');
export const Notification = writable(false);
export const IS_RAMADAN = writable(false);