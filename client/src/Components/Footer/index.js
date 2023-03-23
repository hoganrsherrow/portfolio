import React from 'react';
import linkedInLogo from "./assets/linkedin.svg";
import githubLogo from "./assets/github.svg";
import envelope from "./assets/envelope-solid.svg";

const Footer = () => {
    return (
        <footer>
            <div className='flex'>
                <a href='https://www.linkedin.com/in/hogan-sherrow-13421321a/'>
                    <img src={linkedInLogo} alt="linkedin link" className='logo' />
                </a>
                <a href="https://github.com/hoganrsherrow/">
                    <img src={githubLogo} alt="github logo" className='logo' />
                </a>
                <a href="mailto:hogan.r.sherrow@vanderbilt.edu">
                    <img src={envelope} alt="mail envelope" className='logo' />
                </a>
            </div>
            <p>©2023</p>
        </footer>
    )
}

export default Footer;