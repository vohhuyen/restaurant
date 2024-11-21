import { REGISTER_ENDPOINT } from '@/utils/constants/endpoints';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useState } from 'react';
import { setCookie } from 'nookies';


interface FormData {
    name: string;
    email: string;
    password: string;
  }
const Register: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: '',
      });
      const [errors, setErrors] = useState<Partial<FormData>>({});
    
      const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
      };
    
      const validate = (validateData: FormData) => {
        const errors: Partial<FormData> = {};
    
        if (!validateData.name) {
          errors.name = 'name is required';
        }
        if (!validateData.email) {
          errors.email = 'Email is required';
        } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-z]+/.test(validateData.email)) {
          errors.email = 'Invalid email address';
        }
      
        if (!validateData.password) {
          errors.password = 'Password is required';
        }
        return errors;
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("data", formData);
        const validationErrors = validate(formData);
        if (Object.keys(validationErrors).length === 0) {
            const data = new FormData();
            for (const key in formData) {
                const value = formData[key as keyof FormData];
                if (typeof value === 'boolean') {
                    data.append(key, value ? 'true' : 'false');
                } else {
                    data.append(key, value);
                }
            }
            try {
                const response = await axios.post(REGISTER_ENDPOINT, data);
                if (response.status === 200) {
                    alert('User has been created.');
                } else {
                    alert('Error creating user.');
                }
            } catch (error) {
                console.error('Error creating user:', error);
                alert('Error creating user.');
            }
        } else {
            setErrors(validationErrors);
        }
    };
    return (
        <div>
            <div className="form_login absolute top-[55%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 z-[10] p-8 justify-center rounded-lg">
                <h2 className="text-2xl font-bold mb-6">REGISTER!</h2>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <input
                        id="name"
                        name="name"
                            type="text"
                            placeholder="Name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            onChange={handleChange}
                        />
                        {errors.name && <span className="text-danger">{errors.name}</span>}
                    </div>
                    <div>
                        <input
                        id="email"
                        name="email"
                            type="email"
                            placeholder="E-mail"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            onChange={handleChange}
                        />
                        {errors.email && <span className="text-danger">{errors.email}</span>}
                    </div>
                    <div>
                        <input
                        id="password"
                        name="password"
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            onChange={handleChange}
                        />
                        {errors.password && <span className="text-danger">{errors.password}</span>}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="/login" className="text-sm text-gray-600">
                            You already have an account?
                        </a>
                    </div>
                    <div className="w-full flex justify-center">
                        <button type="submit" className="w-1/2 bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
                        Register
                        </button>
                    </div>
                </form>

                <div className="flex items-center my-4">
                    <hr className="flex-grow border-gray-300" />
                    <span className="mx-2 text-gray-600">Sau</span>
                    <hr className="flex-grow border-gray-300" />
                </div>
                <div className="flex justify-between space-x-4">
                    <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
                        <img
                            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                            alt="Google"
                            className="h-5 mr-2"
                        />
                        Google
                    </button>
                    <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
                        <img
                            src="https://image.similarpng.com/very-thumbnail/2020/11/Blue-facebook-icon-on-transparent-background-PNG.png"
                            alt="Facebook"
                            className="h-5 mr-2"
                        />
                        Facebook
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Register;


