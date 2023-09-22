import { Grid, Typography } from "@mui/material";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  Box,
  FormControl,
  InputLabel,
} from "@mui/material";

import React from "react";

const ContactUs = () => {
  return (
    <Box sx={{ paddingTop: "6em" }}>
      <Grid container spacing={2}>
        <Grid item lg={6}>
          <Typography variant="h5">Book a Table</Typography>
          <form>
            <TextField
              required
              fullWidth
              variant="outlined"
              label="Your Name"
              placeholder="Your Name"
              margin="normal"
            />
            <TextField
              required
              fullWidth
              variant="outlined"
              type="number"
              label="Phone Number"
              placeholder="Phone Number"
              margin="normal"
            />
            <TextField
              required
              fullWidth
              variant="outlined"
              type="email"
              label="Your Email"
              placeholder="Your Email"
              margin="normal"
            />
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel>How many persons?</InputLabel>
              <Select
                required
                // value={persons}
                // onChange={handleSelectChange}
                label="How many persons?"
                placeholder="How many persons?"
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
            <TextField
              required
              fullWidth
              variant="outlined"
              type="date"
              label="Date"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Box sx={{ paddingTop: "2em" }}>
              <Button
                type="submit"
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
          </form>
        </Grid>
        <Grid item lg={6}>
          <iframe
            style={{
              border: "none",
              borderRadius: ".5em",
              margin: "2.5em 0px 0px 1em",
            }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
            width="600"
            height="380"
            allowfullscreen=""
            title="hello"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
