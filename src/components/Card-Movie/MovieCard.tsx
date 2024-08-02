import {IMovieCardProps} from "../../../interfaces.tsx";
import {ReactElement} from "react";

export function MovieCard({movieCollection, onDelete}: IMovieCardProps): ReactElement {

    return (
        <>
            <div className="MovieCard">
                {movieCollection.map((movie) =>
                    (
                        <div key={movie.id} onClick={() => onDelete(movie.id)} style={{cursor: 'pointer'}}>
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