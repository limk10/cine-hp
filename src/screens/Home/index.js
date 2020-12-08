import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Box, Grid } from "@material-ui/core";
import { useQuery, gql } from "@apollo/client";

import { useStyles } from "./styles";

import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";

import MovieCard from "~/components/MovieCard";

import actionsFilms from "~/actions/films";

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
  const [collection, setCollection] = useState();

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

  return (
    <>
      <Box display="flex">
        <Typography className={classes.headerCard} variant="h5" gutterBottom>
          Lançamentos
        </Typography>
        <ArrowForwardIosOutlinedIcon className={classes.iconArrow} />
      </Box>
      <Grid className={classes.gridMovies} container>
        {releaseFilms?.data?.map((item, key) => (
          <MovieCard item={item} key={key} />
        ))}
      </Grid>
    </>
  );
};

export default Home;
