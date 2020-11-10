import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import MovieReview from "./MovieReview";
import MovieDetail from "./MovieDetail";

const App = () => {
    let { id } = useParams();
    const [movie, setMovie] = useState();

    const getMovie = async () => {
        const url = `/api/movies/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        setMovie(data);
    };
    console.log(movie);

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <Switch>
            <Route path="/movie/:id/review">
                <MovieReview id={id} movie={movie} />
            </Route>
            <Route path="/movie/:id">
                <MovieDetail id={id} movie={movie} />
            </Route>
        </Switch>
    );
};

export default App;
