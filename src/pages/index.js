import * as React from "react";
import "../styles/global.css";
import { makeStyles } from '@material-ui/core/styles';
import Layout from "../components/Layout";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import { Link } from "gatsby";
import profile from '../images/profile.jpeg';

// styles
// const heroStyles = { // To make hero text full length of page
//   height: "79vh"
// }

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  // paper: {
  //   padding: theme.spacing(1),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // },
  heroStyle: {
    padding: theme.spacing(8)
  },
  downStyle: {
    marginTop: theme.spacing(10),
  },
  profileStyle: {
    width: "80%",
    borderRadius: "50%",
    marginLeft: "10%",
  },
}));


const IndexPage = () => {
  const classes = useStyles();

  function FormHero() {
    return (
      <React.Fragment>
        <Grid item xs={6}>
          <Typography variant="h3" component="h2">Hello!</Typography>
          <br/>
          <Typography variant="h5" component="h2" style={{ fontWeight:"normal", color:"#8F8F8F" }}>
            I'm Kenny, an <span style={{ color:"black" }}>experience designer</span> interested in
            human-computer interactions that are <span style={{ color:"black" }}>transformative 💭</span>,
            <span style={{ color:"black" }}> empowering 💖</span>, and <span style={{ color:"black" }}>fun 🎉</span>! Recently, I've been:
          </Typography>
          <br/>
          <br/>
          <Typography variant="h6" component="h2" style={{ fontWeight:"normal", color:"#8F8F8F" }}>
            🎨 Assisting in visual design research at the <Link href="https://vsrs.ischool.uw.edu/" underline="none" color="textPrimary">VSRS</Link>
            <br/>
            🎓 Finishing up my master's degree at the UW
            <br/>
            🌶 Growing home vegetables (mostly spicy things!)
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <img src={profile} className={classes.profileStyle} alt="profile" />
        </Grid>
      </React.Fragment>
    );
  }

  function FormCard() {
    return (
      <React.Fragment>
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="300"
                image={profile}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <Layout className={classes.root}>

      {/* Hero */}
      <Grid container spacing={1} className={classes.heroStyle} justifyContent="center">
        <Grid container item xs={12} spacing={3} alignItems="center">
          <FormHero />
        </Grid>
        <Grid container xs={12} spacing={3} direction="column" alignItems="center" className={classes.downStyle}>
          <Typography variant="h6" component="h2" style={{ fontWeight:"normal" }}>Projects</Typography>
          <KeyboardArrowDownIcon />
        </Grid>
      </Grid>

      {/* Cards */}
      <Grid container spacing={1} justifyContent="center">
        <Grid container item xs={12} spacing={6}>
          <FormCard />
          <FormCard />
        </Grid>
      </Grid>

    </Layout>
  )
}

export default IndexPage
