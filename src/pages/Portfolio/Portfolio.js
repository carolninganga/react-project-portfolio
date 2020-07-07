import React, { Component } from 'react';
import ReactParticles from 'react-particles-js';
import particlesConfig from './particles-config.js';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import './style.scss';



class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return (

   
        <div className="projects-grid">
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2FScreen%20Shot%202020-07-06%20at%2010.48.44%20PM.png?v=1594090135096) center / cover'}} ></CardTitle>
            <CardText>
            <h5>Yes Reply Messages</h5>
            YesReply uses two APIs Words API and Linguatools to facilitate message generation for “life events”.
            </CardText>
            <CardActions border>
            <Button target='_blank' rel="noopener noreferrer" href="https://github.com/carolninganga/Yes-Reply-Project-One">GitHub</Button>
            <Button target='_blank' rel="noopener noreferrer" href="https://carolninganga.github.io/Yes-Reply-Project-One/">Link to site</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2FScreen%20Shot%202020-07-06%20at%2010.34.52%20PM.png?v=1594089329409) center / cover'}} ></CardTitle>
            <CardText>
            <h5>GitHub Finder</h5>
            This application was built using react. It uses the github API to search and display 5 repos of a github profile. 
            </CardText>
            <CardActions border>
            <Button target='_blank' rel="noopener noreferrer" href="https://github.com/carolninganga/react-github-finder">GitHub</Button>
            <Button target='_blank' rel="noopener noreferrer" href="https://github-repo-finder23.herokuapp.com/">Link to site</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2FScreen%20Shot%202020-07-06%20at%2010.42.38%20PM.png?v=1594089782545) center / cover'}} ></CardTitle>
            <CardText>
            <h5>Day Planner</h5>
            Calendar Application that allows the user to save events for each hour of the day. This app uses moment library.</CardText>
            <CardActions border>
            <Button target='_blank' rel="noopener noreferrer" href="https://github.com/carolninganga/Day_Planner">GitHub</Button>
            <Button target='_blank' rel="noopener noreferrer" href="https://carolninganga.github.io/Day_Planner/">Link to site</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Angular</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }

  render() {
    return(
      <div>
      <Particles>
      <Hero>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
          </Hero>
      </Particles>
      </div>
    )
    }}

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


export default Portfolio;
