import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

export default (props) => {
  return (
    <Card shadow={5}>
      <CardTitle
        style={{
          color: "#fff",
          height: "176px",
          background: props.card.tileImg,
        }}
      ></CardTitle>
      <CardText>
        <h5>{props.card.title}</h5>
        {props.card.description}
      </CardText>
      <CardActions border>
        <Button
          target='_blank'
          rel='noopener noreferrer'
          href={props.card.linkGitHub}
        >
          GitHub
        </Button>
        <Button
          target='_blank'
          rel='noopener noreferrer'
          href={props.card.linkDeployed}
        >
          Link to site
        </Button>
      </CardActions>
      <CardMenu style={{ color: "#fff" }}>
        <IconButton name='share' />
      </CardMenu>
    </Card>
  );
};
