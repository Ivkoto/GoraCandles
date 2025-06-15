import React from "react";
import { Box, Button, Typography, Card } from "@mui/material";
import { Lock as LockIcon } from "@mui/icons-material";
import { useCart } from "../../../../context/CartContext";
import * as constants from "../constants";
import * as styles from "../styles";

interface CheckoutButtonProps {
  onNavigateToShop: () => void;
}

export const CheckoutButton: React.FC<CheckoutButtonProps> = ({
  onNavigateToShop,
}) => {
  const { cartCount, clearCart } = useCart();

  const handleCheckout = () => {
    // Mock checkout process
    alert(
      "Checkout functionality would be implemented here. For now, we'll clear the cart.",
    );
    clearCart();
    onNavigateToShop();
  };

  return (
    <Card sx={styles.checkoutCardStyles}>
      {/* Proceed to Checkout Button */}
      <Button
        variant="contained"
        size="large"
        fullWidth
        onClick={handleCheckout}
        disabled={cartCount === 0}
        sx={styles.checkoutButtonStyles}
      >
        {constants.CHECKOUT.PROCEED_BUTTON}
      </Button>

      {/* Continue Shopping Button */}
      <Button
        variant="text"
        fullWidth
        onClick={onNavigateToShop}
        sx={styles.continueShoppingButtonStyles}
      >
        {constants.CHECKOUT.CONTINUE_SHOPPING_BUTTON}
      </Button>

      {/* Secure Checkout Message */}
      <Box sx={styles.secureCheckoutStyles}>
        <LockIcon fontSize="small" />
        <Typography variant="caption">
          {constants.CHECKOUT.SECURE_CHECKOUT}
        </Typography>
      </Box>
    </Card>
  );
};
