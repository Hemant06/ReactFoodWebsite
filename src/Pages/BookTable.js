import React from "react";
import ContactUs from "./Home/ContactUs";
import { AppBar, Box, Container, Toolbar, styled } from "@mui/material";
import Topbar from "../HomeLayout/Topbar";
import Footer from "../HomeLayout/Footer";

const Wrapper = styled("div")({
  backgroundImage:
    "url('https://themewagon.github.io/feane/images/hero-bg.jpg')",
  height: "13vh",
});

const BookTable = () => {
  return (
    <Wrapper>
      <Container>
        <Box>
          <AppBar sx={{ backgroundColor: "transparent", position: "absolute" }}>
            <Toolbar>
              <Topbar />
            </Toolbar>
          </AppBar>
        </Box>
        <Box sx={{ paddingTop: "6em" }}>
          <ContactUs />
        </Box>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default BookTable;
