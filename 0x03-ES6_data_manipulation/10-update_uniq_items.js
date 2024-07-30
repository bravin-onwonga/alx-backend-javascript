export default function updateUniqueItems(map) {
  if (typeof map !== 'object' || Array.isArray(map)) {
    throw new Error('Cannot process');
  }
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
