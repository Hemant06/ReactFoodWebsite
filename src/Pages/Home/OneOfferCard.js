import React from "react";
import { Container, Grid, Typography, styled, Box } from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const MenuItems = styled("div")({
  marginTop: "30px",
  borderRadius: "3em",
  color: "white",
  "& img": {
    height: "150px",
    width: "150px",
    display: "block",
    margin: "0 auto",

    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)", // This will scale the image by 10% on hover
    },
  },
});
const StyledIcon = styled("div")(({ theme }) => ({
  backgroundColor: "#FFBE33",
  borderRadius: "2em",
  padding: ".2em",
  fontSize: "2.5em",
  color: "white",
  cursor: "pointer",
}));
const MenuBox = styled("div")({
  paddingTop: ".7em",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "& ShoppingCartIcon": {},
});
const MenuData = styled("div")({
  paddingTop: "2.5em",
});
const OneOfferCard = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item lg={4}>
          <MenuItems>
            <Box
              sx={{
                backgroundColor: "#F1F2F3",
                borderRadius: "1.5em",
                padding: "2em 4em",
              }}
            >
              <img
                src="https://themewagon.github.io/feane/images/f1.png"
                alt=""
              />
            </Box>
            <MenuData
              sx={{
                backgroundColor: "#222831",
                padding: "2em 1em",
                borderRadius: "1em",
              }}
            >
              <Typography variant="h6">Delicious Pizza</Typography>
              <Typography variant="body1">
                Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
                velit, magnam voluptatem repellendus sed eaque
              </Typography>
              <MenuBox sx={{ backgroundColor: "#222831" }}>
                <Typography variant="body1">$20</Typography>
                <StyledIcon as={ShoppingCartIcon} />
              </MenuBox>
            </MenuData>
          </MenuItems>
        </Grid>
        <Grid item lg={4}>
          <MenuItems>
            <Box
              sx={{
                backgroundColor: "#F1F2F3",
                borderRadius: "1.5em",
                padding: "2em 4em",
              }}
            >
              <img
                src="https://themewagon.github.io/feane/images/f1.png"
                alt=""
              />
            </Box>
            <MenuData
              sx={{
                backgroundColor: "#222831",
                padding: "2em 1em",
                borderRadius: "1em",
              }}
            >
              <Typography variant="h6">Delicious Pizza</Typography>
              <Typography variant="body1">
                Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
                velit, magnam voluptatem repellendus sed eaque
              </Typography>
              <MenuBox sx={{ backgroundColor: "#222831" }}>
                <Typography variant="body1">$20</Typography>
                <StyledIcon as={ShoppingCartIcon} />
              </MenuBox>
            </MenuData>
          </MenuItems>
        </Grid>
        <Grid item lg={4}>
          <MenuItems>
            <Box
              sx={{
                backgroundColor: "#F1F2F3",
                borderRadius: "1.5em",
                padding: "2em 4em",
              }}
            >
              <img
                src="https://themewagon.github.io/feane/images/f1.png"
                alt=""
              />
            </Box>
            <MenuData
              sx={{
                backgroundColor: "#222831",
                padding: "2em 1em",
                borderRadius: "1em",
              }}
            >
              <Typography variant="h6">Delicious Pizza</Typography>
              <Typography variant="body1">
                Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
                velit, magnam voluptatem repellendus sed eaque
              </Typography>
              <MenuBox sx={{ backgroundColor: "#222831" }}>
                <Typography variant="body1">$20</Typography>
                <StyledIcon as={ShoppingCartIcon} />
              </MenuBox>
            </MenuData>
          </MenuItems>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OneOfferCard;
