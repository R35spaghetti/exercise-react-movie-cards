import React, {useState} from "react";
import "./AddMovie.css"
import {IMovieForm, IMovieFormProps} from "../../../interfaces.tsx";

export function AddMovie({onSubmit}: IMovieFormProps) {

    const [formMovie, setMovie] = useState<IMovieForm>(
        {
            title: "",
            rating: 0,
            genre: "",
            description: "",
        }
    )

    const clearInputs = () => {
        setMovie({
            title: "",
            rating: 0,
            genre: "",
            description: "",
        });
    };
    const genres = ['Adventure', 'Comedy', 'Drama', 'Horror'];

    function HandleInput(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setMovie((prevData) => ({...prevData, [name]: value}));
    }

    function HandleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onSubmit(formMovie);
        console.log(formMovie);
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
                <input type="range" name="rating" value={formMovie.rating} onChange={HandleInput}/>
                {formMovie.rating}
            </label>
            <br/>
            <label>
                Genre:
                <select id="genre" name="genre" value={formMovie.genre} onChange={HandleInput}>
                    <option value="">Action</option>
                    {genres.map((genre) => (
                        <option key={genre} value={genre}>{genre}</option>
                    ))}
                </select>
            </label>
            <br/>
            <label>
                Description:
                <textarea name="description" value={formMovie.description} onChange={HandleInput}></textarea>
            </label>
            <br/>
            <button type="button" onClick={clearInputs}>Clear</button>
            <button type="submit">Submit</button>
        </form>
    )
}