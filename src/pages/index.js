import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import { Row, Col } from 'react-bootstrap';
import Layout from "../components/Layout";
import Card from "../components/ProjectCards";
import animationData from "../animations/lottieanim.json";
import Lottie from 'react-lottie-player';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>;

// styles
const heroStyles = { // To make hero text full length of page
  height: "95vh"
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
            <Col>
              <h1>
                Kenny Nguyen
                <br />
              </h1>
              <h2>
                UX Designer | Front-End Developer.
                <br />
              </h2>
              <br />
              <h3>
                A curious thinker passionate about applying an equity-focused 
                lens to the <span style={{ color: "blue" }}>designs</span> shaping our communities.
                <br />
                <br />
                View my portfolio down below.{" "}
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" 
                  fill="currentColor" class="bi bi-arrow-down-circle-fill" 
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                </svg>
              </h3>
            </Col>
          </Row>
          <Row> {/* Use function to repeat cards instead of pasting manually */}
            <Col className="my-projects my-3">
              <h2>Projects</h2>
            </Col>
            <Col xs={9}>
                <Card border="primary" title="Visualizing Diversity in Higher Education"/>
                <Card border="success" title="Pura"/>
                <Card border="warning" title="Placeholder"/>
                <Card border="danger" title="Placeholder"/>
            </Col>
          </Row>
        </div>
    </Layout>
  )
}

export default IndexPage
