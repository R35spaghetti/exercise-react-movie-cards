import {IMovie} from "./interfaces";

export function AddMovieToArray(movieCollection: IMovie[], newMovie: IMovie): IMovie[] {
    return [...movieCollection, newMovie]
}

export function DeleteMovieByIndex(movies: IMovie[], index: number): IMovie[] {
    return movies.filter(movie => movie.id !== index);
}

