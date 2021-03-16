import React from "react";
import Navbar from "../components/Navigation";

const AboutPage = () => {
    return (
        <div>
            <Navbar />
            <p>
                This is a <code>code block</code>.{" "}
                <span role="img" aria-label="Sunglasses smiley emoji">
                😎
                </span>
            </p>
        </div>
    )
}

export default AboutPage