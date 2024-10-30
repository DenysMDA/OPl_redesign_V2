import React from 'react'
import './Header.scss'

const Header = () => {


    return (
        <header className='header'>
             <div className="logo">
                    Operator Connect
             </div>
             <div className="search">
                <input type="text" className="search-input" />
             </div>
             <div className="chat">
                <button className="chat-btn">Chat</button>
             </div>
             <div className="signIn">
                <button className="signIn">Sign In</button>
             </div>
        </header>
    )
}

export default Header