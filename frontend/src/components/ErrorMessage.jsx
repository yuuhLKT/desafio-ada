const ErrorMessage = () => (
    <div className="flex justify-center py-12">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
            <svg
                className="w-12 h-12 text-red-500 mx-auto mb-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
            </svg>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Erro ao carregar acomodações</h3>
            <p className="text-gray-600 text-sm">Por favor, tente novamente mais tarde.</p>
        </div>
    </div>
);

export default ErrorMessage;
