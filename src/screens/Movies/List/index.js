import React from "react";
import { useSelector } from "react-redux";
import {
  Typography,
  Box,
  Grid,
  IconButton,
  Container
} from "@material-ui/core";

import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";

import MovieCard from "~/components/MovieCard";
import Spinner from "~/components/Spinner";

import { useStyles } from "./styles";

const List = () => {
  const classes = useStyles();
  const movies = useSelector(state => state.reducerMovies.collectionMovies);

  return (
    <Container maxWidth="lg">
      <Box mt={3} display="flex">
        <Typography className={classes.headerCard} variant="h5" gutterBottom>
          {movies?.movieTitle || "Filmes"}
        </Typography>
        <ArrowForwardIosOutlinedIcon className={classes.iconArrow} />
      </Box>
      <Grid className={classes.gridAll} container>
        {!!!movies?.collectionMovies?.length && <Spinner />}
        {!!movies?.collectionMovies?.length && (
          <Grid id="content-list-movies" container>
            {movies?.collectionMovies?.map((item, key) => (
              <MovieCard item={item} key={key} />
            ))}
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default List;
