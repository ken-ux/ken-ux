import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif"
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 600
}
const lottieStyles = {
  maxWidth: 300,
  maxHeight: 300
}

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Kenny Nguyen | Projects</title>
      <Layout>
        <div style={pageStyles}>
          <div style={headingStyles}>
            <lottie-player
              src="https://assets7.lottiefiles.com/packages/lf20_micjhd5b.json"
              background="transparent"
              speed="1"
              style={lottieStyles}
              loop
              autoplay
            >
            </lottie-player>
            <h1>
              Hello! I'm Kenny.
              <br />
            </h1>
            <h2>
              A UX designer and front-end developer based in Seattle.
            </h2>
          </div>
          <Card />
        </div>
      </Layout>
    </main>
  )
}

export default IndexPage
