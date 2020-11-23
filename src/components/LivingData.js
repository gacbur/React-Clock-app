import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import LivingDataMore from './LivingDataMore'
import arrow from '../images/arrow.svg'


const ARROW_MORE = {
    transform: 'rotateX(0deg)'
}

const ARROW_LESS = {
    transform: 'rotateX(180deg)'
}

const LivingData = ({ handleLivingDataMore, LivingDataMoreActive }) => {
    const [locations, setLocations] = useState([])
    const [TimeExpandedInfo, setTimeExpandedInfo] = useState([])

    const getTimeExpandedInfo = async () => {
        const API = "http://worldtimeapi.org/api/ip"

        const response = await fetch(API)
        const responseJson = await response.json()
        setTimeExpandedInfo(responseJson)
        console.log(responseJson)
    }

    const getLocation = async () => {
        const API = "https://freegeoip.app/json/"
        const response = await fetch(API)
        const responseJson = await response.json()
        setLocations(responseJson)
    }

    const currentDate = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    useEffect(() => {
        getLocation()
        getTimeExpandedInfo()
    }, [])

    return (
        <>
            <div className="section-livingdata">
                <div className="livingdata_text">
                    <p><FontAwesomeIcon icon={faSun} /> GOOD MORNING, IT'S CURRENTLY</p>
                    <h1>{currentDate}</h1>
                    <div className="Town-Country-btn" key={locations.ip}><h3>IN {locations.city} {locations.country_name}</h3>
                        <button
                            className="show-hide-btn"
                            onClick={() => handleLivingDataMore()}>
                            {LivingDataMoreActive ? <p>Less</p> : <p>More</p>}<img style={LivingDataMoreActive ? ARROW_MORE : ARROW_LESS} src={arrow} alt="Arrow button" />
                        </button>
                    </div>
                </div>
            </div>
            {LivingDataMoreActive ? <LivingDataMore TimeExpandedInfo={TimeExpandedInfo} /> : null}
        </>
    );
}

export default LivingData;