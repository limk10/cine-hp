import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  movieCard: {
    background: "#ffffff",
    boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "300px",
    marginTop: "1em",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginRight: theme.spacing(0.8),
    marginLeft: theme.spacing(0.8),
    "&:first-child": {
      marginRight: theme.spacing(0.8),
      marginLeft: 0
    },
    "&:last-child": {
      marginLeft: theme.spacing(0.8),
      marginRight: 0
    },
    "&:hover": {
      // boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.8)",
      "& $headerContainer": {
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.3)",
        fontSize: "74px",
        textShadow: "0px 0px 20px #6abcea, 0px 5px 30px #6ABCEA",
        opacity: 1
      },
      "& $movieContent": {
        opacity: 1
      }
    }
  },
  headerContainer: {
    transition: "0.5s"
  },
  movieHeader: {
    padding: 0,
    margin: 0,
    height: "450px",
    width: "100%",
    display: "block"
  },
  filmImage: {
    backgroundSize: "cover"
  },
  // babyDriver: {
  //   background: url(
  //     "https://i0.wp.com/media2.slashfilm.com/slashfilm/wp/wp-content/images/baby-driver-poster.jpg"
  //   ),
  //   backgroundSize: "cover"
  // },
  // theDarkTower: {
  //   background: url(
  //     "http://cdn.collider.com/wp-content/uploads/2017/03/the-dark-tower-poster.jpg"
  //   ),
  //   backgroundSize: "cover",
  //   backgroundPosition: "100% 100%"
  // },
  // bladeRunner2049: {
  //   background: url(
  //     "http://cdn.collider.com/wp-content/uploads/2017/05/blade-runner-2049-poster-ryan-gosling.jpeg"
  //   ),
  //   backgroundSize: "cover",
  //   backgroundPosition: "100% 80%"
  // },
  headerIconContainer: {
    position: "relative"
  },
  headerIcon: {
    width: "100%",
    height: "367px",
    lineHeight: "367px",
    textAlign: "center",
    verticalAlign: "middle",
    margin: "0 auto",
    color: "#ffffff",
    fontSize: "54px",
    textShadow: "0px 0px 20px #6abcea, 0px 5px 20px #6ABCEA",
    opacity: ".85"
  },
  movieContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    background: "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",
    padding: "18px 18px 14px 18px",
    margin: 0,
    opacity: 0,
    transition: "0.5s",
    cursor: "pointer"
  },
  movieContentHeader: {
    display: "table",
    width: "100%"
  },
  movieInfo: {
    display: "table",
    width: "100%"
  },
  movieTitle: {
    fontSize: "21px",
    margin: 0
  },
  movieInfo: {
    marginTop: "1em"
  },
  infoSection: {
    display: "table-cell",
    textTransform: "uppercase",
    textAlign: "center"
  },
  infoSection: {
    "*:firs-of-type": {
      textAlign: "left"
    },
    "&:last-of-type": {
      textAlign: "right"
    },
    "&:last-of-type label": {
      display: "block",
      color: "rgba(0, 0, 0, 0.5)",
      marginBottom: ".5em",
      fontSize: "9px"
    },
    "&:span": {
      fontWeight: "700",
      fontSize: "11px"
    }
  },
  descriptionMovie: {
    whiteSpace: "break-spaces",
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical"
  }
}));

export { useStyles };
