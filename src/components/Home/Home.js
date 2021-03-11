import React, { useEffect, useState } from 'react';
import Teams from '../Teams/Teams';
import headerImg from '../../Photo/header.png';

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain')
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])
    return (
        <>
            <div style={{ backgroundColor: "#282828" }}>
                <div className="jumbotron" style={{ backgroundImage: `url(${headerImg})`, width: "100%" }}>
                    <div className="container">
                        <h1 className="display-4 font-weight-bold text-center" style={{ color: "#282828" }}>Eden Of Soccer Team</h1>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="d-flex flex-wrap justify-content-center">
                        {
                            teams.map(team => <Teams team={team}></Teams>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;