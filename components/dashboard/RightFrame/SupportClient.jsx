import { Avatar, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Headphones } from "react-feather";
import { supportImage } from "../../../assets/images/supportImage.jpg";
export default function SupportClient() {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper} elevation={3}>
        <Stack spacing={3} className={classes.card}>
          <Grid className={classes.cardHeader} container xs={12}>
            <Grid item xs={12}>
              <Headphones className={classes.Icon} size={24} />
              <Typography variant="cardsTitle">Customer support</Typography>
            </Grid>
          </Grid>
          <Grid className={classes.cardBody} container xs={12}>
            <Grid className={classes.avatar} item>
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/2.jpg"
              />
            </Grid>
            <Grid item>
              <Typography className={classes.bodyText}>
                Simone is here to help you.
              </Typography>
            </Grid>
          </Grid>

          <Button variant="contained" color="primary">
            <Typography className={classes.whiteText}>Contact us</Typography>
          </Button>
        </Stack>
      </Paper>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    minHeight: "197px",
    borderRadius: "10px",
    marginBottom: "24px",
    padding: "24px",
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardBody: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  avatar: {
    marginRight: "1rem",
  },
  Icon: {
    marginRight: "1rem",
  },
  bodyText: {
    color: "#103B66",
    fontFamily: "NotoSansHK",
    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "24px",
  },
  whiteText: {
    color: "#FFFFFF",
    fontFamily: "SourceSansPro",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "20px",
  },
  arrow: {
    color: "#21B8F9",
  },
}));
