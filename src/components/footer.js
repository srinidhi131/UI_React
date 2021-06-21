import React from 'react'
import logo from './logo.PNG';
import partner from './partner.PNG'
import './footer.css'

function Footer() {
    return (
        <div>
        <div>
            <div id="box1" >
                <img id = "image" src={logo} />
                <p>PT Dwidasa Samsara Indonesia <br/> Ruko Jalur Sutera 29A Alam Sutera Serpong, Tangerang 15323</p>
            </div>
            <div id="box1">
                <h4> Contact </h4>
            <p>Phone : +62.21.5314.1135 <br/>Fax : +62.21.5314.1135<br/>Email : community@dwidasa.com</p>
            </div>
            <div id="box1">
            <img src={partner} />
            </div>
        </div>
        </div>
    )
}

export default Footer
