export default function hasValuesFromArray(mySet, myArr) {
  return new Set(myArr).isSubsetOf(mySet);
}
