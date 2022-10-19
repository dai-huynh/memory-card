export const getUrl = ({ type, maxCards, isRandom }) => {
  return isRandom
    ? `https://api.jikan.moe/v4/top/${type}?limit=${maxCards}&page=${Math.floor(
        Math.random() * 100
      )}`
    : `https://api.jikan.moe/v4/top/${type}?limit=${maxCards}`;
};
