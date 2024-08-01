import {MovieForm} from "./components/Form-Movie/MovieForm.tsx";
import {IMovieForm} from "../interfaces.tsx";

export function App() {
    //foo
    const handleSubmit = (data: IMovieForm) => {
        console.log(data);
    };

    return (
        <>
            <MovieForm onSubmit={handleSubmit}/>
        </>
    );
}
