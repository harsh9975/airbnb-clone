import React from 'react'
import logo from "../../images/logo.png"
import "./Header.css"
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar} from "@material-ui/core"

function Header() {
    return (
        <div className="header">
            <img className="header-icon" src={logo} alt=""/>
            <div className="header-center">
                <input type="text"/>
                <SearchOutlinedIcon/>
            </div>

            <div className="header-right">
                <p>Beacome a host</p>
                <ExpandMoreIcon/>
                <Avatar/>
            </div>
        </div>
    )
}

export default Header
