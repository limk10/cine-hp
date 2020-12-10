import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Typography,
  Box,
  Grid,
  IconButton,
  Container
} from "@material-ui/core";
import { useQuery, gql } from "@apollo/client";

import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";

import actionsFilms from "~/actions/movies";
import MovieCard from "~/components/MovieCard";
import Spinner from "~/components/Spinner";

import { useStyles } from "./styles";

const GET_RELEASE_MOVIES = gql`
  query getRelease {
    allMovies(page: 1, releaseDate_LTE: "2020-12-07") {
      results {
        id
        originalTitle
        releaseDate
        overview
        posterPath
      }
    }
  }
`;

const Home = () => {
  const dispatch = useDispatch();
  const releaseMovies = useSelector(state => state.reducerMovies.releaseMovies);
  const classes = useStyles();

  const { loading, error, data } = useQuery(GET_RELEASE_MOVIES);

  useEffect(() => {
    if (loading) {
      dispatch(
        actionsFilms.releaseMovies({
          data: [],
          loading: loading
        })
      );
    }

    if (data) {
      const { allMovies } = data;
      const { results } = allMovies;

      dispatch(
        actionsFilms.releaseMovies({
          data: results,
          loading: false
        })
      );
    }
  }, [data]);

  const nextreleaseMovies = () => {
    const containerMovie = document.getElementById("content-release-movies");

    containerMovie.scrollBy({
      top: 0,
      left: +600,
      behavior: "smooth"
    });
  };

  const backreleaseMovies = () => {
    const containerMovie = document.getElementById("content-release-movies");

    containerMovie.scrollBy({
      top: 0,
      left: -600,
      behavior: "smooth"
    });
  };

  return (
    <Container maxWidth="lg">
      <Box mt={3} display="flex">
        <Typography className={classes.headerCard} variant="h5" gutterBottom>
          Lançamentos
        </Typography>
        <ArrowForwardIosOutlinedIcon className={classes.iconArrow} />
      </Box>
      <Grid className={classes.gridAll} container>
        {!!!releaseMovies?.data?.length && <Spinner />}
        {!!releaseMovies?.data?.length && (
          <Grid
            id="content-release-movies"
            className={classes.gridMovies}
            container
          >
            <IconButton
              onClick={() => backreleaseMovies()}
              aria-label="back"
              className={classes.backButton}
            >
              <ArrowBackIosOutlinedIcon
                style={{ color: "#f0f0f0" }}
                fontSize="large"
              />
            </IconButton>
            {releaseMovies?.data?.map((item, key) => (
              <MovieCard item={item} key={key} />
            ))}

            <IconButton
              onClick={() => nextreleaseMovies()}
              aria-label="next"
              className={classes.nextButton}
            >
              <ArrowForwardIosOutlinedIcon
                style={{ color: "#f0f0f0" }}
                fontSize="large"
              />
            </IconButton>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Home;
