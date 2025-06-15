// src/services/productService.ts
import { ProductCardProps } from "../components/shared/product-card/ProductCard";

// Sample product data with sales/trending metrics
const allProducts: (ProductCardProps & {
  salesCount: number;
  trending: boolean;
})[] = [
  {
    id: 1,
    title: "Vanilla Dreams",
    imageUrl: "/IMG_5833.jpg",
    price: 88,
    salesCount: 145,
    trending: true,
  },
  {
    id: 2,
    title: "Lavender Fields",
    imageUrl: "/IMG_5835.png",
    price: 92,
    salesCount: 132,
    trending: true,
  },
  {
    id: 3,
    title: "Ocean Waves",
    imageUrl: "/IMG_5833.jpg",
    price: 85,
    salesCount: 118,
    trending: true,
  },
  {
    id: 4,
    title: "Tropical Breeze",
    imageUrl: "/IMG_5835.png",
    price: 80,
    salesCount: 95,
    trending: true,
  },
  {
    id: 5,
    title: "Desert Bloom",
    imageUrl: "/IMG_5833.jpg",
    price: 70,
    salesCount: 87,
    trending: false,
  },
  {
    id: 6,
    title: "Forest Mist",
    imageUrl: "/IMG_5835.png",
    price: 90,
    salesCount: 78,
    trending: false,
  },
  {
    id: 7,
    title: "Mountain Air",
    imageUrl: "/IMG_5833.jpg",
    price: 75,
    salesCount: 65,
    trending: false,
  },
  {
    id: 8,
    title: "Sunset Glow",
    imageUrl: "/IMG_5835.png",
    price: 95,
    salesCount: 58,
    trending: false,
  },
  {
    id: 9,
    title: "Citrus Splash",
    imageUrl: "/IMG_5833.jpg",
    price: 82,
    salesCount: 52,
    trending: false,
  },
  {
    id: 10,
    title: "Cinnamon Spice",
    imageUrl: "/IMG_5835.png",
    price: 78,
    salesCount: 45,
    trending: false,
  },
  {
    id: 11,
    title: "Fresh Mint",
    imageUrl: "/IMG_5833.jpg",
    price: 85,
    salesCount: 42,
    trending: false,
  },
  {
    id: 12,
    title: "Rose Garden",
    imageUrl: "/IMG_5835.png",
    price: 98,
    salesCount: 38,
    trending: false,
  },
];

export interface TrendingProduct extends ProductCardProps {
  salesCount: number;
  trending: boolean;
}

// Get the top 4 most traded/best-selling candles
export const getTrendingProducts = (
  limit: number = 4,
): Promise<TrendingProduct[]> => {
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      const trendingProducts = allProducts
        .filter((product) => product.trending)
        .sort((a, b) => b.salesCount - a.salesCount)
        .slice(0, limit);

      resolve(trendingProducts);
    }, 300); // 300ms delay to simulate network request
  });
};

// Get all products sorted by sales count
export const getAllProductsBySales = (): Promise<TrendingProduct[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const sortedProducts = allProducts.sort(
        (a, b) => b.salesCount - a.salesCount,
      );

      resolve(sortedProducts);
    }, 300);
  });
};

// Get products by category (if needed for future features)
export const getProductsByCategory = (
  category: string,
): Promise<TrendingProduct[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // For now, return all products as we don't have categories implemented
      const products = allProducts.sort((a, b) => b.salesCount - a.salesCount);
      resolve(products);
    }, 300);
  });
};
