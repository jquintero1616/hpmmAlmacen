import { Request, Response } from "express";
import * as VendedorService from "../services/vendedor.service";
import { asyncWrapper } from "../utils/errorHandler";
import { NewVendedor } from "../types/vendedor";

export const getAllVendedorController = asyncWrapper(
    async (req: Request, res: Response): Promise<void> => {
        const vendedor = await VendedorService.getAllVendedorService();
        res.status(200).json({
            msg: "Vendedores buscados correctamente",
            totalVendedor: vendedor.length,
            vendedor,
        });
    }
);

export const getVendedorByIdController = asyncWrapper(
    async (req: Request, res: Response): Promise<void> => {
        const id_vendedor = (req.params.id || "").trim();
        const vendedor = await VendedorService.getVendedorByService(id_vendedor);
        if (!vendedor) {
            res.status(404).json({ msg: "Vendedor no encontrado" });
            return;
        }
        res.status(200).json({
            msg: `vendedor encontrado correctamente con id_vendedor ${id_vendedor}`,
            vendedor,
        });
    }
);


export const createVendedorController = asyncWrapper(
    async (req: Request, res: Response): Promise<void> => {
        const data: NewVendedor = req.body;
        const vendedor = await VendedorService.createVendedorService(data);
        res.status(201).json({
            msg: "vendedor creado correctamente",
            vendedor,
        });
    }
);

export const updateVendedorController = asyncWrapper(
    async (req: Request, res: Response): Promise<void> => {
        const id_vendedor = (req.params.id || "").trim();
        const { id_proveedor,
             nombre_contacto,
              correo,
               estado } = req.body;
        const vendedor = await VendedorService.updateVendedorService(id_vendedor,
             id_proveedor,
              nombre_contacto,
               correo,
                estado);
        if (!vendedor) {
            res.status(404).json({ msg: "vendedor no encontrado" });
            return;
        }
        res.status(200).json({
            msg: `vendedor actualizado con id_vendedor ${id_vendedor}`,
            vendedor,
        });
    }
);

export const deleteVendedorController = asyncWrapper(
    async (req: Request, res: Response): Promise<void> => {
        const id_vendedor = (req.params.id || "").trim();
        await VendedorService.deleteVendedorService(id_vendedor);
        res.status(200).json({ msg: `vendedor eliminado con id_vendedor ${id_vendedor}` });
    }
);