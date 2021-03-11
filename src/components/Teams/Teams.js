import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Teams = (props) => {
    const { strTeam, strTeamBadge, strSport, idTeam } = props.team;
    return (
        <Card className="card shadow m-3" style={{ width: '18rem', backgroundColor: "#F7F7F7" }}>
            <Card.Img variant="top" src={strTeamBadge} />
            <Card.Body className="text-center">
                <Card.Title>{strTeam}</Card.Title>
                <Card.Text>
                    Sports type: {strSport}
                </Card.Text>
                <Link to={`/team/${idTeam}`}>
                    <Button variant="danger">Explore<FontAwesomeIcon icon={faArrowRight} style={{ paddingLeft: "4px", }} /></Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default Teams;