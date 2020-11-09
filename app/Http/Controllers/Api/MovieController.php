<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Movie;

class MovieController extends Controller
{
    public function topRated()
    {
        $movies = Movie::query()
        ->where('votes_nr', '>', 10000)
        ->where('movie_type_id', 1)
        ->orderByDesc('rating')
        ->limit(10)
        ->get();

        return $movies;
    }

    public function movieOfTheWeek()
    {
        $movie_id = 1431045;

        $movie = Movie::findOrFail($movie_id);

        // inject genres in the movie result
        $genres = $movie->genres;

        //starts a query by adding ()
        $people = $movie->people()
        ->where('movie_person.position_id', 254)
        ->limit(3)
        ->orderBy('movie_person.priority', 'desc')
        ->get();

        $poster = $movie->posters()
        ->where('is_main',1)
        ->first();
        // return [
        //     'movie' => $movie,
        //     'genres' => $genres,
        //     'people' => $people
        // ];
            // OR:
        return compact('movie', 'genres', 'people', 'poster');
    }
}
