const removeFromArray = function(arr, ...removeElement) {
    return arr.filter(el => !removeElement.includes(el)); 
};

// Do not edit below this line
module.exports = removeFromArray;
