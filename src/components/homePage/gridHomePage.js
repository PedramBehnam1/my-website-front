import React, { useState, useEffect } from "react";
import logo from '../../asset/images/logo.svg';
import nima from '../../asset/images/nima.png';



const GridHomePage = ()=>{
    const [isHover,setIsHover] = useState(false); 
    return(
        <>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p style={{color:"black"}}>
                My cousin's (Nima Najafi) photos are down here.
                </p>
                
            </header>
            <body className="App-body">
                
                <img src={nima} alt="Nima Najafi" 
                title='Nima Najafi'
                
                onMouseEnter={()=>{setIsHover(true)}}
                onMouseLeave={()=>{setIsHover(false)}}
                />

                {isHover&&
                <p style={{color:"black"}}>
                    pesarkhaleh jan pesarkhaleh jani be janan pesarkhaleh.<br/>
                    pesarkhaleh jan pesarkhaleh.
                </p>
                }
            </body>
        </>
    )
}

export default GridHomePage;