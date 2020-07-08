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
    title: "Jokes App007",
    description:
      "Jokes app was built with react and bootswatch. It uses jokes API to randomly display trendy jokes”.",
    tileImg:
      "url(https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2FScreen%20Shot%202020-07-08%20at%207.27.06%20PM.png?v=1594250868304) center / cover",
    linkGitHub: "https://github.com/carolninganga/joke-app",
    linkDeployed: "https://joke-master007.herokuapp.com/",
  },
  {
    title: "Amazing Github Finder",
    description:
      "An application built to help the user search for github repos and also be directed to the github page. This application uses github API and react.",
    tileImg:
      "url(https://user-images.githubusercontent.com/33443452/86619088-ed3e6180-bf87-11ea-8d87-6ec05ebfdcf2.png) center / cover",
    linkGitHub: "https://github.com/carolninganga/react-github-finder",
    linkDeployed: "https://github-repo-finder23.herokuapp.com/",
  },
  {
    title: "4",
    description:
      "YesReply uses two APIs Words API and Linguatools to facilitate message generation for “life events”.",
    tileImg:
      "url(https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2FScreen%20Shot%202020-07-06%20at%2010.48.44%20PM.png?v=1594090135096) center / cover",
    linkGitHub: "https://github.com/carolninganga/Yes-Reply-Project-One",
    linkDeployed: "https://carolninganga.github.io/Yes-Reply-Project-One/",
  },
  {
    title: "5",
    description:
      "YesReply uses two APIs Words API and Linguatools to facilitate message generation for “life events”.",
    tileImg:
      "url(https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2FScreen%20Shot%202020-07-06%20at%2010.48.44%20PM.png?v=1594090135096) center / cover",
    linkGitHub: "https://github.com/carolninganga/Yes-Reply-Project-One",
    linkDeployed: "https://carolninganga.github.io/Yes-Reply-Project-One/",
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
  //   if (this.state.activeTab === 0) {
  //     return (
  //       <>
  //         <Cell col={4}>
  //           <Card shadow={5}>
  //             <CardTitle
  //               style={{
  //                 color: "#fff",
  //                 height: "176px",
  //                 background:
  //                   "url(https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2FScreen%20Shot%202020-07-06%20at%2010.34.52%20PM.png?v=1594089329409) center / cover",
  //               }}
  //             ></CardTitle>
  //             <CardText>
  //               <h5>GitHub Finder</h5>
  //               This application was built using react. It uses the github API
  //               to search and display 5 repos of a github profile.
  //             </CardText>
  //             <CardActions border>
  //               <Button
  //                 target='_blank'
  //                 rel='noopener noreferrer'
  //                 href='https://github.com/carolninganga/react-github-finder'
  //               >
  //                 GitHub
  //               </Button>
  //               <Button
  //                 target='_blank'
  //                 rel='noopener noreferrer'
  //                 href='https://github-repo-finder23.herokuapp.com/'
  //               >
  //                 Link to site
  //               </Button>
  //             </CardActions>
  //             <CardMenu style={{ color: "#fff" }}>
  //               <IconButton name='share' />
  //             </CardMenu>
  //           </Card>
  //         </Cell>

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

  // advancePagination = () => {
  //   this.setState(
  //     {
  //       pagination:
  //         this.state.pagination + this.state.limit < this.state.cards.length
  //           ? this.state.pagination + this.state.limit
  //           : this.state.pagination,
  //     },
  //     this.updateDisplay()
  //   );
  // };
  // reversePagination = () => {
  //   this.setState(
  //     {
  //       pagination:
  //         this.state.pagination - this.state.limit < 0
  //           ? 0
  //           : this.state.pagination - this.state.limit,
  //     },
  //     this.updateDisplay()
  //   );
  // };

  render() {
    return (
      <div>
        {/* <Grid>{this.toggleCategories()}</Grid> */}
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
