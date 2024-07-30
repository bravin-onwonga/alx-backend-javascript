export default function hasValuesFromArray(set, array) {
  for (const ele in array) {
    if (!set.has(array[ele])) {
      return false;
    }
  }
  return true;
}
