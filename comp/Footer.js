import React from 'react';
import Image from 'next/image';
function Footer(){
    return (
        <>
        <div className="footer">
            <div className='flex-container'>
                <div className="flex-item justify-start">
                    <Image
                    src="/logo.png"
                    alt="Picture of the author"
                    layout="responsive"
                    width= {48}
                    height={60}
                    />
                </div>
                <p className="flex-item clickable-Link"> Terms</p>
                <p className="flex-item clickable-Link"> Privacy</p>
                <p className="flex-item clickable-Link"> Site Map</p>
            </div>

            <style jsx>{`
            .footer {
                margin-top: 2cm;
                border-top: solid;
                margin: 5%;
            }
            .flex-item {
              width: auto;
              height: auto;
              margin: 20px;
            }
            .flex-container {
              display: flex;
              flex-flow: row wrap;
              justify-content: flex-end;
            }
            .justify-start {
              margin-right: auto;
              width: 48px;
              height: 60px;
            }
            .clickable-Link{
              font-size: 22px;
              color: #88929E;
              line-height: 28px;
              font-family: 'Source Sans Pro', sans-serif;
            }
            `}</style> 
        </div> 
        </>
        
     )
}
 
export default Footer;