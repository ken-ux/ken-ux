import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from 'react-bootstrap';
import Layout from "../components/layout";
import Card from "../components/ProjectCards";
import "@lottiefiles/lottie-player";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>;

// styles
const pageStyles = {
  fontFamily: "-apple-system, Roboto, sans-serif, serif"
}

// markup
const IndexPage = () => {
  return (
    <Layout>
      <title>Kenny Nguyen | Projects</title>
        <div className="px-5" style={pageStyles}>
          <Row className="align-items-center">
            <Col>
              <lottie-player
                src="https://assets7.lottiefiles.com/packages/lf20_micjhd5b.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              >
              </lottie-player>
            </Col>
            <Col>
              <h1>
                Hello, I'm Kenny!
                <br />
              </h1>
              <h2>
                A UX designer and front-end developer
                <br />
                based in Seattle. Accessibility | Inclusion | Systematic Design
              </h2>
              <br />
              <h3>
                View my portfolio down below.{" "}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  fill="currentColor" 
                  class="bi bi-arrow-down-circle-fill" 
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                </svg>
              </h3>
            </Col>
          </Row>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
    </Layout>
  )
}

export default IndexPage
