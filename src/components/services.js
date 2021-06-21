import React from 'react'
import { Button } from './Button'
import './services.css'
import img1 from './img1.PNG';
import img2 from './img2.PNG';
import img3 from './img3.PNG';

function Services() {
    return (
        <div>
            <h2>Products And Services</h2>
            <div id = "card">
                <h3 id = "redhead">Our Product</h3><br />
                <img src={img1} />
                <div id="pbox">
                <p id="text">Our product is made on the base of our team's careful research and analyses, ranging from internet based applications.<br/><br/></p>
                </div>
                <div className = "card-btn">
                <Button className = 'btns' buttonStyle='btn--primary' buttonSize='btn-medium'>
                    Read More
                </Button>
            </div>
            </div>
            <div id = "card">
                <h3 id = "redhead">Our Service</h3><br />
                <img src={img2} />
                <div id="pbox">
                <p id="text">DSI's shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.</p>
                </div>
                <div className = "card-btn">
                <Button className = 'btns' buttonStyle='btn--primary' buttonSize='btn-medium'>
                    Read More
                </Button>
            </div>
            </div>
            <div id = "card" className="tech">
                <h3 id = "redhead">Our Technology</h3><br />
                <img id = "img3" src={img3} />
                <div id="pbox">
                <p id="text">First JAVA, runs on more that 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices.</p>
                </div>
                <div className = "card-btn">
                <Button className = 'btns' buttonStyle='btn--primary' buttonSize='btn-medium'>
                    Read More
                </Button>
            </div>
            </div>
        </div>
    )
}

export default Services
