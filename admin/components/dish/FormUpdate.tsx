import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import type { Dish, FormData } from './interfaces';
import axios from 'axios';
import { GET_CHEFS_ENDPOINT, GET_TYPE_DISHS, UPDATE_DISH_ENDPOINT } from '@/utils/constants/endpoints';
import { setError } from '@/features/slices/errorSlices';
import { useDispatch } from 'react-redux';
import { updateDish } from '@/features/dish/dishSlice';

const FormUpdate: React.FC<Dish> = ({ _id, name, chef, image, description, price, type}) => {
    const [formData, setFormData] = useState<FormData>({
        name: name,
        chef: chef,
        description: description,
        image: image,
        price: price,
        type: type
      });
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const validate = (validateData: FormData) => {
        const errors: Partial<FormData> = {};
        if (!validateData.name) {
            errors.name = 'Name is required';
        } 
        if (!validateData.price) {
            errors.price = 'Price is required';
        } else if (isNaN(Number(validateData.price)) || Number(validateData.price) <= 0) {
            errors.price = 'Price must be a positive number';
        }
        if (!validateData.type) {
            errors.type = 'Type is required';
        }
        return errors;
    };
    
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
    };
    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
    
        setFormData((prevData) => ({
            ...prevData,
            [name]: value, 
        }));
    };
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { files, id } = event.target;
        if (files && files.length > 0) {
            const newImages: string[] = [];
            const reader = new FileReader();
    
            Array.from(files).forEach((file, index) => {
                reader.onloadend = () => {
                    newImages.push(reader.result as string);
                    if (index === files.length - 1) {
                        if (id === 'file-input') {
                            setImageSrc(prevData => ([...prevData, ...newImages]));
                            setFormData(prevData => ({
                                ...prevData,
                                image: [...prevData.image, ...newImages]
                            }));
                        }
                    }
                };
                reader.readAsDataURL(file); 
            });
        }
    };
    
    

    const handleChefChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
    
        setFormData((prevData) => {
            const chef = prevData.chef || [];
    
            const newChefList = checked
            ? [...chef, value]
            : chef.filter((id) => id !== value);

            return {
                ...prevData,
                chef: newChefList,
            };
        });
    };
    const dispatch = useDispatch();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate(formData);
        if (Object.keys(validationErrors).length === 0) {
            const formattedData = {
                ...formData,
                chef: formData.chef || [],
                image: formData.image || []
            };
    
            console.log("Formatted data before sending:", formattedData);
            
            try {
                const response = await axios.put(UPDATE_DISH_ENDPOINT(_id), formattedData, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
    
                if (response.status === 200) {
                    dispatch(updateDish(response.data));
                    dispatch(setError({ status: 'success', message: 'Update dish successfully!' }));
                    setShowModal(false);
                } else {
                    dispatch(setError({ status: 'danger', message: 'Update dish failed!' }));
                }
            } catch (error) {
                console.error('Error creating dish:', error);
                dispatch(setError({ status: 'danger', message: 'Update dish failed!' }));
            }
        } else {
            setErrors(validationErrors);
        }
    };
    
    
















    const [imageSrc, setImageSrc] = useState<string[]>([]);
    const [showModal, setShowModal] = useState(false);
    const clearImage = (index: number) => {
        setImageSrc(prevData => prevData.filter((_, i) => i !== index));
    };
    useEffect(() => {
        setImageSrc(image);
    }, [showModal]);

    const removeDuplicates = (array: string[]) => {
        return Array.from(new Set(array));
      };
    const [types, setTypes] = useState<string[]>([]);
    const [chefs, setChefs] = useState<{ _id: string; name: string }[]>([]);
    useEffect(()=>{
        const fetchTypeDish = async () => {
            try {
                const ResponseType = await axios.get(GET_TYPE_DISHS, {
                    withCredentials: true,
                });
                setTypes(removeDuplicates(ResponseType.data));
                const ResponseChef = await axios.get(GET_CHEFS_ENDPOINT, {
                    withCredentials: true,
                });
                setChefs(ResponseChef.data);
            } catch (error) {
                console.log("Error fetching dishes:", error);
            }
        }
        fetchTypeDish();
    },[]);
    return (
        <div>
             <button onClick={() => setShowModal(true)} data-toggle="modal" data-target=".btn-update-user" type="button" className="btn btn-info btn-sm text-[13px]"><i className="fa fa-edit"></i></button>
            {showModal && (
                <div className="modal1 btn-create-user">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h4 className="modal-title" id="myModalLabel">Create dish</h4>
                                <button type="button" onClick={() => setShowModal(false)} className="close" data-dismiss="modal"><span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form id="demo-form" onSubmit={handleSubmit} data-parsley-validate>
                                    <div className="form-group">
                                        <div className="row">
                                            {imageSrc.length > 0 && (
                                                imageSrc.map((image, index) => (
                                                    <>
                                                        <img
                                                            key={index}
                                                            className="mb-5"
                                                            src={`${image}`}
                                                            width={100}
                                                            height={100}
                                                            alt="image"
                                                        />
                                                        <button onClick={()=>{clearImage(index)}} className="relative text-[20px] top-[-70px] left-[-10px]">x</button>
                                                    </>
                                                ))
                                            )}
                                        </div>
                                        <label
                                            className="font-semibold cursor-pointer text-black rounded-lg py-2.5 px-5 bg-[#5A738E]"
                                            htmlFor="file-input"
                                        >
                                            Upload Main Image
                                        </label>
                                        <input
                                            onChange={handleFileChange}
                                            accept="image/*"
                                            type="file"
                                            id="file-input"
                                            className="hidden"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Name * :</label>
                                        <input type="text" id="name" value={formData.name} onChange={handleChange} className="form-control" name="name"/>
                                        {errors.name && <span className="text-danger">{errors.name}</span>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="price">Price * :</label>
                                        <input type="number" id="price" value={formData.price}  onChange={handleChange} className="form-control" name="price" data-parsley-trigger="change"/>
                                        {errors.price && <span className="text-danger">{errors.price}</span>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="select">Type * :</label>
                                        <div>
                                            <select id="type" name="type" onChange={handleSelectChange} className="form-control " value={formData.type}>
                                            {types.length > 0 && (
                                                types.map((type, index)=>(
                                                    <option key={index} value={type}>{type}</option>
                                                ))
                                            )}
                                            </select>
                                        </div>
                                        {errors.type && <span className="text-danger">{errors.type}</span>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="chef">Chef * :</label>
                                        <div>
                                            {chefs.length > 0 && (
                                                chefs.map((chef, index) => (
                                                    <div className="checkbox" key={index}>
                                                        <label>
                                                            <input
                                                                onChange={handleChefChange}
                                                                type="checkbox"
                                                                value={chef._id}
                                                                checked={formData.chef.includes(chef._id)}
                                                            />
                                                            {chef.name}
                                                        </label>
                                                    </div>
                                                ))
                                            )}
                                        </div>

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">Description :</label>
                                        <textarea id="description" value={formData.description} onChange={handleChange} className="form-control" name="description" />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" onClick={() => setShowModal(false)} className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="submit" className="btn btn-primary">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default FormUpdate