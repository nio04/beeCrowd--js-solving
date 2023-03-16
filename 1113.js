const checkStatus = (first, second) => {
  if (first > second) {
    return "Descending";
  } else {
    return "Ascending";
  }
}

console.log(checkStatus(5, 3))
