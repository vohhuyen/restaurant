
interface Dishs {
    dishId: string;
    quantity: number;
    name: string;
    price: number;
}
interface Bookings {
    user: string;
    tableName: string;
    name: string;
    phone: string;
    dish: Dishs[];
    totalmoney: number;
    status: string;
    startTime: Date;
    endTime: Date
}
import React, { useEffect, useState } from 'react'
import FormUpdate from './FormUpdate'
import { DELETE_BOOKING_ENDPOINT, GET_BOOKINGS_ENDPOINT, UPDATE_BOOKING_ENDPOINT } from '@/utils/constants/endpoints';
import axios from 'axios';
import moment from 'moment';
import { setError } from '@/features/slices/errorSlices';
import { useDispatch } from 'react-redux';

const List = () => {
    const [data, setData] = useState<Bookings[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(GET_BOOKINGS_ENDPOINT, {
                    withCredentials: true,
                });
                const data = response.data;
                const sortedBookings = data.sort((a, b) => {
                    if (a.status === 'waiting' && b.status !== 'waiting') return -1;
                    if (a.status === 'confirmed' && b.status === 'waiting') return 1;
                    if (a.status === 'confirmed' && b.status !== 'confirmed') return -1;
                    return 0;
                });
                setData(sortedBookings);
            } catch (error) {
                console.log("Have error when call api", error);
            }
        };
        fetchData();
    }, []);


    const handleDelete = async (id: string) => {
        try {
            const res = await axios.delete(DELETE_BOOKING_ENDPOINT(id), {
                withCredentials: true
            });
        } catch (error) {
            console.log('error', error);
            alert('noooo');
        }
    }
    const dispatch = useDispatch();
    const handleConfirm = async (id: string) => {
        const data = {
            status: "confirmed",
        }
        try {
            const res = await axios.put(UPDATE_BOOKING_ENDPOINT(id), data);
            if(res.status == 200){
                dispatch(setError({ status: 'success', message: 'Confirm successfully!' }));
            }
        } catch (error) {
            console.log('error', error);
            dispatch(setError({ status: 'danger', message: 'Confirm failed!' }));
        }
    }
    const handleCancel = async (id: string) => {
        const data = {
            status: "canceled",
        }
        try {
            const res = await axios.put(UPDATE_BOOKING_ENDPOINT(id), data);
            if(res.status == 200){
                dispatch(setError({ status: 'success', message: 'Canceled successfully!' }));
            }
        } catch (error) {
            console.log('error', error);
            dispatch(setError({ status: 'danger', message: 'Canceled failed!' }));
        }
    }

    // const query = useSelector((state: RootState) => state.searchNew.query);
    // const results = useSelector((state: RootState) => state.searchNew.results);

    // const debouncedSearch = useDebouncedCallback(
    //     async (searchQuery: string) => {
    //         try {
    //             if (searchQuery) {
    //                 const response = await axios.get(GET_NEW_BY_TITLE_ENDPOINT(searchQuery), {
    //                     withCredentials: true
    //                 });
    //                 dispatch(setSearchResultsNew(response.data));
    //             } else {
    //                 const response = await axios.get(GET_NEWS_ENDPOINT, {
    //                     withCredentials: true,
    //                 });
    //                 dispatch(setSearchResultsNew(response.data));
    //             }
    //         } catch (error) {
    //             console.error('Search error:', error);
    //         }
    //     },
    //     500
    // );

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const value = e.target.value;
    //     dispatch(setSearchQueryNew(value));
    //     debouncedSearch(value);
    // };

    return (
        <div>
            <div className="row d-flex justify-content-between mx-2">
                <div className="d-flex">
                    <div className="dataTables_length" id="datatable-checkbox_length">
                        <label className="d-flex align-items-center">
                            Show
                            <select name="datatable-checkbox_length" aria-controls="datatable-checkbox" className="form-control input-sm mx-2">
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                            entries
                        </label>
                    </div>
                </div>
                <div className="d-flex">
                    <div id="datatable-checkbox_filter" className="dataTables_filter">
                        <label className="d-flex align-items-center">
                            Search:
                            <input type="search" className="form-control input-sm mx-3" placeholder="search" aria-controls="datatable-checkbox" />
                        </label>
                    </div>
                </div>
            </div>
            <div>
                <table id="datatable-checkbox" className="table table-bordered bulk_action w-100">
                    <thead>
                        <tr>
                            <th>Check</th>
                            <th>Name</th>
                            <th>User</th>
                            <th>Time</th>
                            <th>Total Money</th>
                            <th>Dish</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((data_item, index) => (
                            <tr key={index}>

                                <>
                                    <td >
                                        <b><input type="checkbox" id="check-all" /></b>
                                    </td>
                                    <td>{data_item.tableName}</td>
                                </>

                                <td>{data_item.name || "Unknown User"}</td>
                                <td>{moment(data_item.startTime).format('YYYY-MM-DD')}    {moment(data_item.startTime).format('HH:mm:ss')} - {moment(data_item.endTime).format('HH:mm:ss')}</td>
                                <td>{data_item.totalmoney}</td>
                                <td>{data_item.dish && Array.isArray(data_item.dish) && data_item.dish.length > 0 ? (
                                    data_item.dish.map((dishItem, dishIndex) => (
                                        <div key={dishIndex} className="flex">
                                            <p>{dishItem.name}</p>
                                            <p></p>
                                            <p>{dishItem.price} VND x {dishItem.quantity}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p>Không có món ăn nào</p>
                                )}</td>
                                <td>{data_item.status}</td>
                                <td className="flex">
                                    {data_item.status == 'waiting' ? (
                                        <>
                                            <button onClick={() => handleConfirm(data_item._id)} type="button" className="btn btn-success btn-sm text-[13px]">
                                                Confirm
                                            </button><FormUpdate _id={data_item._id} table={data_item.table} user={data_item.user} startTime={moment(data_item.startTime).format('HH:mm')} endTime={moment(data_item.endTime).format('HH:mm')} date={moment(data_item.startTime).format('YYYY-MM-DD')} dish={data_item.dish} totalmoney={data_item.totalmoney}/>
                                            <button onClick={() => handleCancel(data_item._id)} type="button" className="btn btn-danger btn-sm text-[13px]">
                                                Cancel
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <FormUpdate _id={data_item._id} table={data_item.table} user={data_item.user} startTime={moment(data_item.startTime).format('HH:mm')} endTime={moment(data_item.endTime).format('HH:mm')} date={moment(data_item.startTime).format('YYYY-MM-DD')} dish={data_item.dish} totalmoney={data_item.totalmoney}/>
                                            <button onClick={() => handleCancel(data_item._id)} type="button" className="btn btn-danger btn-sm text-[13px]">
                                                Cancel
                                            </button>
                                        </>
                                    )}


                                </td>
                            </tr>
                        ))}

                    </tbody>


                </table>
            </div>

        </div>
    )
}

export default List
