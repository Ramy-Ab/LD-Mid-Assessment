import { Grid, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";

export default function BlogItem({
  image_url,
  category,
  title,
  link,
  read_time,
}) {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.container} container xs={12} md={6}>
        <Grid item className={classes.rightGrid}>
          <Image
            src={image_url}
            alt="ok"
            height={100}
            width={100}
            layout="fixed"
          />
        </Grid>
        <Grid item xs={7}>
          <Stack spacing={1}>
            <Typography variant="blogTitle">{category}</Typography>
            <Typography variant="blogBody">{title}</Typography>
            <Typography variant="blogFooter" className={classes.BlogFooter}>
              Estimated reading: {read_time}
              {" min"}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: "1rem",
  },
  BlogFooter: {
    textDecoration: "underline",
  },
  rightGrid: {
    marginRight: "1rem",
  },
}));
