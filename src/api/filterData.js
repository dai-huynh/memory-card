export const filterAnimeMangaData = ({ data }) => {
  return data.map(({ title, images }) => ({
    name: title,
    image: images.jpg.image_url,
    isClicked: false,
  }));
};

export const filterCharData = ({ data }) => {
  return data.map(({ name, images }) => ({
    name: name,
    image: images.jpg.image_url,
    isClicked: false,
  }));
};
