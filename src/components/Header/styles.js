import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    cursor: "pointer",
    fontWeight: "bold",
    marginRight: theme.spacing(5)
  },
  secondTitle: {
    color: "rgb(255, 20, 45)"
  },
  toolbar: {
    paddingLeft: 0,
    paddingRight: 0,
    flexGrow: 1
  },
  appBar: {
    backgroundColor: "rgba(20, 20, 21, 0.9)",
    height: "60px"
  },
  menu: {
    color: "#f0f0f0"
  },

  dropdown: {
    position: "relative",
    display: "inline-block",
    "&:hover $dropdownContent": {
      display: "block"
    }
  },

  dropdownContent: {
    display: "none",
    position: "absolute",
    backgroundColor: "#f1f1f1",
    minWidth: "200px",
    maxHeight: "300px",
    overflowX: "auto",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    zIndex: 1,
    "& a": {
      color: "black",
      padding: "12px 16px",
      textDecoration: "none",
      display: "block"
    },
    "& a:hover": {
      backgroundColor: "rgba(0,0,0,0.1)"
    }
  }
}));

export { useStyles };
