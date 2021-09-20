import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Team from './../Team/Team';

const Teams = () => {
    const [teams, setTeams] = useState([]);

    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeams(data.teams))
    }, [])
    // console.log(teams)
    // console.log(teams.slice(0, 9))
    const teamSlice = teams.slice(0, 9);
    return (
        <div className="row">
            {
                teamSlice.map(team => <Team key={team.idTeam} team={team}></Team>)
            }
        </div>
    );
};

export default Teams;