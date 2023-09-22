import styled from "@emotion/styled";
import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomerView = styled("div")({
  backgroundColor: "#222831",
  padding: "50px",
  color: "white",
  borderRadius: ".5em",
  margin: "1em 1em 0 0",
  paddingTop: "1em",
});

const CustomerImage = styled("div")({
  "& img": {
    width: "38%",
    borderRadius: "7em",
    margin: "1em  0 .5em 0",
    border: "6px solid #FFBE33",
  },
});

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

const CustomerSay = () => {
  return (
    <Grid container spacing={3} paddingBottom={"7em"}>
      <Grid item lg={12}>
        <Box sx={{ paddingTop: "5em" }}>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            What Says Our Customers
          </Typography>
        </Box>
      </Grid>
      <Slider {...settings} style={{ width: "100%", height: "auto" }}>
        <div>
          <Grid container>
            <Grid item lg={6}>
              <CustomerView>
                <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                  Lorem ipsum...
                </Typography>
                <Typography variant="h6">Mike Hemell</Typography>
                <Typography variant="body1">magna hamell</Typography>
              </CustomerView>
              <Grid item lg={6}>
                <CustomerImage>
                  <img
                    src="https://themewagon.github.io/feane/images/client1.jpg"
                    alt="Client"
                  />
                </CustomerImage>
              </Grid>
            </Grid>
            <Grid item lg={6}>
              <CustomerView>
                <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                  Lorem ipsum...
                </Typography>
                <Typography variant="h6">Mike Hemell</Typography>
                <Typography variant="body1">magna hamell</Typography>
              </CustomerView>
              <Grid item lg={6}>
                <CustomerImage>
                  <img
                    src="https://themewagon.github.io/feane/images/client1.jpg"
                    alt="Client"
                  />
                </CustomerImage>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container>
            <Grid item lg={6}>
              <CustomerView>
                <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                  Lorem ipsum...
                </Typography>
                <Typography variant="h6">Mike Hemell</Typography>
                <Typography variant="body1">magna hamell</Typography>
              </CustomerView>
              <Grid item lg={6}>
                <CustomerImage>
                  <img
                    src="https://themewagon.github.io/feane/images/client1.jpg"
                    alt="Client"
                  />
                </CustomerImage>
              </Grid>
            </Grid>
            <Grid item lg={6}>
              <CustomerView>
                <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                  Lorem ipsum...
                </Typography>
                <Typography variant="h6">Mike Hemell</Typography>
                <Typography variant="body1">magna hamell</Typography>
              </CustomerView>
              <Grid item lg={6}>
                <CustomerImage>
                  <img
                    src="https://themewagon.github.io/feane/images/client1.jpg"
                    alt="Client"
                  />
                </CustomerImage>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container>
            <Grid item lg={6}>
              <CustomerView>
                <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                  Lorem ipsum...
                </Typography>
                <Typography variant="h6">Mike Hemell</Typography>
                <Typography variant="body1">magna hamell</Typography>
              </CustomerView>
              <Grid item lg={6}>
                <CustomerImage>
                  <img
                    src="https://themewagon.github.io/feane/images/client1.jpg"
                    alt="Client"
                  />
                </CustomerImage>
              </Grid>
            </Grid>
            <Grid item lg={6}>
              <CustomerView>
                <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                  Lorem ipsum...
                </Typography>
                <Typography variant="h6">Mike Hemell</Typography>
                <Typography variant="body1">magna hamell</Typography>
              </CustomerView>
              <Grid item lg={6}>
                <CustomerImage>
                  <img
                    src="https://themewagon.github.io/feane/images/client1.jpg"
                    alt="Client"
                  />
                </CustomerImage>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Slider>
    </Grid>
  );
};

export default CustomerSay;
