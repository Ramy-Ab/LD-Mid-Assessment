import { Grid, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import test from "../../../assets/images/extensionSlider/ownDomain.jpg";

export default function ScrollerItem({ img, desc }) {
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
      <Typography xs={6} className={classes.text}>
        {desc}
      </Typography>
    </Stack>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {},
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
}));
