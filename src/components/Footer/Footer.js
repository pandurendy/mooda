import React, { Component } from 'react'
import './Footer.scss'
import Logo_small from './../../images/mooda_small_logo.png'
import fb_icon from './../../images/social/img-fb-icon.svg'
import tw_icon from './../../images/social/img-twitter-icon.svg'
import ig_icon from './../../images/social/img-ig-icon.svg'
import yt_icon from './../../images/social/img-youtube-icon.svg'



class Footer extends Component {
    render() {
        return(
            <section className="footer is-light">
                <div className="container">
                    <div className="columns">
                        <div className="column is-4">
                            <img src={Logo_small} />
                        </div>
                    </div>
                <div className="columns">
                        <div className="column is-7">
                            <div className="footer-menu">
                                <ul>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Term of Use</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="column is-5">
                            <div className="footer-menu">
                                <ul className="social-media">
                                    <li>
                                        <a href="#">
                                            <img src={fb_icon} alt="fb-link"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src={ig_icon} alt="fb-link"/>                                            
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src={tw_icon} alt="fb-link"/>                                            
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src={yt_icon} alt="fb-link"/>                                            
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                
                </div>
                
            </section>
        )
    }
}

export default Footer