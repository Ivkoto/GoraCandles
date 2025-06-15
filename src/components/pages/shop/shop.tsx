import React, { useState, useEffect } from "react";
import { Container, Box, IconButton, Fab } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  ShoppingCart as ShoppingCartIcon,
  KeyboardArrowUp as ArrowUpIcon,
} from "@mui/icons-material";
import {
  ProductCard,
  ProductCardProps,
} from "../../shared/product-card/ProductCard";
import { useCart } from "../../../context/CartContext";
import { CallToActionFooter } from "../../shared/footer";
import {
  getAllProductsBySales,
  TrendingProduct,
} from "../../../services/productService";
import * as styles from "./styles";

interface ShopProps {
  onNavigateToShop?: () => void;
}

const Shop: React.FC<ShopProps> = ({ onNavigateToShop }) => {
  const { addToCart } = useCart();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [products, setProducts] = useState<TrendingProduct[]>([]);

  // Load all products on component mount
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const allProducts = await getAllProductsBySales();
        setProducts(allProducts);
      } catch (error) {
        console.error("Error loading products:", error);
        setProducts([]);
      }
    };

    loadProducts();
  }, []);

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > styles.scroll.threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleAddToCart = (product: ProductCardProps) => {
    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
    });
  };

  return (
    <>
      {" "}
      <Container sx={styles.containerStyles}>
        <Grid container spacing={styles.gridSpacing}>
          {products.map((product, index) => (
            <Grid key={`${product.title}-${index}`} size={styles.gridItemSizes}>
              <Box sx={styles.productCardContainerStyles}>
                <ProductCard {...product} />
                <IconButton
                  className={styles.css_classes.cart_icon}
                  size="small"
                  onClick={() => handleAddToCart(product)}
                  sx={styles.cartIconButtonStyles}
                >
                  <ShoppingCartIcon fontSize="small" />
                </IconButton>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Call to Action Footer */}
      <CallToActionFooter onNavigateToShop={onNavigateToShop} />
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Fab onClick={scrollToTop} sx={styles.scrollToTopButtonStyles}>
          <ArrowUpIcon />
        </Fab>
      )}
    </>
  );
};

export default Shop;
