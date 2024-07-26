export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  let idx = 0;
  for (const ele of array) {
    arr[idx] = appendString + ele;
    idx += 1;
  }

  return arr;
}
