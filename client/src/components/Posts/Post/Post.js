import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import useStyles from "./styles";
import moment from "moment";

import { deletePost } from "../../../actions/posts";

const Post = ({ post }) => {

  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deletePost(id))
  }

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      >
        <div className={classes.overlay}>
          <Typography variant="h6">{post.creator}</Typography>
          <Typography variant="body2">
            {moment(post.createdAt).fromNow()}
          </Typography>
        </div>
        <div className={classes.overlay2}>
          <Button style={{ color: "red" }} size="small" onClick={() => { }}>
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
      </CardMedia>
      <CardContent>
        <Typography className={classes.title} variant="h5">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => { }}>
          <ThumbUpAltIcon fontSize="small" />
          {post.likeCount}
        </Button>
        <Button size="small" color="secondary" id={post._id} onClick={() => handleDelete(post._id)}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
