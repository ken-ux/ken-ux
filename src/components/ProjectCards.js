import React from "react";
import Card from "react-bootstrap/Card";

export default function ProjectCards(props) {
    return (
        <Card border={props.border} className="my-3 mx-5">
            <Card.Body style={{height: "200px"}}>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}