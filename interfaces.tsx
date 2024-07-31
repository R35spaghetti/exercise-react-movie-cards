export interface IFormMovie
{
    title: string;
    rating: number;
    genre: string;
    description: string;
}

export interface IMovieCollection
{
    collection: IMovie[]
}

export interface IMovie{
    id: number;
    title: string;
    rating: number;
    genre: string;
    description: string;
}