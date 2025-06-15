import React from "react";
import { Container, Typography, Box, Button, Divider } from "@mui/material";
import { ArrowBack as ArrowBackIcon } from "@mui/icons-material";
import { useCart } from "../../../context/CartContext";
import { CartItem } from "./components/CartItem";
import { CartSummary } from "./components/CartSummary";
import { CheckoutButton } from "./components/CheckoutButton";
import * as constants from "./constants";
import * as styles from "./styles";

interface CartProps {
  onNavigateToShop: () => void;
}

export const Cart: React.FC<CartProps> = ({ onNavigateToShop }) => {
  const { cartItems, cartCount } = useCart();

  return (
    <Container maxWidth="lg" sx={styles.containerStyles}>
      {/* Header Section */}
      <Box sx={styles.headerSectionStyles}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={onNavigateToShop}
          sx={styles.backButtonStyles}
        >
          {constants.NAVIGATION.CONTINUE_SHOPPING}
        </Button>
        <Typography variant="h4" sx={styles.pageTitle}>
          {constants.PAGE.TITLE}
        </Typography>
        <Typography variant="subtitle1" sx={styles.itemCountStyles}>
          {constants.PAGE.ITEM_COUNT(cartCount)}
        </Typography>
      </Box>

      {cartCount === 0 ? (
        /* Empty Cart State */
        <Box sx={styles.emptyCartSectionStyles}>
          <Typography variant="h5" sx={styles.emptyCartTitleStyles}>
            {constants.EMPTY_CART.TITLE}
          </Typography>
          <Typography variant="body1" sx={styles.emptyCartMessageStyles}>
            {constants.EMPTY_CART.MESSAGE}
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={onNavigateToShop}
            sx={styles.shopNowButtonStyles}
          >
            {constants.EMPTY_CART.SHOP_NOW_BUTTON}
          </Button>
        </Box>
      ) : (
        /* Cart with Items */
        <Box sx={styles.cartContentStyles}>
          {/* Cart Items Section */}
          <Box sx={styles.cartItemsSectionStyles}>
            <Typography variant="h6" sx={styles.sectionTitleStyles}>
              {constants.SECTIONS.CART_ITEMS}
            </Typography>

            {cartItems.map((item, index) => (
              <React.Fragment key={item.id}>
                <CartItem item={item} />
                {index < cartItems.length - 1 && (
                  <Divider sx={styles.itemDividerStyles} />
                )}
              </React.Fragment>
            ))}
          </Box>

          {/* Cart Summary Section */}
          <Box sx={styles.cartSummarySectionStyles}>
            <CartSummary />
            <CheckoutButton onNavigateToShop={onNavigateToShop} />
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default Cart;
