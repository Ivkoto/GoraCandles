import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import {
  Remove as RemoveIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import {
  useCart,
  CartItem as CartItemType,
} from "../../../../context/CartContext";
import * as constants from "../constants";
import * as styles from "../styles";

interface CartItemProps {
  item: CartItemType;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const [removeDialogOpen, setRemoveDialogOpen] = useState(false);

  const handleQuantityChange = (newQuantity: number) => {
    if (
      newQuantity >= constants.QUANTITY.MIN_QUANTITY &&
      newQuantity <= constants.QUANTITY.MAX_QUANTITY
    ) {
      updateQuantity(item.id, newQuantity);
    }
  };

  const handleQuantityInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      handleQuantityChange(value);
    }
  };

  const handleRemoveClick = () => {
    setRemoveDialogOpen(true);
  };

  const handleRemoveConfirm = () => {
    removeFromCart(item.id);
    setRemoveDialogOpen(false);
  };

  const handleRemoveCancel = () => {
    setRemoveDialogOpen(false);
  };

  const itemTotal = item.price * item.quantity;

  return (
    <>
      <Box sx={styles.cartItemStyles}>
        {/* Product Image */}
        <Box
          component="img"
          src={item.imageUrl || "/IMG_5833.jpg"}
          alt={item.name}
          sx={styles.cartItemImageStyles}
        />

        {/* Product Info */}
        <Box sx={styles.cartItemInfoStyles}>
          <Typography variant="h6" sx={styles.cartItemNameStyles}>
            {item.name}
          </Typography>
          <Typography variant="body2" sx={styles.cartItemPriceStyles}>
            {item.price.toFixed(2)} {constants.CART_ITEM.CURRENCY} each
          </Typography>
        </Box>

        {/* Quantity Controls */}
        <Box sx={styles.quantityControlsStyles}>
          <IconButton
            size="small"
            onClick={() => handleQuantityChange(item.quantity - 1)}
            disabled={item.quantity <= constants.QUANTITY.MIN_QUANTITY}
            sx={styles.quantityButtonStyles}
            aria-label={constants.QUANTITY.DECREASE}
          >
            <RemoveIcon fontSize="small" />
          </IconButton>

          <TextField
            size="small"
            type="number"
            value={item.quantity}
            onChange={handleQuantityInputChange}
            inputProps={{
              min: constants.QUANTITY.MIN_QUANTITY,
              max: constants.QUANTITY.MAX_QUANTITY,
            }}
            sx={styles.quantityInputStyles}
          />

          <IconButton
            size="small"
            onClick={() => handleQuantityChange(item.quantity + 1)}
            disabled={item.quantity >= constants.QUANTITY.MAX_QUANTITY}
            sx={styles.quantityButtonStyles}
            aria-label={constants.QUANTITY.INCREASE}
          >
            <AddIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* Actions and Total */}
        <Box sx={styles.cartItemActionsStyles}>
          <Typography variant="h6" sx={styles.itemTotalStyles}>
            {itemTotal.toFixed(2)} {constants.CART_ITEM.CURRENCY}
          </Typography>

          <Button
            size="small"
            startIcon={<DeleteIcon />}
            onClick={handleRemoveClick}
            sx={styles.removeButtonStyles}
          >
            {constants.CART_ITEM.REMOVE_BUTTON}
          </Button>
        </Box>
      </Box>

      {/* Remove Confirmation Dialog */}
      <Dialog
        open={removeDialogOpen}
        onClose={handleRemoveCancel}
        aria-labelledby="remove-dialog-title"
      >
        <DialogTitle id="remove-dialog-title">
          {constants.CART_ITEM.REMOVE_CONFIRMATION}
        </DialogTitle>
        <DialogContent>
          <Typography>{item.name}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRemoveCancel} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleRemoveConfirm}
            color="error"
            variant="contained"
          >
            {constants.CART_ITEM.REMOVE_BUTTON}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
