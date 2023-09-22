import {
  AppBar,
  Toolbar,
  Button,
  Container,
  styled,
  Grid,
} from "@mui/material";
import React from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";

function Topbar() {
  const StyledNavLink = styled(NavLink)({
    color: "white",
    fontSize: "20px",
    textDecoration: "none",
    marginRight: "1.5em",
    whiteSpace: "nowrap",
    ":hover": {
      color: "#FFAD1E",
    },
  });
  const LogoLink = styled(NavLink)({
    color: "white",
    textDecoration: "none",
    fontSize: "30px",
  });

  return (
    <AppBar
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        paddingTop: "1em",
        position: "absolute",
        fontFamily: "'Kanit', 'sans-serif'",
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <Grid container spacing={3} alignItems="center">
            <Grid item lg={4}>
              <LogoLink to={"/"}>Feane</LogoLink>
            </Grid>
            <Grid item lg={5}>
              <StyledNavLink to="/">Home</StyledNavLink>
              <StyledNavLink to="/menu">Menu</StyledNavLink>
              <StyledNavLink to="/about">About</StyledNavLink>
              <StyledNavLink to="/booktable">Book Table</StyledNavLink>
            </Grid>
            <Grid
              item
              lg={3}
              sx={{ textAlign: "right", display: "flex", alignItems: "center" }}
            >
              <PermIdentityIcon
                sx={{
                  marginRight: ".5em",
                  verticalAlign: "middle",
                  ":hover": { color: "#FFBE2A", cursor: "pointer" },
                }}
                fontSize="medium"
              />
              <ShoppingCartIcon
                sx={{
                  marginRight: ".5em",
                  ":hover": { color: "#FFBE2A", cursor: "pointer" },
                }}
              />
              <SearchIcon
                sx={{
                  marginRight: ".5em",
                  ":hover": { color: "#FFBE2A", cursor: "pointer" },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  background: "#FFBE2A",
                  ":hover": { backgroundColor: "#E69C00" },
                  borderRadius: "1.5em",
                  textTransform: "capitalize",
                  padding: ".4em 2em",
                  fontSize: "1em",
                }}
              >
                Order Online
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Topbar;
