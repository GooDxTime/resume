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
                <a href='https://t.me/Goodxtime' target="_blank" rel="noreferrer" ><span className='icon_Telegram icon'></span></a>
            </li>
            <li className='link_item'>
                <a href='https://www.linkedin.com/in/Stas-Kozak-414968225' target="_blank" rel="noreferrer" className='icon_LIn icon'><span></span></a>
            </li>
            <li className='link_item'>
                <a href='https://www.instagram.com/goodxxtime/' target="_blank" rel="noreferrer" className='icon_Inst icon'><span></span></a>
            </li>
            
            <li className='link_item'>
                <a href='mailto:kozak.stasan@gmail.com' target="_blank" rel="noreferrer" className='icon_Drib icon'><span></span></a>
            </li>
        </ul>
    </div>
)
}

export default Footer