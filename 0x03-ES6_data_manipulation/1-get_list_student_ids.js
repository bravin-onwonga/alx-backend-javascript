export default function getListStudentIds(arr) {
  const idArr = [];

  if (Array.isArray(arr)) {
    const myMap = new Map(arr);
    console.log(myMap);
    for (const ele of myMap) {
      if (typeof ele === 'object') {
        idArr.push(ele.id);
      }
    }
  }
  return idArr;
}
