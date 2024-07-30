export default function cleanSet(set, startString) {
  let myStr = '';

  if (startString.length === 0) {
    return myStr;
  }

  set.forEach((element) => {
    if (element.startsWith(startString)) {
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
