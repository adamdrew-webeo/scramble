module.exports = (str1, str2) => {
  const str1Chars = str1.split('');
  return str2.split('').reduce((accumulator, str) => {
    const usedIndex = str1Chars.indexOf(str);
    str1Chars.splice(usedIndex, 1);

    return accumulator & usedIndex !== -1;
  }, 1) === 1;
};
