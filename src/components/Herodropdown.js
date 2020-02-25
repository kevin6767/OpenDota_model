import React, { useState, useEffect } from "react";

import {getStatsById} from '../services/heroes.service.js'


const Herodropdown = (heroId) => {
    const {stats, setStats} = useState();
    useEffect( () => { setStats( getStatsById(heroId) ) }, [heroId] );
    return (
        <>
            <h2> {heroId}</h2>

            stats: {stats}
        </>
    )
}
export default Herodropdown