export default function cleanSet(set, startString) {
  let myStr = '';

  if (!(set instanceof Set) || !Array.isArray([...set])) {
    return myStr;
  }

  if ((typeof startString !== 'string' || startString.length === 0)) {
    return myStr;
  }

  set.forEach((element) => {
    if (typeof element === 'string' && element.startsWith(startString)) {
      const ele = element.slice(startString.length);
      if (myStr.length !== 0) {
        myStr += `-${ele}`;
      } else {
        myStr += ele;
      }
    }
  });

  return myStr;
}
