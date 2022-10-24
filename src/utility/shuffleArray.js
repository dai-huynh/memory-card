export const shuffleArray = (array) => {
  let data = array;
  let m = data.length;
  let t, i;

  while (m) {
    i = Math.floor(Math.random() * m--);
    t = data[m];
    data[m] = data[i];
    data[i] = t;
  }

  return data;
};
