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
  gridAll: {
    position: "relative"
  },
  gridMovies: {
    "overflow-x": "hidden",
    whiteSpace: "nowrap",
    display: "block"
  },
  nextButton: {
    right: "1%",
    position: "absolute",
    top: "50%",
    zIndex: 9,
    width: "60px",
    height: "60px",
    borderRadius: "50",
    backgroundColor: "rgba(20, 20, 21, 0.9)",
    "&:hover": {
      backgroundColor: "rgba(20, 20, 21, 1) !important"
    }
  },
  backButton: {
    left: "1%",
    position: "absolute",
    top: "50%",
    zIndex: 9,
    width: "60px",
    height: "60px",
    borderRadius: "50",
    backgroundColor: "rgba(20, 20, 21, 0.9)",
    "&:hover": {
      backgroundColor: "rgba(20, 20, 21, 1) !important"
    }
  }
}));

export { useStyles };
