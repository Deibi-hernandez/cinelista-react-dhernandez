import React, { useState } from 'react';
import { peliculas } from './data/peliculas';
import ListaPeliculas from './components/ListaPeliculas';
import FiltroClasificacion from './components/FiltroClasificacion';

function App() {
    const [filtro, setFiltro] = useState('Todas');
    const [busqueda, setBusqueda] = useState('');

  // Normalizar y aplicar filtros
    const peliculasFiltradas = peliculas.filter((pelicula) => {
    const coincideClasificacion =
    filtro === 'Todas' || pelicula.clasificacion === filtro;
    const coincideBusqueda = pelicula.titulo
    .toLowerCase()
    .includes(busqueda.trim().toLowerCase());
    return coincideClasificacion && coincideBusqueda;
    });

    return (
    <div>
        <h1>Welcome to CineLista</h1>
        <FiltroClasificacion filtro={filtro} setFiltro={setFiltro} />
        <div>
        <label htmlFor="busqueda">Buscar por título:</label>
        <input
            id="busqueda"
            type="text"
            value={busqueda}
            onChange={(e) => {
            const texto = e.target.value.slice(0, 50); // Limitar a 50 caracteres
            setBusqueda(texto);
            }}
        />
    </div>
        {peliculasFiltradas.length > 0 ? (
        <ListaPeliculas peliculas={peliculasFiltradas} />
        ) : (
        <p>No hay películas que coincidan</p>
        )}
    </div>
  );
}

export default App;