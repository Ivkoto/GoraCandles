export const dimentions = {
  image_height: "250",
};

export const cardStyles = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  boxShadow: 2,
  borderRadius: 2,
  transition: "box-shadow 0.3s ease-in-out",
  "&:hover": {
    boxShadow: 4,
  },
};

export const cardMediaStyles = {
  objectFit: "cover",
};

export const cardContentStyles = {
  flexGrow: 1,
  p: 2,
};

export const titleStyles = {
  mb: 1,
  fontSize: "1.4rem",
  fontWeight: 600,
};

export const priceStyles = {
  fontWeight: 700,
  fontSize: "1.5rem",
};
