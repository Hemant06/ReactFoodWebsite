import { AppBar, Container, Toolbar, Box } from "@mui/material";
import React from "react";
import Topbar from "../../HomeLayout/Topbar";
import styled from "@emotion/styled";
import MenuSection from "./MenuSection";
import Footer from "../../HomeLayout/Footer";

const Wrapper = styled("div")({
  backgroundImage:
    "url('https://themewagon.github.io/feane/images/hero-bg.jpg')",
  height: "14vh",
});

const Menu = () => {
  return (
    <Wrapper>
      <Container>
        <AppBar
          sx={{
            backgroundColor: "transparent",
            position: "absolute",
            boxShadow: "none",
          }}
        >
          <Toolbar>
            <Topbar />
          </Toolbar>
        </AppBar>
        <Box sx={{ paddingTop: "6em" }}>
          <MenuSection />
        </Box>
      </Container>
      <Box>
        <Footer />
      </Box>
    </Wrapper>
  );
};

export default Menu;
