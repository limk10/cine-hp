import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Box, Grid, Container } from "@material-ui/core";

import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";

import MovieCard from "~/components/MovieCard";
import actionsFilms from "~/actions/movies";
import Spinner from "~/components/Spinner";
import { useStyles } from "./styles";

const Favorites = props => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const movies = useSelector(state => state.reducerMovies.collectionMovies);

  return (
    <Container maxWidth="lg">
      <Box mt={3} display="flex">
        <Typography className={classes.headerCard} variant="h5" gutterBottom>
          Meus Favoritos
        </Typography>
        <ArrowForwardIosOutlinedIcon className={classes.iconArrow} />
      </Box>
      <Grid container>
        {!!movies?.collectionMovies?.length && (
          <Grid
            id="content-list-movies"
            className={classes.gridMovieCard}
            item
            xs={12}
            style={{ width: 1200, height: 500 }}
          >
            {movies?.collectionMovies?.map((item, key) => (
              <MovieCard item={item} key={key} />
            ))}
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Favorites;
