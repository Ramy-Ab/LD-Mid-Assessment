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
        <ListItemIcon className={classes.icon}>{icon}</ListItemIcon>

        <ListItemText
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
}));
