import { useState } from 'react';
import Logo from '../assets/anfitrioesdealuguellogo.png';
import { useFavorites } from '../contexts/FavoritesContext';
import { useAccommodations } from '../hooks/useAccommodations';
import AccommodationCard from './AccommodationsCard';
import ErrorMessage from './ErrorMessage';
import Spinner from './Spinner';

export default function Accommodations() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredTerm, setFilteredTerm] = useState('');
    const { favorites, handleFavorite } = useFavorites();
    const { data, isLoading, isError } = useAccommodations({ cidade: filteredTerm });

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        if (!e.target.value) {
            setFilteredTerm('');
            window.history.pushState(null, '', '/');
        }
    };

    const handleFilter = () => {
        setFilteredTerm(searchTerm);
        const newUrl = `/acomodacoes${searchTerm ? `?cidade=${searchTerm}` : ''}`;
        window.history.pushState(null, '', newUrl);
    };

    if (isLoading) return <Spinner />;
    if (isError) return <ErrorMessage />;

    return (
        <div
            id="acomodacoes"
            className="min-h-screen bg-background-light py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8"
        >
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col justify-center items-center mb-6 sm:mb-8 md:mb-12">
                    <img
                        src={Logo}
                        alt="Logo Anfitriões de Aluguel"
                        className="h-16 sm:h-20 md:h-24 w-auto mb-4"
                    />
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 sm:mb-3 text-center">
                        Anfitriões de Aluguéis
                    </span>
                    <p className="text-base sm:text-lg md:text-xl text-center text-gray-700 max-w-sm sm:max-w-md md:max-w-lg px-4">
                        Conectando você aos melhores anfitriões para uma experiência única e
                        inesquecível.
                    </p>
                </div>

                <div className="flex justify-center mb-6 sm:mb-8 px-4 sm:px-6 space-x-4">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder="Pesquisar por cidade..."
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md px-4 py-2 sm:py-3 
                                 border-2 border-primary rounded-lg
                                 focus:outline-none focus:ring-2 focus:ring-primary 
                                 focus:border-transparent transition-all duration-300
                                 text-sm sm:text-base placeholder-gray-400"
                    />
                    <button
                        onClick={handleFilter}
                        className="px-6 py-2 bg-black text-white rounded-lg transition duration-300 cursor-pointer"
                    >
                        Filtrar
                    </button>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {data.map((accommodation) => (
                        <AccommodationCard
                            key={accommodation.id}
                            accommodation={accommodation}
                            isFavorite={favorites[accommodation.id]}
                            onFavoriteClick={handleFavorite}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
