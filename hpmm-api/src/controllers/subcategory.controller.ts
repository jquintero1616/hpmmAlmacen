import { Request, Response } from "express";
import * as SubcategoryService from "../services/subcategory.service";
import { asyncWrapper } from "../utils/errorHandler";
import { NewSubcategory } from "../types/subcategory";

export const getAllsubcategoryController = asyncWrapper(
    async (req: Request, res: Response): Promise<void> => {
        const subcategories = await SubcategoryService.getAllsubcategoryService();
        res.status(200).json({
            msg: "Subcategorias buscadas correctamente",
            totalSubcategories: subcategories.length,
            subcategories,
        });
    }
);

export const getsubcategoryByidcontroller = asyncWrapper(
    async (req: Request, res: Response): Promise<void> => {
        const id_subcategory = (req.params.id || "").trim();
        const subcategory = await SubcategoryService.getSubcategoryByIdService(id_subcategory);        
        if (!subcategory) {
            res.status(404).json({ msg: "Subcategoria no encontrada" });
            return;
        }
        res.status(200).json({ msg: `Subcategoria encontrada con id_subcategory ${id_subcategory}`, subcategory }); 
        }
)

export const createSubcategoryController = asyncWrapper(
    async (req: Request, res: Response): Promise<void> => {
        const subcategoryData: NewSubcategory = req.body;
        const newSubcategory = await SubcategoryService.createSubcategoryService(subcategoryData);
        res.status(201).json(newSubcategory);
    }
);

export const editSubcategoryController = asyncWrapper(
    async (req: Request, res: Response): Promise<void> => {
        const id_subcategory = req.params.id_subcategory;
        const { name, estado } = req.body;
        const updatedSubcategory = await SubcategoryService.updateSubcategoryService(
            id_subcategory,
            name,
            estado
        );
        if (!updatedSubcategory) {
            res.status(404).json({ msg: "Subcategoria no encontrada" });
            return;
        }
        res.status(200).json({ msg: "Subcategoria actualizada correctamente", updatedSubcategory });
    }
);

export const deleteSubcategoryController = asyncWrapper(
    async (req: Request, res: Response): Promise<void> => {
        const id_subcategory = req.params.id_subcategory;
        const deletedSubcategory = await SubcategoryService.deleteSubcategoryService(id_subcategory);
        if (!deletedSubcategory) {
            res.status(404).json({ msg: "Subcategoria no encontrada" });
            return;
        }
        res.status(200).json({ msg: "Subcategoria eliminada correctamente", deletedSubcategory });
    }
);