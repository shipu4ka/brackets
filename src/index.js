module.exports = function check(str, bracketsConfig) {
  const strArr = str.split("");
  const objBrackets = {};
  for (let i = 0; i < bracketsConfig.length; i++) {
    objBrackets[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }
  const sameBrackets = Object.keys(objBrackets).filter(
    (key) => key === objBrackets[key]
  );
  let i = 0;
  while (i < strArr.length) {
    if (sameBrackets.includes(strArr[i]) && strArr[i] === strArr[i + 1]) {
      strArr.splice(i, 2);
      i = i - 2;
    } else if (
      strArr[i] in objBrackets &&
      objBrackets[strArr[i]] === strArr[i + 1]
    ) {
      strArr.splice(i, 2);
      i = i - 2;
    } else {
      i = i + 1;
    }
  }
  return strArr.length === 0;
};