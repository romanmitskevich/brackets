module.exports = function check(str, bracketsConfig) {
   const bracketsConfigObject = {};
   const openBracketsFromBracketsConfig = [];
   let stackForChecking = [];

   for (let i = 0; i < bracketsConfig.length; i++) {
      bracketsConfigObject[bracketsConfig[i][1]] = bracketsConfig[i][0];
      openBracketsFromBracketsConfig.push(bracketsConfig[i][0]);
   }

   for (let char of str) {
      if (openBracketsFromBracketsConfig.includes(char) && !stackForChecking.includes(char)) {
         stackForChecking.push(char);
      } else if (bracketsConfigObject[char] === stackForChecking[stackForChecking.length - 1]) {
         stackForChecking.pop();
      } else {
         stackForChecking.push(char);
      }
   }

   return stackForChecking.length === 0;
}
