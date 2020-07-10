
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

function ProjectCard(props) {
    const classes = useStyles();
 
        return (
            <div>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.img}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button a target='_blank' rel="noopener noreferrer" size="small" color="primary" href={props.github}>
        GitHub
        </Button>
        <Button a target='_blank' rel="noopener noreferrer" size="small" color="primary" href={props.site}>
        Live Site
        </Button>
      </CardActions>
    </Card> 
            </div>
        )
    }
export default ProjectCard;



















// import React from "react";
// import {
//   Card,
//   CardTitle,
//   CardText,
//   CardActions,
//   Button,
//   CardMenu,
//   IconButton,
// } from "react-mdl";

// function ProjectCard(props)  {
//   return (
//     <>
//     <Card shadow={5}>
//       <CardTitle
//         style={{
//           color: "#fff",
//           height: "176px",
//           background: props.card.tileImg,
//         }}
//       ></CardTitle>
//       <CardText>
//         <h5>{props.card.title}</h5>
//         {props.card.description}
//       </CardText>
//       <CardActions border>
//         <Button
//           target='_blank'
//           rel='noopener noreferrer'
//           href={props.card.linkGitHub}
//         >
//           GitHub
//         </Button>
//         <Button
//           target='_blank'
//           rel='noopener noreferrer'
//           href={props.card.linkDeployed}
//         >
//           Link to site
//         </Button>
//       </CardActions>
//       <CardMenu style={{ color: "#fff" }}>
//         <IconButton name='share' />
//       </CardMenu>
//     </Card>
//     </>
//   );
// };

// export default ProjectCard;