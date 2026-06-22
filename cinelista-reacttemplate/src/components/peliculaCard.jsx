import React from 'react';
import PropTypes from 'prop-types';
import './PeliculaCard.css'; // Asegúrate de crear este archivo para los estilos

function PeliculaCard({ titulo, genero, duracion, clasificacion, sinopsis, horarios }) {
  // Estilo diferenciado según la clasificación
    const getClasificacionStyle = (clasificacion) => {
    switch (clasificacion) {
        case 'TE':
        return { backgroundColor: 'green', color: 'white' };
        case '+14':
        return { backgroundColor: 'orange', color: 'white' };
        case '+18':
        return { backgroundColor: 'red', color: 'white' };
        default:
        return { backgroundColor: 'gray', color: 'white' };
    }
    };

return (
    <div className="pelicula-card">
        <h2>{titulo}</h2>
        <p><strong>Género:</strong> {genero}</p>
        <p><strong>Duración:</strong> {duracion} minutos</p>
        <p><strong>Clasificación:</strong> <span style={getClasificacionStyle(clasificacion)}>{clasificacion}</span></p>
        <p><strong>Sinopsis:</strong> {sinopsis}</p>
        <p><strong>Horarios:</strong> {horarios.join(', ')}</p>
    </div>
    );
}

PeliculaCard.propTypes = {
    titulo: PropTypes.string.isRequired,
    genero: PropTypes.string.isRequired,
    duracion: PropTypes.number.isRequired,
    clasificacion: PropTypes.string.isRequired,
    sinopsis: PropTypes.string.isRequired,
    horarios: PropTypes.arrayOf(PropTypes.string).isRequired,
};

PeliculaCard.defaultProps = {
    titulo: 'Título no disponible',
    genero: 'Género no especificado',
    duracion: 0,
    clasificacion: 'TE',
    sinopsis: 'Sinopsis no disponible',
    horarios: [],
};

export default PeliculaCard;