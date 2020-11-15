import React from 'react';
// import {useDataLayerValue} from './Datalayer'
import './Player.css'
import Sidebar from './Sidebar';
import Body from './Body'
import Footer from './Footer'
function Player({spotify}) {
    return (
        <div className="player  ">
            <div className="player__body">
            <Sidebar></Sidebar>
            {/* {SideBar} */}
            <Body></Body>
            {/* {Body} */}
            </div>
            <Footer/>
        {/* {footer} */}
        </div>
    )
}
export default Player
