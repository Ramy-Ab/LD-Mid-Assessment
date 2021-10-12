import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import BlogItem from "./BlogItem";

export default function BlogList({ blogs }) {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.container} container xs={12}>
        {blogs.map((poste, idx) => (
          <BlogItem
            key={poste.id}
            image_url={poste.image_url}
            category={poste.category}
            title={poste.title}
            link={poste.link}
            read_time={poste.read_time}
          />
        ))}
      </Grid>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
