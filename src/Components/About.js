import React from 'react';
import profileImage from "../assets/Jisna.jpeg";

function About() {
  return (
    <div className='row' style={{ margin: '0', padding: '0 50px' }} id="About">
      <div className='col d-flex justify-content-start'>
        <img src={profileImage} alt='Profile' className='w-75 my-5 rounded-3' />
      </div>
      <div className='col d-flex justify-content-end text-start my-5'>
        <div>
          <h1 className="fw-bold mb-5" style={{ fontSize: '70px' }}>About Me</h1>
          <p className='mb-4'>
            I’m a passionate Frontend Developer with a strong foundation in ReactJS, Redux, and modern web technologies. I craft elegant, user-friendly interfaces that deliver seamless experiences. With a keen eye for design and a dedication to continuous learning, I’m excited to bring your web projects to life.
          </p>
          <button className="btn btn-primary">Get In Touch</button>
        </div>
      </div>
    </div>
  );
}

export default About;

