const { getFetch, getRanking, getAllPagesText, getRespObj } = require("../helpers/");


const getRankingByText = async (id = 1) => {
    const data = await getFetch(`http://localhost:8080/generator/word-counter/text?id=${id}&&page=1`);
    
    if (data.error) return data; 
    //Get all pages text data

    const totalPages = data.total_pages;

    let totalText = data.text;

    //Si el texto tiene mas de una pagina
    if (totalPages > 1) {
      const totalTextArr = await getAllPagesText(id, totalPages);

      totalText += totalTextArr.toString();
    }
    
    const ranking = getRanking(totalText.toString());

    //Objeto de respuesta final

    const respObj = getRespObj(data, ranking); 

    //Envio de caracteristica adicional de texto completo.

    respObj.text = totalText;
    
    //Respuesta

    return respObj;

} 


module.exports = { getRankingByText }
