import React from 'react';
import ReactParticles from 'react-particles-js';
import particlesConfig from './particles-config.js';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

import './style.scss';

function Contact() {
  return (
    <div className="main">
      <Particles>
        <Hero>
       
                <Grid className="contact-grid">
                    <Cell col={12}>
                    <h2>Contact Me</h2>
                    <img
                        src="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2Fcaroline.JPG?v=1593078287303"
                        alt="profilePic"
                        style={{height: '250px'}}
                    />
                    <p style={{ width: '75%', margin: 'left: 10px, paddingTop: 1em'}}>For more quetions on projects and collaborations please email me or visit my github page.</p>
                        <hr/>
                        <div className="contact-list">
                            <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-fax" aria-hidden="true"/>
                                    (123) 456-7890
                                </ListItemContent>
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
