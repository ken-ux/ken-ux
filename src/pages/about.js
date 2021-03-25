import React from "react";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>;

const AboutPage = () => {
    return (
        <Layout>
            <h1>About</h1>
            <br />
            <div>
                <h2>Hi there!</h2>
                <p>
                These are some words to describe who I am.
                </p>
            </div>
            <br />
            <div>
                <h2>My Design Journey</h2>
                <p>This is another section with an abridged section. Abridged</p>
                <p>Expanded:
                    As an undergraduate initially majoring in Public Health, one of the most fascinating stories
                    to learn about was the role of the <strong>iron fish</strong>. Fast-forward to a graduation speech.
                </p>
            </div>
        </Layout>
    )
}

export default AboutPage