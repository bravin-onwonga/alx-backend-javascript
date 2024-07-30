export default function getListStudentIds(arr) {
  const idArr = [];

  if (Array.isArray(arr)) {
    for (const ele of arr) {
      if (typeof ele === 'object') {
        idArr.push(ele.id);
      }
    }
  }
  return idArr;
}
