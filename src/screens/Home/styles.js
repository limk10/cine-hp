import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  iconArrow: {
    cursor: "pointer",
    marginTop: 5,
    marginLeft: theme.spacing(1)
  },
  headerCard: {
    cursor: "pointer"
  },
  gridMovies: {
    overflow: "scroll",
    whiteSpace: "nowrap",
    display: "block"
  }
}));

export { useStyles };
