export default function getStudentsByLocation(arr, city) {
  let newArr = [];

  if (Array.isArray(arr)) {
    newArr = arr.filter((ele) => ele.location === city);
  }
  return newArr;
}
