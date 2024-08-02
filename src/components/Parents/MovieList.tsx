import {IMovie, IMovieForm} from "../../../interfaces.tsx";
import {AddMovie} from "../Form-Movie/AddMovie.tsx";
import {ReactElement, useState} from "react";
import {AddMovieToArray, DeleteMovieByIndex} from "../../../data.ts";
import {MovieCard} from "../Card-Movie/MovieCard.tsx";

let idCount = 0;

export function MovieList(): ReactElement {

    const [movieCollection, setMovieCollection] = useState<IMovie[]>([]);
    const handleSubmit = (data: IMovieForm) => {
        const movie: IMovie = {
            id: idCount,
            title: data.title,
            rating: data.rating,
            genre: data.genre,
            description: data.description,
        };
        const updatedMovieCollection = AddMovieToArray(movieCollection, movie);
        idCount++;
        setMovieCollection(updatedMovieCollection);
    };

    function handleDeleteMovie(index: number) {
        const newMovies = DeleteMovieByIndex(movieCollection, index);
        setMovieCollection(newMovies);
    }

    return (
        <>
            <AddMovie onSubmit={handleSubmit}/>
            <div className="MovieCard-Container">
                <MovieCard movieCollection={movieCollection} onDelete={handleDeleteMovie}></MovieCard>
            </div>
        </>
    );
}