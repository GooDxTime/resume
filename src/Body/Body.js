import React from "react";
import './Body.css'

function Body(){
    return(
        <div className='Body'>
            <div className='container Info'>
                <div className='myInfo'>
                    <div className='myInfo__name'>
                        Stas Kozak
                    </div>
                    <div className='myInfo__date'>
                        <p>Front-end developer</p>
                        <p>22 years old, Zaporozhye</p>
                    </div>
                    <div className='myInfo__langue'>
                        <span className='text__langue'>RU</span> | <span className='active__langue text__langue'>ENG</span>
                    </div>
                </div>
                <div className='myPhoto'>

                </div>
            </div>
            <div className='AboutMe'>
                <h2 className='AboutMe__heading'>About me</h2>
                <div className='AboutMe__text_area'>
                    <p className='AboutMe__paragraph'>
                        Hi, I'm Denis – UX/UI designer from Minsk. 
                        I'm interested in design and everything connected with it.
                    </p>

                    <p className='AboutMe__paragraph'>
                        I'm studying at courses "Web and mobile design 
                        interfaces" in IT-Academy.
                    </p>

                    <p className='AboutMe__paragraph'>
                        Ready to implement excellent projects
                        with wonderful people.
                    </p>
                </div>
            </div>
            <div className='container skills'>
                <h2 className='skills__heading'>Skills</h2>
                <p className='skills__paragraph'>I work in such programs as</p>
                <ul className='skills__list'>
                    <li className='skills__list_item'>
                        <span className='item_icon icon_Addobe' />
                        <p className='item_name'>
                            Adobe Photoshop
                        </p>
                        <div className='item_raiting'>
                            <span className='raiting_star fill_star'/>
                            <span className='raiting_star fill_star'/>
                            <span className='raiting_star fill_star'/>
                            <span className='raiting_star empty_star'/>
                            <span className='raiting_star empty_star'/>
                        </div>
                    </li>
                    <li className='skills__list_item'>
                    <span className='item_icon icon_Figma' />
                        <p className='item_name'>
                        Figma
                        </p>
                        <div className='item_raiting'>
                            <span className='raiting_star fill_star'/>
                            <span className='raiting_star fill_star'/>
                            <span className='raiting_star fill_star'/>
                            <span className='raiting_star fill_star'/>
                            <span className='raiting_star empty_star'/>
                        </div>
                    </li>
                    <li className='skills__list_item'>
                    <span className='item_icon icon_vsCode'></span>
                        <p className='item_name'>
                        Visual Studio Code
                        </p>
                        <div className='item_raiting'>
                            <span className='raiting_star fill_star'/>
                            <span className='raiting_star fill_star'/>
                            <span className='raiting_star fill_star'/>
                            <span className='raiting_star fill_star'/>
                            <span className='raiting_star empty_star'/>
                        </div>
                    </li>
                    <li className='skills__list_item'>
                    <span className='item_icon icon_nodeJS'></span>
                        <p className='item_name'>
                        NodeJS
                        </p>
                        <div className='item_raiting'>
                            <span className='raiting_star fill_star'/>
                            <span className='raiting_star fill_star'/>
                            <span className='raiting_star fill_star'/>
                            <span className='raiting_star fill_star'/>
                            <span className='raiting_star empty_star'/>
                        </div>
                    </li>
                </ul>
                <p className='skills__paragraph'>I work with technologies like </p>
                <ul className='technologies'>
                    <li className='technologies_item'>
                        <span className='item_icon icon_html' />
                        <p className='item_name'>
                            HTML5
                        </p>
                        <div className='item_raiting'>
                            <span className='raiting_star fill_star'/>
                            <span className='raiting_star fill_star'/>
                            <span className='raiting_star fill_star'/>
                            <span className='raiting_star fill_star'/>
                            <span className='raiting_star empty_star'/>
                        </div>
                    </li>
                    <li className='technologies_item'>
                    <span className='item_icon icon_css' />
                        <p className='item_name'>
                        CSS3
                        </p>
                        <div className='item_raiting'>
                            <span className='raiting_star fill_star'/>
                            <span className='raiting_star fill_star'/>
                            <span className='raiting_star fill_star'/>
                            <span className='raiting_star fill_star'/>
                            <span className='raiting_star empty_star'/>
                        </div>
                    </li>
                    <li className='technologies_item'>
                    <span className='item_icon icon_javascript'></span>
                        <p className='item_name'>
                        JavaScript
                        </p>
                        <div className='item_raiting'>
                            <span className='raiting_star fill_star'/>
                            <span className='raiting_star fill_star'/>
                            <span className='raiting_star fill_star'/>
                            <span className='raiting_star fill_star'/>
                            <span className='raiting_star empty_star'/>
                        </div>
                    </li>
                    <li className='technologies_item'>
                    <span className='item_icon icon_react'></span>
                        <p className='item_name'>
                        ReactJS
                        </p>
                        <div className='item_raiting'>
                            <span className='raiting_star fill_star'/>
                            <span className='raiting_star fill_star'/>
                            <span className='raiting_star fill_star'/>
                            <span className='raiting_star empty_star'/>
                            <span className='raiting_star empty_star'/>
                        </div>
                    </li>
                    <li className='technologies_item'>
                    <span className='item_icon icon_github'></span>
                        <p className='item_name'>
                        GitHub
                        </p>
                        <div className='item_raiting'>
                            <span className='raiting_star fill_star'/>
                            <span className='raiting_star fill_star'/>
                            <span className='raiting_star fill_star'/>
                            <span className='raiting_star empty_star'/>
                            <span className='raiting_star empty_star'/>
                        </div>
                    </li>
                    <li className='technologies_item'>
                    <span className='item_icon icon_webpack'></span>
                        <p className='item_name'>
                        Webpack
                        </p>
                        <div className='item_raiting'>
                            <span className='raiting_star fill_star'/>
                            <span className='raiting_star fill_star'/>
                            <span className='raiting_star fill_star'/>
                            <span className='raiting_star empty_star'/>
                            <span className='raiting_star empty_star'/>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='portfolio'>
                
            </div>
        </div>
    )
}

export default Body