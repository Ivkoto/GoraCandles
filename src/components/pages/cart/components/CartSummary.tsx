import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  Divider,
  Alert,
} from "@mui/material";
import { useCart } from "../../../../context/CartContext";
import * as constants from "../constants";
import * as styles from "../styles";

export const CartSummary: React.FC = () => {
  const { cartTotal } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [promoCodeMessage, setPromoCodeMessage] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  // Calculate shipping
  const shippingCost =
    cartTotal >= constants.CART_SUMMARY.FREE_SHIPPING_THRESHOLD
      ? 0
      : parseFloat(constants.CART_SUMMARY.SHIPPING_COST);

  const remainingForFreeShipping =
    constants.CART_SUMMARY.FREE_SHIPPING_THRESHOLD - cartTotal;

  // Calculate tax
  const taxAmount = cartTotal * constants.CART_SUMMARY.TAX_RATE;

  // Calculate total
  const finalTotal = cartTotal + shippingCost + taxAmount;

  const handlePromoCodeSubmit = () => {
    // Mock promo code validation
    if (promoCode.toLowerCase() === "save10") {
      setPromoCodeMessage({
        type: "success",
        message: constants.CART_SUMMARY.PROMO_CODE.SUCCESS_MESSAGE,
      });
    } else if (promoCode.trim() !== "") {
      setPromoCodeMessage({
        type: "error",
        message: constants.CART_SUMMARY.PROMO_CODE.ERROR_MESSAGE,
      });
    }
  };

  const handlePromoCodeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPromoCode(event.target.value);
    setPromoCodeMessage(null); // Clear message when typing
  };

  return (
    <Card sx={styles.summaryCardStyles}>
      <Typography variant="h6" sx={styles.sectionTitleStyles}>
        {constants.SECTIONS.ORDER_SUMMARY}
      </Typography>

      {/* Subtotal */}
      <Box sx={styles.summaryRowStyles}>
        <Typography sx={styles.summaryLabelStyles}>
          {constants.CART_SUMMARY.SUBTOTAL}
        </Typography>
        <Typography sx={styles.summaryValueStyles}>
          {cartTotal.toFixed(2)} {constants.CART_SUMMARY.CURRENCY}
        </Typography>
      </Box>

      {/* Shipping */}
      <Box sx={styles.summaryRowStyles}>
        <Typography sx={styles.summaryLabelStyles}>
          {constants.CART_SUMMARY.SHIPPING}
        </Typography>
        <Typography sx={styles.summaryValueStyles}>
          {shippingCost === 0
            ? constants.CART_SUMMARY.FREE_SHIPPING
            : `${shippingCost.toFixed(2)} ${constants.CART_SUMMARY.CURRENCY}`}
        </Typography>
      </Box>

      {/* Free shipping message */}
      {remainingForFreeShipping > 0 && (
        <Typography sx={styles.freeShippingMessageStyles}>
          {constants.CART_SUMMARY.FREE_SHIPPING_MESSAGE(
            remainingForFreeShipping,
          )}
        </Typography>
      )}

      {/* Tax */}
      <Box sx={styles.summaryRowStyles}>
        <Typography sx={styles.summaryLabelStyles}>
          {constants.CART_SUMMARY.TAX}
        </Typography>
        <Typography sx={styles.summaryValueStyles}>
          {taxAmount.toFixed(2)} {constants.CART_SUMMARY.CURRENCY}
        </Typography>
      </Box>

      {/* Promo Code Section */}
      <Box sx={styles.promoCodeSectionStyles}>
        <Typography variant="body2" sx={styles.summaryLabelStyles}>
          {constants.CART_SUMMARY.PROMO_CODE.LABEL}
        </Typography>
        <Box sx={styles.promoCodeInputStyles}>
          <TextField
            size="small"
            placeholder={constants.CART_SUMMARY.PROMO_CODE.PLACEHOLDER}
            value={promoCode}
            onChange={handlePromoCodeChange}
            sx={styles.promoCodeFieldStyles}
          />
          <Button
            variant="outlined"
            onClick={handlePromoCodeSubmit}
            sx={styles.promoCodeButtonStyles}
          >
            {constants.CART_SUMMARY.PROMO_CODE.APPLY_BUTTON}
          </Button>
        </Box>

        {/* Promo code message */}
        {promoCodeMessage && (
          <Alert
            severity={promoCodeMessage.type}
            sx={{ mt: 1, fontSize: "0.875rem" }}
          >
            {promoCodeMessage.message}
          </Alert>
        )}
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Total */}
      <Box sx={styles.totalRowStyles}>
        <Typography sx={styles.totalLabelStyles}>
          {constants.CART_SUMMARY.TOTAL}
        </Typography>
        <Typography sx={styles.totalValueStyles}>
          {finalTotal.toFixed(2)} {constants.CART_SUMMARY.CURRENCY}
        </Typography>
      </Box>
    </Card>
  );
};
