import React from "react";
import { Container, Typography, Box, Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { CallToActionFooter } from "../../shared/footer";
import { ABOUT_US_TEXT, ABOUT_US_FEATURES } from "./constants";
import * as styles from "./styles";

interface AboutUsProps {
  onNavigateToShop?: () => void;
}

const AboutUs: React.FC<AboutUsProps> = ({ onNavigateToShop }) => {
  return (
    <>
      {" "}
      <Container sx={styles.containerStyles}>
        {/* Main Heading */}
        <Box sx={styles.headingSectionStyles}>
          <Typography variant="h1" component="h1" sx={styles.mainHeadingStyles}>
            {ABOUT_US_TEXT.PAGE_TITLE}
          </Typography>
          {/* Welcome Text */}
          <Typography variant="h4" component="p" sx={styles.welcomeTextStyles}>
            {ABOUT_US_TEXT.WELCOME_MESSAGE}
            <Box component="span" sx={styles.brandNameStyles}>
              {ABOUT_US_TEXT.BRAND_NAME}
            </Box>
            {ABOUT_US_TEXT.WELCOME_SUFFIX}
          </Typography>
          {/* Description */}
          <Typography variant="body1" sx={styles.descriptionStyles}>
            {ABOUT_US_TEXT.MAIN_DESCRIPTION.PART_1}
            <Box component="span" sx={styles.brandNameStyles}>
              {ABOUT_US_TEXT.MAIN_DESCRIPTION.HIGHLIGHTED_TEXT}
            </Box>
            {ABOUT_US_TEXT.MAIN_DESCRIPTION.PART_2}
          </Typography>
        </Box>
        {/* Features Grid */}
        <Grid container spacing={styles.gridSpacing}>
          {ABOUT_US_FEATURES.map((feature, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card sx={styles.featureCardStyles}>
                <CardContent>
                  <Box sx={styles.featureIconContainerStyles}>
                    <Box
                      component="img"
                      src={feature.icon}
                      alt={feature.alt}
                      sx={styles.featureIconStyles}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={styles.featureTitleStyles}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={styles.featureDescriptionStyles}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>{" "}
        {/* Additional Content Section */}
        <Box sx={styles.additionalContentStyles}>
          <Typography
            variant="h4"
            component="h2"
            sx={styles.additionalHeadingStyles}
          >
            {ABOUT_US_TEXT.ADDITIONAL_HEADING}
          </Typography>

          <Typography variant="body1" sx={styles.additionalDescriptionStyles}>
            {ABOUT_US_TEXT.ADDITIONAL_DESCRIPTION}
          </Typography>
        </Box>
      </Container>
      {/* Call to Action Footer */}
      <CallToActionFooter onNavigateToShop={onNavigateToShop} />
    </>
  );
};

export default AboutUs;
