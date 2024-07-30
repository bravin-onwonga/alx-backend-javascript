export default function cleanSet(set, startString) {
  let myStr = '';

  set.forEach((element) => {
    if (element.startsWith(startString) && startString.length !== 0) {
      const ele = element.slice(startString.length);
      if (myStr.length !== 0) {
        myStr += '-' + ele;
      } else {
        myStr += ele;
      }
    }
  });

  return myStr;
}
