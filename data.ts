import {IFormMovie, IMovie, IMovieCollection} from "./interfaces";

export function AddMovie(movieCollection: IMovie[], newMovie: IMovie): IMovie[]
{
    return [...movieCollection, newMovie]
}

export const GetMovieCollection = (movies: IMovie[]): IMovieCollection => (
    {
        collection: movies
    });

export function SetMovie(setMovie: (movie: IMovie) => void, {id}: { id: number }) {
    const {collection} = GetMovieCollection([]);
    const targetMovie = collection.find(movie => movie.id === id);
    if (targetMovie) {
        setMovie(targetMovie);
    }
}

export function DeleteMovieByIndex(movies: IMovie[], index: number): IMovie[] {
    return movies.splice(index, 1);
}

export const formMovie: IFormMovie = {
    title: "",
    rating: 0,
    genre: "",
    description: "",
}
