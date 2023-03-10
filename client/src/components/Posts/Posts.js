import React from "react";
import Post from "./Post/Post";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import useStyles from "../Form/styles";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const mc = useSelector((state) => state.mc)
  const classes = useStyles();
  console.log(mc, " mocksss")
  return !posts.length ? (
    <p>No data available</p>
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {
        posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post} />
          </Grid>
        ))
      }
    </Grid>
  );
};

export default Posts;
