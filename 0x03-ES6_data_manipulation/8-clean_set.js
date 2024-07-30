export default function cleanSet(mySet, str) {
  let myStr = '';
  const myArr = Array.from(mySet);

  myArr.forEach((element, index) => {
    if (element.startsWith(str) && str !== '') {
      const ele = element.slice(str.length);
      myStr += ele;
      if (index !== myArr.length - 2) {
        myStr += '-';
      }
    }
  });

  return myStr;
}
