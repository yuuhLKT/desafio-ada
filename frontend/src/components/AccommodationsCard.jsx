import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AccommodationCard = ({ accommodation, isFavorite, onFavoriteClick }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
                src={accommodation.imagem}
                alt={accommodation.nome}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-primary">{accommodation.nome}</span>
                    <button
                        onClick={() => onFavoriteClick(accommodation.id)}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill={isFavorite ? 'red' : 'none'}
                            viewBox="0 0 24 24"
                            stroke={isFavorite ? 'red' : 'currentColor'}
                            className="w-6 h-6 text-primary"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                        </svg>
                    </button>
                </div>
                <p className="text-sm text-gray-500">{accommodation.localizacao}</p>
                <div className="mt-4 flex justify-between items-center">
                    <span className="text-xl font-bold text-primary">
                        R${accommodation.preco_noite.toFixed(2)} / noite
                    </span>
                    <Link
                        to={`/acomodacoes/${accommodation.id}`}
                        className="px-4 py-2 text-black rounded-lg transition-colors duration-300"
                    >
                        Ver mais
                    </Link>
                </div>
            </div>
        </div>
    );
};

AccommodationCard.propTypes = {
    accommodation: PropTypes.object.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    onFavoriteClick: PropTypes.func.isRequired,
};

export default AccommodationCard;
