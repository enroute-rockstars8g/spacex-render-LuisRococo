import React, { useState } from "react";
import rocketImg from "../img/Cartoon_space_rocket.png";
import downArrow from "../img/60995.png";
import {apiFetchMissions} from "../fetchs/spacexApi";
import Mission from "../components/Mission";

export default function Main() {
    const [actualMission, setActualMission] = useState(null);
    
    async function searchMissions() {
        try {
            const missionsResults = await apiFetchMissions();
            setActualMission(missionsResults);
        } catch (error) {
            alert('Un error ha ocurrido');
        }
    }

    return (
        <div className="wrapper">
            <div className="header container">
                <img className="header__img" src={rocketImg} alt="" />
                <h1 className="header__title">SpaceX API</h1>
                <hr className="sep" />
            </div>

            <div className="container">
                <div className="section">
                    <h2 className="section__title">Explore the Missions</h2>
                    <hr className="sep" />
                    <button onClick={searchMissions} className="section__btn">
                        SEARCH
                    </button>
                </div>

                {actualMission && <div className="down-arrow-cont">
                    <img src={downArrow} alt="down-arrow" />
                </div>}

                {
                    actualMission && (
                    actualMission.map((mission, index)=> {
                        return <Mission key={index} title={mission.name} id={mission.id} description = {mission.description} />
                    }))
                }


            </div>
        </div>
    );
}
