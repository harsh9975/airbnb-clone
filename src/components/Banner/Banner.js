import React, { useState } from 'react';
import './Banner.css';
import {Button} from "@material-ui/core"
// import Search from "../Search/Search.js"
import DatePicker from "../DatePicker/DatePicker.js"

function Banner(){
    const [showSearch, setShowSearch] = useState(false);


    return (
        <div className="banner">
            <div className="banner-search">
                <Button onClick={()=> setShowSearch(!showSearch)} className="banner-search-button" variant="outlined">
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
                {showSearch && <DatePicker/>}
            </div>
            <div className="banner-info">
                <h1>Get out stretch your imagination</h1>
                <h5>Plan a diffrent kind of getaway to uncover the hidden gems near you</h5>
                <Button variant="outlined">Explore Nearby</Button>
            </div>
            
        </div>
    )
}

export default Banner