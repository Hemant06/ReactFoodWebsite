import React from "react";

import { Grid, Box, Typography, Button } from "@mui/material";

const WeFeane = () => {
  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: "#222831",
          padding: "5px 250px 90px 250px",
          color: "white",
        }}
      >
        <Grid item lg={6}>
          <Box>
            <img
              src="https://themewagon.github.io/feane/images/about-img.png"
              alt="noimage"
              style={{ height: "660px", paddingTop: "4em" }}
            />
          </Box>
        </Grid>
        <Grid item lg={6}>
          <Box sx={{ paddingTop: "15em" }}>
            <Typography variant="h4" sx={{ paddingBottom: ".5em" }}>
              We Are Feane
            </Typography>
            <Typography variant="body1" sx={{ paddingBottom: "1.5em" }}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </Typography>
            <Button
              variant="contained"
              sx={{
                background: "#FFBE2A",
                ":hover": { backgroundColor: "#E69C00" },
                padding: "7px 45px",
                textTransform: "capitalize",
                fontSize: "1em",
                borderRadius: "1.5em",
              }}
            >
              Read More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WeFeane;
