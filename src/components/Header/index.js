import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  AppBar,
  Typography,
  Toolbar,
  Container,
  Box,
  IconButton,
  Button
} from "@material-ui/core";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

import { useStyles } from "./styles";

import actionsFilms from "~/actions/movies";

const Header = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

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

    dispatch(
      actionsFilms.collectionMovies({
        collectionMovies: [],
        idGenre: `${genre}`,
        movieTitle: `${name}`
      })
    );

    history.push("/filme", {
      type: "moviesByGenries"
    });
  };

  const handleFavoriteMovies = async e => {
    e.preventDefault();

    dispatch(
      actionsFilms.collectionMovies({
        collectionMovies: [],
        idGenre: "",
        movieTitle: "Favoritos"
      })
    );

    history.push("/filme", {
      type: "moviesByFavorites"
    });
  };

  return (
    <>
      <AppBar className={classes.appBar} position="static">
        <Container maxWidth="lg">
          <div
            classes={{
              root: classes.toolbar
            }}
          >
            <Toolbar position="static">
              <Typography
                onClick={() => history.push("/")}
                variant="h6"
                className={classes.title}
              >
                Cine<span className={classes.secondTitle}>HP</span>
              </Typography>
              <Box className={classes.root}>
                <Button
                  onClick={() => history.push("/")}
                  className={classes.menu}
                >
                  Início
                </Button>
                <div className={classes.dropdown}>
                  <Button className={`${classes.menu} ${classes.dropbtn}`}>
                    Gêneros{" "}
                    <ExpandMoreRoundedIcon style={{ color: "#f0f0f0" }} />
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
              <Button
                onClick={e => handleFavoriteMovies(e)}
                startIcon={<FavoriteBorderOutlinedIcon />}
                color="inherit"
              >
                Favoritos
              </Button>
            </Toolbar>
          </div>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
