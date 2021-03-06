// Problem 1.4 'Palindrome Permutation'
// Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not deed to be limited to just dictionary words.
const palindromePermutation = (string) => {
  const hashFromString = (str) => (
    str.split('').reduce((acc, char) => {
      if (!acc[char]) {
        acc[char] = 1;
      } else {
        acc[char]++;
      }
      return acc;
    }, {})
  );

  const hash = hashFromString(string.toLowerCase().split(' ').join(''));

  if (string.length % 2 === 0) {
    return Object.keys(hash).every((key) => hash[key] % 2 === 0);
  } else {
    let odd = Object.keys(hash).reduce((acc, char) => {
      if (hash[char] % 2 === 1) {
        acc.push(char);
      }
      return acc;
    }, []);

    return odd.length === 1;
  }
}

console.log(palindromePermutation('aabbcd'));
