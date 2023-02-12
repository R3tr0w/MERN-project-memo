import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grid, Grow, Paper } from "@material-ui/core";

// Theming
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import photo from "./images/photo.svg";

// import "./App.css";

const App = () => {
  const [dark, setDark] = React.useState(false);

  const theme = createMuiTheme({
    palette: {
      type: dark ? "dark" : "light"
    }
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Container maxWidth="lg">
          <AppBar position="static" color="inherit">
            <Typography variant="h2" align="center" onClick={() => setDark(!dark)}>Memories</Typography>
            <img src={photo} alt="memory" height="80" />
            <Grow in>
              <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={4}>
                  <Grid item xs={12} sm={7}>
                    <Posts />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Form />
                  </Grid>
                </Grid>
              </Container>
            </Grow>
          </AppBar>
        </Container>
      </Paper>
    </ThemeProvider>
  );
};
// 860702043915776 IMEI
// IMSI515025571889069
export default App;
