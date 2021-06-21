import React from 'react'
import { Button } from './Button'
import './info.css'
import info from './info.PNG';

function Infopart() {
    return (
        <div className="con">
            <div className="info">
            <img src={info} />
            </div>
            <div className = 'info-container'>
                <h1>Welcome to <span id = "red">Dwidasa Samsara Indonesia (DSI)</span></h1><br></br>
                <p>Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through <span id="red">DSI</span>'s distinct front-end based application concept</p>
                <p>Managed by a team of professional experts with extensive experience and impressive track records,<span id="red">DSI</span> believes that continous improvements and innovations assure your buisness to run effectively and efficiently</p>
            </div>
        </div>
    )
}

export default Infopart
