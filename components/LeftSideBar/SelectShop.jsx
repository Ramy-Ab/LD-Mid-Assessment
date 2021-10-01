import { FormControl, Grid, MenuItem, Select, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

export default function SelectShop() {
  const classes = useStyle();
  const [store, setStore] = React.useState("Fenoh Store");

  const handleChange = (event) => {
    setStore(event.target.value);
  };
  return (
    <Grid container className={classes.container}>
      <Grid item>
        <Typography variant="bold1">Select your shop</Typography>
      </Grid>
      <Grid item>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            value={store}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Fenoh Store"}>Fenoh Store</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}

const useStyle = makeStyles((theme) => ({
  container: {
    marginTop: "20px",
  },
}));
