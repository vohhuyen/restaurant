import { GET_CHEFS_ENDPOINT, GET_DISHES_BY_CHEF_ID_ENDPOINT } from '@/utils/constants/endpoints';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FormUpdate from './FormUpdate';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { setChef } from '@/features/chef/chefSlice';
import Image from 'next/image';

const List = () => {
    const chefs = useSelector((state: RootState) => state.chefs.chefs);
    const dispatch = useDispatch();
    const [dishes, setDishes] = useState<DishesState>({});

    useEffect(() => {
        const fetchChefsAndDishes = async () => {
            try {
                const chefResponse = await axios.get(GET_CHEFS_ENDPOINT, {
                    withCredentials: true,
                });
                const chefsData = chefResponse.data;
                dispatch(setChef(chefsData));

                const dishesData: DishesState = {};
                for (const chef of chefsData) {
                    try {
                        const dishResponse = await axios.get(GET_DISHES_BY_CHEF_ID_ENDPOINT(chef._id), {
                            withCredentials: true,
                        });
                        dishesData[chef._id] = dishResponse.data;
                    } catch (error) {
                        console.log(`Error fetching dishes for chef ${chef._id}:`, error);
                    }
                }
                setDishes(dishesData);
            } catch (error) {
                console.log("Error fetching chefs and dishes:", error);
            }
        };

        fetchChefsAndDishes();
    }, [dispatch]);

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
                            <input type="search" className="form-control input-sm mx-3" placeholder="" aria-controls="datatable-checkbox" />
                        </label>
                    </div>
                </div>
            </div>

            <div className="row">
                <table id="datatable-checkbox" className="table table-striped table-bordered bulk_action w-100">
                    <thead>
                        <tr>
                            <th><input type="checkbox" id="check-all" /></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>List dish</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {chefs.map(chef => (
                            <tr key={chef._id}>
                                <td><input type="checkbox" /></td>
                                <td><img src={`${chef.image}`} alt={`${chef.name} image`} width={100} height={100} /></td>
                                <td>{chef.name}</td>
                                <td className="w-[50%]">{chef.description}</td>
                                <td>
                                    {dishes[chef._id] ? (
                                        <ul>
                                            {dishes[chef._id].map(dish => (
                                                <li key={dish._id}>{dish.name}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <span>Loading...</span>
                                    )}
                                </td>
                                <td className="flex">
                                    <FormUpdate />
                                    <button type="button" className="btn btn-danger btn-sm text-[13px]"><i className="fa fa-trash"></i></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default List;
