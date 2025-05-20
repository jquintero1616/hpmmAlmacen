import { Request, Response } from "express";
import * as EmployeService from "../services/kardex.service";
import { asyncWrapper } from "../utils/errorHandler";
import { NewKardex } from "../types/kardex";


export const getAllController = asyncWrapper(
    async (req: Request, res: Response): Promise<void> => {
        const kardex = await EmployeService.getAllKardexService();
        res.status(200).json({
            msg: "Kardex buscados correctamente",
            totalKardex: kardex.length,
            kardex,
        });
    }
);

export const getByIdcontroller = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const id_kardex = (req.params.id || "").trim();
    const kardex = await EmployeService.getKardexByIdService(id_kardex);

    if (!kardex) {
      res.status(404).json({ msg: "Kardex no encontrado" });
      return;
    }

    res.status(200).json({
      msg: `Kardex encontrado con id_kardex ${id_kardex}`,
      kardex,
    });
  }
);

export const createKardexController = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const data: NewKardex = req.body;
    const kardex = await EmployeService.createKardexService(data);
    res.status(201).json({
      msg: `Kardex creado correctamente con id_kardex`,
      kardex,
    });
  }
);

export const UpdateKardexController = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const id_kardex = (req.params.id || "").trim();
    const { 
        id_producto, 
        id_shopping, 
        anio_creacion, 
        tipo_movimiento, 
        fecha_movimiento, 
        numero_factura, 
        cantidad, 
        precio_unitario, 
        tipo_solicitud, 
        requisicion_numero, 
        estado, 
        observacion } = req.body;
    const updatedKardex = await EmployeService.updateKardexService(
      id_kardex,
      id_producto,
      id_shopping,
      anio_creacion,
      tipo_movimiento,
      fecha_movimiento,
      numero_factura,
      cantidad,
      precio_unitario,
      tipo_solicitud,
      requisicion_numero,
      estado,
      observacion
    );

    if (!updatedKardex) {
      res.status(404).json({ msg: "Kardex no encontrado" });
      return;
    }

    res.status(200).json({
      msg: `Kardex actualizado con id_kardex ${id_kardex}`,
      updatedKardex,
    });
  }
);
    
export const deleteKardexController = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const id_kardex = (req.params.id || "").trim();
    const deactivatedKardex =
      await EmployeService.deleteKardexService(id_kardex);
    res.status(200).json({
      msg: `Kardex eliminado con id_kardex ${id_kardex}`,
      deactivatedKardex,
    });
  }
);