interface Dish {
    _id: string;
    name: string;
    chef: string[];
    description: string;
    evalue: any[];
    image: string[];
    price: string;
    type: string;
}
interface DishesState {
    [key: string]: Dish[];
}