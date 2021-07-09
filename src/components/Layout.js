import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  appBarStyle: {
    background: 'none',
    borderRadius: 3,
    border: 0,
    padding: "40px 50px",
    color: '#8F8F8F',
  },
  title: {
    flexGrow: 1,
    color: 'black',
  },
  links: {
    '& > *': {
      marginRight: theme.spacing(2),
    },
  },
  pageStyle: {
    backgroundColor: "white",
    padding: "0px 74px"
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();
  
  return (
    <div>
      {/* Navbar */}
      <AppBar elevation={0} position="static" className={classes.appBarStyle}>
        <Toolbar variant="dense">
          <Typography variant="h6" component="h1" className={classes.title}>
            <Link href="/" color="inherit" underline="none">
              Kenny Nguyen
            </Link>
          </Typography>
          <Typography variant="subtitle1" component="h2" className={classes.links}>
            <Link href="/" color="inherit" underline="none">
              Home
            </Link>
            <Link href="/about" color="inherit" underline="none">
              About
            </Link>
            <Link href="#projects" color="inherit" underline="none">
              Projects
            </Link>
          </Typography>
          <Link href="https://github.com/ken-ux">
            <IconButton aria-label="github">
              <GitHubIcon />
            </IconButton>
          </Link>
          <Link href="https://www.linkedin.com/in/kennyhn/">
            <IconButton aria-label="linkedin">
              <LinkedInIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>

      {/* Body */}
      <div className={classes.pageStyle}>
        {children}
      </div>

      {/* Footer */}
      <Typography variant="body1" style={{ textAlign:"center", padding:"45px" }}>Made with care by Kenny Nguyen 🌱</Typography>
    </div>
  )
}