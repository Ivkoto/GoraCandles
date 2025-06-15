import React, { useState, useEffect } from "react";
import { Container, Box, Typography, Fab } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  KeyboardArrowUp as ArrowUpIcon,
} from "@mui/icons-material";
import { CallToActionFooter } from "../../shared/footer";
import { CONTACTS_TEXT, CONTACTS_DATA } from "./constants";
import * as styles from "./styles";

interface ContactsProps {
  onNavigateToShop?: () => void;
}

const Contacts: React.FC<ContactsProps> = ({ onNavigateToShop }) => {
  const [showScrollTop, setShowScrollTop] = useState(false); // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > styles.scrollThreshold);
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

  // Get icon component based on contact type
  const getIconComponent = (type: string) => {
    switch (type) {
      case "phone":
        return <PhoneIcon sx={styles.iconStyles} />;
      case "email":
        return <EmailIcon sx={styles.iconStyles} />;
      case "address":
        return <LocationIcon sx={styles.iconStyles} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Container sx={styles.containerStyles}>
        {/* Page Title */}
        <Box sx={styles.titleSectionStyles}>
          <Typography variant="h2" component="h1" sx={styles.pageTitleStyles}>
            {CONTACTS_TEXT.PAGE_TITLE}
          </Typography>
        </Box>
        {/* Contact Items Grid */}
        <Grid
          container
          spacing={styles.gridSpacing}
          sx={styles.contactGridStyles}
        >
          {CONTACTS_DATA.map((item, index) => (
            <Grid key={index} size={{ xs: 12, md: 4 }}>
              <Box
                component="a"
                href={item.href}
                target={item.target}
                rel={item.rel}
                sx={styles.contactItemStyles}
              >
                {/* Icon Container */}
                <Box sx={styles.iconContainerStyles}>
                  {getIconComponent(item.type)}
                </Box>

                {/* Content */}
                <Typography variant="h6" sx={styles.contactTitleStyles}>
                  {item.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={styles.contactDescriptionStyles}
                >
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        {/* Contact Form Section (Optional for future implementation) */}
        <Box sx={styles.questionSectionStyles}>
          <Typography variant="h4" sx={styles.questionTitleStyles}>
            {CONTACTS_TEXT.QUESTION_SECTION.TITLE}
          </Typography>
          <Typography variant="body1" sx={styles.questionDescriptionStyles}>
            {CONTACTS_TEXT.QUESTION_SECTION.DESCRIPTION}
          </Typography>{" "}
        </Box>
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

export default Contacts;
