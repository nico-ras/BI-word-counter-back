const { getRankingByText } = require("./wordRank.service");
const { getTasks } = require("./schedulator.service");


module.exports = { 
    getRankingByText, 
    getTasks 
};