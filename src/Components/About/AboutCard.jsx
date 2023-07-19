import React from "react";
import Card from "react-bootstrap/Card";
import {ImPointRight} from "react-icons/im";


function AboutCard(){
    return(
        <Card className = "quote-card-view">
            <Card.Body>
                <blockquote className = "blockquote mb-0">
                    <p style = {{textAlign: "justify"}}>
                        Hi Everyone, I am <span className = "purple">Victor Deng </span>
                        from <span className = "purple"> Toronto, Canada.</span>
                        <br/> I am a second year Computer Engineering student at Univeristy of Toronto.
                        <br/> 
                        <br/>
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className = "about-activity">
                            <ImPointRight /> Playing Basketball
                        </li>
                        <li className = "about-activity">
                            <ImPointRight /> Reading Novels
                        </li>
                        <li className = "about-activity">
                            <ImPointRight /> Listening to Music
                        </li>
                    </ul>

                    <p style = {{color: "#61dafb"}}>
                        "It is never a bad idea to learn something new."
                    </p>
                    <footer className = "blockquote-footer">Victor</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;