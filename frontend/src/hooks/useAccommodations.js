import { useQuery } from '@tanstack/react-query';
import api from '../services/api';

const fetchAccommodations = async (params) => {
    if (params?.cidade) {
        const { data } = await api.get(`/acomodacoes?cidade=${params.cidade}`);
        return data;
    }
    const { data } = await api.get('/acomodacoes');
    return data;
};

const fetchAccommodationById = async (id) => {
    const { data } = await api.get(`/acomodacoes/${id}`);
    return data;
};

export const useAccommodations = (params) => {
    return useQuery({
        queryKey: ['accommodations', params?.cidade],
        queryFn: () => fetchAccommodations(params),
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        enabled: true,
    });
};

export const useAccommodationById = (id) => {
    return useQuery({
        queryKey: ['accommodation', id],
        queryFn: () => fetchAccommodationById(id),
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        enabled: !!id,
    });
};
