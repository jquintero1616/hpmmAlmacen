import * as DirectionModel from "../models/direction.model";
import { NewDirection } from "../types/direction";
import logger from "../utils/loggers";


export const getAllDirectionService = async (): Promise<NewDirection[]> => {    
  try {
    const directions = await DirectionModel.getAllDirectionsModel();
    return directions;
  } catch (error) {
    logger.error("Error fetching directions", error);
    throw error;
  }
}

export const getDirectionByIdService = async (id_direction: number): Promise<NewDirection | null> => {
  return DirectionModel.getDirectionByIdModel(id_direction);    
}

export const createDirectionService = async (data: NewDirection) => {
  return DirectionModel.createDirectionModel(data);
}   

export const updateDirectionService = async (
  id_direction: number,
  name: string,
  estado: boolean
) => {
  const updatedDirection = await DirectionModel.updateDirectionModel(
    id_direction,
    name,
    estado
  );
  return updatedDirection;
};  

export async function deleteDirectionService(id_direction: number): Promise<NewDirection | null> {
  // Opcionalmente puedes verificar que exista:
  const existing = await DirectionModel.getDirectionByIdModel(id_direction);
  if (!existing) return null;

  // Llamar al modelo de delete
  const deactivatedDirection = await DirectionModel.deleteDirectionModel(id_direction);
  return deactivatedDirection;
}   