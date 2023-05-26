function letterCombinations(digits) {
  if (digits.length === 0) {
    return [];
  }

  const digitLetters = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };

  const combinations = [''];
  for (let digit of digits) {
    const letters = digitLetters[digit];
    const newCombinations = [];
    for (let combination of combinations) {
      for (let letter of letters) {
        newCombinations.push(combination + letter);
      }
    }
    combinations.length = 0;
    combinations.push(...newCombinations);
  }

  return combinations.sort();
}

  
	
    
      

module.exports = letterCombinations;
