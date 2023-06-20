import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import News from "./components/homePage/news";
import Photos from "./components/homePage/photos";


export default class RoutePages extends Component {
    render(){
        return(
            <Routes>
                <Route path="/" exact={true} element={<HomePage/>} />
                <Route path="/photos" element={<Photos/>} />
                <Route path="/news" element={<News/>} />
            </Routes>
        )
    }
}