import React from "react";
import { peliculas } from "./data/peliculas";
import ListaPeliculas from "./components/ListaPeliculas";

function App() {
    console.log("Movies array:", peliculas);

    return (
    <div>
        <h1>Welcome to CineLista</h1>
        <ListaPeliculas peliculas={peliculas} />
    </div>
    );
}

export default App;