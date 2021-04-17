import React from 'react';
import ReactDOM from "react-dom";
import Banner from '../comp/Banner';
import Footer from '../comp/Footer';
import Link from 'next/link'; 
import regeneratorRuntime from "regenerator-runtime";
import Image from 'next/image';
import Head from 'next/head'


const about = ({videos}) => {
    return ( 
        <>
        <Head>
            <title>About Page</title>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Source+Sans+Pro&display=swap" rel="stylesheet"></link>
        </Head>
    
        <Footer/>
        
 
    </>
    );
}
 
export default about;
