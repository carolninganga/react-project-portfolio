import React from 'react';
import ReactParticles from 'react-particles-js';
import particlesConfig from './particles-config.js';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

import './styles.scss';

function Contact() {
  return (
    <div className="main">
      <Particles>
        <Hero>
       
                <Grid className="contact-grid">
                    <Cell col={6}>
                    <h2>Caroline Ninganga</h2>
                    <img
                        src="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2Fcaroline.JPG?v=1593078287303"
                        alt="profilePic"
                        style={{height: '250px'}}
                    />
                    <p style={{ width: '75%', margin: 'left: 10px, paddingTop: 1em'}}>For more information about the listed projects on my portifolio reach out using my Github.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    (914) 572-0046
                                    </ListItemContent>
                                </ListItem>
                            <ListItem>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                                <i className="fa fa-envelope" aria-hidden="true"/>
                                carolninganga@gmail.com
                            </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                                <i className="fa fa-github" aria-hidden="true"/>
                                github username: carolninganga
                            </ListItemContent>
                            </ListItem>
                                </List>
                                </div>
                        </Cell>
                    </Grid>      
        </Hero>
      </Particles>
    </div>
  );
}


function Particles({ children }) {
  return (
    <div style={{ position: 'relative' }}>
      <ReactParticles
        params={particlesConfig}
        style={{
          position: 'absolute',
          zIndex: 1,
          left: 0,
          right: 0,
          bottom: 0,
          top: 0
        }}
      />
      {children && <div style={{ position: 'relative' }}>{children}</div>}
    </div>
  );
}

function Hero({ children }) {
  return (
    <div className="hero">
      <div className="hero-body">{children}</div>
    </div>
  );
}




export default Contact;
