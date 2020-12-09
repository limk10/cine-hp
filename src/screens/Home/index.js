import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Typography,
  Box,
  Grid,
  IconButton,
  Container,
  CircularProgress
} from "@material-ui/core";
import { useQuery, gql } from "@apollo/client";

import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";

import actionsFilms from "~/actions/films";
import MovieCard from "~/components/MovieCard";
import Spinner from "~/components/Spinner";

import { useStyles } from "./styles";

const GET_RELEASE_FILMS = gql`
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
  const releaseFilms = useSelector(state => state.reducerFilms.releaseFilms);
  const classes = useStyles();

  const { loading, error, data } = useQuery(GET_RELEASE_FILMS);

  useEffect(() => {
    if (loading) {
      dispatch(
        actionsFilms.releaseFilms({
          data: [],
          loading: loading
        })
      );
    }

    if (data) {
      const { allMovies } = data;
      const { results } = allMovies;

      dispatch(
        actionsFilms.releaseFilms({
          data: results,
          loading: false
        })
      );
    }
  }, [data]);

  const nextReleaseFilms = () => {
    const containerFilm = document.getElementById("content-release-films");

    containerFilm.scrollBy({
      top: 0,
      left: +600,
      behavior: "smooth"
    });
  };

  const backReleaseFilms = () => {
    const containerFilm = document.getElementById("content-release-films");

    containerFilm.scrollBy({
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
        {!!!releaseFilms?.data?.length && <Spinner />}
        {!!releaseFilms?.data?.length && (
          <Grid
            id="content-release-films"
            className={classes.gridMovies}
            container
          >
            <IconButton
              onClick={() => backReleaseFilms()}
              aria-label="back"
              className={classes.backButton}
            >
              <ArrowBackIosOutlinedIcon
                style={{ color: "#f0f0f0" }}
                fontSize="large"
              />
            </IconButton>
            {releaseFilms?.data?.map((item, key) => (
              <MovieCard item={item} key={key} />
            ))}

            <IconButton
              onClick={() => nextReleaseFilms()}
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
