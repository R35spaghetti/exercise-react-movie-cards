export interface IMovieForm {
    title: string;
    rating: number;
    genre: string;
    description: string;
}

export interface IMovieFormProps {
    onSubmit: (data: IMovieForm) => void;
}

export interface IMovieCollection {
    collection: IMovie[]
}

export interface IMovie {
    id: number;
    title: string;
    rating: number;
    genre: string;
    description: string;
}