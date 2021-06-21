import React from 'react'
import { Button } from './Button'
import './Homepart.css'
import home from './home.PNG';

function Homepart() {
    return (
        <div>
        <div className="home">
        <img src={home} />
        </div>
        <div className = 'hero-container'>
            <h1>Making the most of the</h1>
            <h1>ever-growing</h1>
            <h1 id = "red">Information Technology</h1><br/>
            <h5>Managed by a team of professional experts with extensive experience and impressive track records</h5><br/>
            <div className = "hero-btn">
                <Button className = 'btns' buttonStyle='btn--primary' buttonSize='btn-large'>
                    Read More
                </Button>
            </div>
        </div>
        </div>
    )
}

export default Homepart
