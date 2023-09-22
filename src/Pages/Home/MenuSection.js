import React from "react";
import { useState } from "react";
import {
  Container,
  Box,
  Grid,
  Typography,
  styled,
  Button,
  Link,
} from "@mui/material";

import OneOfferCard from "./OneOfferCard";

const StyledLink = styled(Link)(({ theme, isSelected }) => ({
  backgroundColor: isSelected ? "#222831" : "transparent",
  padding: ".5em 1.3em",
  borderRadius: "1em",
  textDecoration: "none",
  color: isSelected ? "white" : theme.palette.text.primary,
  margin: "0.5em",
  cursor: "pointer",
}));

function MenuSection() {
  const [selectedItem, setSelectedItem] = useState("All");
  return (
    <Box>
      <Container>
        <Grid container spacing={3}>
          <Grid item lg={12}>
            <Box
              sx={{
                textAlign: "center",
                paddingTop: "5em",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                Our Menu
              </Typography>
            </Box>
            <Box
              sx={{
                textAlign: "center",
                paddingTop: "3em",
                paddingLeft: "3em",
                paddingBottom: "2em",
              }}
            >
              <StyledLink
                isSelected={selectedItem === "All"}
                onClick={() => setSelectedItem("All")}
                to="/"
              >
                All
              </StyledLink>
              <StyledLink
                isSelected={selectedItem === "Burger"}
                onClick={() => setSelectedItem("Burger")}
                to="/burger"
              >
                Burger
              </StyledLink>
              <StyledLink
                isSelected={selectedItem === "Pizza"}
                onClick={() => setSelectedItem("Pizza")}
                to="/pizza"
              >
                Pizza
              </StyledLink>
              <StyledLink
                isSelected={selectedItem === "Pasta"}
                onClick={() => setSelectedItem("Pasta")}
                to="/pasta"
              >
                Pasta
              </StyledLink>
              <StyledLink
                isSelected={selectedItem === "Fries"}
                onClick={() => setSelectedItem("Fries")}
                to="/fries"
              >
                Fries
              </StyledLink>
            </Box>
          </Grid>
          <OneOfferCard />
          <OneOfferCard />
          <OneOfferCard />
          <Box
            sx={{
              display: "block",
              margin: "0 auto",
              paddingBottom: "6em",
            }}
          >
            <Button
              variant="contained"
              sx={{
                marginTop: "3em",
                background: "#FFBE2A",
                ":hover": { backgroundColor: "#E69C00" },
                padding: "7px 55px",
                textTransform: "capitalize",
                fontSize: "1em",
                borderRadius: "1.5em",
              }}
            >
              View More
            </Button>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}

export default MenuSection;
