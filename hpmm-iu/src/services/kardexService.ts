import { kardexInterface } from "../interfaces/kardex.interface";
import axiosPrivateInstance from "../helpers/axiosPrivateInstance";


const API_BASE_URL = "http://localhost:3000/api";

export const GetKardexService = async (): Promise<kardexInterface[] | null> => {
    try {

        const response = await axiosPrivateInstance.get(`${API_BASE_URL}/kardex`);
        return response.data.kardex;

    } catch (error) {
        console.error("Error al obtener el kardex:", error);
        return null;
    }
};

export const GetKardexByIdService = async (id_kardex: string): Promise<kardexInterface | undefined> => {
    try {
        const response = await axiosPrivateInstance.get<kardexInterface>(`${API_BASE_URL}/kardex/${id_kardex}`);
        return response.data;
    } catch (error) {
        console.error(`Error al obtener el kardex por ID: ${id_kardex}`, error);
        return undefined;
    }
};

export const PostCreateKardexService = async (kardexs: kardexInterface): Promise<kardexInterface> => {
    try {
        const response = await axiosPrivateInstance.post<kardexInterface>(`${API_BASE_URL}/kardex`, {
            id_kardex: kardexs.id_kardex,
            id_producto: kardexs.id_producto,
            id_shopping: kardexs.id_shopping,
            anio_creacion: kardexs.anio_creacion,
            tipo_movimiento: kardexs.tipo_movimiento,
            fecha_movimiento: kardexs.fecha_movimiento,
            numero_factura: kardexs.numero_factura,
            cantidad: kardexs.cantidad,
            precio_unitario: kardexs.precio_unitario,
            tipo_solicitud: kardexs.tipo_solicitud,
            requisicion_numero: kardexs.requisicion_numero,
            tipo: kardexs.tipo,
            observacion: kardexs.observacion,
            estado: kardexs.estado,
        }, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error al crear el kardex:", error);
        throw error;
    }
}

export const PutUpdateKardexService = async (id_kardex: string, kardex: kardexInterface): Promise<void> => {    
    try {
        await axiosPrivateInstance.put(`${API_BASE_URL}/kardex/${id_kardex}`, {
            kardex,
        });
    } catch (error) {
        console.error(`Error al actualizar el kardex con ID: ${id_kardex}`, error);
        throw error;    

    }
}

export const DeleteKardexService = async (id_kardex: string): Promise<void> => {
    try {
        await axiosPrivateInstance.delete(`${API_BASE_URL}/kardex/${id_kardex}`);
    } catch (error) {
        console.error(`Error al eliminar el kardex con ID: ${id_kardex}`, error);
        throw error;
    }
}

   