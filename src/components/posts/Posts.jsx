import React from "react";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./Post.css"

const Post = (props) => {
  return (
    <div className="post">
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <img className="post__avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgiIcvf0M3uOJVtuYxI6Zev2h2w1USqBMaEQ&usqp=CAU" alt="profile-img"></img>
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={props.author || "Mark"}
          subheader="September 14, 2023"
        />
        <CardMedia
          component="img"
          height="194"
          image={props.icon || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTFrhr_-pYR74jUgOy7IerAoHAX3zPIZZcg&usqp=CAU"}
          alt="Your image"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.text ||
              "Tiger"}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export const Posts = () => {
  const state = useSelector((state) => state);
  return (
    <>
      <Post author="John" text="Eiffel tower" icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS75ebrwvgVW5Ks_oLfCbG8Httf3_9g-Ynl_Q&usqp=CAU" />

      <Post />
      {state.posts.map((item, index) => (
        <Post key={index} author={item.author} text={item.text} icon={item.icon} />
      ))}
    </>
  );
};
