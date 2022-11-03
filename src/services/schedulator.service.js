const { getFetch, getSchedule } = require("../helpers/");

const getTasks = async () => {
    const data = await getFetch('http://localhost:8081/generator/schedule/tasks');
    
    if ( data.error) return data;


    const totalLabor = getSchedule(data);

    return totalLabor
}

module.exports = { getTasks }