import React from "react";
import { Box, Typography, Link, Button } from "@mui/material";
import * as constants from "./constants";
import * as styles from "./styles";

interface CallToActionFooterProps {
  onNavigateToShop?: () => void;
}

const CallToActionFooter: React.FC<CallToActionFooterProps> = ({
  onNavigateToShop,
}) => {
  return (
    <>
      {/* Free space above footer */}
      <Box sx={styles.freeSpaceStyles} />
      {/* Footer Image with Overlaid Text and Button */}
      <Box
        sx={{
          ...styles.heroImageContainerStyles,
          backgroundImage: `url(${constants.IMAGES.BACKGROUND})`,
        }}
      >
        {/* Overlaid Content */}
        <Box sx={styles.overlaidContentStyles}>
          {/* Text */}
          <Typography variant="h3" component="h2" sx={styles.heroTitleStyles}>
            {constants.HERO_SECTION.TITLE}
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
      {/* Footer Content Below Image */}
      <Box sx={styles.footerContentStyles}>
        {/* Main Content Container */}
        <Box sx={styles.mainContentContainerStyles}>
          {/* Left Section - Information */}
          <Box sx={styles.leftSectionStyles}>
            <Typography variant="h6" sx={styles.sectionTitleStyles}>
              {constants.FOOTER_SECTIONS.INFORMATION.TITLE}
            </Typography>
            <Box sx={styles.linksContainerStyles}>
              <Box sx={styles.linkRowStyles}>
                <Link href="#" sx={styles.linkStyles}>
                  {constants.FOOTER_SECTIONS.INFORMATION.LINKS.DELIVERY}
                </Link>
                <Typography sx={styles.separatorStyles}>|</Typography>
                <Link href="#" sx={styles.linkStyles}>
                  {constants.FOOTER_SECTIONS.INFORMATION.LINKS.QUESTIONS}
                </Link>
              </Box>
              <Link href="#" sx={styles.linkStylesRight}>
                {constants.FOOTER_SECTIONS.INFORMATION.LINKS.TERMS}
              </Link>
              <Link href="#" sx={styles.linkStylesRight}>
                {constants.FOOTER_SECTIONS.INFORMATION.LINKS.PRIVACY}
              </Link>
              <Box sx={styles.linkRowStyles}>
                <Link href="#" sx={styles.linkStyles}>
                  {constants.FOOTER_SECTIONS.INFORMATION.LINKS.POLICY}
                </Link>
                <Typography sx={styles.separatorStyles}>|</Typography>
                <Link href="#" sx={styles.linkStyles}>
                  {constants.FOOTER_SECTIONS.INFORMATION.LINKS.COOKIES}
                </Link>
              </Box>
            </Box>
          </Box>
          {/* Center Section - Logo */}
          <Box sx={styles.centerSectionStyles}>
            <Box
              component="img"
              src={constants.IMAGES.LOGO}
              alt={constants.ALT_TEXTS.LOGO}
              sx={styles.logoStyles}
            />
          </Box>
          {/* Right Section - Shop */}
          <Box sx={styles.rightSectionStyles}>
            <Typography variant="h6" sx={styles.sectionTitleStyles}>
              {constants.FOOTER_SECTIONS.SHOP.TITLE}
            </Typography>

            <Box sx={styles.linksContainerStyles}>
              <Link
                href={constants.EXTERNAL_LINKS.GOOGLE_MAPS}
                target="_blank"
                rel="noopener noreferrer"
                sx={styles.linkStylesLeft}
              >
                {constants.FOOTER_SECTIONS.SHOP.ADDRESS}
              </Link>
              <Typography sx={styles.noteTextStyles}>
                {constants.FOOTER_SECTIONS.SHOP.NOTE}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CallToActionFooter;
