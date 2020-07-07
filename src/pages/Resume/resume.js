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
                   <p>I'm a software engineer who's passionate about people, innovation, and executing new ideas. My professional training certification in HTML, CSS and JavaScript have  allowed me to develop an innovative mindset that can be used to create the most optimal experience for people. The thrill of creating user friendly interfaces or more interactive and responsive applications challenge me to use my critical thinking skills in collaboration with other team members to build problem solving projects. Outside of programming, you can find me hiking, food tasting, traveling, or collaborating on projects for needy community. </p>
                   <hr style={{borderTop: '3px solid #213346', width: '50%'}}/>
                    <h5>City</h5>
                    <p>New York</p>
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
                           startYear={2020}
                           endYear={2020}
                           schoolName="Columbia University"
                           schoolDescription="Participated in a Full Stack professional certification training. Acquired the skills of coding in JavaScript, HTML,Express.js, MonoDB and CSS. Used different tools and technologies to develop user friendly applications. Enjoyed close collaboration with other professionals while receiving hands-on experience, with in-person and online options.."
                       />
                       <Education 
                           startYear={2012}
                           endYear={2015}
                           schoolName="Mount Saint Mary College"
                           schoolDescription="Attended two years on a transfer academic honors scholarship from Westchester Community College. Studied Political Science and Economics Minor. Mount Saint Mary is a private college located in Newburgh with a beautiful view of the Hudson river."
                       />
                       <Education 
                           startYear={2010}
                           endYear={2012}
                           schoolName="Westchester Community College"
                           schoolDescription="Attended two years on a full tuition scholarship known as Kathryn Davis Global Communities Scholars. I majored in Liberal Arts and Social Sciences. While attending I also served as the president of the United Nations Model Team which allowed me to travel to over 16 cities on conferences to address matters in development and social economic policies."
                       />
                    
                       <hr style={{borderTop : '3px solid #e22947'}} />
                       <h2>Eperience</h2>
                       <Experince 
                           startYear={2014}
                           endYear={2019}
                           jobName="Learn America"
                           jobDescription="Learn America is an online education company which provides certification in Healthcare and Maritime courses. Worked as office manager and technical support. As manager I served under the company's CEO. I also collaborated on different projects such as submitting a course approval package to the New York State of Education. Trained users on how to use our Learning Management System (LMS). Lastly, I helped with developing new user friendly features for the LMS and helped manage the company website. It is fit to say this is where I discovered I had a passion for technology and web development.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                       />
                       <Experince 
                           startYear={2014}
                           endYear={2019}
                           jobName="White Plains"
                           jobDescription="Through my passion of wanting to help people. This role started purely as a volunteer then the Intensive Care Unit offered me to join the team on Partime basis."
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