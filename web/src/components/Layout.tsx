import React from 'react';
import Head from 'next/head';

export const Layout: React.FC = () => {

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <title>Finterwebs</title>
            </Head>
            <main className="flex flex-wrap gap-8 m-8">
                foo
            </main>
        </>
    );
};
