import {IMovie, IMovieForm} from "../../../interfaces.tsx";
import {MovieForm} from "../Form-Movie/MovieForm.tsx";
import {ReactElement, useState} from "react";
import {AddMovie, DeleteMovieByIndex} from "../../../data.ts";
import {MovieCard} from "../Card-Movie/MovieCard.tsx";

let idCount = 0;

export function ShowMovieCard(): ReactElement {

    const [movieCollection, setMovieCollection] = useState<IMovie[]>([]);
    const handleSubmit = (data: IMovieForm) => {
        console.log(data);
        const movie: IMovie = {
            id: idCount,
            title: data.title,
            rating: data.rating,
            genre: data.genre,
            description: data.description,
        };
        const updatedMovieCollection = AddMovie(movieCollection, movie);
        idCount++;
        setMovieCollection(updatedMovieCollection);
    };
    function handleDeleteMovie(index: number) {
        const newMovies = DeleteMovieByIndex(movieCollection, index);
        setMovieCollection(newMovies);
    }

    return (
        <>
            <MovieForm onSubmit={handleSubmit}/>
            <MovieCard movieCollection={movieCollection} onDelete={handleDeleteMovie}></MovieCard>
        </>
    );
}