import React from 'react';
import type { AppProps } from 'next/app';

import { Layout } from '../components/Layout';

const BoardApp = ({ pageProps }: AppProps) => (
    <Layout {...pageProps} />
);

export default BoardApp;
