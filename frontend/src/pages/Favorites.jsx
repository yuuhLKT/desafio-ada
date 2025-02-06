import AccommodationCard from '../components/AccommodationsCard';
import ErrorMessage from '../components/ErrorMessage';
import Spinner from '../components/Spinner';
import { useFavorites } from '../contexts/FavoritesContext';
import { useAccommodations } from '../hooks/useAccommodations';

export default function Favorites() {
    const { data, isLoading, isError } = useAccommodations();
    const { favorites, handleFavorite } = useFavorites();

    if (isLoading) return <Spinner />;
    if (isError) return <ErrorMessage />;

    const favoritedAccommodations = data?.filter((acc) => favorites[acc.id]) || [];

    return (
        <div className="min-h-screen bg-background-light py-8 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-primary mb-8 text-center">Meus Favoritos</h1>
                {favoritedAccommodations.length === 0 ? (
                    <p className="text-center text-gray-500">Nenhum favorito encontrado</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {favoritedAccommodations.map((acc) => (
                            <AccommodationCard
                                key={acc.id}
                                accommodation={acc}
                                isFavorite={favorites[acc.id]}
                                onFavoriteClick={handleFavorite}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
