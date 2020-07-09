import React, { Component } from "react";
import {
  Grid,
  Cell,
  // Card,
  // CardTitle,
  // CardText,
  // CardActions,
  // Button,
  // CardMenu,
  // IconButton,
} from "react-mdl";
import ProjectCard from "../../components/ProjectCard";
import "./style.css";

const cards = [
  {
    title: "Yes Reply Messages",
    description:
      "YesReply uses two APIs Words API and Linguatools to facilitate message generation for “life events”.",
    tileImg:
      "url(https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2FScreen%20Shot%202020-07-06%20at%2010.48.44%20PM.png?v=1594090135096) center / cover",
    linkGitHub: "https://github.com/carolninganga/Yes-Reply-Project-One",
    linkDeployed: "https://carolninganga.github.io/Yes-Reply-Project-One/",
  },
  {
    title: "Super Github Finder",
    description:
      "This application was built using react. It uses the github API to search and display 5 repos of a github profile..",
    tileImg:
      "url(https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2FScreen%20Shot%202020-07-06%20at%2010.34.52%20PM.png?v=1594089329409) center / cover",
    linkGitHub: "https://github.com/carolninganga/react-github-finder",
    linkDeployed: "https://github-repo-finder23.herokuapp.com/",
  },
  {
    title: "Fantastic Joke App",
    description:
      "An app that uses jokes API to randomly generate jokes. This application was implemented using axios to fetch the API.",
    tileImg:
      "url(https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2FScreen%20Shot%202020-07-08%20at%207.27.06%20PM.png?v=1594250868304) center / cover",
    linkGitHub: "https://github.com/carolninganga/joke-app",
    linkDeployed: "https://joke-master007.herokuapp.com/",
  },
  {
    title: "Hourly Calender Notepad",
    description:
      "Calendar Application that uses moment to display a calendar and allows user to save notes of different hours during the day.",
    tileImg:
      "url(https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2FScreen%20Shot%202020-07-08%20at%208.43.32%20PM.png?v=1594255434301) center / cover",
    linkGitHub: "https://github.com/carolninganga/Day_Planner",
    linkDeployed: "https://carolninganga.github.io/Day_Planner/",
  },
  {
    title: "She Sparkles Chat",
    description:
      "YesReply uses two APIs Words API and Linguatools to facilitate message generation for “life events”.",
    tileImg:
      "url(https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2FScreen%20Shot%202020-07-08%20at%209.00.05%20PM.png?v=1594256432561) center / cover",
    linkGitHub: "https://github.com/carolninganga/she-sprakles-chat-application",
    linkDeployed: "https://she-sparkles-chat-app.herokuapp.com/",
  },
  {
    title: "6",
    description:
      "YesReply uses two APIs Words API and Linguatools to facilitate message generation for “life events”.",
    tileImg:
      "url(https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2FScreen%20Shot%202020-07-06%20at%2010.48.44%20PM.png?v=1594090135096) center / cover",
    linkGitHub: "https://github.com/carolninganga/Yes-Reply-Project-One",
    linkDeployed: "https://carolninganga.github.io/Yes-Reply-Project-One/",
  },
];

class Portfolio extends Component {
  state = {
    pagination: 0,
    limit: 3,
    cards: cards,
    display: [],
  };

  // toggleCategories() {
  //   
  //         <Cell col={4}>
  //           <Card shadow={5}>
  //             <CardTitle
  //               style={{
  //                 color: "#fff",
  //                 height: "176px",
  //                 background:
  //                   "url(https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2FScreen%20Shot%202020-07-06%20at%2010.42.38%20PM.png?v=1594089782545) center / cover",
  //               }}
  //             ></CardTitle>
  //             <CardText>
  //               <h5>Day Planner</h5>
  //               Calendar Application that allows the user to save events for
  //               each hour of the day. This app uses moment library.
  //             </CardText>
  //             <CardActions border>
  //               <Button
  //                 target='_blank'
  //                 rel='noopener noreferrer'
  //                 href='https://github.com/carolninganga/Day_Planner'
  //               >
  //                 GitHub
  //               </Button>
  //               <Button
  //                 target='_blank'
  //                 rel='noopener noreferrer'
  //                 href='https://carolninganga.github.io/Day_Planner/'
  //               >
  //                 Link to site
  //               </Button>
  //             </CardActions>
  //             <CardMenu style={{ color: "#fff" }}>
  //               <IconButton name='share' />
  //             </CardMenu>
  //           </Card>
  //         </Cell>
  //       </>
  //     );
  //   } else if (this.state.activeTab === 1) {
  //     return (
  //       <div>
  //         <h1>This is Angular</h1>
  //       </div>
  //     );
  //   } else if (this.state.activeTab === 2) {
  //     return (
  //       <div>
  //         <h1>This is VueJS</h1>
  //       </div>
  //     );
  //   } else if (this.state.activeTab === 3) {
  //     return (
  //       <div>
  //         <h1>This is MongoDB</h1>
  //       </div>
  //     );
  //   }
  // }

  componentDidMount() {
    this.updateDisplay();
  }

  updateDisplay = () => {
    this.setState({
      display: this.state.cards.filter(
        (x, i) =>
          i >= this.state.pagination &&
          i < this.state.pagination + this.state.limit
      ),
    });
  };

  advancePagination = () => {
    this.setState(
      {
        pagination:
          this.state.pagination + this.state.limit < this.state.cards.length
            ? this.state.pagination + this.state.limit
            : this.state.pagination,
      },
      this.updateDisplay()
    );
  };
  reversePagination = () => {
    this.setState(
      {
        pagination:
          this.state.pagination - this.state.limit < 0
            ? 0
            : this.state.pagination - this.state.limit,
      },
      this.updateDisplay()
    );
  };

  render() {
    return (
      <div>
        {/* <Grid>{this.toggleCategories()}</Grid> */}
        <button onClick={this.reversePagination}> back </button>
        <button onClick={this.advancePagination}>forward </button>
        <Grid>
          {this.state.display.map((card, i) => (
            <Cell col={4} key={i + "-projectCard"}>
              <ProjectCard card={card} />
            </Cell>
          ))}
        </Grid>
      </div>
    );
  }
}

export default Portfolio;
