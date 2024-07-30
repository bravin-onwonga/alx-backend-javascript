import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(arr) {
  const ids = getListStudentIds(arr);
  const sumIds = ids.reduce((total, current) => total + current);

  return sumIds;
}
