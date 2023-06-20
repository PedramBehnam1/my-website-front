import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import GridHomePage from "../components/homePage/gridHomePage";
import '../asset/css/App.css';

const HomePage = ()=>{
    return(
    <div className="App">
        <Header />
        <GridHomePage />
    </div>
    )
}

export default HomePage;