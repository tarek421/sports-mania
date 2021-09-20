import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Team = ({ team }) => {
   const {idTeam, strAlternate, strSport, strTeamBadge } = team;
   const cardStyle = {
      width: '18rem',
      textAlign: "center",
      margin: "10px",
      height: "330px",
      color: "#36476a",
      fontSize: "16px",
      // background: "#ffffffd6"
   }
   const history = useHistory();
   const handleClick = () => {
      history.push(`/team/${idTeam}`)

   }
   return (
      <div className="col-md-4">
         <Card className="p-1" style={cardStyle}>
            <Card.Img style={{ width: '125px', margin: '10px auto' }} variant="top" src={strTeamBadge} />
            <Card.Body>
               <Card.Title>{strAlternate}</Card.Title>
               <Card.Text>
                  Sports type: {strSport}
               </Card.Text>
               <Button onClick={()=>handleClick(idTeam)} variant="primary">Explorer </Button>
            </Card.Body>
         </Card>
      </div>
   );
};

export default Team;