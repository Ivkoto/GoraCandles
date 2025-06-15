import { SxProps, Theme } from "@mui/material/styles";

// AppBar styles
export const appBarStyles: SxProps<Theme> = {
  background: "transparent",
  boxShadow: "none",
  color: "text.primary",
  width: "100%",
};

// Container styles
export const containerStyles: SxProps<Theme> = {
  width: "100%",
  px: { xs: 2, sm: 4, md: 6, lg: 8 }, // Responsive padding to match background image
};

// Toolbar styles
export const toolbarStyles: SxProps<Theme> = {
  justifyContent: "space-between",
  py: 2,
  px: 0,
};

// Logo styles
export const logoContainerStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
};

export const logoStyles: SxProps<Theme> = {
  height: 70,
  width: "auto",
  objectFit: "contain",
  cursor: "pointer",
};

// Navigation styles
export const navigationContainerStyles: SxProps<Theme> = {
  display: "flex",
  gap: 4,
};

export const navigationButtonStyles: SxProps<Theme> = {
  fontFamily: "inherit",
  fontSize: "1.1rem", // Increased from 1rem
  fontWeight: 400,
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#f0f8f0", // Very light green
  },
};

// Icons section styles
export const iconsContainerStyles: SxProps<Theme> = {
  display: "flex",
  gap: 1,
};

export const iconButtonStyles: SxProps<Theme> = {
  color: "#c06a4c",
  "&:hover": {
    backgroundColor: "#f0f8f0", // Very light green
  },
};

export const cartIconButtonStyles: SxProps<Theme> = {
  position: "relative",
  color: "#c06a4c",
  "&:hover": {
    backgroundColor: "#f0f8f0", // Very light green
  },
};

// Menu styles
export const dropdownMenuStyles: SxProps<Theme> = {
  "& .MuiPaper-root": {
    mt: 1,
    minWidth: 400,
    borderRadius: 2,
  },
  "& .MuiMenuItem-root:hover": {
    backgroundColor: "#f0f8f0", // Very light green
  },
};

export const menuContentStyles: SxProps<Theme> = {
  display: "flex",
  p: 2,
};

export const menuColumnStyles: SxProps<Theme> = {
  flex: 1,
  pr: 2,
};

export const menuColumnRightStyles: SxProps<Theme> = {
  flex: 1,
  pl: 2,
};

export const menuTitleStyles: SxProps<Theme> = {
  fontWeight: 600,
  mb: 1,
  cursor: "pointer",
  "&:hover": {
    color: "primary.main",
  },
};

export const menuItemTextStyles: SxProps<Theme> = {};

// Cart dropdown styles
export const cartMenuStyles: SxProps<Theme> = {
  "& .MuiPaper-root": {
    mt: 1,
    minWidth: 380,
    borderRadius: 2,
    maxHeight: 400,
  },
  "& .MuiMenuItem-root:hover": {
    backgroundColor: "#f0f8f0", // Very light green
  },
};

export const cartContentStyles: SxProps<Theme> = {
  p: 2,
};

export const cartTitleStyles: SxProps<Theme> = {
  mb: 2,
  fontWeight: 600,
};

export const emptyCartStyles: SxProps<Theme> = {
  color: "text.secondary",
};

export const cartItemStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 1.5,
  py: 1.5,
  borderBottom: "1px solid #f0f0f0",
  "&:last-child": { borderBottom: "none" },
};

export const cartItemImageStyles: SxProps<Theme> = {
  width: 48,
  height: 48,
  borderRadius: 1,
  objectFit: "cover",
  flexShrink: 0,
};

export const cartItemInfoStyles: SxProps<Theme> = {
  flex: 1,
  minWidth: 0,
};

export const cartItemNameStyles: SxProps<Theme> = {
  fontWeight: 500,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

export const cartItemQuantityStyles: SxProps<Theme> = {
  color: "text.secondary",
};

export const cartItemActionsStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 1,
};

export const cartItemPriceStyles: SxProps<Theme> = {
  color: "secondary.main",
  fontWeight: 600,
};

export const removeItemButtonStyles: SxProps<Theme> = {
  color: "text.secondary",
  "&:hover": {
    color: "error.main",
    backgroundColor: "error.light",
  },
};

export const cartTotalSectionStyles: SxProps<Theme> = {
  pt: 2,
  mt: 2,
  borderTop: "2px solid #f0f0f0",
};

export const cartTotalRowStyles: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  mb: 2,
};

export const cartTotalLabelStyles: SxProps<Theme> = {
  fontWeight: 600,
};

export const cartTotalPriceStyles: SxProps<Theme> = {
  color: "secondary.main",
  fontWeight: 700,
};

export const cartButtonsContainerStyles: SxProps<Theme> = {
  display: "flex",
  gap: 1,
};

// Menu subtitle styles
export const menuSubtitleStyles: SxProps<Theme> = {
  fontWeight: 600,
  mb: 1,
};
