import { Request, Response } from "express";
import * as ProductService from "../services/product.service";
import { asyncWrapper } from "../utils/errorHandler";
import { NewProduct } from "../types/product";


export const getAllProductController = asyncWrapper(
    async (req: Request, res: Response): Promise<void> => {
        const products = await ProductService.getAllProductService();
        res.status(200).json({
            msg: "Productos buscados correctamente",
            totalProducts: products.length,
            products,
        });
    }
);

export const getByIdProductoController = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const id_product = (req.params.id || "").trim();
    const product = await ProductService.getProductoByIdService(id_product);

    if (!product) {
      res.status(404).json({ msg: "Producto no encontrado" });
      return;
    }    

    res.status(200).json({
      msg: `Producto encontrado con id_product ${id_product}`,
      product,
    });
  }
)

export const createProductController = asyncWrapper(
    async (req: Request, res: Response): Promise<void> => {
        const product: NewProduct = req.body;
        const newProduct = await ProductService.createProductService(product);
        res.status(201).json({
            msg: `ingresado correctamente nuevo producto con nombre: ${newProduct.nombre}`,
            newProduct,
        });
    }
);  

export const updateProductController = asyncWrapper(
    async (req: Request, res: Response): Promise<void> => {
       const id_product = (req.params.id || "").trim();
       const {
         nombre,
         id_subcategory,
         descripcion,
         stock_actual,
         stock_maximo,
         fecha_vencimiento,
         numero_lote,
         
       } = req.body;
       const updatedProduct = await ProductService.updateProductService(id_product,id_subcategory, nombre, descripcion,stock_actual, stock_maximo, fecha_vencimiento, numero_lote);
       if (!updatedProduct) {
           res.status(404).json({ msg: "Producto no encontrado" });
           return;
       }
       res.status(200).json({
           msg: `Producto actualizado con id_product ${id_product}`,
           updatedProduct,
       });
   }
)

export const deleteProductController = asyncWrapper(
    async (req: Request, res: Response): Promise<void> => {
        const id_product = (req.params.id || "").trim();
        const deletedProduct = await ProductService.deleteProductService(id_product);
        if (!deletedProduct) {
            res.status(404).json({ msg: "Producto no encontrado" });
            return;
        }
        res.status(200).json({
            msg: `Producto eliminado con id_product ${id_product}`,
            deletedProduct,
        });
    }
);