const { getRankingByText } = require('../services');
const httpStatus = require('http-status');



//wordRankService.getRankingByText()
const getRanking = async (req, res, next) => {
    try {
        const { id } = req.body
        const response = await getRankingByText(id);
        
        res.status(httpStatus.OK).json({response})
    } catch (err) {
        console.error(err);
    }
}

module.exports = { getRanking };