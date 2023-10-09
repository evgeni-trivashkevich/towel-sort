
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if(!matrix) return [];
  
  let result = [];
    matrix.forEach((element, index) => {
      if (index % 2 === 0 ) result.push(element);
      if (index % 2 !== 0 ) result.push(element.sort((a, b) => b - a));    
    });
    
  return [].concat(...result);
  
  
}
