import { Request, Response } from "express";
import * as DirectionService from "../services/direction.service";
import { asyncWrapper } from "../utils/errorHandler";
import { NewDirection } from "../types/direction";


export const getAllDirectionController = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const directions = await DirectionService.getAllDirectionService();
    res.status(200).json({
      msg: "Direcciones buscadas correctamente",
      totalDirections: directions.length,
      directions,
    });
  }
);


export const getDirectionByIdController = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const id_direction = parseInt(req.params.id_direction, 10);
    const direction = await DirectionService.getDirectionByIdService(id_direction);

    if (!direction) {
      res.status(404).json({ msg: "Direccion no encontrada" });
      return;
    }

    res.status(200).json({ msg: `Direccion encontrada con id_direction ${id_direction}`, direction });
  }
);  


export const registerDirectionController = asyncWrapper(
    async (req: Request, res: Response): Promise<void> => {
        const directionData: NewDirection = req.body;
        const newDirection = await DirectionService.createDirectionService(directionData);
        res.status(201).json(newDirection);
    }
);


export const editDirectionController = asyncWrapper(
    async (req: Request, res: Response): Promise<void> => {
        const id_direction = parseInt(req.params.id_direction, 10);
        const { name, estado } = req.body;
        const updatedDirection = await DirectionService.updateDirectionService(
        id_direction,
        name,
        estado
        );
    
        if (!updatedDirection) {
        res.status(404).json({ msg: "Direccion no encontrada" });
        return;
        }
    
        res.status(200).json({ msg: `Direccion editada con id_direction ${id_direction}`, updatedDirection });
    }
);

export const deleteDirectionController = asyncWrapper(
    async (req: Request, res: Response): Promise<void> => {
        const id_direction = parseInt(req.params.id_direction, 10);
        const deletedDirection = await DirectionService.deleteDirectionService(id_direction);
    
        if (!deletedDirection) {
        res.status(404).json({ msg: "Direccion no encontrada" });
        return;
        }
    
        res.status(200).json({ msg: `Direccion eliminada con id_direction ${id_direction}`, deletedDirection });
    }
);  



