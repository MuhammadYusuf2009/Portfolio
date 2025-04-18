import React from 'react'
import './contact.css'
function Contact() {
    return (
        <div className='Contact'>
            <div className="container">
                <div className="contact__center">
                    <h3><span>/</span>contacts</h3>
                    <h5>Who am i?</h5>
                </div>

                <div className="contact__me">
                    <div className="contactme__p">
                        <p>I’m interested in freelance opportunities. However,if you have other request or question, don’t hesitate to contact me</p>
                    </div>
                    <div className="cantactme__border">
                        <div className="contactborder__here">
                            <h3>Support me here</h3>
                            <h5>+998505003950</h5>  
                        </div>
                        <div className="cantactborder__message">
                            <h3>Message me here</h3>
                            <a href="https://t.me/M_R_21_10" target='blank'><h5>t.me/M_R_21_10</h5></a>
                            <a href="mailto:kodirovmy122109@gmail.com"><h5>kodirovmy122109@gmail.com</h5></a>
                        </div>
                    </div>
                </div>

                <div className="all__media">
                    <div className="allmedia__center">
                        <h3><span>#</span>all-media</h3>
                    </div>
                    <div className="allmedia__meta">
                        <h4>Instagram: <a href="https://instagram.com/_vexon.__">@_vexon.__</a></h4>
                        <h4>Instagram: <a href="https://instagram.com/_.vexon._">@_.vexon._</a></h4>
                    </div>
                    <div className="allmedia__meta">
                        <h4>Telegram: <a href="https://t.me/M_R_21_10">@M_R_21_10</a></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact