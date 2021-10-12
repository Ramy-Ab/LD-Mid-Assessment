import { Grid, Link, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";

export default function ScrollerItem({ img, desc, id }) {
  const link = `https://admin.vetrinalive.it/extensions/${id}`;
  const classes = useStyles();
  return (
    <Stack xs={6} md={6} className={classes.container}>
      <Image
        className={classes.image}
        src={img}
        alt={desc}
        height={150}
        width={150}
        layout="fixed"
      />
      <a className={classes.link} href={link}>
        <Typography xs={6} className={classes.text}>
          {desc}
        </Typography>
      </a>
    </Stack>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    cursor: "pointer",
  },
  text: {
    color: "#103B66",
    fontFamily: "SourceSansPro",
    fontWeight: "400",
    fontSize: "17px",
    lineHeight: "20px",
  },
  image: {
    borderRadius: "10px",
  },
  link: {
    textDecoration: "none",
  },
}));
