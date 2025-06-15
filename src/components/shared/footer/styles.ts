export const freeSpaceStyles = {
  width: "100%",
  py: { xs: 6, md: 8, lg: 10 },
  backgroundColor: "#ffffff",
};

export const heroImageContainerStyles = {
  width: "100vw",
  height: "48vh",
  position: "relative",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 3,
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(92, 128, 95, 0.4)",
    zIndex: 1,
  },
};

export const overlaidContentStyles = {
  position: "relative",
  zIndex: 2,
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 3,
};

export const heroTitleStyles = {
  fontSize: {
    xs: "1.8rem",
    sm: "2.5rem",
    md: "3rem",
    lg: "3.5rem",
  },
  fontFamily: "Phenomena, sans-serif",
  fontWeight: 800,
  color: "#f8f7f2",
  textAlign: "center",
  textShadow: "0 4px 8px rgba(0, 0, 0, 0.27)",
  maxWidth: { xs: "600px", md: "none" },
  whiteSpace: { xs: "normal", md: "nowrap" },
  lineHeight: 1.2,
};

export const shopButtonStyles = {
  fontSize: { xs: "1.1rem", md: "1.3rem" },
  fontWeight: 600,
  px: { xs: 2, md: 3 },
  py: { xs: 0.75, md: 1 },
  borderRadius: 0,
  textTransform: "none",
  backgroundColor: "#c06a4c",
  color: "white",
  boxShadow: "0 4px 15px rgba(192, 106, 76, 0.4)",
  "&:hover": {
    backgroundColor: "#a85a42",
    transform: "translateY(-2px)",
    boxShadow: "0 6px 20px rgba(192, 106, 76, 0.6)",
  },
  transition: "all 0.3s ease-in-out",
};

export const footerContentStyles = {
  width: "100vw",
  py: { xs: 4, md: 6 },
  px: { xs: 2, md: 4 },
};

export const mainContentContainerStyles = {
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  flexDirection: { xs: "column", md: "row" },
  gap: { xs: 4, md: 6 },
};

export const leftSectionStyles = {
  flex: 1,
  textAlign: { xs: "center", md: "right" },
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

export const sectionTitleStyles = {
  fontFamily: "Jost, sans-serif",
  fontWeight: 600,
  fontSize: { xs: "1rem", md: "1.1rem" },
  color: "#c06a4c",
  mb: 1,
};

export const linksContainerStyles = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
};

export const linkRowStyles = {
  display: "flex",
  gap: 1,
  justifyContent: { xs: "center", md: "flex-end" },
};

export const linkStyles = {
  fontFamily: "Jost, sans-serif",
  fontSize: { xs: "0.9rem", md: "1rem" },
  color: "#c06a4c",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
    opacity: 0.7,
  },
};

export const linkStylesLeft = {
  fontFamily: "Jost, sans-serif",
  fontSize: { xs: "0.9rem", md: "1rem" },
  color: "#c06a4c",
  textDecoration: "none",
  textAlign: { xs: "center", md: "left" },
  "&:hover": {
    textDecoration: "underline",
    opacity: 0.7,
  },
};

export const linkStylesRight = {
  fontFamily: "Jost, sans-serif",
  fontSize: { xs: "0.9rem", md: "1rem" },
  color: "#c06a4c",
  textDecoration: "none",
  textAlign: { xs: "center", md: "right" },
  "&:hover": {
    textDecoration: "underline",
    opacity: 0.7,
  },
};

export const separatorStyles = {
  color: "#c06a4c",
  fontSize: { xs: "0.9rem", md: "1rem" },
};

export const centerSectionStyles = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  px: { xs: 2, md: 4 },
};

export const logoStyles = {
  height: { xs: "80px", md: "120px", lg: "150px" },
  width: "auto",
  filter: "none",
};

export const rightSectionStyles = {
  flex: 1,
  textAlign: { xs: "center", md: "left" },
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

export const noteTextStyles = {
  fontFamily: "Jost, sans-serif",
  fontSize: { xs: "0.9rem", md: "1rem" },
  color: "#c06a4c",
  textAlign: { xs: "center", md: "left" },
  fontStyle: "italic",
};
