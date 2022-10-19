export const filterAnimeMangaData = ({ data }) => {
  return data.map(({ title, images }) => ({
    title: title,
    image: images.jpg.image_url,
  }));
};

export const filterCharData = ({ data }) => {
  return data.map(({ name, images }) => ({
    name: name,
    image: images.jpg.image_url,
  }));
};
