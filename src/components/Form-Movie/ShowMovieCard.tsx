import {IMovie, IMovieForm} from "../../../interfaces.tsx";
import {MovieForm} from "./MovieForm.tsx";
import {ReactElement, useState} from "react";
import {AddMovie} from "../../../data.ts";


export function ShowMovieCard(): ReactElement {

    const [movieCollection, setMovieCollection] = useState<IMovie[]>([]);

    const handleSubmit = (data: IMovieForm) => {
        console.log(data);
        const movie: IMovie = {
            id: Date.now(),
            title: data.title,
            rating: data.rating,
            genre: data.genre,
            description: data.description,
        };
        const updatedMovieCollection = AddMovie(movieCollection, movie);
        setMovieCollection(updatedMovieCollection);
    };
    return (
        <>
            <MovieForm onSubmit={handleSubmit}/>
            {/*//foo*/}
            <div className="present-movieCards">
                {movieCollection.map((movie) =>
                    (
                        <div key={movie.id}>
                            <h2>{movie.title}</h2>
                            <p>{movie.rating}</p>
                            <p>{movie.genre}</p>
                            <p>{movie.description}</p>
                        </div>
                    ))}
            </div>
        </>
    );
}