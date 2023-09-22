import React from "react";
import { Box, Grid, Typography, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
import FacebookIconBase from "@mui/icons-material/Facebook";
import TwitterIconBase from "@mui/icons-material/Twitter";
import LinkedInIconBase from "@mui/icons-material/LinkedIn";
import InstagramIconBase from "@mui/icons-material/Instagram";
import PinterestIconBase from "@mui/icons-material/Pinterest";

// const Box = styled.div({
//   ,
// });
const iconStyles = {
  borderRadius: "1em",
  padding: "4px",
  fontSize: "35px",
  backgroundColor: "#fff",
  color: "black",
  marginRight: "10px",
  transition: "color 0.3s ease-in-out",
  "&:hover": {
    color: "#FFBE33",
    cursor: "pointer",
  },
};
const StyledIcon = (component) => styled(component)(iconStyles);

const FacebookIcon = StyledIcon(FacebookIconBase);
const TwitterIcon = StyledIcon(TwitterIconBase);
const LinkedInIcon = StyledIcon(LinkedInIconBase);
const InstagramIcon = StyledIcon(InstagramIconBase);
const PinterestIcon = StyledIcon(PinterestIconBase);

function Footer() {
  return (
    <>
      <Box
        sx={{
          padding: "60px 200px",
          backgroundColor: "#222831",
          paddingTop: "4em",
          color: "white",
        }}
      >
        <Grid container spacing={2}>
          <Grid item lg={4}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h5" sx={{ marginBottom: "1em" }}>
                Contact Us
              </Typography>
              <Typography variant="body1">Location</Typography>
              <Typography variant="body1"> Call +01 1234567890</Typography>
              <Typography variant="body1"> demo@gmail.com</Typography>
            </Box>
          </Grid>
          <Grid item lg={4}>
            <Box sx={{ textAlign: "center" }}>
              <NavLink
                to="/"
                style={{
                  color: "white",
                  fontSize: "28px",
                  textDecoration: "none",
                }}
              >
                Feane
              </NavLink>
              <Typography variant="body1" sx={{ paddingTop: "1em" }}>
                Necessary, making this the first true generator on the Internet.
                It uses a dictionary of over 200 Latin words, combined with
              </Typography>
              <Box paddingTop={"1em"}>
                <FacebookIcon />
                <TwitterIcon />
                <LinkedInIcon />
                <InstagramIcon />
                <PinterestIcon />
              </Box>
            </Box>
          </Grid>
          <Grid item lg={4}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h5" sx={{ paddingBottom: "1em" }}>
                Opening Hours
              </Typography>
              <Typography variant="body1" sx={{ paddingBottom: "1em" }}>
                {" "}
                Everyday
              </Typography>
              <Typography variant="body1"> 10.00 Am -10.00 Pm</Typography>
            </Box>
          </Grid>
          <Grid item lg={12} sx={{ textAlign: "center" }}>
            <Box sx={{ paddingTop: "2.8em" }}>
              <Typography variant="body1">
                © 2023 All Rights Reserved By Free Html Templates
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={12} sx={{ textAlign: "center" }}>
            <Box>
              <Typography variant="body1">
                © Distributed By ThemeWagon
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default Footer;
