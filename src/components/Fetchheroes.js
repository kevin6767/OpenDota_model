import React, { useState, useEffect } from "react";

const Fetchheroes = () => {
    const [hasError, setErrors] = useState(false);
    const [heroes, setHeroes] = useState({});

    async function fetchData() {
        const res = await fetch("https://api.opendota.com/api/heroStats");
        res
            .json()
            .then(res => setHeroes(res))
            .catch(err => setErrors(err));
    }

    useEffect(() => {
        fetchData();
    });

    return (
        <div>
            <span>{JSON.stringify(heroes)}</span>
            <hr />
            <span>Has error: {JSON.stringify(hasError)}</span>
        </div>
    );
};


export default Fetchheroes