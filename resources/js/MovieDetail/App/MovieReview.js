import React, { useState } from "react";

const MovieReview = ({ id, movie }) => {
    const [rating, setRating] = useState("");
    const [text, setText] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        const data = {
            rating,
            text
        };
        const url = `/api/movies/${id}/review`;

        fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content")
            },
            body: JSON.stringify(data)
        }).then(response => {
            if (response.status === 200) {
                console.log("success");
                setRating(50);
                setText("");
            } else {
                console.log("error");
            }
        });
    };

    if (movie) {
        return (
            <div>
                <h2>
                    {movie.movie.name} review {id}
                </h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="rating">Rating</label>
                    <input
                        type="number"
                        name="rating"
                        value={rating}
                        onChange={e => setRating(e.target.value)}
                    />
                    <div>
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            value={text}
                            onChange={e => setText(e.target.value)}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
    return <h1>Loading</h1>;
};

export default MovieReview;
