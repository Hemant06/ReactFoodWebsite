import React from "react";
import { Box, Container } from "@mui/material";
import Topbar from "./Topbar";
import Banner from "../Pages/Home/Banner";
import Footer from "./Footer";
import OfferCards from "../Pages/Home/OfferCards";
import MenuSection from "../Pages/Home/MenuSection";
import WeFeane from "../Pages/Home/WeFeane";
import ContactUs from "../Pages/Home/ContactUs";
import CustomerSay from "../Pages/Home/CustomerSay";

export const Home = () => {
  return (
    <Box>
      <Box>
        <Topbar />
      </Box>
      <Box>
        <Banner />
      </Box>

      <Box>
        <OfferCards />
      </Box>
      <Box>
        <MenuSection />
      </Box>
      <Box>
        <WeFeane />
      </Box>
      <Container>
        <ContactUs />
      </Container>
      <Box>
        <Container>
          <CustomerSay />
        </Container>
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};
