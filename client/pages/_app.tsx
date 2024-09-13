<<<<<<< HEAD
// pages/_app.tsx\
import React from 'react';
=======
// pages/_app.tsx
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store }  from '@/store/store'; 
>>>>>>> 862becd20bdc1a1865e710e1615e0bacfa2b37db
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Footer from '../components/layout/Footer';
import { store } from '@/store/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
