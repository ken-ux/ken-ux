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
    padding: "30px 0px",
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
    backgroundColor: "white"
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();
  
  return (
    <div>
      <AppBar elevation={0} position="static" className={classes.appBarStyle}>
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.title}>
            Kenny Nguyen
          </Typography>
          <Typography className={classes.links}>
            <Link href="/" color="inherit">
              Home
            </Link>
            <Link href="/about" color="inherit">
              About
            </Link>
            <Link href="#projects" color="inherit">
              Projects
            </Link>
          </Typography>
          <IconButton aria-label="github" color="inherit">
            <GitHubIcon/>
          </IconButton>
          <IconButton aria-label="linkedin" color="inherit">
            <LinkedInIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.pageStyle}>
        {children}
      </div>
      <Typography variant="body1" style={{ textAlign:"center" }}>Made with care by Kenny Nguyen 🌱</Typography>
    </div>
  )
}