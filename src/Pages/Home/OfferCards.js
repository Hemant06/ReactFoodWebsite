import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import styled from "@emotion/styled";

const OfferBox = styled("div")({
  backgroundColor: "#222831",
  marginTop: "5em",
  display: "flex",
  padding: "15px 50px",
  borderRadius: ".5em",
  color: "white", // Flexbox to align items side by side
  "& img": {
    transition: " 0.3s ",
    "&:hover": {
      transform: "scale(1.1)",
      zIndex: 1, // This will scale the image by 10% on hover
    },
  },
});

const OfferCards = () => {
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <OfferBox>
              <img
                src="https://themewagon.github.io/feane/images/o1.jpg"
                alt=""
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "9em",
                  marginRight: "2em",
                  border: "5px solid #FFBE33",
                }}
              />

              {/* Text content on the right in a block style */}
              <Box sx={{ paddingTop: "2em" }}>
                <Typography variant="h5">Tasty Thursdays</Typography>
                <Typography variant="h4">20% Off</Typography>
                <Button
                  variant="contained"
                  sx={{
                    background: "#FFBE2A",
                    ":hover": { backgroundColor: "#E69C00" },
                    borderRadius: "1.5em",
                    marginTop: "1em",
                    padding: "7px 35px",
                    textTransform: "capitalize",
                    fontSize: "1em",
                  }}
                >
                  Order Online
                </Button>
              </Box>
            </OfferBox>
          </Grid>
          <Grid item lg={6}>
            <Box
              sx={{
                backgroundColor: "#222831",
                marginTop: "5em",
                display: "flex",
                padding: "15px 50px",
                borderRadius: ".5em",
                color: "white", // Flexbox to align items side by side
              }}
            >
              {/* Image on the left */}
              <img
                src="https://themewagon.github.io/feane/images/o1.jpg"
                alt=""
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "9em",
                  marginRight: "2em",
                  border: "5px solid #FFBE33",
                }}
              />

              {/* Text content on the right in a block style */}
              <Box sx={{ paddingTop: "2em" }}>
                <Typography variant="h5">Tasty Thursdays</Typography>
                <Typography variant="h4">20% Off</Typography>
                <Button
                  variant="contained"
                  sx={{
                    background: "#FFBE2A",
                    ":hover": { backgroundColor: "#E69C00" },
                    borderRadius: "1.5em",
                    marginTop: "1em",
                    padding: "7px 35px",
                    textTransform: "capitalize",
                    fontSize: "1em",
                  }}
                >
                  Order Online
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default OfferCards;
