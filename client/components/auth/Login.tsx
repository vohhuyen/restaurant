import {LOGIN_ENDPOINT } from '@/utils/constants/endpoints';
import React, { useState } from 'react';
import axios from 'axios';
import router, { useRouter } from 'next/router';
import { setCookie } from 'nookies';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  try {
    const response = await axios.post(LOGIN_ENDPOINT, {
      email,
      password,
    });

    if (response.status === 200) {
      const { token } = response.data; // Giả sử token được trả về trong response.data

      if (token) {
        setCookie(null, 'auth_token', token, {
          maxAge: 30 * 24 * 60 * 60, // Cookie sẽ tồn tại trong 30 ngày
          path: '/',
        });
        router.push('/');
      } else {
        alert('Token không hợp lệ');
      }
    } else {
      alert('Đăng nhập không thành công');
    }
  } catch (error) {
    console.error('Lỗi khi đăng nhập:', error);
    alert('Đã xảy ra lỗi');
  }
};


  return (
    <div>
      <div className="form_login absolute top-[55%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 z-[10] p-8 justify-center rounded-lg">
        <h2 className="text-2xl font-bold mb-6">LOGIN!</h2>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <input
              type="email"
              placeholder="E-mail"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center">
            <a href="#" className="text-sm text-gray-600">
              You don't have an account yet?
            </a>
          </div>
          <div className="w-full flex justify-center">
            <button type="submit" className="w-1/2 bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
              Login
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
};

export default Login;

