import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  mask: {
    width: "100%",
    height: "50%",
    position: "relative",
    transformStyle: "preserve-3d",
    backgroundImage: "linear-gradient(transparent 50%, rgb(0, 0, 0))"
  },
  bannerImage: {
    width: "100%",
    maxHeight: "calc(100vh - 64px)",
    objectFit: "cover",
    objectPosition: "center",
    transform: "translateZ(-1px)"
  },
  infoBanner: {
    position: "absolute",
    bottom: "0px",
    paddingBottom: "3rem"
  },
  filmName: {
    fontSize: "3.8vw",
    fontWeight: 700,
    textShadow: "rgb(0, 0, 0) 0px 0px 10px"
  },
  imgPosterPath: {
    display: "inline",
    height: "200px",
    width: "132px"
  },
  titleResume: {
    fontWeight: "bold"
  }
}));

export { useStyles };
