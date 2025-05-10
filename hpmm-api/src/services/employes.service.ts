import * as RolModel from "../models/employes.model";
import { NewEmploye } from "../types/employes";
import logger from "../utils/loggers";

// get all employes
export const getAllEmployesService = async (): Promise<NewEmploye[]> => {
  try {
    const employes = await RolModel.getallEmployesModel();
    return employes;
  } catch (error) {
    logger.error("Error fetching employes", error);
    throw error;
  }
};
// Get employe by id_employes
export const getEmployeByIdService = async (
  id_employes: number
): Promise<NewEmploye | null> => {
  return RolModel.getEmployeByIdModel(id_employes);
};
// Create employe
export const createEmployeService = async (data: NewEmploye) => {
  return RolModel.createEmployeModel(data);
};
//  update employe
export const updateEmployeService = async (
  id_employes: number,
  name: string,
  puesto: string,
  correo: string,
  telefono: string,
  estado: boolean
) => {
  const updatedEmploye = await RolModel.updateEmployeModel(
    id_employes,
    name,
    puesto,
    correo,
    telefono,
    estado
  );
  return updatedEmploye;
};
// Delete employe
export async function deleteEmployeService(
  id_employes: number
): Promise<NewEmploye | null> {
  // Opcionalmente puedes verificar que exista:
  const existing = await RolModel.getEmployeByIdModel(id_employes);
  if (!existing) return null;

  // Llamar al modelo de delete
  const deactivatedEmploye = await RolModel.deleteEmployeModel(id_employes);
  return deactivatedEmploye;
}
