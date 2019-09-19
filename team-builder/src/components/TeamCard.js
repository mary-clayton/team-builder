import React from "react";
import {Card, CardBody, CardTitle, CardText, NavLink} from "reactstrap";

function TeamCard() {
    return (
        <div className="teamcards">
           <Card className="teamcard">
           <NavLink to="/"><i className="fas fa-times exit"></i></NavLink>
           <CardBody className="bodycard">
                <CardTitle>Alice Johnson</CardTitle>
                    <CardText>a.johnson@gmail.com</CardText>
                <CardText>Manager</CardText>
            </CardBody>
           </Card>
           <Card className="teamcard">
           <NavLink to="/"><i className="fas fa-times exit"></i></NavLink>
           <CardBody className="bodycard">
                <CardTitle>Alex Rudder</CardTitle>
                    <CardText>a.rudder@gmail.com</CardText>
                <CardText>Assistant Manager</CardText>
            </CardBody>
           </Card>
           <Card className="teamcard">
           <NavLink to="/"><i className="fas fa-times exit"></i></NavLink>
           <CardBody className="bodycard">
                <CardTitle>Elton John</CardTitle>
                    <CardText>e.john394@gmail.com</CardText>
                <CardText>Team Member</CardText>
            </CardBody>
           </Card>
            <Card className="teamcard">
            <NavLink to="/"><i className="fas fa-times exit"></i></NavLink>
           <CardBody className="bodycard">
                <CardTitle>Alicia Keys</CardTitle>
                    <CardText>a.keys123@gmail.com</CardText>
                <CardText>Team Member</CardText>
            </CardBody>
           </Card>
        </div>
    )
}
export default TeamCard;