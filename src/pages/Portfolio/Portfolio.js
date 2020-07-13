import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
const gridContainerStyle = {
  display: "grid",
  gridTemplateColumns: "auto auto auto",
  padding: "10px",
  gridGap: "3rem"
}
export default function Portfolio() {
  return (
    <div className="container" style={gridContainerStyle}>
                <ProjectCard 
                    img="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2FScreen%20Shot%202020-07-06%20at%2010.48.44%20PM.png?v=1594090135096"
                    name="Yes Reply"
                    description="YesReply uses two APIs Words API and Linguatools to facilitate message generation for “life events”."
                    github="https://github.com/carolninganga/Yes-Reply-Project-One"
                    site="https://carolninganga.github.io/Yes-Reply-Project-One/"
                             />
                <ProjectCard 
                    img="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2FScreen%20Shot%202020-07-06%20at%2010.34.52%20PM.png?v=1594089329409"
                    name="Super Github Finder"
                    description="This application was built using react. It uses the github API to search and display 5 repos of a github profile.."
                    github="https://github.com/carolninganga/react-github-finder"
                    site="https://github-repo-finder23.herokuapp.com/"
                      />
                <ProjectCard 
                    img="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2FScreen%20Shot%202020-07-08%20at%207.27.06%20PM.png?v=1594250868304"
                    name="Fantastic Joke App"
                    description="An app that uses jokes API to randomly generate jokes. This application was implemented using axios to fetch the API."
                    github="https://github.com/carolninganga/joke-app"
                    site="https://joke-master007.herokuapp.com/"
                      />
                <ProjectCard 
                    img="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2Ffoodie.jpg?v=1594604861129"
                    name="Food Me"
                    description="A small application that uses the Yelp API and react to search for local food spots in the area."
                    github="https://github.com/carolninganga/foodie-me"
                    site="https://foodie-me.herokuapp.com/"
                    />
                <ProjectCard 
                    img="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2FScreen%20Shot%202020-06-26%20at%202.03.34%20PM.png?v=1593194643900"
                    name="Note Taker"
                    description="A note taking application that uses allows the user to create, update and delete saved notes."
                    github="https://github.com/carolninganga/note-taker-nodejs"
                    site="https://note-take-nodejs.herokuapp.com/"
                />
                <ProjectCard 
                    img="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2FScreen%20Shot%202020-07-08%20at%209.00.05%20PM.png?v=159425643256"
                    name="She Sparkles Chat"
                    description="She Sparkles is a chat application that allows users to enter different rooms to chat."
                    github="https://github.com/carolninganga/she-sprakles-chat-application"
                    site="https://she-sparkles-chat-app.herokuapp.com/"/>
    </div>
  );
}