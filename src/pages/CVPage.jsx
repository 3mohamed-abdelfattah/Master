import React, { Fragment } from 'react';
// Component
import { Header, Footer, DownloadBT } from '@/components';
// Document
import CVDoc from '@/assets/documents/cv.pdf';

export const CVPage = () => {
    return (
        <Fragment>
            <Header />
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl vsm:text-3xl font-bold mt-10 text-center">Mohamed Curriculum Vitae</h1>
                <a
                    href={CVDoc}
                    download
                    className='m-5'
                >
                    <DownloadBT />
                </a>
                <iframe
                    src={CVDoc}
                    className="w-full h-screen flex-grow shadow-lg"
                    title="Mohamed CV"
                />
            </div>
            <Footer />
        </Fragment>
    );
};
