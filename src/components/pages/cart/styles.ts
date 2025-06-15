import { SxProps, Theme } from "@mui/material";

// Container styles
export const containerStyles: SxProps<Theme> = {
  py: 4,
  minHeight: "80vh",
};

// Header section styles
export const headerSectionStyles: SxProps<Theme> = {
  mb: 4,
};

export const backButtonStyles: SxProps<Theme> = {
  mb: 2,
  color: "text.secondary",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
};

export const pageTitle: SxProps<Theme> = {
  fontWeight: 600,
  mb: 1,
};

export const itemCountStyles: SxProps<Theme> = {
  color: "text.secondary",
};

// Empty cart styles
export const emptyCartSectionStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  py: 8,
};

export const emptyCartTitleStyles: SxProps<Theme> = {
  mb: 2,
  color: "text.secondary",
};

export const emptyCartMessageStyles: SxProps<Theme> = {
  mb: 4,
  color: "text.secondary",
  maxWidth: "400px",
};

export const shopNowButtonStyles: SxProps<Theme> = {
  px: 4,
  py: 1.5,
};

// Cart content styles
export const cartContentStyles: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
  gap: 4,
};

// Cart items section styles
export const cartItemsSectionStyles: SxProps<Theme> = {
  backgroundColor: "background.paper",
  borderRadius: 2,
  p: 3,
  boxShadow: 1,
};

export const sectionTitleStyles: SxProps<Theme> = {
  mb: 3,
  fontWeight: 600,
};

export const itemDividerStyles: SxProps<Theme> = {
  my: 2,
};

// Cart summary section styles
export const cartSummarySectionStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
  height: "fit-content",
};

// Cart item styles
export const cartItemStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 2,
  py: 2,
};

export const cartItemImageStyles: SxProps<Theme> = {
  width: 80,
  height: 80,
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
  mb: 0.5,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

export const cartItemPriceStyles: SxProps<Theme> = {
  color: "text.secondary",
  fontSize: "0.875rem",
};

export const cartItemActionsStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: 1,
};

// Quantity controls styles
export const quantityControlsStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 1,
  border: "1px solid",
  borderColor: "divider",
  borderRadius: 1,
  backgroundColor: "background.paper",
};

export const quantityButtonStyles: SxProps<Theme> = {
  minWidth: "32px",
  height: "32px",
  border: "none",
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "action.hover",
  },
};

export const quantityInputStyles: SxProps<Theme> = {
  width: "32px",
  textAlign: "center",
  "& .MuiOutlinedInput-root": {
    height: "32px",
    "& fieldset": {
      border: "none",
    },
  },
  "& .MuiOutlinedInput-input": {
    textAlign: "center",
    padding: "0 2px",
    // Hide spinner arrows
    "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "&[type=number]": {
      "-moz-appearance": "textfield",
    },
  },
};

export const removeButtonStyles: SxProps<Theme> = {
  color: "error.main",
  fontSize: "0.75rem",
  padding: 0.5,
  minWidth: "auto",
  "&:hover": {
    backgroundColor: "error.light",
    color: "error.contrastText",
  },
};

export const itemTotalStyles: SxProps<Theme> = {
  fontWeight: 600,
  fontSize: "1.1rem",
  color: "secondary.main",
};

// Cart summary component styles
export const summaryCardStyles: SxProps<Theme> = {
  p: 3,
  backgroundColor: "background.paper",
  borderRadius: 2,
  boxShadow: 1,
};

export const summaryRowStyles: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  py: 1,
};

export const summaryLabelStyles: SxProps<Theme> = {
  color: "text.secondary",
};

export const summaryValueStyles: SxProps<Theme> = {
  fontWeight: 500,
};

export const totalRowStyles: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  py: 1.5,
  borderTop: "1px solid",
  borderColor: "divider",
  mt: 1,
};

export const totalLabelStyles: SxProps<Theme> = {
  fontSize: "1.1rem",
  fontWeight: 600,
};

export const totalValueStyles: SxProps<Theme> = {
  fontSize: "1.25rem",
  fontWeight: 700,
  color: "secondary.main",
};

export const freeShippingMessageStyles: SxProps<Theme> = {
  color: "success.main",
  fontSize: "0.875rem",
  textAlign: "center",
  mt: 1,
  p: 1,
  backgroundColor: "success.light",
  borderRadius: 1,
};

// Promo code styles
export const promoCodeSectionStyles: SxProps<Theme> = {
  mt: 2,
  pt: 2,
  borderTop: "1px solid",
  borderColor: "divider",
};

export const promoCodeInputStyles: SxProps<Theme> = {
  display: "flex",
  gap: 1,
  mt: 1,
};

export const promoCodeFieldStyles: SxProps<Theme> = {
  flex: 1,
  "& .MuiOutlinedInput-root": {
    height: "40px",
  },
};

export const promoCodeButtonStyles: SxProps<Theme> = {
  height: "40px",
  px: 2,
};

// Checkout button styles
export const checkoutCardStyles: SxProps<Theme> = {
  p: 3,
  backgroundColor: "background.paper",
  borderRadius: 2,
  boxShadow: 1,
  textAlign: "center",
};

export const checkoutButtonStyles: SxProps<Theme> = {
  width: "100%",
  py: 1.5,
  fontSize: "1.1rem",
  fontWeight: 600,
  mb: 2,
};

export const continueShoppingButtonStyles: SxProps<Theme> = {
  width: "100%",
  py: 1,
  color: "text.secondary",
  "&:hover": {
    backgroundColor: "action.hover",
  },
};

export const secureCheckoutStyles: SxProps<Theme> = {
  color: "success.main",
  fontSize: "0.875rem",
  mt: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 0.5,
};
