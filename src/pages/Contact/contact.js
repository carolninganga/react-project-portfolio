import React from 'react';
import './style.css';

{/* <img
    src="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2Fcaroline.JPG?v=1593078287303"
    alt="profilePic"
    style={{height: '250px'}}
    /> */}

function Contact() {
  return (
    <div className="main">
    <p>For more information and project collaboration please email me at carolninganga@gmail.com</p>
      <div className="wrapper centered">
        <article className="letter">
          <div className="side">
            <h1>Contact Me</h1>
              <p>
              <textarea placeholder="Your message"></textarea>
              </p>
      </div>
    <div className="side">
      <p>
        <input type="text" placeholder="Your name"></input> </p>
      <p>
        <input type="email" placeholder="Your email"></input></p>
      <p>
        <button id="sendLetter">Send</button>
        </p>
        </div>
      </article>
        <div className="envelope front"></div>
        <div className="envelope back"></div>
        </div>
      <p className="result-message centered">Thank you for your message</p>
    </div>
  );
}

export default Contact;
