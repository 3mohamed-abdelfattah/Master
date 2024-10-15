import React, { Fragment } from 'react';
// Component
import { Header, Footer } from '@/components';
// Document
import CVDoc from '@/assets/documents/cv.pdf';

export const CVPage = () => {
    return (
        <Fragment>
            <Header />
            <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
                <h1 className="text-3xl font-bold m-8">My Curriculum Vitae</h1>
                <iframe
                    src={CVDoc}
                    width="100%"
                    className="flex-grow border-2 border-gray-300 shadow-lg"
                    title="Mohamed CV"
                />
            </div>
            <Footer />
        </Fragment>
    );
};
