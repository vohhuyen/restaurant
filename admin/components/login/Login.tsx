import { LOGIN_ENDPOINT } from '@/utils/constants/endpoints';
import axios from 'axios';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import React, { useEffect, useState } from 'react'

const Login = () => {
    const [name, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    
    const handleSubmit =async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');
        
        try {
            const response = await axios.post(LOGIN_ENDPOINT, { name, password });
            console.log("cookie",response)
            localStorage.setItem('user', JSON.stringify(response.data));
            if (response.status === 200) {
                setCookie(null, 'auth_token', response.data.token, {
                    maxAge: 30 * 24 * 60 * 60,
                    path: '/',
                });
                if (response.data.isAdmin) {
                    router.push('/');
                } else {
                    setError('You are not allowed!');
                }
            }
        } catch (err) {
            setError('Invalid credentials');
        }
    };
    return (
        <div className="login">
            <div>
                <a className="hiddenanchor" id="signup"></a>
                <a className="hiddenanchor" id="signin"></a>

                <div className="login_wrapper">
                    <div className="animate form login_form">
                        <section className="login_content">
                            <form onSubmit={handleSubmit}>
                                <h1>Login Form</h1>
                                <div>
                                    <input type="text" className="form-control" placeholder="Username"  value={name} onChange={(e) => setUsername(e.target.value)} required />
                                </div>
                                <div>
                                    <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                                {error && <p style={{ color: 'red' }}>{error}</p>}
                                <div>
                                    <button type="submit" className="btn btn-default submit">Submit</button>
                                    <a className="reset_pass" href="#">Lost your password?</a>
                                </div>

                                <div className="clearfix"></div>

                                <div className="separator">
                                    <p className="change_link">New to site?
                                        <a href="#signup" className="to_register"> Create Account </a>
                                    </p>

                                    <div className="clearfix"></div>
                                    <br />

                                    <div>
                                        <h1><i className="fa fa-paw"></i> Gentelella Alela!</h1>
                                        <p>©2016 All Rights Reserved. Gentelella Alela! is a Bootstrap 4 template. Privacy and Terms</p>
                                    </div>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
// function setCookie(arg0: null, arg1: string, token: any, arg3: { maxAge: number; path: string; }) {
//     throw new Error('Function not implemented.');
// }
