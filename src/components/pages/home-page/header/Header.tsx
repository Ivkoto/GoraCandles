import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Box,
  Typography,
  IconButton,
  Badge,
  Container,
} from "@mui/material";
import {
  Instagram as InstagramIcon,
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { useCart } from "../../../../context/CartContext";
import { PageType } from "../../../../types";
import * as styles from "./styles";
import * as constants from "./constants";

interface HeaderProps {
  onNavigate: (page: PageType) => void;
  currentPage: PageType;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [cartAnchorEl, setCartAnchorEl] = useState<HTMLElement | null>(null);

  // Use cart context instead of local state
  const { cartItems, removeFromCart, cartTotal, cartCount } = useCart();
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleShopNavigation = () => {
    handleMenuClose();
    onNavigate("shop");
  };

  const handleCartOpen = (event: React.MouseEvent<HTMLElement>) => {
    setCartAnchorEl(event.currentTarget);
  };

  const handleCartClose = () => {
    setCartAnchorEl(null);
  };
  const handleCartNavigation = () => {
    handleCartClose();
    onNavigate("cart");
  };

  return (
    <AppBar position="static" sx={styles.appBarStyles}>
      <Container maxWidth={false} sx={styles.containerStyles}>
        <Toolbar sx={styles.toolbarStyles}>
          {/* Left: Logo */}
          <Box sx={styles.logoContainerStyles}>
            <Box
              component="img"
              src="/gora_candles_logo_gr_site.png"
              alt={constants.ALT_TEXTS.LOGO}
              onClick={() => onNavigate("home")}
              sx={styles.logoStyles}
            />
          </Box>
          {/* Center: Navigation */}
          <Box sx={styles.navigationContainerStyles}>
            <Button
              color="inherit"
              onMouseEnter={handleMenuOpen}
              onClick={() => onNavigate("shop")}
              sx={styles.navigationButtonStyles}
            >
              {constants.NAVIGATION_LABELS.SHOP}
            </Button>
            <Button
              color="inherit"
              onClick={() => onNavigate("about")}
              sx={styles.navigationButtonStyles}
            >
              {constants.NAVIGATION_LABELS.ABOUT}
            </Button>
            <Button
              color="inherit"
              onClick={() => onNavigate("contacts")}
              sx={styles.navigationButtonStyles}
            >
              {constants.NAVIGATION_LABELS.CONTACTS}
            </Button>
            <Button color="inherit" sx={styles.navigationButtonStyles}>
              {constants.NAVIGATION_LABELS.CUSTOM_ORDERS}
            </Button>
          </Box>
          {/* Right: Icons */}
          <Box sx={styles.iconsContainerStyles}>
            <IconButton
              size="large"
              component="a"
              href={constants.EXTERNAL_LINKS.INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              sx={styles.iconButtonStyles}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton size="large" sx={styles.iconButtonStyles}>
              <SearchIcon />
            </IconButton>
            <IconButton
              size="large"
              onClick={handleCartOpen}
              sx={styles.cartIconButtonStyles}
            >
              <Badge badgeContent={cartCount} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
          {/* Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            slotProps={{
              list: {
                onMouseLeave: handleMenuClose,
              },
            }}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            sx={styles.dropdownMenuStyles}
          >
            <Box sx={styles.menuContentStyles}>
              {/* Left Column */}
              <Box sx={styles.menuColumnStyles}>
                <Typography
                  variant="subtitle2"
                  sx={styles.menuTitleStyles}
                  onClick={handleShopNavigation}
                >
                  {constants.MENU_CATEGORIES.CANDLES.TITLE}
                </Typography>
                <MenuItem onClick={handleShopNavigation}>
                  <Typography variant="body2" sx={styles.menuItemTextStyles}>
                    {constants.MENU_CATEGORIES.CANDLES.ITEMS.AROMATIC}
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleShopNavigation}>
                  <Typography variant="body2" sx={styles.menuItemTextStyles}>
                    {constants.MENU_CATEGORIES.CANDLES.ITEMS.DECORATIVE}
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleShopNavigation}>
                  <Typography variant="body2" sx={styles.menuItemTextStyles}>
                    {constants.MENU_CATEGORIES.CANDLES.ITEMS.SOY}
                  </Typography>
                </MenuItem>
              </Box>
              {/* Right Column */}
              <Box sx={styles.menuColumnRightStyles}>
                <Typography variant="subtitle2" sx={styles.menuSubtitleStyles}>
                  {constants.MENU_CATEGORIES.ACCESSORIES.TITLE}
                </Typography>
                <MenuItem onClick={handleMenuClose}>
                  <Typography variant="body2" sx={styles.menuItemTextStyles}>
                    {constants.MENU_CATEGORIES.ACCESSORIES.ITEMS.CANDLE_HOLDERS}
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Typography variant="body2" sx={styles.menuItemTextStyles}>
                    {constants.MENU_CATEGORIES.ACCESSORIES.ITEMS.WICKS}
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Typography variant="body2" sx={styles.menuItemTextStyles}>
                    {constants.MENU_CATEGORIES.ACCESSORIES.ITEMS.GIFT_PACKAGES}
                  </Typography>
                </MenuItem>
              </Box>
            </Box>
          </Menu>
          {/* Cart Dropdown */}
          <Menu
            anchorEl={cartAnchorEl}
            open={Boolean(cartAnchorEl)}
            onClose={handleCartClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            sx={styles.cartMenuStyles}
          >
            <Box sx={styles.cartContentStyles}>
              <Typography variant="h6" sx={styles.cartTitleStyles}>
                {constants.CART.TITLE(cartCount)}
              </Typography>
              {cartCount === 0 ? (
                <Typography variant="body2" sx={styles.emptyCartStyles}>
                  {constants.CART.EMPTY_MESSAGE}
                </Typography>
              ) : (
                <>
                  {cartItems.map((item) => (
                    <Box key={item.id} sx={styles.cartItemStyles}>
                      {/* Product Image */}
                      <Box
                        component="img"
                        src={item.imageUrl || "/IMG_5833.jpg"}
                        alt={item.name}
                        sx={styles.cartItemImageStyles}
                      />

                      {/* Product Info */}
                      <Box sx={styles.cartItemInfoStyles}>
                        <Typography
                          variant="body2"
                          sx={styles.cartItemNameStyles}
                        >
                          {item.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={styles.cartItemQuantityStyles}
                        >
                          {constants.CART.QUANTITY_LABEL} {item.quantity}
                        </Typography>
                      </Box>

                      {/* Price and Remove Button */}
                      <Box sx={styles.cartItemActionsStyles}>
                        <Typography
                          variant="body2"
                          color="secondary.main"
                          sx={styles.cartItemPriceStyles}
                        >
                          {item.price} {constants.CART.CURRENCY}
                        </Typography>
                        <IconButton
                          size="small"
                          onClick={() => removeFromCart(item.id)}
                          sx={styles.removeItemButtonStyles}
                        >
                          <CloseIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    </Box>
                  ))}
                  <Box sx={styles.cartTotalSectionStyles}>
                    <Box sx={styles.cartTotalRowStyles}>
                      <Typography
                        variant="subtitle1"
                        sx={styles.cartTotalLabelStyles}
                      >
                        {constants.CART.TOTAL_LABEL}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="secondary.main"
                        sx={styles.cartTotalPriceStyles}
                      >
                        {cartTotal} {constants.CART.CURRENCY}
                      </Typography>
                    </Box>

                    <Box sx={styles.cartButtonsContainerStyles}>
                      {" "}
                      <Button
                        variant="outlined"
                        size="small"
                        fullWidth
                        onClick={handleCartNavigation}
                      >
                        {constants.CART.BUTTONS.VIEW_CART}
                      </Button>
                      <Button
                        variant="contained"
                        size="small"
                        fullWidth
                        onClick={handleCartClose}
                      >
                        {constants.CART.BUTTONS.ORDER}
                      </Button>
                    </Box>
                  </Box>
                </>
              )}
            </Box>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
