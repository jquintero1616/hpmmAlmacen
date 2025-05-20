import { Request, Response } from "express";
import * as SubcategoryService from "../services/category.service";
import { asyncWrapper } from "../utils/errorHandler";
import { NewCategory } from "../types/category";


export const getAllCategoryController = asyncWrapper(
    async (req: Request, res: Response): Promise<void> => {
        const category = await SubcategoryService.getAllCategoryService();
        res.status(200).json({
            msg: "Categorias buscadas correctamente",
            totalCategory: category.length,
            category,
        });
    }
)

export const getCategoryByIdController = asyncWrapper(
    async (req: Request, res: Response): Promise<void> => {
        const id_category = (req.params.id || "").trim();
        const category = await SubcategoryService.getCategoryByIdService(id_category);
       if (!category) {
            res.status(404).json({ msg: "Categoria no encontrada" });
            return;
        }
        res.status(200).json({ msg: `Categoria encontrada con id_category ${id_category}`, category }); 
    }
)

export const createCategoryController = asyncWrapper(
    async (req: Request, res: Response): Promise<void> => {
        const categoryData: NewCategory = req.body;
        const newCategory = await SubcategoryService.createCategoryService(categoryData);
        res.status(201).json(newCategory);
    }
);

export const editCategoryController = asyncWrapper(
    async (req: Request, res: Response): Promise<void> => {
        const id_category = req.params.id_category;
        const { name, estado } = req.body;
        const updatedCategory = await SubcategoryService.updateCategoryService(
            id_category,
            name,
            estado
        );
        if (!updatedCategory) {
            res.status(404).json({ msg: "Categoria no encontrada" });
            return;
        }
        res.status(200).json({ msg: "Categoria actualizada correctamente", updatedCategory });
    }
);

export const deleteCategoryController = asyncWrapper(
    async (req: Request, res: Response): Promise<void> => {
        const id_category = req.params.id_category;
        const deletedCategory = await SubcategoryService.deleteCategoryService(id_category);
        if (!deletedCategory) {
            res.status(404).json({ msg: "Categoria no encontrada" });
            return;
        }
        res.status(200).json({ msg: "Categoria eliminada correctamente", deletedCategory });
    }
);