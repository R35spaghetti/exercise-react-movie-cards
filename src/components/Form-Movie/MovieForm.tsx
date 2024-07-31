import {ReactElement} from "react";
import {formMovie} from "../../../data.ts";
import "./MovieForm.css"

export function MovieForm(): ReactElement {
    return (
        <div className={"FormMovie"}>
            {formMovie.title}
            {formMovie.rating}
            {formMovie.genre}
            {formMovie.description}
        </div>
    )
}