import { LOGIN_ENDPOINT } from '@/utils/constants/endpoint';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { setError } from '@/features/slices/errorSlices';
import Error from '@/components/ui/Error';
import { RootState } from '@/store/store';
import dynamic from 'next/dynamic';
import { GoogleLoginButton, FacebookLoginButton } from 'react-social-login-buttons';

const LoginSocialGoogle = dynamic(() => import('reactjs-social-login').then(mod => mod.LoginSocialGoogle), { ssr: false });
const LoginSocialFacebook = dynamic(() => import('reactjs-social-login').then(mod => mod.LoginSocialFacebook), { ssr: false });

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(LOGIN_ENDPOINT, { email, password });

      if (response.status === 200 && response.data) {
        const token = response.data.token; 
        document.cookie = `token=${token}; path=/; max-age=3600`;

        router.push('/');
        dispatch(setError({ status: 'success', message: 'User logged in successfully.' }));
      } else {
        dispatch(setError({ status: 'danger', message: 'Error logging in user.' }));
      }
    } catch (error) {
      console.error('Error logging in:', error);
      dispatch(setError({ status: 'danger', message: 'Error logging in user.' }));
    }
  };

  const handleSocialLogin = (user: any) => {
    console.log("Social Login Success:", user);
    // Xử lý đăng nhập thành công, ví dụ: lưu token và chuyển hướng
    const token = user?.token; // Thay đổi tùy thuộc vào dữ liệu trả về từ API
    if (token) {
      document.cookie = `token=${token}; path=/; max-age=3600`;
      router.push('/');
      dispatch(setError({ status: 'success', message: 'User logged in successfully.' }));
    }
  };

  const handleSocialLoginFailure = (error: any) => {
    console.error("Social Login Error:", error);
    dispatch(setError({ status: 'danger', message: 'Social login failed. Please try again.' }));
  };

  const { status, message } = useSelector((state: RootState) => state.error);

  return (
    <div>
      {status === 'danger' && message && <Error state={status} message={message} />}
      <div className="form_login absolute top-[55%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-[10] p-8 justify-center rounded-lg">
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
              Forgot your password?
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
          <span className="mx-2 text-gray-600">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <div className="flex justify-between space-x-2">
          <LoginSocialGoogle
            client_id={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}
            onResolve={handleSocialLogin}
            onReject={handleSocialLoginFailure}
          >
            <GoogleLoginButton />
          </LoginSocialGoogle>
          <LoginSocialFacebook
            appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID!}
            onResolve={handleSocialLogin}
            onReject={handleSocialLoginFailure}
          >
            <FacebookLoginButton />
          </LoginSocialFacebook>
        </div>
      </div>
    </div>
  );
};

export default Login;
