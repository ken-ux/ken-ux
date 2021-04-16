import React from "react";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutPage = () => {
    return (
        <Layout>
            <h1>About</h1>
            <br />
            <div>
                <h2>Hi there!</h2>
                <p>
                These are some words to describe who I am. Placeholder text.
                </p>
            </div>
            <br />
            <div>
                <h2>My Design Journey</h2>
                <p>Placeholder text.</p>
            </div>
        </Layout>
    )
}

export default AboutPage