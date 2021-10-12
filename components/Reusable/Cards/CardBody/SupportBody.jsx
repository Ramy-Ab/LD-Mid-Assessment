import { Avatar, Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default function SupportBody() {
  const classes = useStyles();
  return (
    <>
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
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  cardBody: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  avatar: {
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
}));
