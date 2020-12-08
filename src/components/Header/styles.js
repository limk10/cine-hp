import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: "bold",
    marginRight: theme.spacing(5)
  },
  secondTitle: {
    color: "rgb(255, 20, 45)"
  },
  toolbar: {
    paddingLeft: 0,
    paddingRight: 0
  },
  appBar: {
    backgroundColor: "rgba(20, 20, 21, 0.9)",
    height: "60px"
  },
  menu: {
    color: "#f0f0f0"
  }
}));

export { useStyles };
