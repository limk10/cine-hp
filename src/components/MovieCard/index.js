import React from "react";

import { Grid, Typography, Box } from "@material-ui/core";

import { useStyles } from "./styles";

import { useHistory } from "react-router-dom";

const MovieCard = ({ item }) => {
  const history = useHistory();
  const { id, originalTitle, overview, posterPath, releaseDate } = item;

  const classes = useStyles();
  return (
    <>
      <div
        onClick={() => history.push(`/filme/${id}`)}
        className={classes.movieCard}
      >
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${posterPath})`
          }}
          className={`${classes.movieHeader} ${classes.filmImage}`}
        >
          <div className={classes.headerContainer}></div>
        </div>
        <div className={classes.movieContent}>
          <Box className={classes.movieContentHeader}>
            <h3 className={classes.movieTitle}>{originalTitle}</h3>
          </Box>
          <Box mt={0.5}>
            <Typography
              className={classes.descriptionMovie}
              variant="caption"
              display="block"
              gutterBottom
            >
              {overview}
            </Typography>
          </Box>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
