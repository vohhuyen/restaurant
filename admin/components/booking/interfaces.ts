export interface FormData {
    table: string,
    user: string,
    startTime: string,
    endTime: string,
    date: string,
    dish: string[],
    totalmoney: number,
}
export interface Booking {
    _id: string,
    table: string,
    user: string,
    startTime: string,
    endTime: string,
    date: string,
    dish: string[],
    totalmoney: number,
}