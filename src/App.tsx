import React, { useState, useEffect } from "react";
import { Header } from "./components/pages/home-page/header";
import MainContent from "./components/pages/home-page/main-content";
import AboutUs from "./components/pages/about-us/AboutUs";
import Shop from "./components/pages/shop";
import Contacts from "./components/pages/contacts";
import Cart from "./components/pages/cart";
import { PageType } from "./types";

const App: React.FC = () => {
  // Function to get current page from URL hash
  const getCurrentPageFromUrl = (): PageType => {
    const hash = window.location.hash.replace("#", "");
    const validPages: PageType[] = [
      "home",
      "about",
      "shop",
      "contacts",
      "cart",
    ];
    return validPages.includes(hash as PageType) ? (hash as PageType) : "home";
  };

  const [currentPage, setCurrentPage] = useState<PageType>(() =>
    getCurrentPageFromUrl(),
  );

  // Update URL hash when page changes
  useEffect(() => {
    window.location.hash = currentPage === "home" ? "" : currentPage;
  }, [currentPage]);

  // Listen for browser back/forward button
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getCurrentPageFromUrl());
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Navigation function
  const navigateToPage = (page: PageType) => {
    setCurrentPage(page);
    // Scroll to top when navigating
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header onNavigate={navigateToPage} currentPage={currentPage} />
      {currentPage === "home" && (
        <MainContent onNavigateToShop={() => navigateToPage("shop")} />
      )}{" "}
      {currentPage === "about" && (
        <AboutUs onNavigateToShop={() => navigateToPage("shop")} />
      )}
      {currentPage === "shop" && (
        <Shop onNavigateToShop={() => navigateToPage("shop")} />
      )}{" "}
      {currentPage === "contacts" && (
        <Contacts onNavigateToShop={() => navigateToPage("shop")} />
      )}
      {currentPage === "cart" && (
        <Cart onNavigateToShop={() => navigateToPage("shop")} />
      )}
    </>
  );
};

export default App;
