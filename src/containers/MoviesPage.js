// .src/containers/MoviesPage.js
import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import MoviesList from "../components/MoviesList";
import MovieShow from "../components/MovieShow";

const MoviesPage = ({ match, movies }) => {
    // const logProps = () => {
    // console.log(match);
    // console.log(movies);
    // };

    // useEffect(logProps);

    return (
        <div>
            <MoviesList movies={movies} />
            <Route
                path={`${match.url}/:movieId`}
                render={(routerProps) => (
                    <MovieShow {...routerProps} movies={movies} />
                )}
            />
        </div>
    );
};

export default MoviesPage;
