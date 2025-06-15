import { SxProps, Theme } from "@mui/material/styles";

export const heroSectionStyles: SxProps<Theme> = {
  minHeight: { xs: "80vh", lg: "90vh", xl: "85vh" },
  width: "100vw",
  position: "relative",
  backgroundImage: "url(/home-page-bg-mock.png)",
  backgroundSize: {
    xs: "cover",
    md: "cover",
    lg: "contain",
    xl: "contain",
  },
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundColor: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

// Centered content box styles
export const centeredContentBoxStyles: SxProps<Theme> = {
  position: "relative",
  width: {
    xs: "90%",
    sm: "80%",
    md: "800px",
    lg: "800px",
    xl: "800px",
  },
  height: {
    xs: "300px",
    sm: "400px",
    md: "500px",
    lg: "550px",
    xl: "600px",
  },
  maxWidth: "800px",
  backgroundImage: "url(/white-box-leafs-mock.png)",
  backgroundSize: "contain",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: { xs: 1, sm: 1.5, md: 3 },
  padding: { xs: 1.5, sm: 2.5, md: 4 },
  overflow: "hidden", // Prevent content from overflowing
};

// Candles image styles
export const candlesImageStyles: SxProps<Theme> = {
  width: { xs: "25%", sm: "30%", md: "50%" },
  height: "auto",
  objectFit: "contain",
  maxWidth: { xs: "60px", sm: "80px", md: "100px" },
};

// Handmade text styles
export const handmadeTextStyles: SxProps<Theme> = {
  fontSize: {
    xs: "1.4rem",
    sm: "1.8rem",
    md: "2.2rem",
    lg: "2.5rem",
  },
  fontFamily: "accountantSignature, cursive",
  fontWeight: 300,
  color: "#c06a4c",
  textAlign: "center",
  lineHeight: 1.1,
};

// Candles heading styles
export const candlesHeadingStyles: SxProps<Theme> = {
  fontSize: {
    xs: "1.8rem",
    sm: "2.5rem",
    md: "3.5rem",
    lg: "4rem",
  },
  fontFamily: "Jost, sans-serif",
  fontWeight: 400,
  color: "text.primary",
  textAlign: "center",
  mb: { xs: 0.5, md: 1 },
  lineHeight: 1.1,
};

// Shop button styles
export const shopButtonStyles: SxProps<Theme> = {
  fontSize: { xs: "0.85rem", sm: "1rem", md: "1.1rem" },
  fontWeight: 500,
  px: { xs: 2, sm: 3, md: 4 },
  py: { xs: 0.55, sm: 0.75, md: 1 },
  borderRadius: 0,
  textTransform: "none",
  backgroundColor: "#c06a4c",
  "&:hover": {
    backgroundColor: "#c06a4c",
    transform: "scale(1.1)",
  },
  transition: "all 0.3s ease-in-out",
  marginTop: { xs: 2, sm: 3, md: 4 },
};

// Trending products section styles
export const trendingProductsSectionStyles: SxProps<Theme> = {
  py: { xs: 12, md: 18 },
  px: { xs: 2.4, sm: 4.8, md: 7.2, lg: 9.6 }, // 20% bigger padding
  backgroundColor: "#ffffff",
};

// Section title styles
export const sectionTitleStyles: SxProps<Theme> = {
  fontSize: { xs: "1.5rem", md: "2rem", lg: "2.5rem" },
  fontFamily: "Jost, sans-serif",
  fontWeight: 400,
  color: "text.primary",
  textAlign: "center",
  mb: { xs: 3.6, md: 4.8 },
  textTransform: "uppercase",
  letterSpacing: "0.1em",
};

// Products grid styles
export const productsGridStyles: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    sm: "repeat(2, 1fr)",
    md: "repeat(4, 1fr)",
  },
  gap: { xs: 2.4, md: 3.6 },
  maxWidth: "1440px",
  margin: "0 auto",
};

// Loading box styles
export const loadingBoxStyles: SxProps<Theme> = {
  backgroundColor: "#f9f9f9",
  borderRadius: 2,
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: { xs: "336px", md: "396px" },
};

// Loading spinner styles
export const loadingSpinnerStyles: SxProps<Theme> = {
  color: "#c06a4c",
};

// Product card styles
export const productCardStyles: SxProps<Theme> = {
  backgroundColor: "#f9f9f9",
  borderRadius: 2,
  overflow: "hidden",
  transition: "transform 0.3s ease-in-out",
  position: "relative",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  },
  "&:hover .add-to-cart-btn": {
    opacity: 1,
    visibility: "visible",
  },
  cursor: "pointer",
};

// Product image styles
export const productImageStyles: SxProps<Theme> = {
  width: "100%",
  height: { xs: "240px", md: "300px" },
  objectFit: "cover",
};

// Add to cart button styles
export const addToCartButtonStyles: SxProps<Theme> = {
  position: "absolute",
  top: 8,
  right: 8,
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  boxShadow: 1,
  opacity: 0,
  visibility: "hidden",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 1)",
    boxShadow: 2,
    transform: "scale(1.05)",
  },
};

// Add to cart icon styles
export const addToCartIconStyles: SxProps<Theme> = {
  color: "#c06a4c",
};

// Trending badge styles
export const trendingBadgeStyles: SxProps<Theme> = {
  position: "absolute",
  top: 8,
  left: 8,
  backgroundColor: "#c06a4c",
  color: "white",
  padding: "4px 8px",
  borderRadius: 1,
  fontSize: "0.75rem",
  fontWeight: 600,
  textTransform: "uppercase",
};

// Product info styles
export const productInfoStyles: SxProps<Theme> = {
  p: 2.4,
};

// Product title styles
export const productTitleStyles: SxProps<Theme> = {
  fontSize: "1.2rem",
  fontWeight: 500,
  mb: 1.2,
  color: "text.primary",
};

// Product info row styles
export const productInfoRowStyles: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

// Product price styles
export const productPriceStyles: SxProps<Theme> = {
  fontSize: "1.32rem",
  fontWeight: 600,
  color: "#c06a4c",
};

// Product sales styles
export const productSalesStyles: SxProps<Theme> = {
  fontSize: "0.96rem",
  color: "text.secondary",
};

// Scroll to top button styles
export const scrollToTopButtonStyles: SxProps<Theme> = {
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
