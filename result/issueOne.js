function sortStringByFrequency(str) {
    // Create a frequency map of characters in the string
    const freqMap = {};
    for (let char of str) {
      freqMap[char] = (freqMap[char] || 0) + 1;
    }
  
    // Sort the characters in the string by frequency
    const sortedChars = Object.keys(freqMap).sort((a, b) => freqMap[b] - freqMap[a]);
  
    // Build the final string by repeating each character by its frequency
    let result = '';
    for (let char of sortedChars) {
      result += char.repeat(freqMap[char]);
    }
  
    return result;
  }