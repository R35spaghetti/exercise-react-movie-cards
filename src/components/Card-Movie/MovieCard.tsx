import {IMovieCollection} from "../../../interfaces.tsx";
import {ReactElement} from "react";

export function MovieCard({collection}: IMovieCollection): ReactElement {

    return (
        <>
            <div className="MovieCard">
                {collection.map((movie) =>
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
    )
}