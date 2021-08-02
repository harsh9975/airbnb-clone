import React, { useState } from 'react';
import './Banner.css';
import {Button} from "@material-ui/core"

function Banner(){
    const [showSearch, setShowSearch] = useState(false);


    return (
        <div className="banner">
            <div className="banner-search">
                {showSearch && <h1>Show Date Picker</h1>}
                <Button onClick={()=> setShowSearch(!showSearch)} className="banner-search-button" variant="outlined">
                    Search Dates
                </Button>
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