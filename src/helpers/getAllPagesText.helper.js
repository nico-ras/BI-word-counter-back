const { getFetch } = require ('./getFetchWCC.helper');

const getAllPagesText = async (id, totalPages) => {
    const text = [];
    for (let i = 2; i <= totalPages; i++) {
        const pageData = await getFetch(`http://localhost:8080/generator/word-counter/text?id=${id}&&page=${i}`);
        const pageText = pageData.text;
        text.push(pageText);
    }
    return text;
}

module.exports = { getAllPagesText }