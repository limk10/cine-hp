import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { gql, useLazyQuery } from "@apollo/client";
import { Typography, Box, Grid, Container } from "@material-ui/core";

import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";

import MovieCard from "~/components/MovieCard";
import actionsFilms from "~/actions/movies";
import Spinner from "~/components/Spinner";
import { useStyles } from "./styles";

const GET_MOVIE_BY_GENRE = gql`
  query getByGenre($genre: String!, $page: Int!) {
    allMovies(withGenres: $genre, page: $page) {
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

const List = props => {
  const { type } = props.location.state;

  const [pageMovieByGenre, setPageMovieByGenre] = useState(1);

  const loader = useRef(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  const movies = useSelector(state => state.reducerMovies.collectionMovies);

  const [getMovieByGenre, { data, loading, error }] = useLazyQuery(
    GET_MOVIE_BY_GENRE,
    {
      onCompleted: () => {
        populateMovies();
        setPageMovieByGenre(pageMovieByGenre + 1);
      }
    }
  );

  useEffect(() => {
    console.log(movies?.idGenre);
    setPageMovieByGenre(1);
    getMovies(movies?.idGenre, 1);
  }, [movies?.movieTitle]);

  const getMovies = async (genre = 16, page) => {
    await getMovieByGenre({
      variables: {
        genre: `${genre}`,
        page: page || pageMovieByGenre
      }
    });
  };

  const populateMovies = () => {
    const { allMovies } = data;

    const oldCollection = movies?.collectionMovies || [];
    let collectionM = [...oldCollection, ...allMovies?.results];

    dispatch(
      actionsFilms.collectionMovies({
        collectionMovies: collectionM,
        movieTitle: movies?.movieTitle,
        idGenre: movies?.idGenre
      })
    );
  };

  useEffect(() => {
    var options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0
    };
    // initialize IntersectionObserver
    // and attaching to Load More div
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, [movies?.collectionMovies]);

  // here we handle what happens when user scrolls to Load More div
  // in this case we just update page variable
  const handleObserver = entities => {
    const target = entities[0];

    if (target?.isIntersecting) {
      getMovies();
    }
  };

  return (
    <Container maxWidth="lg">
      <Box mt={3} display="flex">
        <Typography className={classes.headerCard} variant="h5" gutterBottom>
          {movies?.movieTitle || "Filmes"}
        </Typography>
        <ArrowForwardIosOutlinedIcon className={classes.iconArrow} />
      </Box>
      <Grid container>
        {!!!movies?.collectionMovies?.length && <Spinner />}
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
            <div className="loading" ref={loader}></div>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default List;
