import React, { useState, useEffect } from "react";

import {getStatsById} from '../services/heroes.service'

const Herodropdown = () => {
    const [id, setName] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Trying to add this ID to fetch call:  ${id}`);
        getStatsById({id});
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter a Hero ID :
                <input
                    type="text"
                    value={id}
                    onChange={e => setName(e.target.value)}
                />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}
export default Herodropdown