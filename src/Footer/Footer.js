import React from "react";
import './Footer.css'

function Footer(){
return(
    <div className='container_footer'>
        <h2 className='header_footer'>Contacts</h2>
        <p className='paragraph_footer'>Want to know more or just chat? 
You are welcome!</p>
        <button className='btn btn_footer'>Send message</button>
        <ul className='list_link'>
            <li className='link_item'>
                <a href='' className='icon_Telegram icon'></a>
            </li>
            <li className='link_item'>
                <a href='' className='icon_LIn icon'></a>
            </li>
            <li className='link_item'>
                <a href='' className='icon_Inst icon'></a>
            </li>
            
            <li className='link_item'>
                <a href='' className='icon_Drib icon'></a>
            </li>
        </ul>
    </div>
)
}

export default Footer