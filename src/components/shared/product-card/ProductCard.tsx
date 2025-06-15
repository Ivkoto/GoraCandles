import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import * as constants from "./constants";
import * as styles from "./styles";

export interface ProductCardProps {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  imageUrl,
  price,
}) => (
  <Card sx={styles.cardStyles}>
    <CardMedia
      component="img"
      height={styles.dimentions.image_height}
      image={imageUrl}
      alt={title}
      sx={styles.cardMediaStyles}
    />
    <CardContent sx={styles.cardContentStyles}>
      <Typography variant="h6" component="h2" sx={styles.titleStyles}>
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        color="secondary.main"
        sx={styles.priceStyles}
      >
        {price.toFixed(2)} {constants.CURRENCY.SYMBOL}
      </Typography>
    </CardContent>
  </Card>
);
