const getRanking = (data) => {
  
  //eliminacion de signos y cada palabra como valor de un array
    const replaced = data.replace(/\./g," ").replaceAll(",", " ").split(/\s/);
  
    const freqMap = {};
  
  //Frecuencia de palabras exceptuando las menores a 3 caracteres  
    replaced.forEach((w) => {
      if (w.length > 3) {
        if (!freqMap[w]) {
          freqMap[w] = 0;
        }
        freqMap[w] += 1;
      }
    });
    
  //Ordenado entradas del objeto freqMap, segun valor de mayor a menor
    const sortable = Object.fromEntries(
      Object.entries(freqMap).sort(([, a], [, b]) => b - a)
    );
    
   //Obtencion de las 3 mas frecuentes
    const mostConcurrents = Object.entries(sortable).slice(0, 3);
    
    //Array de objetos solicitados
    const finalArr = [];
  
    mostConcurrents.map((innerArr, index) => {
      const obj = {};
  
      obj.position = index + 1;
      obj.word = innerArr[0];
      obj.occurrences = innerArr[1];
  
      finalArr.push(obj);
    });
 
    return finalArr;
  };  

  module.exports = { getRanking }