import React from 'react';
import profileImage from "../assets/Jisna.jpeg"

function Hero() {
    return (
        <div className='row ' style={{ margin: '0', padding: '0 50px',background:'linear-gradient(90deg, rgba(220,243,251,1) 0%, rgba(255,255,255,1) 100%)' }} id="hero">
            <div className='col text-start my-5'>
                <p className="fs-4 fw-bold">Hey, I'm Jisna K S</p>
                <h1 className="fw-bold" style={{fontSize:'60px'}}>
                    <span>Front-End Developer &</span>
                    <br />
                    UI/UX Designer
                </h1>
                <p style={{fontSize:'20px'}}>
                I’m a passionate Frontend Developer with a strong foundation in ReactJS, Redux, and modern web technologies. I craft elegant, user-friendly interfaces that deliver seamless experiences. With a keen eye for design and a dedication to continuous learning, I’m excited to bring your web projects to life.
                </p>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className='col d-flex justify-content-end'>
                <img src={profileImage} alt='Profile' className='w-75 my-5 rounded-3' />
            </div>
        </div>
    );
}

export default Hero;
