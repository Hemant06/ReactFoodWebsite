import React from "react";
import { Typography, Grid, Container, styled, Button } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WrapperBox = styled("div")({
  backgroundImage: "url(https://themewagon.github.io/feane/images/hero-bg.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "200px 0px 295px 0px",
  overflowX: "hidden",
});
const StyledSlider = styled(Slider)({
  width: "100%",
});
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  ltl: true,
};

const BannerText = styled("div")({
  color: "white",
  // paddingTop: "13em",
});
function Banner() {
  return (
    <WrapperBox>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item lg={12}>
            <StyledSlider {...sliderSettings}>
              <BannerText sx={{ padding: "0px 160px" }}>
                <Typography variant="h3" sx={{ paddingBottom: "10px" }}>
                  Fast Food Restaurant
                </Typography>
                <Typography variant="body1" sx={{ width: "45%" }}>
                  Doloremque, itaque aperiam facilis rerum, commodi, temporibus
                  sapiente ad mollitia laborum quam quisquam esse error unde.
                  Tempora ex doloremque, labore, sunt repellat dolore, iste
                  magni quos nihil ducimus libero ipsam.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    background: "#FFBE2A",
                    ":hover": { backgroundColor: "#E69C00" },
                    borderRadius: "1.5em",
                    marginTop: "2em",
                    padding: "7px 35px",
                    textTransform: "capitalize",
                    fontSize: "1em",
                  }}
                >
                  Order Online
                </Button>
              </BannerText>

              <BannerText sx={{ padding: "0px 160px" }}>
                <Typography variant="h3" sx={{ paddingBottom: "10px" }}>
                  Fast Food Restaurant
                </Typography>
                <Typography variant="body1" sx={{ width: "45%" }}>
                  Doloremque, itaque aperiam facilis rerum, commodi, temporibus
                  sapiente ad mollitia laborum quam quisquam esse error unde.
                  Tempora ex doloremque, labore, sunt repellat dolore, iste
                  magni quos nihil ducimus libero ipsam.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    background: "#FFBE2A",
                    ":hover": { backgroundColor: "#E69C00" },
                    borderRadius: "1.5em",
                    marginTop: "2em",
                    padding: "7px 35px",
                    textTransform: "capitalize",
                    fontSize: "1em",
                  }}
                >
                  Order Online
                </Button>
              </BannerText>
            </StyledSlider>
          </Grid>
        </Grid>
      </Container>
    </WrapperBox>
  );
}

export default Banner;
