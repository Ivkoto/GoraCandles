import { SxProps, Theme } from "@mui/material/styles";

// Container styles
export const containerStyles: SxProps<Theme> = {
  maxWidth: "lg",
  py: 8,
};

// Main heading section styles
export const headingSectionStyles: SxProps<Theme> = {
  textAlign: "center",
  mb: 6,
};

export const mainHeadingStyles: SxProps<Theme> = {
  fontSize: { xs: "2.5rem", md: "3.5rem" },
  fontWeight: 700,
  color: "text.primary",
  mb: 4,
};

export const welcomeTextStyles: SxProps<Theme> = {
  fontSize: { xs: "1.3rem", md: "1.6rem" },
  color: "text.secondary",
  mb: 3,
  lineHeight: 1.6,
  maxWidth: "800px",
  mx: "auto",
};

export const brandNameStyles: SxProps<Theme> = {
  color: "#c06a4c",
  fontWeight: "bold",
};

export const descriptionStyles: SxProps<Theme> = {
  fontSize: { xs: "1.1rem", md: "1.3rem" },
  color: "text.secondary",
  lineHeight: 1.8,
  maxWidth: "900px",
  mx: "auto",
  mb: 6,
};

// Feature card styles
export const featureCardStyles: SxProps<Theme> = {
  height: "100%",
  textAlign: "center",
  p: 3,
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: 6,
  },
  borderRadius: 3,
};

export const featureIconContainerStyles: SxProps<Theme> = {
  mb: 2,
};

export const featureIconStyles: SxProps<Theme> = {
  width: 40,
  height: 40,
};

export const featureTitleStyles: SxProps<Theme> = {
  fontSize: "1.3rem",
  fontWeight: 600,
  color: "text.primary",
  mb: 2,
};

export const featureDescriptionStyles: SxProps<Theme> = {
  fontSize: "1rem",
  color: "text.secondary",
  lineHeight: 1.6,
};

// Additional content section styles
export const additionalContentStyles: SxProps<Theme> = {
  mt: 8,
  textAlign: "center",
};

export const additionalHeadingStyles: SxProps<Theme> = {
  fontSize: { xs: "1.8rem", md: "2.2rem" },
  fontWeight: 600,
  color: "text.primary",
  mb: 4,
};

export const additionalDescriptionStyles: SxProps<Theme> = {
  fontSize: { xs: "1.1rem", md: "1.3rem" },
  color: "text.secondary",
  lineHeight: 1.8,
  maxWidth: "800px",
  mx: "auto",
};

// Grid spacing
export const gridSpacing = 4;
