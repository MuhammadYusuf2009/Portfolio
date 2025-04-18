import React from 'react'
import './footer.css'
import footerLogo from '../../Img/logo.png'
function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <hr className='line' />
                <div className="logo__dad">
                    <div className="footer__logo">
                        <img src={footerLogo} alt="" width={40} />
                        <h5>VeXoN</h5>
                        <h4>kodirovmy122109@gmail.com</h4>
                    </div>
                    <div className="media">
                        <h2>Media</h2>
                    </div>
                </div>
                <div className="about__work">
                    <h3>Backend developer and front-end developer</h3>
                </div>
                <div className="footer__center">
                    <p>© Copyright 2022. Made by VeXoN</p>
                </div>
            </div>
        </div>
    )
}

export default Footer