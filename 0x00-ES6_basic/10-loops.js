export default function appendToEachArrayValue(array, appendString) {
  let idx = 0;
  for (let ele of array) {
    array[idx] = appendString + ele;;
    idx++;
  }

  return array;
}
