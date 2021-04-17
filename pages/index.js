import React from 'react';
import ReactDOM from "react-dom";
import Banner from '../comp/Banner';
import Footer from '../comp/Footer';
import Link from 'next/link'; 
import regeneratorRuntime from "regenerator-runtime";
import Image from 'next/image';
import Head from 'next/head';
import { useState, useEffect } from "react"


export const getStaticProps = async () =>{
    const res = await fetch('https://vimeo.com/api/v2/channel/staffpicks/videos.json');
    const data = await res.json();

    return{
        props:{videos: data}
    }
}


const home = ({videos}) => {    
    return ( 
        <>
        <Head>
            <title>Home Page</title>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Source+Sans+Pro&display=swap" rel="stylesheet"></link>
        </Head>
    <div>
        <Banner />
        <div className='grid-container'>
            <div>
                <>
                {videos.map(viedo =>(
                    <div key={viedo.id} className=' video-list-container'>
                        <>
                        <div className='center-text '>
                            <h2 className='heading'>{viedo.title}</h2>
                            <div className='paragraph' dangerouslySetInnerHTML={{ __html: viedo.description}}></div> {/* look to use a 3rd party libary */}
                        </div>
                        </>
                        <>
                        <div className='center-text center-verically'>
                            <a>
                                <Link href={viedo.url} passHref={true}>
                                    <div className="container-video">
                                        <img className='image-video'
                                            src={viedo.thumbnail_medium}
                                            alt="Picture of the author"
                                            layout="responsive"
                                            width= {150}
                                            height={150}
                                        />
                                            <div className="overlay-video">
                                                <img
                                                className="center-playbtn"
                                                src="/playbtn.png"
                                                alt="Picture of the author"
                                                layout="responsive"
                                                width= {75}
                                                height={75}
                                                /> 
                                            </div>
                                    </div>
                                </Link>
                            </a>   
                            
                        </div>
                        </>
                    </div>
                ))}
                </>
            </div>
            <div className="grid-item-3"> 
                <div className="center-text">
                    <h2 className='heading'>Ready to have your cake and eat it too?</h2>
                    <div className="wrap-text">
                        <p className='paragraph'>Start by designing the experience you have in Mind. We'll guide you through each step. If your experience meets the quaality standards, you'll hear more about what's next</p>
                    </div>
                </div>
            </div>
            <div className="grid-item-4"> 
                <div className="subgrid-item-1"> 
                    <ul>
                        <p className='click-link-header'>Fakesite</p>
                        <p className='click-Link'>About us</p>
                        <p className='click-Link'>Press</p>
                        <p className='click-Link'>Policies</p>
                        <p className='click-Link'>Help</p>
                    </ul>
                </div>
                <div className="subgrid-item-2">
                    <ul>
                        <p className='click-link-header'>Account</p>
                        <p className='click-Link'>Edit Profile</p>
                        <p className='click-Link'>Friends</p>
                        <p className='click-Link'>Social</p>
                        <p className='click-Link'>Delete Profile</p>
                    </ul>
                </div>
            </div>
        </div>
        <Footer/>
        <style jsx>{`
            .video-list-container{
                display: grid;
                grid-template-columns: repeat(2,50%)
            }
            .grid-container{
                display: grid;
                grid-template-columns: 1;
                grid-auto-rows: minmax(150px, auto);
                margin: 5%;
            }
            .grid-item-1{
                grid-column: span 1;
                border-style: solid;
            }
            .grid-item-2{
                grid-column: span 1;
            }
            .grid-item-3{
                grid-row-start: 2;
                grid-row-end: 3;
                grid-column: span 2;
            }
            .grid-item-4{
                grid-row-start: 3;
                grid-row-end: 4;
                grid-column: span 2;
                display: grid;
                grid-template-columns: repeat(5,20%);
            }
            .subgrid-item-1 {
                grid-column: 1/2;
              }
            .subgrid-item-2 {
                grid-column: 2/3;
            }
            .center-text{
                text-align: center;
            }
            .wrap-text{
                margin-right: 20%;
                margin-left: 20%;
            }
            .center-verically{
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .heading{
                font-size: 36px;
                color: #4C4C51;
                line-height: 36px; 
                font-family: 'Source Sans Pro', sans-serif;
            }
            .paragraph{
                font-size: 22px;
                color: #88929E;
                line-height: 28px;  
                font-family: 'Source Sans Pro', sans-serif;
            }
            .click-link-header{
                font-size: 22px;
                color: #EE2D1C;
                line-height: 28px;  
                font-family: 'Source Sans Pro', sans-serif;
                margin-bottom: 10px;
            }
            .click-Link{
                font-size: 22px;
                color: #88929E;
                line-height: 28px;
                font-family: 'Source Sans Pro', sans-serif;
                margin-bottom: 5px;
                margin-top: 5px;
                cursor: pointer;
            }
            .center-playbtn{
                transform: translateY(50%);
            }
            .container-video {
                position: relative;
                width: 100%;
                max-width: 400px;
            }
            .image-video {
                width: 100%;
                height: auto;
            }
            .overlay-video {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                height: 100%;
                width: 100%;
                opacity: 0.7;
                background: linear-gradient(180deg, rgba(238,46,29,1) 0%, rgba(255,177,181,1) 100%);
                cursor: pointer;
            }
            `}</style>
    </div> 
    </>
        );
}
 
export default home;
/*
            position: absolute;
            top: 80px;
            left: 100px;
            width: 3000px;
            height: 100px;

            left: 50%;
            margin-right: auto;
            the whole column is 2 and i need a 1/6th of that 




            width: 50%;
                text-align: center;
                right:50%
                align-self: center;


                font-family: Source Sans Pro




















<div className="grid-item grid-item-1 Center-Text">
                {videos.map(viedo =>(
                    <div key={viedo.id}>
                        <h2>{viedo.title}</h2>
                        <p>{viedo.description}</p>
                    </div>
                ))}
            </div>

            <div className="grid-item grid-item-2 Center-Text"> 
                {videos.map(viedo =>(
                    <div key={viedo.id}>
                        <a>
                            <Link href={viedo.url} passHref={true}>
                                <img
                                    src={viedo.thumbnail_medium}
                                    alt="Picture of the author"
                                    layout="responsive"
                                    width= {150}
                                    height={150}
                                />          
                            </Link>
                        </a>
                    </div>
                ))}
                

            </div>










                                    <img
                                        className="overlay"
                                        src={viedo.thumbnail_medium}
                                        alt="Picture of the author"
                                        layout="responsive"
                                        width= {150}
                                        height={150}
                                    /> 




*/

