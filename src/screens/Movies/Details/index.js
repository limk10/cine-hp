import React, { useEffect } from "react";
import { toast } from "react-toastify";
import _ from "lodash";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import {
  Grid,
  Box,
  Typography,
  Container,
  IconButton
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { useQuery, gql } from "@apollo/client";

import MovieCreationOutlinedIcon from "@material-ui/icons/MovieCreationOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";

import { useSelector, useDispatch } from "react-redux";

import actionMovies from "~/actions/movies";

import { useStyles } from "./styles";

import Spinner from "~/components/Spinner";

import "react-toastify/dist/ReactToastify.css";

const GET_MOVIE_BY_ID = gql`
  query movieByID($id: ID!) {
    movie(id: $id) {
      id
      originalTitle
      backdropPath
      releaseDate
      overview
      voteCount
      voteAverage
      popularity
      revenue
      budget
      posterPath
      releaseDate
      productionCountries {
        name
      }
      posters {
        filePath
      }
      genres {
        name
      }
      videos {
        name
        site
        key
      }
      cast {
        name
      }
      genres {
        name
      }
    }
  }
`;

const Details = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const movieByID = useSelector(state => state.reducerMovies.movieByID);
  const { id } = props.match.params;
  const { data, loading, error } = useQuery(GET_MOVIE_BY_ID, {
    variables: {
      id
    }
  });

  useEffect(() => {
    if (data) {
      const { movie } = data;
      dispatch(actionMovies.movieByID(movie));
    }

    return () => {
      dispatch(actionMovies.movieByID({}));
    };
  }, [data]);

  const handleTrailer = () => {
    const [video] = movieByID?.videos;
    const { key } = video;

    var url = `https://www.youtube.com/watch?v=${key}`;
    window.open(url, "_blank");
  };

  const saveToFavorite = async () => {
    let stored = await getToFavorite();

    if (stored.includes(movieByID?.id)) {
      toast.info(
        `Opss... Esse filme já foi adicionado a sua lista de favoritos!`,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          pauseOnFocusLoss: false
        }
      );

      return;
    }

    stored.push(movieByID?.id);

    localStorage["favorite_films"] = JSON.stringify(stored);

    toast.success(
      `Sucesso... O filme ${movieByID?.originalTitle} foi adicionado aos seus favoritos!`,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        pauseOnFocusLoss: false
      }
    );
  };

  const getToFavorite = () => {
    const stored = localStorage["favorite_films"] || [];

    if (stored.length) return JSON.parse(stored);
    else return stored;
  };

  const iconHeart = () => {
    let stored = getToFavorite();
    const isIncluded = stored.includes(movieByID?.id);

    if (!isIncluded) {
      return <FavoriteBorderOutlinedIcon fontSize="large" />;
    } else {
      return <FavoriteSharpIcon fontSize="large" />;
    }
  };

  return (
    <>
      {_.isEmpty(movieByID) && (
        <Grid container>
          <Spinner />
        </Grid>
      )}
      {!_.isEmpty(movieByID) && (
        <Grid container>
          <div className={classes.mask}>
            <img
              className={classes.bannerImage}
              src={`https://image.tmdb.org/t/p/original${movieByID?.backdropPath}`}
            />
            <Container maxWidth="lg">
              <Box className={classes.infoBanner}>
                <Typography
                  className={classes.filmName}
                  variant="h2"
                  gutterBottom
                >
                  {movieByID?.originalTitle}
                </Typography>

                <Box display="flex">
                  <Rating
                    name="customized-empty"
                    defaultValue={2}
                    value={movieByID?.voteAverage / 2}
                    precision={0.5}
                    disabled
                    emptyIcon={
                      <StarBorderIcon
                        style={{ color: "#f0f0f0" }}
                        fontSize="inherit"
                      />
                    }
                  />
                  <Typography variant="body1" gutterBottom>
                    ({movieByID?.voteCount})
                  </Typography>
                </Box>

                <IconButton
                  onClick={() => handleTrailer()}
                  style={{ color: "#f0f0f0" }}
                  aria-label="view trailer"
                >
                  <MovieCreationOutlinedIcon fontSize="large" />
                </IconButton>
                <IconButton
                  onClick={() => saveToFavorite()}
                  style={{ color: "#f0f0f0" }}
                  aria-label="add film to favorite"
                >
                  {iconHeart()}
                </IconButton>
              </Box>
            </Container>
          </div>
          <Container maxWidth="lg">
            <Box mb={10} mt={2}>
              <Typography variant="h5" gutterBottom>
                Sinopse
              </Typography>
              <Typography variant="body1" gutterBottom>
                {movieByID?.overview}
              </Typography>

              <Box display="flex" mt={3}>
                <img
                  className={classes.imgPosterPath}
                  src={`https://image.tmdb.org/t/p/original/${movieByID?.posterPath}`}
                />

                <Box component="div" ml={2}>
                  <Grid container>
                    <Grid item xs={6} md={2}>
                      <Typography
                        className={classes.titleResume}
                        variant="subtitle2"
                        gutterBottom
                      >
                        Titulo Original
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <Typography variant="body2" gutterBottom>
                        {movieByID?.originalTitle}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={2}>
                      <Typography
                        className={classes.titleResume}
                        variant="subtitle2"
                        gutterBottom
                      >
                        Ano de Produção
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <Typography variant="body2" gutterBottom>
                        {movieByID?.releaseDate}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={2}>
                      <Typography
                        className={classes.titleResume}
                        variant="subtitle2"
                        gutterBottom
                      >
                        Genêro(s)
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <Typography variant="body2" gutterBottom>
                        {movieByID?.genres?.length &&
                          movieByID?.genres.map(item => `${item?.name}, `)}
                      </Typography>
                    </Grid>
                    <Grid xs={6} md={2}>
                      <Typography
                        className={classes.titleResume}
                        variant="subtitle2"
                        gutterBottom
                      >
                        País
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <Typography variant="body2" gutterBottom>
                        {movieByID?.productionCountries?.length &&
                          movieByID?.productionCountries.map(
                            item => `${item?.name}, `
                          )}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Container>
        </Grid>
      )}
    </>
  );
};

export default Details;
