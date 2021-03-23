import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import { Row, Col } from 'react-bootstrap';
import Layout from "../components/Layout";
import Card from "../components/ProjectCards";
import animationData from "../animations/lottieanim.json";
import Lottie from 'react-lottie-player';
import { Link } from "gatsby";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>;

// styles
const heroStyles = { // To make hero text full length of page
  height: "92vh"
}

// markup
const IndexPage = () => {
  return (
    <Layout>
      <title>Kenny Nguyen | Portfolio</title>
        <div>
          <Row className="align-items-center" style={heroStyles}>
            <Col>
              <Lottie
                loop
                animationData={animationData}
                play
              />
            </Col>
            <Col style={{ paddingRight: "50px" }}>
              <h1>
                Kenny Nguyen
                <br />
              </h1>
              <h2>
                UX Designer | Software Engineer
                <br />
              </h2>
              <br />
              <h4>
                A curious thinker with an <span style={{ color: "#FF5349" }}>equity-focused</span> lens for the
                <span style={{ color: "green" }}> designs</span> shaping global communities.
                <br />
                <br />
                I'm a <span style={{ color: "#00A4EF" }}>scientist-turned-designer</span> drawn to 
                addressing social issues through interaction design. <a href="/about"><em>Here's my story.</em></a>
                <br />
                <br />
                View my portfolio down below.{" "}
                <Link to="#projects">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" 
                    fill="currentColor" class="bi bi-arrow-down-circle-fill" 
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                  </svg>
                </Link>
              </h4>
            </Col>
          </Row>
          <Row> {/* Use function to repeat cards instead of pasting manually */}
            <Col className="my-projects my-3" id="projects">
              <h2>Projects</h2>
            </Col>
            <Col xs={9}>
                <Card
                  border="primary"
                  title="Visualizing Diversity in Higher Education"
                  subtitle="Data Visualization, Qualitative User Testing"/>
                <Card border="success" title="COVID Visualization Redesign"/>
                <Card border="warning" title="Pura"/>
                <Card border="danger" title="Case Study"/>
            </Col>
          </Row>
        </div>
    </Layout>
  )
}

export default IndexPage
