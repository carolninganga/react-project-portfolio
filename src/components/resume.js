import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Resume extends Component {
    render() {
        return (
            <div>
               <Grid>
                   <Cell col={4}>
                   <div style={{textAlign: 'center'}}>
                       <img
                       src="https://www.shareicon.net/download/2015/09/18/103157_woman_512x512.png"
                       alt="avator"
                       style={{height: '200px'}}
                       />
                   </div>
                   <h2 style={{paddingTop: '2em'}}>Caroline Ninganga</h2>
                   <h4 style={{color: 'grey'}}>Programmer</h4>
                   <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                   </Cell>
                   <Cell className="resume-right-col" col={8}>Right Side</Cell>
               </Grid>
            </div>
        )
    }
}

export default Resume;