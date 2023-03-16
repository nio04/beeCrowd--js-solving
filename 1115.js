const checkQuardent = (first, second) => {
  if(first === 0 || second === 0) return "null"
  else if (first > 0 && second > 0) return "first quardent";
  else if (first < 0 && second > 0) return "second quardent";
  else if (first < 0 && second < 0) return "third quardent";
  else return "forth quardent";
};

console.log(checkQuardent(0, 2));
