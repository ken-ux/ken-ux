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
            <p>
                This is a <code>code block</code>.{" "}
                <span role="img" aria-label="Sunglasses smiley emoji">
                😎
                </span>
            </p>
        </Layout>
    )
}

export default AboutPage