import React, { Fragment } from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import { Header, Footer, CV } from '@/components'

export const CVPage = () => {
    return (
        <Fragment>
            <Header />
            <PDFViewer className='w-full h-screen'>
                <CV />
            </PDFViewer>
            <Footer />
        </Fragment>
    )
}