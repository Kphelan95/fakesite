import React from 'react';
import ReactDOM from "react-dom";
import Banner from '../comp/Banner';
import Footer from '../comp/Footer';
import Link from 'next/link'; 
import regeneratorRuntime from "regenerator-runtime";
import Image from 'next/image';
import Head from 'next/head'


const account = ({videos}) => {
    return ( 
        <>
        <Head>
            <title>Account</title>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Source+Sans+Pro&display=swap" rel="stylesheet"></link>
        </Head>
        <h1>Welcome to the account page!</h1>
            <Link href="/" passHref={true}> 
                <h1 className='account-font'> Click to return to the home page</h1> 
            </Link>
        <Footer/>
        <style jsx>{`
            .account-font{
                font-size: 22px;
                color: #4C4C51;
                line-height: 28px;
                font-family: 'Source Sans Pro', sans-serif;
                cursor: pointer;
            }
            `}</style>
    </>
    );
}
 
export default account;
