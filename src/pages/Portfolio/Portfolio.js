import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Project from '../../components/Project/Project';

class Portfolio extends Component {
    render() {
        return (
            <>
            <Navbar />
        
            <div class="container-fluid mt-4 mb-0 pb-3">
                <div class="row pb-0 mb-0">
                <Project 
                img="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2Fperson-holding-black-samsung-android-smartphone-3850213.jpg?v=1595950898188"
                name="Foodie"
                description="Favorite food app"
                github="https://github.com/carolninganga/foodie"
                site="https://foodie03.herokuapp.com/" 
                />

                <Project 
                img="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2Fhuman-skeleton-sitting-in-bathtub-without-water-4558292.jpg?v=1595950367357"
                name="Joke App"
                description="Generates random jokes"
                github="https://github.com/carolninganga/joke-app"
                site="https://joke-master007.herokuapp.com/" 
                />

                <Project 
                img="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2FIntroducing-GitHub-Search_-Your-Source-for-Finding-and-Qualifying-Dev-Talent.png?v=1595947093627"
                name="React GitHub Finder"
                description="Search through name to get github profile"
                github="https://github.com/carolninganga/react-github-finder"
                site="https://github-repo-finder23.herokuapp.com/" 
                />
                </div>

                <div class="row pb-0 mb-0">
                <Project 
                img="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2Fsticky-note-lot-1629212.jpg?v=1595950683887"
                name="Eveyday Notes"
                description="User can save hourly notes"
                github="https://github.com/carolninganga/Everyday-Notes"
                site="https://phoebeyahengwu.github.io/FinancialDashboard/" 
                />

                <Project 
                img="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2Ftoilet-paper-rolls-on-basket-3958199.jpg?v=1595951126596"
                name="ConvenienC"
                description="Essential products app"
                github="https://github.com/carolninganga/convenienc2"
                site="https://convenienc.herokuapp.com/" 
                />

                <Project 
                img="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2F20191219170611-GettyImages-1152794789.jpeg?v=1595948806874"
                name="Google Book Search"
                description="Search and Save books on google"
                github="https://github.com/carolninganga/google-book-search"
                site="https://google-search-with-google.herokuapp.com/" 
                />
                </div>

                <div class="row pb-0 mb-0">
                <Project 
                img="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2Fcolor-colour-fitness-health-39671.jpg?v=1595950573426"
                name="Mphavu"
                description="A workout tracker app"
                github="https://github.com/carolninganga/Workout-Tracker"
                site="https://mphavu.herokuapp.com/exercise?id=5f203f93073b0d001720fddd" 
                />

                <Project 
                img="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2Fchat.jpg?v=1595950216602"
                name="Chat-Room app"
                description="Switch between rooms to chat"
                github="https://github.com/carolninganga/real_time_chat"
                site="https://she-sparkles-chat-app.herokuapp.com/" 
                />

                <Project 
                img="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2Fpurple-petaled-glower-besode-pen-2072162.jpg?v=1595952155789"
                name="Yes Reply"
                description="Generates Life event messages"
                github="https://github.com/carolninganga/Yes-Reply-Project-One"
                site="https://carolninganga.github.io/Yes-Reply-Project-One/" 
                />
                </div>
                </div>
            </>
        )
    }
}

export default Portfolio;