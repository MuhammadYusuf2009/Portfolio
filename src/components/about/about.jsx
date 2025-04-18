import React from 'react'
import './about.css'
import aboutImg from '../../Img/aboutimg.png'
function About() {
    return (
        <div className='About'>
            <div className="container">
                <div className="about__me">
                    <h3><span>/</span>about-me</h3>
                    <h5>Who am i?</h5>
                </div>

                <div className="about__text">
                    <p>Hello, i’m VeXoN!<br></br>
                        <br></br>
                        I’m a self-taught front-end developer based in Kyiv, <br></br> Ukraine. I can develop responsive websites from <br></br>scratch and raise them into modern user-friendly web<br></br> experiences.
                        <br></br>
                        <br></br>
                        Transforming my creativity and knowledge into a<br></br> websites has been my passion for over a year. I have<br></br> been helping various clients to establish their<br></br> presence online. I always strive to learn about the<br></br> newest technologies and frameworks.</p>
                    <img src={aboutImg} alt="" />
                </div>

                <div className="skills">
                    <h3><span>#</span>skills</h3>
                    <div className="skills_bor">
                        <div className="skill__border">
                            <h4>Languages</h4>
                            <h5>TypeScript Lua <br></br>Python JavaScript</h5>
                        </div>
                        <div className="skill__border">
                            <h4>Other</h4>
                            <h5>HTML CSS EJS SCSS REST Jinja</h5>
                        </div>
                        <div className="skill__border">
                            <h4>Tools</h4>
                            <h5>VSCode Neovim Linux Lua Figma XFCE Arch Git Font Awesome KDE fish</h5>
                        </div>
                        <div className="skill__border">
                            <h4>Databases</h4>
                            <h5>SQLite PostgreSQL Mongo</h5>
                        </div>
                        <div className="skill__border">
                            <h4>Frameworks</h4>
                            <h5>React Vue Disnake Discord.js Flask Express.js</h5>
                        </div>
                    </div>
                </div>

                <div className="my__fun">

                    <h3><span>#</span>my-fun-facts</h3>

                    <div className="myfun__borders">

                        <div className="summer__border">
                            <p>I like winter more than summer</p>
                        </div>
                        <div className="friends__border">
                            <p>I often bike with my friends</p>
                        </div>
                    </div>

                    <div className="myfun__borders">
                        <div className="pizza__border">
                            <p>I like <strong>pizza</strong> and <strong>pasta</strong></p>
                        </div>
                        <div className="turkey__border">
                            <p>I was in <strong>Egypt</strong>, <strong> Poland</strong> and <strong>Turkey</strong></p>
                        </div>
                    </div>

                    <div className="myfun__borders">
                        <div className="mytop__border">
                            <div className="green__border">
                                <p>My favorite movie is <strong>The Green Mile</strong></p>
                            </div>
                            <div className="school__border">
                                <p>I am still in school</p>
                            </div>
                        </div>
                    </div>
                    <div className="siblings__border">
                        <p>I don’t have any siblings</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About