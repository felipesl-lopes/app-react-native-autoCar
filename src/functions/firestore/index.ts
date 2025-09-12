import axiosService from '../../services/api';

/**
 * Função que busca os dados do veículo anunciado através do id.
 * @param id
 * @returns
 */
export const getDataAdFirestore = async (id: string) => {
  try {
    const { data } = await axiosService.get(`/firestore/carDetails/${id}`);
    return data;
  } catch (error) {
    return error;
  }
};
