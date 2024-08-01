import {IMovieForm} from "../../../interfaces.tsx";
import {MovieForm} from "./MovieForm.tsx";
import {ReactElement} from "react";


export function ShowMovieCard(): ReactElement {


    const handleSubmit = (data: IMovieForm) => {
        console.log(data);
    };

    return (
        <>
            <MovieForm onSubmit={handleSubmit}/>
        </>
    );
}