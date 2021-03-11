import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import maleTeamImg from '../../Photo/male.png';
import femaleTeamImg from '../../Photo/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBirthdayCake, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';

const TeamDetail = () => {
    const { teamId } = useParams();
    const [team, setTeam] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    }, [teamId]);
    const { strTeamBanner, strTeamBadge, strTeam, intFormedYear, strCountry, strSport, strGender, strFacebook, strYoutube, strTwitter } = team;
    return (
        <>
            {/* Team Banner and Badge Section */}
            <div style={{ backgroundColor: "#282828" }}>
                <div className="jumbotron" style={{ backgroundImage: `url(${strTeamBanner})` }}>
                    <div className="container">
                        <img src={strTeamBadge} alt="" style={{ width: "150px", display: "block", margin: "0 auto" }} />
                    </div>
                </div>
                {/* Summary Card Section */}
                <div className="container mt-5 text-light">
                    <div className="card mb-3" style={{ maxWidth: "100%", borderRadius: "10px", backgroundColor: "#BE4BDB" }}>
                        <div className="row no-gutters">
                            <div className="col-md-7">
                                <div className="card-body">
                                    <h3 className="card-title font-weight-bold">{strTeam}</h3>
                                    <p className="card-text"><FontAwesomeIcon icon={faBirthdayCake} style={{ fontSize: "15px", color: "white", marginRight: "10px" }} />Founded: {intFormedYear}</p>
                                    <p className="card-text"><FontAwesomeIcon icon={faFlag} style={{ fontSize: "15px", color: "white", marginRight: "10px" }} />Country: {strCountry}</p>
                                    <p className="card-text"><FontAwesomeIcon icon={faFutbol} style={{ fontSize: "15px", color: "white", marginRight: "10px" }} />Sport Type: {strSport}</p>
                                    <p className="card-text"><FontAwesomeIcon icon={faMars} style={{ fontSize: "15px", color: "white", marginRight: "10px" }} />Gender: {strGender}</p>
                                </div>
                            </div>
                            <div className="col-md-5">
                                {
                                    team.strGender === 'Male'
                                        ? <img src={maleTeamImg} alt="" className="card-img p-2" />
                                        : <img src={femaleTeamImg} alt="" className="card-img p-2" />
                                }
                            </div>
                        </div>
                    </div>
                    {/* Paragraph Section */}
                    <div >
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus voluptas, libero quia velit possimus aut consequatur ex labore. Maxime velit rem modi error voluptas perferendis voluptate adipisci voluptates placeat et blanditiis minima odit ipsum, quaerat eveniet numquam dolores ullam quos ipsa praesentium commodi! Molestiae labore deserunt eveniet magnam repellat, quos voluptatibus iste, soluta inventore hic magni earum! Doloribus dicta voluptate commodi, numquam optio ratione nesciunt soluta maxime delectus enim quia temporibus beatae sed inventore quasi veniam possimus, tempora natus corrupti.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, commodi tempora saepe necessitatibus, odio quisquam sunt eaque quos dicta quis rem error! Quo possimus dolorum exercitationem esse magni amet dolores similique perspiciatis aperiam quia libero sunt asperiores, consectetur vero, ipsum, aut maxime praesentium vitae eveniet quisquam? Culpa iste quas, quisquam animi eligendi quaerat! Voluptate quibusdam beatae suscipit. Nobis, eligendi vel!</p>
                    </div>
                    {/* Social Link Section */}
                    <div className="mt-4 py-5 row justify-content-center">
                        <div className="px-4">
                            <a href={`http://${strFacebook}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} style={{ fontSize: "30px", color: "#1771E6" }} /></a>
                        </div>
                        <div className="px-4">
                            <a href={`http://${strYoutube}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} style={{ fontSize: "30px", color: "#FF0000" }} /></a>
                        </div>
                        <div className="px-4">
                            <a href={`http://${strTwitter}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} style={{ fontSize: "30px", color: "#1DA1F2" }} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamDetail;