import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./TeamDetail.css";
import TeamHeader from './../TeamHeader/TeamHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faFlag, faFutbol, faMapMarkerAlt, faMars } from '@fortawesome/free-solid-svg-icons';



const TeamDetail = () => {
   const { idTeam } = useParams();

   const [teams, setTeams] = useState([]);
   useEffect(() => {
      const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
      fetch(url)
         .then(res => res.json())
         .then(data => setTeams(data.teams[0]))
   }, [idTeam])
   console.log(teams);
   const { strTeamBadge, strAlternate, strLeague, strDescriptionEN, strGender, strCountry, strSport, intFormedYear, strTeamFanart3, strStadiumThumb, strTwitter, strFacebook, strYoutube } = teams;
   return (
      <div>
         <TeamHeader logo={strTeamBadge} stadium={strStadiumThumb} />
         <div className="team-bg">
            <div className="container">
               <div className="row team-card">
                  <div className="col-md-6">
                     <h3>{strLeague}</h3>
                     <h4>{strAlternate}</h4>

                     <h5><span><FontAwesomeIcon icon={faMapMarkerAlt} /></span> Founded: {intFormedYear}</h5>
                     <h5><span><FontAwesomeIcon icon={faFlag} /></span> Country: {strCountry}</h5>
                     <h5><span><FontAwesomeIcon icon={faFutbol} /></span> Sport type: {strSport}</h5>
                     <h5><span><FontAwesomeIcon icon={faMars} /></span> Gender: {strGender}</h5>
                  </div>
                  <div className="col-md-6">
                     <img src={strTeamFanart3} alt="" />
                  </div>
               </div>
               <p>{strDescriptionEN}</p>
               <div className="social-icon flex-container">
                  <li>
                     <a rel="noreferrer" target="_blank" href={`https://${strFacebook}`}><FontAwesomeIcon icon={faFacebookSquare} /></a>
                  </li>
                  <li>
                     <a target="_blank" rel="noreferrer" href={`https://${strTwitter}`}><FontAwesomeIcon icon={faTwitterSquare} /></a>
                  </li>
                  <li>
                     <a target="_blank" rel="noreferrer" href={`https://${strYoutube}`}><FontAwesomeIcon icon={faYoutubeSquare} /></a>
                  </li>

               </div>
            </div>
         </div>
      </div >
   );
};

export default TeamDetail;