import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                    <h2>Caroline Ninganga</h2>
                    <img
                        src="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2Fcaroline.JPG?v=1593078287303"
                        alt="profilePic"
                        style={{height: '250px'}}
                    />
                    <p style={{ width: '75%', margin: 'left: 10px, paddingTop: 1em'}}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    (123) 456-7890
                                    </ListItemContent>
                                </ListItem>

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
                                <i className="fa fa-skype" aria-hidden="true"/>
                                github username: carolninganga
                            </ListItemContent>
                            </ListItem>
                                </List>
                                </div>
                        </Cell>
                    </Grid>      
                </div>
                
        )
    }
}

export default contact;