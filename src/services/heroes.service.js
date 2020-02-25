import React from 'react'

export const getStatsById = (heroId) => async () => {
    const resp = await fetch("https://api.opendota.com/api/heroStats");
    const statsList = await resp.json();
    console.log(statsList);
    return statsList.find(stats => stats.id === heroId)
};

