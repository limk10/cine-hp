import React from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Container,
  Box,
  Button
} from "@material-ui/core";
import { useStyles } from "./styles";
import { useHistory } from "react-router-dom";

const Header = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <AppBar className={classes.appBar} position="static">
        <Container maxWidth="lg">
          <Toolbar
            classes={{
              root: classes.toolbar
            }}
          >
            <Typography
              onClick={() => history.push("/")}
              variant="h6"
              className={classes.title}
            >
              Cine<span className={classes.secondTitle}>HP</span>
            </Typography>
            <Box>
              <Button className={classes.menu}>Início</Button>
              <Button className={classes.menu}>Lançamentos</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
