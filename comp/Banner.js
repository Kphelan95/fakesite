import React from 'react';
import ReactDOM from "react-dom";
import Image from 'next/image';
import Header from './Header';




function Banner(){
    return (
        <>
            <Image
                className="banner"
                src="/hero-image.png"
                alt="Picture of the author"
                layout="responsive"
                width= {950}
                height={332}
            />
            <Header/>
            <div className="overlay-banner">
                <h1 className='heading-banner'>The world's greatest fake site</h1>
                <div>
                    <h3 className='heading-paragraph center-banner-paragraph'>Create the world's greatest fake site and enjoy the breeze of fresh air when you complete it</h3>
                </div>
                <button className='button-banner'>Do Something Awesome</button>
            </div>

            <style jsx>{`
            .banner{
                position: absolute;
                min-height: 442px;
            }
            .overlay-banner{
                position: absolute;
                top: 10%;
                text-align: center;
                width: 100%;
            }
            .button-banner{
                display: inline-block;
                padding: 15px 25px;
                font-size: 1.5vw;
                cursor: pointer;
                text-align: center;
                outline: none;
                color: #FFF;
                background-color: #EE2D1C;
                border: none;
                border-radius: 40px;
                min-height: 55px;
            }
            .button-banner:hover {
                background-color: #c61e0f
            }
            .button-banner:active {
              background-color: #c61e0f;
              box-shadow: 0 5px #666;
              transform: translateY(2px);
            }
            .center-banner-paragraph{
                width: 30%;
                text-align: center;
                margin-left: 35%;
            }
            .heading-banner{
                font-size: 3vw;
                color: #FFF;
                line-height: 10%; 
                font-family: 'Source Sans Pro', sans-serif;
              }
            .heading-paragraph{
                font-size: 2vw;
                color: #FFF;
                line-height: 40px; 
                font-family: 'Source Sans Pro', sans-serif;
                margin-bottom: 2%;
              }
            `}</style> 
        </>
    )
}


export default Banner