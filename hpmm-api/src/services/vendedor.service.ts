import * as EmployeModel from "../models/vendedor.model";
import { NewVendedor } from "../types/vendedor";
import logger from "../utils/loggers";


export const getAllVendedorService = async (): Promise<NewVendedor[]> => {
    try {
        const vendedor = await EmployeModel.getAllVendedorModel();
        return vendedor;
    } catch (error) {
        logger.error("Error fetching vendedor", error);
        throw error;
    }
};


export const getVendedorByService = async (
    id_vendedor: string
): Promise<NewVendedor | null> => {
    try {
        const vendedor = await EmployeModel.getVendedorByIdModel(id_vendedor);
        return vendedor;
    } catch (error) {
        logger.error("Error fetching vendedor", error);
        throw error;
    }
};

export const createVendedorService = async (data: NewVendedor) => {
    try {
        return await EmployeModel.createVendedorModel(data);
    } catch (error) {
        logger.error("Error creating vendedor", error);
        throw error;
    }
};

export const updateVendedorService = async (
    id_vendedor: string,
    id_proveedor: string,
    nombre_contacto: string, 
    correo:string,
    estado: boolean

): Promise<NewVendedor> => {
    try{
    const updatedVendedor = await EmployeModel.updateVendedorModel(
        id_vendedor,
        id_proveedor,
        nombre_contacto,
        correo,
        estado   
    ); 

    if (!updatedVendedor) {
        throw new Error(`vendedor with id_vendedor ${id_vendedor} not found`);
    }
    return updatedVendedor;
    } catch (error) {
        logger.error(`Error updating vendedor ${id_vendedor}`, error);
        throw error;
    }
};  

export async function deleteVendedorService(id_vendedor: string): Promise<void> {
    try {
        await EmployeModel.deleteVendedorModel(id_vendedor);
    } catch (error) {
        logger.error(`Error deleting vendedor ${id_vendedor}`, error);
        throw error;
    }
}   



