import React from "react";

const MovieDetail = ({ id, movie }) => {
    return (
        <div>
            {movie ? <div> {movie.movie.name} </div> : <div>Loading</div>}
        </div>
    );
};

export default MovieDetail;
