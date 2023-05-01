import React from 'react';
import './Footer.css';
import Logo from './../../assets/Header/logo.svg'
import Facebook from './../../assets/Footer/facebook_icon.svg'
import Instagram from './../../assets/Footer/instagram_icon.svg'
import Twitter from './../../assets/Footer/twitter_icon.svg'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer_container">
                    <div className="footer_links">
                        <ul>
                            <li><a href="#">Політика</a></li>
                            <li><a href="#">Освіта</a></li>
                            <li><a href="#">Охорона здоров'я</a></li>
                            <li><a href="#">Праця</a></li>
                        </ul>
                    </div>
                    <div className="footer_logo">
                        <img src={Logo} alt="logo_icon"/>
                    </div>
                    <div className="footer_social_icons">
                        <div className="facebook_icon"><a href="#"><img src={Facebook} alt="facebook_icon"/></a></div>
                        <div className="instagram_icon"><a href="#"><img src={Instagram} alt="instagram_icon"/></a></div>
                        <div className="twitter_icon"><a href="#"><img src={Twitter} alt="twitter_icon"/></a></div>
                    </div>
                </div>
            </footer>
        </>
);
};

export default Footer;
