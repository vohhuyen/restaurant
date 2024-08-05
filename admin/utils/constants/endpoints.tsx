export const GET_USERS_ENDPOINT = `${ process.env.NEXT_PUBLIC_URL }/users`;
export const GET_USER_ENDPOINT = (id: any) => `${ process.env.NEXT_PUBLIC_URL }/users/${id}`;
export const REGISTER_ENDPOINT = `${ process.env.NEXT_PUBLIC_URL }/auth/register`;
export const LOGIN_ENDPOINT = `${ process.env.NEXT_PUBLIC_URL }/auth/login`;
export const UPDATE_USER_ENDPOINT = (id: any) => `${ process.env.NEXT_PUBLIC_URL }/users/${id}`;
export const DELETE_USER_ENDPOINT = (id: any) => `${ process.env.NEXT_PUBLIC_URL }/users/${id}`;
export const SEARCH_USER_ENDPOINT = (name: string) => `${ process.env.NEXT_PUBLIC_URL }/users/search/${name}`;

export const GET_CHEFS_ENDPOINT = `${ process.env.NEXT_PUBLIC_URL }/chef`;
export const GET_DISHES_BY_CHEF_ID_ENDPOINT = (id: any) => `${ process.env.NEXT_PUBLIC_URL }/chef/withdish/${id}`;
export const CREATE_CHEF_ENDPOINT = `${ process.env.NEXT_PUBLIC_URL }/chef`;

export const GET_BOOKINGS_ENDPOINT = `${ process.env.NEXT_PUBLIC_URL }/table/booking`;
export const GET_BOOKING_ENDPOINT = (id: any) => `${ process.env.NEXT_PUBLIC_URL }/table/booking/${id}`;
export const CREATE_BOOKING_ENDPOINT = (id: any) => `${ process.env.NEXT_PUBLIC_URL }/table/booking/${id}`;
export const UPDATE_BOOKING_ENDPOINT = (id: any) => `${ process.env.NEXT_PUBLIC_URL }/table/booking/update/${id}`;
export const DELETE_BOOKING_ENDPOINT = (id: any) => `${ process.env.NEXT_PUBLIC_URL }/table/booking/${id}`;


export const GET_DISHS_ENDPOINT = `${ process.env.NEXT_PUBLIC_URL }/dish`;
export const GET_TABLES_ENDPOINT = `${ process.env.NEXT_PUBLIC_URL }/table`;