import { SxProps, Theme } from "@mui/material/styles";

// Container styles
export const containerStyles: SxProps<Theme> = {
  mt: 6,
  mb: 8,
};

// Page title section styles
export const titleSectionStyles: SxProps<Theme> = {
  textAlign: "center",
  mb: 6,
};

export const pageTitleStyles: SxProps<Theme> = {
  mb: 2,
  fontWeight: 400,
  color: "text.primary",
};

// Contact grid styles
export const contactGridStyles: SxProps<Theme> = {
  mt: 4,
};

export const contactItemStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  p: 4,
  borderRadius: 3,
  textDecoration: "none",
  color: "inherit",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: "#f0f8f0", // Very light green
    transform: "translateY(-4px)",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
  },
};

// Icon container styles
export const iconContainerStyles: SxProps<Theme> = {
  width: 80,
  height: 80,
  borderRadius: "50%",
  backgroundColor: "#c06a4c",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mb: 3,
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: "#c06a4c",
    transform: "scale(1.05)",
  },
};

export const iconStyles: SxProps<Theme> = {
  fontSize: 32,
};

// Contact content styles
export const contactTitleStyles: SxProps<Theme> = {
  mb: 1,
  fontWeight: 600,
  color: "text.primary",
};

export const contactDescriptionStyles: SxProps<Theme> = {
  color: "text.secondary",
  lineHeight: 1.6,
  fontSize: "1.1rem",
};

// Question section styles
export const questionSectionStyles: SxProps<Theme> = {
  mt: 8,
  textAlign: "center",
};

export const questionTitleStyles: SxProps<Theme> = {
  mb: 2,
  fontWeight: 500,
  color: "text.primary",
};

export const questionDescriptionStyles: SxProps<Theme> = {
  color: "text.secondary",
  fontSize: "1.5rem",
  maxWidth: "600px",
  mx: "auto",
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

// Grid spacing
export const gridSpacing = 4;

// Scroll threshold
export const scrollThreshold = 300;
