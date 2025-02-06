import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accommodations from './components/Accommodations';
import Header from './components/Header';
import { FavoritesProvider } from './contexts/FavoritesContext';
import AccommodationDetails from './pages/AccommodationDetails';
import Favorites from './pages/Favorites';

function App() {
    return (
        <FavoritesProvider>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Accommodations />} />
                    <Route path="/favoritos" element={<Favorites />} />
                    <Route path="/acomodacoes/:id" element={<AccommodationDetails />} />
                </Routes>
            </BrowserRouter>
        </FavoritesProvider>
    );
}

export default App;
