import React, { Component } from 'react';
import Education from '../../components/education';
import Experince from '../../components/experience';
import Skills from '../../components/skills';

import { Grid, Cell } from 'react-mdl';


class Resume extends Component {
    render() {
        return (
            <div>
               <Grid>
                   <Cell col={4}>
                   <div style={{textAlign: 'center'}}>
                       <img
                       src="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2Fthumbnails%2Fcaroline-removebg-preview.png?1593113280170"
                       alt="avator"
                       style={{height: '200px'}}
                       />
                   </div>
                   <h2 style={{paddingTop: '2em'}}>Caroline Ninganga</h2>
                   <h4 style={{color: 'grey'}}>Programmer</h4>
                   <hr style={{borderTop: '3px solid #213346', width: '50%'}}/>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                   <hr style={{borderTop: '3px solid #213346', width: '50%'}}/>
                    <h5>Address</h5>
                    <p>Yonkers New York</p>
                    <h5>Phone</h5>
                    <p>914-572-0046</p>
                    <h5>Email</h5>
                    <p>carolninganga@gmail.com</p>
                    <h5>Web</h5>
                    <p>mywebsite.com</p>
                    <hr style={{borderTop: '3px solid #213346', width: '50%'}}/>
                   </Cell>
                   <Cell className="resume-right-col" col={8}>
                       <h2>Education</h2>
                       <Education 
                           startYear={2012}
                           endYear={2015}
                           schoolName="Mount Saint Mary College"
                           schoolDescription="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                       />
                       <Education 
                           startYear={2020}
                           endYear={2020}
                           schoolName="Columbia University"
                           schoolDescription="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                       />
                       <hr style={{borderTop : '3px solid #e22947'}} />
                       <h2>Eperience</h2>
                       <Experince 
                           startYear={2014}
                           endYear={2019}
                           jobName="Learn America"
                           jobDescription="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                       />
                       <Experince 
                           startYear={2014}
                           endYear={2019}
                           jobName="Learn America"
                           jobDescription="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                       />
                    <hr style={{borderTop : '3px solid #e22947'}} />
                    <h2>Skills</h2>
                        <Skills 
                            skill="javascript"
                            progress={100}
                        />
                        <Skills 
                            skill="MongoBD"
                            progress={80}
                        />
                   </Cell>
               </Grid>
            </div>
        )
    }
}

export default Resume;