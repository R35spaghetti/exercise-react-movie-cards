import React, {useState} from "react";
import "./MovieForm.css"
import {IMovieForm, IMovieFormProps} from "../../../interfaces.tsx";

export function MovieForm({onSubmit}: IMovieFormProps) {

    const [formMovie, setMovie] = useState<IMovieForm>(
        {
            title: "",
            rating: 0,
            genre: "",
            description: "",
        }
    );

    function HandleInput(event: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;
        setMovie((prevData) => ({...prevData, [name]: value}));
    }

    function HandleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onSubmit(formMovie);
    }

    return (
        <form onSubmit={HandleSubmit} className="FormMovie">
            <label>
                Title:
                <input type="text" name="title" value={formMovie.title} onChange={HandleInput}/>
            </label>
            <br/>
            <label>
                Rating:
                <input type="number" name="rating" value={formMovie.rating} onChange={HandleInput}/>
            </label>
            <br/>
            <label>
                Genre:
                <input type="text" name="genre" value={formMovie.genre} onChange={HandleInput}/>
            </label>
            <br/>
            <label>
                Description:
                <input type="text" name="description" value={formMovie.description} onChange={HandleInput}/>
            </label>
            <br/>
            <button type="submit">Submit</button>
        </form>
    )
}