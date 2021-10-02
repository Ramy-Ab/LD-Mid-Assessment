import { Grid } from "@mui/material";

export default function BlogItem({ x }) {
  return (
    <>
      <Grid container xs={12} md={5.5}>
        {x}
      </Grid>
    </>
  );
}
