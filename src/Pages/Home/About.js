import React from "react";
import { AppBar, Toolbar, Container, styled, Box } from "@mui/material";
import Topbar from "../../HomeLayout/Topbar";
import Footer from "../../HomeLayout/Footer";
import WeFeane from "./WeFeane";

const Wrapper = styled("div")({
  backgroundImage:
    "url('https://themewagon.github.io/feane/images/hero-bg.jpg')",
  height: "14vh",
});

const About = () => {
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
      </Container>
      <Box paddingTop={"7em"}>
        <WeFeane className="we-feane" />
      </Box>
      <Box style={{}}>
        <Footer className="about-footer" />
      </Box>
    </Wrapper>
  );
};

export default About;
