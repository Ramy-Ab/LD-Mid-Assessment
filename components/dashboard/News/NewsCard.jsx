import { Chip, Grid, Paper, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import Link from "next/link";
import Moment from "react-moment";
import { useCategory } from "../../../hooks/useCategory";

export default function NewsCard({
  children,
  spaces,
  heightMin,
  bgColor,
  item,
}) {
  const height = heightMin;
  const classes = useStyles({ heightMin, bgColor });
  const category = item?.category;
  const color = useCategory(category);

  return (
    <>
      <Paper className={classes.paper} elevation={3}>
        <Stack spacing={spaces ? spaces : 2} className={classes.card}>
          <Grid container xs={12} className={classes.header}>
            <Grid item xs={5}>
              <Chip
                color={color}
                className={classes.chip}
                label={
                  <Typography variant="chip"> {item?.category}</Typography>
                }
              />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="blogFooter">
                <Moment format="MMM Do YY">{item.created_at}</Moment>
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="cardsTitle" sx={{ marginButton: "1rem" }}>
            V{item.title}
          </Typography>
          <Image
            src={item?.logo_url}
            alt="Picture of the author"
            width={300}
            height={179}
          />

          <Typography variant="blogFooter">
            Gestisci diversi negozi online in una singola piattaforma grazie a
            Vetrina Live ...
          </Typography>
          <Link href="https://vetrinalive.it/blog" passHref>
            <a className={classes.redirect}>
              <Typography variant="bluetext1" className={classes.link}>
                Read More{" "}
              </Typography>
            </a>
          </Link>
        </Stack>
      </Paper>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    minHeight: (props) => (props.heightMin ? props.heightMin : "220px"),
    borderRadius: "5px",
    margin: " 16px",

    padding: "16px",
    backgroundColor: (props) => (props.bgColor ? props.bgColor : "FFF"),
  },
  card: {
    display: "flex",
    justifyContent: "center",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  link: {
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
  },
  redirect: {
    textDecoration: "none",
  },
}));
