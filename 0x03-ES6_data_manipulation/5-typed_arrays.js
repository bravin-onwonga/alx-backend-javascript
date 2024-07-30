export default function createInt8TypedArray(length, position, Number) {
  const buffer = new ArrayBuffer(length)
  const int8Arr = new Int8Array(buffer);

  try {
    int8Arr[position] = Number;
  }
  catch {
    throw new Error('Position outside range');
  }

  return buffer;
}
