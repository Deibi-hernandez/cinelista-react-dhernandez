import React from 'react';
import PropTypes from 'prop-types';

function FiltroClasificacion({ filtro, setFiltro }) {
    const clasificaciones = ['Todas', 'TE', '+14', '+18'];

    return (
    <div>
        <label htmlFor="filtro-clasificacion">Filtrar por clasificación:</label>
        <select
        id="filtro-clasificacion"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        >
        {clasificaciones.map((clasificacion) => (
            <option key={clasificacion} value={clasificacion}>
            {clasificacion}
            </option>
        ))}
        </select>
    </div>
    );
}

FiltroClasificacion.propTypes = {
    filtro: PropTypes.string.isRequired,
    setFiltro: PropTypes.func.isRequired,
};

export default FiltroClasificacion;