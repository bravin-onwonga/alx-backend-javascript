export default function iterateThroughObject(reportWithIterator) {
  let idx = 0;
  let txt = '';

  for (const name of reportWithIterator) {
    txt += name;
    if (idx < reportWithIterator.length - 1){
      txt += '| ';
    }
  }
}