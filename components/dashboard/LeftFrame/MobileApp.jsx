import { Grid, Paper, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import { ArrowRight } from "react-feather";
import mobile from "../../../assets/images/Home.png";
import appStore from "../../../assets/images/appStore.png";
import playStore from "../../../assets/images/playStore.png";
export default function MobileApp() {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper} elevation={5}>
        <Stack spacing={5} xs={12}>
          <Grid className={classes.topContainer} container xs={12}>
            <Grid item xs={7}>
              <Stack spacing={2}>
                <Typography className={classes.bodyText}>
                  Sell your products on your exclusive APP published on the
                  stores{" "}
                </Typography>

                <Grid container>
                  <Typography
                    sx={{ textDecoration: "underline" }}
                    mr={2}
                    className={classes.textButtom}
                  >
                    Show more{" "}
                  </Typography>
                  <ArrowRight className={classes.arrow} />
                </Grid>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Image
                src={mobile}
                alt="Picture of the author"
                width={105}
                height={226}
              />
            </Grid>
          </Grid>
          <Grid container className={classes.topContainer} xs={12}>
            <Grid item xs={5}>
              <Image
                src={appStore}
                alt="Picture of the author"
                width={125}
                height={40}
              />
            </Grid>
            <Grid item xs={6}>
              <Image
                src={playStore}
                alt="Picture of the author"
                width={141}
                height={50}
              />
            </Grid>
          </Grid>
        </Stack>
      </Paper>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    minHeight: "343px",
    backgroundColor: "#F3A35C",
    padding: "24px",
    borderRadius: "10px",
  },
  topContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bodyText: {
    color: "#FFFFFF",
    fontFamily: "NotoSansHK",
    fontWeight: "500",
    fontSize: "22px",
    lineHeight: "27px",
  },
  textButtom: {
    color: "#FFFFFF",
    fontFamily: "SourceSansPro",
    fontWeight: "400",
    fontSize: "17px",
    lineHeight: "20px",
    textDecoration: "underline",
  },
  arrow: {
    color: "#FFFFFF",
  },
}));
