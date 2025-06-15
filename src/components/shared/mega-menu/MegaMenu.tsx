import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Box,
  Typography,
} from "@mui/material";
import * as constants from "./constants";
import * as styles from "./styles";

export const MegaMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  return (
    <AppBar sx={styles.appBarStyles}>
      <Toolbar sx={styles.toolbarStyles}>
        <Box sx={styles.containerStyles}>
          <Button
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
            aria-controls={constants.ARIA_LABELS.PRODUCTS_MENU_ID}
            aria-haspopup="true"
            sx={styles.shopButtonStyles}
          >
            {constants.NAVIGATION.SHOP_BUTTON}
          </Button>
          <Menu
            id={constants.ARIA_LABELS.PRODUCTS_MENU_ID}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            slotProps={{
              list: {
                onMouseEnter: handleOpen,
                onMouseLeave: handleClose,
              },
            }}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            sx={styles.menuStyles}
          >
            {" "}
            <MenuItem sx={styles.menuItemStyles}>
              <Typography variant="body1">
                {constants.MENU_ITEMS.CANDLES}
              </Typography>
            </MenuItem>
            <MenuItem sx={styles.menuItemStyles}>
              <Typography variant="body1">
                {constants.MENU_ITEMS.ACCESSORIES}
              </Typography>
            </MenuItem>
            <MenuItem sx={styles.menuItemStyles}>
              <Typography variant="body1">
                {constants.MENU_ITEMS.PACKAGES}
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
        {/* Add other nav buttons here */}
      </Toolbar>
    </AppBar>
  );
};
