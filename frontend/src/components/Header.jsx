import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };

    const scrollToAccommodations = () => {
        const element = document.getElementById('acomodacoes');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleAccommodationsClick = () => {
        handleMenuClose();
        if (location.pathname === '/') {
            scrollToAccommodations();
        } else {
            setTimeout(scrollToAccommodations, 100);
        }
    };

    return (
        <header className="bg-background py-4 shadow-lg relative">
            <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
                <Link to="/" className="flex items-center gap-2 md:gap-3">
                    <img src="/anfitrioesdealuguel.png" alt="Logo" className="h-8 w-auto md:h-12" />
                    <span className="text-lg md:text-2xl font-bold text-primary">
                        <span className="hidden sm:inline">Anfitriões de Aluguel</span>
                        <span className="sm:hidden">Anfitriões</span>
                    </span>
                </Link>

                <nav className="hidden md:flex items-center">
                    <ul className="flex space-x-6 lg:space-x-8">
                        <li>
                            <Link
                                to="/favoritos"
                                className="text-primary px-3 py-2 lg:px-4 rounded-lg
                                         hover:text-primary-hover hover:bg-background-light
                                         transition-all duration-300 ease-in-out
                                         hover:scale-105 flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
                                </svg>
                                Favoritos
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                onClick={handleAccommodationsClick}
                                className="text-primary px-3 py-2 lg:px-4 rounded-lg
                                         hover:text-primary-hover hover:bg-background-light
                                         transition-all duration-300 ease-in-out
                                         hover:scale-105 flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                </svg>
                                Acomodações
                            </Link>
                        </li>
                    </ul>
                </nav>

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-primary p-2"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>

                {isMenuOpen && (
                    <div
                        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
                        onClick={handleMenuClose}
                    />
                )}

                <div
                    className={`
                        fixed inset-0 z-50 md:hidden
                        flex items-center justify-center
                        transition-all duration-300 ease-in-out
                        ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                    `}
                >
                    <nav className="bg-white p-6 rounded-xl shadow-2xl w-[80%] max-w-sm relative">
                        <button
                            onClick={handleMenuClose}
                            className="absolute top-4 right-4 text-primary hover:text-primary-hover"
                        >
                            <svg
                                className="w-7 h-7"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        <ul className="flex flex-col space-y-4 mt-4">
                            <li>
                                <Link
                                    to="/favoritos"
                                    className="text-primary flex items-center gap-2 px-4 py-3 rounded-lg
                                             hover:text-primary-hover hover:bg-gray-50
                                             transition-all duration-300 text-lg"
                                    onClick={handleMenuClose}
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
                                    </svg>
                                    Favoritos
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="text-primary flex items-center gap-2 px-4 py-3 rounded-lg
                                             hover:text-primary-hover hover:bg-gray-50
                                             transition-all duration-300 text-lg"
                                    onClick={handleAccommodationsClick}
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                    </svg>
                                    Acomodações
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
