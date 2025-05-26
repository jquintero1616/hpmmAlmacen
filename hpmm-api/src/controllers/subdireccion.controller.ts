import { Request, Response } from "express";
import * as SubdireccionService from "../services/subdireccion.service";
import { asyncWrapper } from "../utils/errorHandler";
import { NewSubdireccion } from "../types/subdireccion";

export const getAllSubdireccionesController = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const subdirecciones =
      await SubdireccionService.getAllSubdireccionesService();
    res.status(200).json({
      msg: "Subdirecciones buscadas correctamente",
      totalSubdirecciones: subdirecciones.length,
      subdirecciones,
    });
  }
);

export const getSubdireccionByIdController = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const id_subdireccion = (req.params.id || "").trim();
    const subdireccion =
      await SubdireccionService.getSubdireccionByIdService(id_subdireccion);

    if (!subdireccion) {
      res.status(404).json({ msg: "Subdireccion no encontrada" });
      return;
    }

    res
      .status(200)
      .json({
        msg: `Subdireccion encontrada con id_subdireccion ${id_subdireccion}`,
        subdireccion,
      });
  }
);

export const CreateSubdireccionController = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const subdireccionData: NewSubdireccion = req.body;
    const newSubdireccion =
      await SubdireccionService.createSubdireccionService(subdireccionData);
    res.status(201).json(newSubdireccion);
  }
);

export const UpdateSubdireccionController = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const id_subdireccion = (req.params.id || "").trim();
    const { nombre } = req.body;
    const updatedSubdireccion =
      await SubdireccionService.updateSubdireccionService(
        id_subdireccion,
        nombre,
        
      );

    if (!updatedSubdireccion) {
      res.status(404).json({ msg: "Subdireccion no encontrada" });
      return;
    }

    res
      .status(200)
      .json({
        msg: "Subdireccion actualizada correctamente",
        updatedSubdireccion,
      });
  }
);

export const deleteSubdireccionController = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const id_subdireccion = (req.params.id || "").trim();
    const deletedSubdireccion =
      await SubdireccionService.deleteSubdireccionService(id_subdireccion);

    if (!deletedSubdireccion) {
      res.status(404).json({ msg: "Subdireccion no encontrada" });
      return;
    }

    res
      .status(200)
      .json({
        msg: "Subdireccion eliminada correctamente",
        deletedSubdireccion,
      });
  }
);
