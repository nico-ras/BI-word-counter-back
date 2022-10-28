const getRespObj = (data, ranking) => {

    const obj = {};

    obj.id = data.id;
    obj.title = data.title;
    obj.ranking = ranking;

    return obj;
}

module.exports = { getRespObj }