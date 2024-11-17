import React from 'react'
import './Header.scss'
import { LuSearch } from "react-icons/lu";

import mic_2 from '../../assest/mic_2.png'

const Header = () => {


    return (
        <header className='header-wrapper'>
            <div className='header'>
                <div className="logo">
                    <img src={mic_2} alt="" width={30} height={30}/>
                    <div className='logo-title'>
                        <span className='span-logo'>Operator Connect</span>
                        <span className='span-desc'>Powered by Microsoft</span>
                    </div>
                    <div className="search">
                        <div className='search-icon'>
                            <LuSearch className='icon'/>
                        </div>
                        <input placeholder='Search' type="text" className="search-input"/>
                    </div>
                </div>

                <div className='header-nav'>
                    <div className="chat">
                        <button className="chat-btn">Chat</button>
                    </div>
                    <div className="signIn">
                        <button className="signIn">Sign In</button>
                    </div>
                </div>

            </div>

        </header>
    )
}

export default Header
