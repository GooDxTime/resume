import React from "react";
import './Header.css';

function Header(){
    return(
        <div className='Header'>
            <ul className='Navigation'>
                <li className='Navigation_item active'>
                    <a href='https://www.google.com/' className='link_style active'>Home</a>    
                </li>
                <li className='Navigation_item'>
                    <a href='https://www.google.com/' className='link_style'>About Me</a>
                </li>
                <li className='Navigation_item'>
                    <a href='https://www.google.com/' className='link_style'>Skills</a>
                </li>
                <li className='Navigation_item'>
                    <a href='https://www.google.com/' className='link_style'>Contacts</a>
                </li>
            </ul>
        </div>
    )
}

export default Header
