import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Fab,
  IconButton,
  CircularProgress,
} from "@mui/material";
import {
  KeyboardArrowUp as ArrowUpIcon,
  ShoppingCart as ShoppingCartIcon,
} from "@mui/icons-material";
import {
  getTrendingProducts,
  TrendingProduct,
} from "../../../../services/productService";
import { useCart } from "../../../../context/CartContext";
import { CallToActionFooter } from "../../../shared/footer";
import * as styles from "./styles";
import * as constants from "./constants";

interface MainContentProps {
  onNavigateToShop?: () => void;
}

const MainContent: React.FC<MainContentProps> = ({ onNavigateToShop }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [trendingProducts, setTrendingProducts] = useState<TrendingProduct[]>(
    [],
  );
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > constants.SCROLL.THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load trending products on component mount
  useEffect(() => {
    const loadTrendingProducts = async () => {
      try {
        setLoading(true);
        const products = await getTrendingProducts(4);
        setTrendingProducts(products);
      } catch (error) {
        console.error("Error loading trending products:", error);
        // Fallback to empty array on error
        setTrendingProducts([]);
      } finally {
        setLoading(false);
      }
    };

    loadTrendingProducts();
  }, []);

  // Add product to cart
  const handleAddToCart = (product: TrendingProduct) => {
    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
    });
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {/* Hero Section with Background Image */}
      <Box sx={styles.heroSectionStyles}>
        {/* Centered Content Box */}
        <Box sx={styles.centeredContentBoxStyles}>
          {/* Candles Image */}
          <Box
            component="img"
            src={constants.IMAGES.CANDLES_MOCK}
            alt={constants.ALT_TEXTS.HANDMADE_CANDLES}
            sx={styles.candlesImageStyles}
          />
          {/* Handmade Text */}
          <Typography variant="body1" sx={styles.handmadeTextStyles}>
            {constants.HERO_SECTION.HANDMADE_TEXT}
          </Typography>
          {/* Candles Heading */}
          <Typography
            variant="h2"
            component="h1"
            sx={styles.candlesHeadingStyles}
          >
            {constants.HERO_SECTION.CANDLES_HEADING}
          </Typography>
          {/* Shop Button */}
          <Button
            variant="contained"
            size="large"
            onClick={onNavigateToShop}
            sx={styles.shopButtonStyles}
          >
            {constants.HERO_SECTION.SHOP_BUTTON}
          </Button>
        </Box>
      </Box>
      {/* Trending Products Section */}
      <Box sx={styles.trendingProductsSectionStyles}>
        {/* Section Title */}
        <Typography variant="h3" component="h2" sx={styles.sectionTitleStyles}>
          {constants.TRENDING_SECTION.TITLE}
        </Typography>
        {/* Products Grid */}
        <Box sx={styles.productsGridStyles}>
          {loading
            ? // Loading state
              [...Array(4)].map((_, index) => (
                <Box
                  key={`${constants.LOADING.KEY_PREFIX}${index}`}
                  sx={styles.loadingBoxStyles}
                >
                  <CircularProgress sx={styles.loadingSpinnerStyles} />
                </Box>
              ))
            : // Trending products
              trendingProducts.map((product) => (
                <Box key={product.id} sx={styles.productCardStyles}>
                  {/* Product Image */}
                  <Box
                    component="img"
                    src={product.imageUrl}
                    alt={product.title}
                    sx={styles.productImageStyles}
                  />
                  {/* Add to Cart Button - appears on hover */}
                  <IconButton
                    className={constants.CSS_CLASSES.ADD_TO_CART_BUTTON}
                    size="small"
                    onClick={() => handleAddToCart(product)}
                    sx={styles.addToCartButtonStyles}
                  >
                    <ShoppingCartIcon
                      fontSize="small"
                      sx={styles.addToCartIconStyles}
                    />
                  </IconButton>
                  {/* Trending Badge */}
                  {product.trending && (
                    <Box sx={styles.trendingBadgeStyles}>
                      {constants.TRENDING_SECTION.BADGE_TEXT}
                    </Box>
                  )}
                  {/* Product Info */}
                  <Box sx={styles.productInfoStyles}>
                    <Typography variant="h6" sx={styles.productTitleStyles}>
                      {product.title}
                    </Typography>
                    <Box sx={styles.productInfoRowStyles}>
                      <Typography sx={styles.productPriceStyles}>
                        {product.price} {constants.PRODUCT.CURRENCY}
                      </Typography>
                      <Typography sx={styles.productSalesStyles}>
                        {product.salesCount} {constants.PRODUCT.SALES_SUFFIX}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
        </Box>
      </Box>
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

export default MainContent;
