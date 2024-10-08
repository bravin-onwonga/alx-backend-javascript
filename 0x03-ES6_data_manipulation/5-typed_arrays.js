export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8Arr = new DataView(buffer, 0, length);

  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  int8Arr.setInt8(position, value);

  return int8Arr;
}
