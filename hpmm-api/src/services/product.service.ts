import * as ProductModel from "../models/product.model";
import { NewProduct } from "../types/product";
import logger from "../utils/loggers";


export const getAllProductService = async (): Promise<NewProduct[]> => {
    try {
        const products = await ProductModel.getAllProductModel();
        return products;
    } catch (error) {
        logger.error("Error fetching products", error);
        throw error;
    }
};

export const getProductoByIdService = async (id_product: string): Promise<NewProduct | null> => {
    try {
        const product = await ProductModel.getProductByIdModel(id_product);
        return product;
    } catch (error) {
        logger.error("Error fetching product", error);
        throw error;
    }
};

export const createProductService = async (data: NewProduct) => {
    return ProductModel.createProductModel(data);
}

export const updateProductService = async (
    id_product: string,
    id_subcategory: string,
    nombre: string,
    descripcion: string,
    stock_actual: number,
    stock_maximo: number,
    fecha_vencimiento: Date,    
    numero_lote: string,
    
) => {
    const updatedProduct = await ProductModel.updateProductModel(
        id_product,
        id_subcategory,
        nombre,
        descripcion,
        stock_actual,
        stock_maximo,
        fecha_vencimiento,
        numero_lote
        
    );
    return updatedProduct;  
};

export async function deleteProductService(
    id_product: string
): Promise<NewProduct | null> {
    const existing = await ProductModel.getProductByIdModel(id_product);
    if (!existing) return null;

    const deactivatedProduct = await ProductModel.deletePrudctModel(id_product);
    return deactivatedProduct;
}