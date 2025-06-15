export const containerStyles = {
  mt: 4,
  mb: 8,
};

export const gridSpacing = 4;

export const gridItemSizes = {
  xs: 12,
  sm: 6,
  md: 4,
};

export const productCardContainerStyles = {
  position: "relative",
  "&:hover .cart-icon": {
    opacity: 1,
    visibility: "visible",
  },
};

export const cartIconButtonStyles = {
  position: "absolute",
  top: 8,
  right: 8,
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  boxShadow: 1,
  opacity: 0,
  visibility: "hidden",
  transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 1)",
    boxShadow: 2,
  },
};

export const scrollToTopButtonStyles = {
  position: "fixed",
  bottom: 24,
  right: 24,
  backgroundColor: "primary.main",
  color: "white",
  zIndex: 1000,
  "&:hover": {
    backgroundColor: "primary.dark",
    transform: "scale(1.1)",
  },
  transition: "all 0.3s ease-in-out",
};

export const scroll = {
  threshold: 300,
};

export const css_classes = {
  cart_icon: "cart-icon",
};
