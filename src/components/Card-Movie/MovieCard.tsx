import {IMovieCardProps} from "../../../interfaces.tsx";
import {ReactElement} from "react";
import "./MovieCard.css"

export function MovieCard({movieCollection, onDelete}: IMovieCardProps): ReactElement {

    return (
        <>
            <div className="MovieCard-Container">
                {movieCollection.map((movie) =>
                    (
                        <div className="MovieCard" key={movie.id} onClick={() => onDelete(movie.id)}>
                            <h2>{movie.title}</h2>
                            <p>{movie.rating}</p>
                            <p>{movie.genre}</p>
                            <p>{movie.description}</p>
                        </div>
                    ))}
            </div>
        </>
    )
}