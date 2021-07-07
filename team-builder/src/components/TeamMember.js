import React from "react";
import {CardTitle, CardText, Card, CardBody} from "reactstrap"

const TeamMembers = (props) => {
    return (
        <div className="teamcards">
            {props.teamMembers.map(teamMember => (
            
                    <Card className="teamcard">
                    <CardBody className="bodycard">
                    <CardTitle>{teamMember.name}</CardTitle>
                    <CardText>{teamMember.role}</CardText>
                    <CardText>{teamMember.email}</CardText>
                    </CardBody>
                    </Card>
            ))}
        </div>
        );
    };
  
export default TeamMembers;