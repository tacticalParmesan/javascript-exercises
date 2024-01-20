const removeFromArray = function(arrayToAlter, ...itemsToRemove) {
  for (const item of itemsToRemove) {
    const itemToRemoveIdx = arrayToAlter.indexOf(item);
    if (itemToRemoveIdx !== -1) {
      arrayToAlter.splice(itemToRemoveIdx, 1)
    } 
  }
  return arrayToAlter;
};

// Do not edit below this line
module.exports = removeFromArray;
