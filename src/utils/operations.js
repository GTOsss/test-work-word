export const randomInteger = (min, max) => {
  const rand = (min - 0.5) + (Math.random() * ((max - min) + 1));
  return Math.round(rand);
};

export const swapArrayElements = (array, a, b) => {
  const bufferAr = [...array];
  const bufferA = bufferAr[a];
  bufferAr[a] = bufferAr[b];
  bufferAr[b] = bufferA;
  return bufferAr;
};
