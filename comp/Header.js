import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; 

const Header = () => {
    return ( 
        <>
        <div className="Header">
            <div className='Flex-Container-Header'>
                <div className="Flex-Item-Header banner-logo">
                    <Image
                    src="/logo.png"
                    alt="Picture of the author"
                    layout="responsive"
                    width= {48}
                    height={60}
                    />
                </div>
                <Link href="/account" passHref={true}> 
                    <p className="Flex-Item-Header header-font"> Account</p> 
                </Link> 
                <p className="Flex-Item-Header header-font"> Help</p>
                <div className="Flex-Item-Header banner-profile-pic">
                    <img 
                        src="/MissingImage.png"
                        className="rounded-image"
                        alt="Picture of the author"
                        layout="responsive"
                        width= {50}
                        height={50}
                    /> 
                </div>
            </div>

            <style jsx>{`
            .Header {
              position: absolute;
              width:100%;
              top:0%;
            }
            .Flex-Container-Header {
                display: flex;
                flex-flow: row wrap;
                justify-content: flex-end;
              }
            .Flex-Item-Header {
              width: auto;
              height: auto;
              margin: 20px;
            }
            .banner-logo {
              margin-right: auto;
              width: 48px;
              height: 60px;
            }
            .banner-profile-pic{
                width: 48px;
                height: 60px;
            }
            .header-font{
                font-size: 22px;
                color: #FFF;
                line-height: 28px;
                font-family: 'Source Sans Pro', sans-serif;
                cursor: pointer;
            }
            .rounded-image{
                border-radius: 75%;
            }
            `}</style> 
        </div> 
        </>
     );
}
 
export default Header;