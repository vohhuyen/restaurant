// pages/_app.tsx\
import React from 'react';
// pages/_app.tsx
import { Provider } from 'react-redux';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Footer from '../components/layout/Footer';
import { store } from '@/store/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
