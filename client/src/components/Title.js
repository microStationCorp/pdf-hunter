import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
  title: {
    flexGrow: 1,
    textDecoration: "none",
    color: "white",
    fontSize: "1.5rem",
    textAlign: "center",
  },
}));

const TitleComponent = ({ title }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ borderRadius: "5px" }}>
        <Toolbar>
          <Typography varient="h6" className={classes.title} to="/">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TitleComponent;
