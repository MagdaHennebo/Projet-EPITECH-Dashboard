import React from 'react';
import "./Topbar.css";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import PowerSettingsNewOutlinedIcon from '@material-ui/icons/PowerSettingsNewOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';



export default function Topbar() {
    function logOut() {
    localStorage.clear();
    window.location.reload();
    }

    return (
        <div>
            <div className="topbar">
                <div className="topbarWrapper">
                    <div className="topLeft">
                        <span className="logo"><a href="/home"> My Dashboard</a></span>
                    </div>
                    <div className="topRight">
                        <a href='/profile'className="profile"><AccountCircleOutlinedIcon/></a>
                          <span onClick={logOut} className="logOut">  <PowerSettingsNewOutlinedIcon/></span>
                          <a href='/adminservices' className="admin"><SettingsOutlinedIcon/> </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
