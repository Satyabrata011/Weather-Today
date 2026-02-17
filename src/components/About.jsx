import React from 'react';
import division2Image from '../assets/Source/1632493008193.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function About() {
    return (
        <div className="about-section">

            <div className="about-left">
                <h1 className="about-title">Weather Today</h1>
                <p className="about-description">
                    Here is the team, representing you the weather forecast "Weather Today".
                </p>
            </div>

            <div className="team-card">
                <img src={division2Image} alt="Founder" />
                <h2>Founder</h2>
                <p>SATYABRATA PRADHAN</p>

                <div className="social-icons">
                    <a href="https://github.com/Satyabrata011" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>

                    <a href="https://www.linkedin.com/in/satyabrata-pradhan-2b735120b" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </div>
            </div>

            {/* <div className="team-card">
                <img src={division2Image} alt="Founder" />
                <h2>Founder</h2>
                <p>SATYABRATA PRADHAN</p>

                <div className="social-icons">
                    <a href="https://github.com/Satyabrata011" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>

                    <a href="https://www.linkedin.com/in/satyabrata-pradhan-2b735120b" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </div>
            </div> */}

        </div>
    );
}

export default About;
