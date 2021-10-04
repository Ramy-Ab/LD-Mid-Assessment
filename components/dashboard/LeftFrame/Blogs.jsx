import { Grid, Paper, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import BlogList from "./BlogList";
import BlogHeader from "./BlogHeader";

export default function Blogs() {
  const classes = useStyles();
  return (
    <Grid container xs={12}>
      <Grid item xs={12}>
        <Paper elevation={3} className={classes.paper} xs={12}>
          <Stack spacing={5} xs={12}>
            <BlogHeader />
            <BlogList />
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    alignItems: "flex-start",
    minHeight: "617px",
    borderRadius: "10px",
    marginBottom: "24px",
    padding: "24px",
  },
}));
