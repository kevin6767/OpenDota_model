import React, { useState, useEffect } from "react";

import {getStatsById} from '../services/heroes.service.js'


const Herodropdown = () => {
    const heroId = useState(
        'Select an ID'
    )
    useEffect(getStatsById());
    return (
        <h1> {heroId}</h1>




        )
}
export default Herodropdown