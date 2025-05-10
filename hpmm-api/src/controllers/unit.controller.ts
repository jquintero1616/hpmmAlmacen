import { Request, Response } from "express";
import * as UnitService from "../services/unit.service";
import { asyncWrapper } from "../utils/errorHandler";
import { NewUnit } from "../types/units";

export const getAllUnitsController = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const units = await UnitService.getAllUnitsService();
    res.status(200).json({
      msg: "Unidades buscadas correctamente",
      totalUnits: units.length,
      units,
    });
  }
);

export const getUnitByIdController = asyncWrapper(
    async (req: Request, res: Response): Promise<void> => {
        const id_units = req.params.id_units;
        const unit = await UnitService.getUnitByIdService(id_units);
    
        if (!unit) {
            res.status(404).json({ msg: "Unidad no encontrada" });
            return;
        }
    
        res.status(200).json({ msg: `Unidad encontrada con id_units ${id_units}`, unit });
        }
);


export const registerUnitController = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const unitData: NewUnit = req.body;
    const newUnit = await UnitService.createUnitService(unitData);
    res.status(201).json(newUnit);
  }
);  


export const editUnitController = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const id_units = req.params.id_units;
    const { name, estado } = req.body;
    const updatedUnit = await UnitService.updateUnitService(
      id_units,
      name,
      estado
    );

    if (!updatedUnit) {
      res.status(404).json({ msg: "Unidad no encontrada" });
      return;
    }

    res.status(200).json({ msg: "Unidad actualizada correctamente", updatedUnit });
  }
);

export const deleteUnitController = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const id_units = req.params.id_units;
    const deactivatedUnit = await UnitService.deleteUnitService(id_units);

    if (!deactivatedUnit) {
      res.status(404).json({ msg: "Unidad no encontrada" });
      return;
    }

    res.status(200).json({ msg: "Unidad desactivada correctamente", deactivatedUnit });
  }
);  



