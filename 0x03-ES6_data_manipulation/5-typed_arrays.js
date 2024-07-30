export default function createInt8TypedArray(length, position, Number) {
  const int8Arr = new Int8Array(length);

  try {
    int8Arr[position] = Number;
  }
  catch {
    throw new Error('Position outside range');
  }

  return int8Arr;
}
