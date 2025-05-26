import { PactInterface} from '../interfaces/pacts.interface';
import axiosPrivateInstance from '../helpers/axiosPrivateInstance';

const API_BASE_URL = 'http://localhost:3000/api' ;

export const GetPactsService = async (): Promise<PactInterface[] | null> => {
    try {
        const response = await axiosPrivateInstance.get(`${API_BASE_URL}/pacts`);
        return response.data.pacts;
    } catch (error) {
        console.error("Error al recuperar los pacts", error);
        throw error;
    }
    
};