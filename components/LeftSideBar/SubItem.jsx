import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

export default function SubItem({ icon, text }) {
  const classes = useStyles();
  return (
    <>
      <ListItemButton className={classes.item}>
        <ListItemIcon className={classes.icon} className={classes.icon}>
          {icon}
        </ListItemIcon>

        <ListItemText
          className={classes.text}
          primary={<Typography variant="bold1"> {text} </Typography>}
        />
      </ListItemButton>
    </>
  );
}
const useStyles = makeStyles((theme) => ({
  item: {
    padding: "0 !important",
  },
  icon: {
    minWidth: "35px",
    color: "#103B66",
  },
  text: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
