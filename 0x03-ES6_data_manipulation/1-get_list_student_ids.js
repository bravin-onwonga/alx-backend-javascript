export default function getListStudentIds(arr) {
  let idArr = [];

  if (Array.isArray(arr)) {
    idArr = arr.map((ele) => ele.id);
  }
  return idArr;
}
