export function countKeyword(userCards) {
  const resultArr = [];
  const res = {};
  userCards.forEach((element) => {
    if (res[element.keyword]) {
      res[element.keyword] += 1;
    } else {
      res[element.keyword] = 1;
    }
  });
  for (let key in res) {
    resultArr.push({ keyword: key, count: res[key] });
  }
  resultArr.sort((a, b) => {
    return b.count - a.count;
  });
  return resultArr;
}
