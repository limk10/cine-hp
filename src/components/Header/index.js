import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  AppBar,
  Typography,
  Toolbar,
  Container,
  Box,
  Button
} from "@material-ui/core";
import { gql, useLazyQuery } from "@apollo/client";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";

import { useStyles } from "./styles";

import actionsFilms from "~/actions/movies";

const GET_MOVIE_BY_GENRE = gql`
  query getByGenre($genre: String!) {
    allMovies(withGenres: $genre) {
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

const Header = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  const [getMovieByGenre, { data, loading, error }] = useLazyQuery(
    GET_MOVIE_BY_GENRE,
    {
      onCompleted: data => populateMovies()
    }
  );

  const [genre, setGenre] = useState({});

  // Adicionado generos na mão, pois não existe
  // uma forma de pegar pela API disponibilizada
  const genres = [
    { id: 16, name: "Animação" },
    { id: 12, name: "Aventura" },
    { id: 28, name: "Ação" },
    { id: 10770, name: "Cinema TV" },
    { id: 35, name: "Comédia" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentário" },
    { id: 18, name: "Drama" },
    { id: 10715, name: "Família" },
    { id: 14, name: "Fantasia" },
    { id: 37, name: "Faroeste" },
    { id: 878, name: "Ficção Cientifica" },
    { id: 10752, name: "Guerra" },
    { id: 36, name: "História" },
    { id: 9648, name: "Mistério" },
    { id: 10402, name: "Música" },
    { id: 10749, name: "Romance" },
    { id: 27, name: "Terror" },
    { id: 53, name: "Trhiller" }
  ];

  const handleMovieByGenre = async (e, genre, name) => {
    e.preventDefault();
    history.push("/filme");
    await getMovieByGenre({
      variables: {
        genre: `${genre}`
      }
    });

    setGenre({
      id: genre,
      name
    });
  };

  const populateMovies = () => {
    const { allMovies } = data;

    dispatch(
      actionsFilms.collectionMovies({
        collectionMovies: allMovies?.results,
        movieTitle: `${genre.name}`
      })
    );
  };

  return (
    <>
      <AppBar className={classes.appBar} position="static">
        <Container maxWidth="lg">
          <Toolbar
            classes={{
              root: classes.toolbar
            }}
          >
            <Typography
              onClick={() => history.push("/")}
              variant="h6"
              className={classes.title}
            >
              Cine<span className={classes.secondTitle}>HP</span>
            </Typography>
            <Box>
              <Button
                onClick={() => history.push("/")}
                className={classes.menu}
              >
                Início
              </Button>
              <Button className={classes.menu}>Lançamentos</Button>
              <div className={classes.dropdown}>
                <Button className={`${classes.menu} ${classes.dropbtn}`}>
                  Gêneros <ExpandMoreRoundedIcon style={{ color: "#f0f0f0" }} />
                </Button>
                <div className={classes.dropdownContent}>
                  {genres?.map(({ id, name }, key) => (
                    <a
                      onClick={e => handleMovieByGenre(e, id, name)}
                      key={key}
                      href="#"
                    >
                      {name}
                    </a>
                  ))}
                </div>
              </div>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
