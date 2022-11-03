const { getTasks } = require('../services');
const httpStatus = require('http-status');
const { getSchedule } = require('../helpers');


const getRandomTasks = async (req, res, next) => {
    try {
        const response = await getTasks();

        res.status(httpStatus.OK).json({response});
    } catch (err) {
        console.error(err);
        res.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

const getScheduleOwnTasks = async (req, res, next) => {
    try {
        const body  = await req.body;
        
        const response = getSchedule(body);
        
        res.status(httpStatus.OK).json({response});

    } catch ( err ) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

module.exports = { getRandomTasks, getScheduleOwnTasks };