import { Link, useParams } from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage';
import Spinner from '../components/Spinner';
import { useAccommodationById } from '../hooks/useAccommodations';

export default function AccommodationDetails() {
    const { id } = useParams();
    const { data: accommodation, isLoading, isError } = useAccommodationById(id);

    if (isLoading) return <Spinner />;
    if (isError) return <ErrorMessage />;

    return (
        <div className="min-h-screen bg-background-light py-8 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
                <img
                    src={accommodation.imagem}
                    alt={accommodation.nome}
                    className="w-full h-96 object-cover rounded-t-lg"
                />
                <div className="p-6">
                    <Link
                        to="/"
                        className="inline-flex items-center text-primary hover:text-primary-dark mb-6"
                    >
                        <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>
                        Voltar
                    </Link>
                    <h1 className="text-3xl font-bold text-primary mb-4">{accommodation.nome}</h1>
                    <p className="text-xl text-gray-600 mb-4">{accommodation.localizacao}</p>
                    <div className="flex items-center justify-between mb-6">
                        <span className="text-2xl font-bold text-primary">
                            R${accommodation.preco_noite.toFixed(2)} / noite
                        </span>
                    </div>
                    <div className="prose max-w-none">
                        <h2 className="text-xl font-semibold mb-2">Descrição</h2>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolore
                            fuga tempore animi distinctio eaque aliquam repudiandae unde libero,
                            dolorum inventore veniam deserunt nobis harum nemo dolores delectus
                            velit dolorem!
                        </p>
                        <h2 className="text-xl font-semibold mt-6 mb-2">Comodidades</h2>
                        <ul className="list-disc pl-5">
                            <li>1 Quarto</li>
                            <li>1 Banheiro</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
