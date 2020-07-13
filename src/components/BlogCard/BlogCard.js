import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            C
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Living Abroad"
        subheader="July 12th, 2020"
      />
      <CardMedia
        className={classes.media}
        image="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2Fcaroline.JPG?v=1593078287303"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          I have always been keen on seeing the world. The year year of 2010 changed my life and gave me insight an adversity to want to explore more. 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            At the fragile age of 17, I packed my bags and left my country, Malawi, Africa. I had never left Malawi and was travelling without family. This meant every challenge I encountered I had to resolve myself. Upon my arrival, I had mixed emotions. The feeling resembled that of driving on the highway for the first time. I had two options: break down and crash or courageously enjoy the ride. During my freshman year at Westchester Community College, I involved myself in many volunteer activities. Due to my dedication, I was selected Orientation Leader/Peer Advisor, Student Ambassador and was awarded a full-tuition scholarship for Community service.

          </Typography>
          <Typography paragraph>
          I was also elected president of the Model UN team. I planned trips to conferences at UN headquarters and collaborated events with other clubs, advocating for human rights and women empowerment. My most memorable experience was when my officers and I were chosen by my Honors International Law Organization professor to accompany her to Geneva, Switzerland. Attending the same summits with diplomats inspired me to intern for the Ambassador of Malawi. I then applied for a peace operations course for which I was awarded a full scholarship to travel to the International Institute of Humanitarian Law in Sanremo, Italy. 
          </Typography>
          <Typography>
          Fast forward to 2020, I am excited to be inducted into my role of a junior Software Developer. Some fun things I like to create fun projects  <a target='_blank' rel="noopener noreferrer" size="small" color="primary" href="https://carolninganga.github.io/threejs-demo/">Threejs</a> After receiving a professional certification in Web Developer, I am excited to contribute to social economics through digital technology solutions.  Coming from a less developed country, I have a clear image of what poverty looks like and it is my dream to use the knowledge I have acquired as far to build applications that address these issues. My goal is to integrate my background in Political Science and Economics to build applications and work on projects that use technology to fight these challenges. 
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}