const reverseString = function (string) {
    let reversedString = "";
    let newArray = Array.from(string);
  
    for (let i = 0; i < string.length; i++) {
      let letter = newArray.pop();
      reversedString += letter;
    }
  
    return reversedString;
  };

// Do not edit below this line
module.exports = reverseString;
