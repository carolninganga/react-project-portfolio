import React, { Component } from 'react';
import Education from '../../components/education';
import Experince from '../../components/experience';
// import Skills from '../../components/skills';
import './style.css';

import { Grid, Cell } from 'react-mdl';


class Resume extends Component {
    render() {
        return (
            <div>
               <Grid>
                   <Cell className="resume-left-col" col={4}>
                   <div style={{textAlign: 'center'}}>
                       <img
                       src="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2Fthumbnails%2Fcaroline-removebg-preview.png?1593113280170"
                       alt="avator"
                       style={{height: '300px'}}
                       />
                   </div>
                   <h2 className="carolName" style={{paddingTop: '2em'}}>Caroline Ninganga</h2>
                   <h4 style={{color: 'grey'}}>Programmer</h4>
                   <hr style={{borderTop: '3px solid #213346', width: '50%'}}/>
                   <p className="description">I'm a software engineer who's passionate about people, innovation, and executing new ideas. My professional training certification in HTML, CSS and JavaScript has  allowed me to develop a creative mindset that can be used to build projects which solve problems for people. I love the thrill of exploring and implementing interactive and responsive applications in collaboration with other developers. Outside of programming, you can find me hiking, food tasting, traveling, or participating on projects that use technology to conquer social economic issues. </p>
                   <hr style={{borderTop: '3px solid #213346', width: '50%'}}/>
                    <h5>Web</h5>
                    <p>mywebsite.com</p>
                    <hr style={{borderTop: '3px solid #000000', width: '50%'}}/>


                <div className="intro-section contact">
                    <h1 className="title">Contact</h1>
                    <div className="info-section">
                    </div>
                    <div className="info-section">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>New York, NY</span>
                    </div>
                    <div className="info-section">
                    <i className="fas fa-paper-plane"></i>
                    <span>carolninganga@gmail.com</span> 
                    </div> 
                </div>
                <div className="intro-section follow">
                    <h1 className="title text-center">Connect</h1>
                    <div className="info-section link">
                    <i className="fab fa-github"></i>
                    <a target='_blank' rel="noopener noreferrer" href="https://github.com/carolninganga">
                        <span>carolninganga@github</span>
                    </a>
                    </div>
                    <div className="info-section link">
                        <i className="fab fa-linkedin-in"></i>
                    <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/carolineninganga/">
                        <span>linkedin.com/in/carolineninganga</span>
                    </a>
                    </div>
                    <div className="info-section link">
                        <i className="fab fa-twitter"></i>
                    <a target='_blank' rel="noopener noreferrer" href="https://twitter.com/carolninganga">
                        <span>twitter.com/carolninganga</span>
                    </a>
                    </div>
                </div>
                   </Cell>


                   <Cell className="resume-right-col" col={8}>
                       <h2>Education</h2>
                       <div className="timeline-block">
                       <Education 
                           startYear={2020}
                           endYear={2020}
                           schoolName="Coding Professional Training"
                           schoolDescription="Columbia University, New York"
                       />
                       </div>
                       <div className="timeline-block">
                       <Education 
                           startYear={2012}
                           endYear={2015}
                           schoolName="Bachelors in History and Political Science Minor in Economics - Full Tuition Scholarship Recipient"
                           schoolDescription="Mount Saint Mary College, New York"
                       />
                       </div>
                       <div className="timeline-block">
                       <Education 
                           startYear={2010}
                           endYear={2012}
                           schoolName="Associate In Liberal Arts Social Sciences - Full Tuition Scholarship, Kathryn Davis Global Community Scholar."
                           schoolDescription=" Wescheter Community College, New York"
                       />
                       </div>
                       <div className="timeline-block">
                         <Education 
                           startYear={2011}
                           endYear={2011}
                           schoolName="Certification in International Human Rights and LOAC in Peace Operations"
                           schoolDescription=" Internation Institute of Humanitarian Law, Sanremo Italy"
                       />
                       </div>
                     
                    
                       <hr style={{borderTop : '3px solid #000000'}} />
                       <h2>Eperience</h2>
                       <Experince 
                           startYear={2015}
                           endYear={2019}
                           jobName="Learn America, New York"
                           jobDescription="Office Manager/ Technical Support"
                       />
                       <Experince 
                           startYear={2013}
                           endYear={2014}
                           jobName="New State Assemblyman District Office, New York"
                           jobDescription="Associate Intern for Assemblyman Skartados Newburgh"
                       />
                       <Experince 
                           startYear={2013}
                           endYear={2013}
                           jobName="UNESCO, Washington DC"
                           jobDescription="Social Media and Communications Intern"
                       />
                       <Experince 
                           startYear={2010}
                           endYear={2012}
                           jobName="Weschester Community College, New York"
                           jobDescription="Senior Call Center Representertive"
                       />
                    <hr style={{borderTop : '3px solid #e22947'}} />

                    <div className="detail-section pg-skill">
                    <div className="detail-title">
                    <div className="title-icon">
                        <i className="fas fa-diamond"></i>
                    </div>
                    <span><h2>Skills</h2></span>
                    </div>
                    <div className="detail-content">
                    <ul className="pg-list">
                        <li>
                        <span>Javascript</span>
                        <div className="sb-skeleton">
                            <div className="skillbar" style={{"--pgbar-length": "70%"}}></div>
                        </div>
                        </li>
                        <li>
                        <span>jQuery</span>
                        <div className="sb-skeleton">
                            <div className="skillbar" style={{"--pgbar-length": "70%"}}></div>
                        </div>
                        </li>
                        <li>
                        <span>NodeJS</span>
                        <div className="sb-skeleton">
                            <div className="skillbar" style={{"--pgbar-length": "70%"}}></div>
                        </div>
                        </li>
                        <li>
                        <span>SQL</span>
                        <div className="sb-skeleton">
                            <div className="skillbar" style={{"--pgbar-length": "85%"}}></div>
                        </div>
                        </li>
                        <li>
                        <span>Python</span>
                        <div className="sb-skeleton">
                            <div className="skillbar" style={{"--pgbar-length": "70%"}}></div>
                        </div>
                        </li>
                        <li>
                            <span>Tableau</span> 
                            <div className="sb-skeleton">
                            <div className="skillbar" style={{"--pgbar-length": "70%"}}></div>
                            </div>
                        </li>

                        <li>
                            <span>HTML</span> 
                            <div className="sb-skeleton">
                            <div className="skillbar" style={{"--pgbar-length": "90%"}}></div>
                            </div>
                        </li>

                        <li>
                            <span>CSS</span> 
                            <div className="sb-skeleton">
                            <div className="skillbar" style={{"--pgbar-length": "70%"}}></div>
                            </div>
                        </li>

                        <li>
                            <span>VBA</span> 
                            <div className="sb-skeleton">
                            <div className="skillbar" style={{"--pgbar-length": "65%"}}></div>
                            </div>
                        </li>

                        <li>
                            <span>React</span> 
                            <div className="sb-skeleton">
                            <div className="skillbar" style={{"--pgbar-length": "65%"}}></div>
                            </div>
                        </li>

                        <li>
                            <span>Excel</span> 
                            <div className="sb-skeleton">
                            <div className="skillbar" style={{"--pgbar-length": "80%"}}></div>
                            </div>
                        </li>

                    </ul>
                    </div>
                    </div>
                    
                

                    {/* <h2>Skills</h2>
                    <div className="sb-skeleton">
                        <Skills 
                            skill="javascript"
                            progress={80}
                        />
                        </div>
                        <div className="sb-skeleton">
                        <Skills 
                            skill="CSS"
                            progress={80}
                        /></div>
                        <div className="sb-skeleton">
                        <Skills 
                            skill="HTML"
                            progress={80}
                        /></div>
                        <div className="sb-skeleton">
                        <Skills 
                            skill="MongoBD"
                            progress={80}
                        /></div>
                        <div className="sb-skeleton">
                        <Skills 
                            skill="JQuery"
                            progress={80}
                        /></div>
                        <div className="sb-skeleton">
                        <Skills 
                            skill="MySQL"
                            progress={80}
                        /></div>
                        <div className="sb-skeleton">
                        <Skills 
                            skill="Bootstrap"
                            progress={70}
                        /></div>

                        <div className="sb-skeleton">
                        <Skills 
                            skill="React"
                            progress={60}
                        />
                        </div> */}
                   </Cell>
               </Grid>
            </div>
        )
    }
}

export default Resume;