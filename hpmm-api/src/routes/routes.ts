// src/routes.ts
import {  Router } from "express";
import * as UserControllers from "../controllers/user.controller";
import * as RolControllers from "../controllers/rol.controller";
import * as EmployesControllers from "../controllers/employes.controller";
import * as UnitsControllers from "../controllers/unit.controller";
import * as pactsController from "../controllers/pacts.controller"
import * as NotiControllers from "../controllers/noti.controller";
import * as RequisiControllers from "../controllers/requisi.controller";
import * as ScomprasControllers from "../controllers/scompras.controller";
import * as UnitsPactsControllers from "../controllers/units_x_pacts.controller";
import * as ShoppingControllers from "../controllers/shopping.controller";
import * as SupplierControllers from "../controllers/supplier.controller";
import * as CategoryControllers from "../controllers/category.controller";
import * as SubcategoryControllers from "../controllers/subcategory.controller";
import * as KardexControllers from "../controllers/kardex.controller";
import * as ProductControllers from "../controllers/product.controller";
import * as VendedorControllers from "../controllers/vendedor.controller";
import * as SubdireccionControllers from "../controllers/subdireccion.controller";
import * as RequiXproductControllers from "../controllers/requisi.x.product.controller";
import * as DirectionControllers from "../controllers/direction.controller";
import * as BitacoraControllers from "../controllers/bitacora.controller";
import * as AuthControllers from "../controllers/auth.controller";

//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
// intercepttor de bitacora 
import { bitacoraInterceptor } from "../middlewares/bitacora.middleware";
import { pagination } from "../middlewares/pagination.middleware";
import { bitOpts } from "../config/bitacora.config";
// interceptor de AuthenticateJWT.
import { authenticateJWT } from "../middlewares/auth.middleware";

const router = Router(); //

// Create router users
router.get("/users", bitacoraInterceptor(bitOpts.users), UserControllers.fetchAllUsersController);
router.get("/users/:id",bitacoraInterceptor(bitOpts.users), UserControllers.fetchUserByIdController);
// Prueba de JWT en create user.
router.post("/users", bitacoraInterceptor(bitOpts.users), UserControllers.registerUserController);
router.put("/users/:id", bitacoraInterceptor(bitOpts.users),UserControllers.editUserController);
router.delete("/users/:id", bitacoraInterceptor(bitOpts.users),UserControllers.removeUserController);

// Create router roles
router.get("/roles", bitacoraInterceptor(bitOpts.roles),RolControllers.getAllController);
router.get("/roles/:id", bitacoraInterceptor(bitOpts.roles),RolControllers.getByIdController);
router.post("/roles",bitacoraInterceptor(bitOpts.roles), RolControllers.registerRolesController);
router.put("/roles/:id", bitacoraInterceptor(bitOpts.roles),RolControllers.editRolController);
router.delete("/roles/:id", bitacoraInterceptor(bitOpts.roles),RolControllers.deleteRolController);

// Create router employes
router.get("/employes", bitacoraInterceptor(bitOpts.employes),EmployesControllers.getAllController);
router.get("/employes/:id", bitacoraInterceptor(bitOpts.employes),EmployesControllers.getByIdController);
router.post("/employes", bitacoraInterceptor(bitOpts.employes),EmployesControllers.registerEmployesController);
router.put("/employes/:id",bitacoraInterceptor(bitOpts.employes), EmployesControllers.UpdateEmployeController);
router.delete("/employes/:id", bitacoraInterceptor(bitOpts.employes),EmployesControllers.deleteEmployeController);

// Create router units
router.get("/units",bitacoraInterceptor(bitOpts.units), UnitsControllers.getAllUnitsController);
router.get("/units/:id", bitacoraInterceptor(bitOpts.units),UnitsControllers.getUnitByIdController);
router.post("/units", bitacoraInterceptor(bitOpts.units),UnitsControllers.registerUnitController);
router.put("/units/:id", bitacoraInterceptor(bitOpts.units),UnitsControllers.editUnitController);
router.delete("/units/:id", bitacoraInterceptor(bitOpts.units),UnitsControllers.deleteUnitController);

// create routers pacts

router.get("/pacts", bitacoraInterceptor(bitOpts.pacts),pactsController.getAllPactsController);
router.get("/pacts/:id", bitacoraInterceptor(bitOpts.pacts),pactsController.getPactByIdController);
router.post("/pacts", bitacoraInterceptor(bitOpts.pacts),pactsController.createPactController);
router.put("/pacts/:id", bitacoraInterceptor(bitOpts.pacts),pactsController.updatePactController);
router.delete("/pacts/:id",bitacoraInterceptor(bitOpts.pacts), pactsController.deletePactController);

// create router noti 

router.get("/noti", bitacoraInterceptor(bitOpts.noti),NotiControllers.getAllNotiController);
router.get("/noti/:id",bitacoraInterceptor(bitOpts.noti), NotiControllers.getNotiByIdController);
router.post("/noti",bitacoraInterceptor(bitOpts.noti), NotiControllers.createNotiController);
router.put("/noti/:id", bitacoraInterceptor(bitOpts.noti),NotiControllers.updateNotiController);
router.delete("/noti/:id",bitacoraInterceptor(bitOpts.noti), NotiControllers.deleteNotiController);

// create router requisi
router.get("/requisi", bitacoraInterceptor(bitOpts.requisi),RequisiControllers.getAllRequisiController);    
router.get("/requisi/:id",bitacoraInterceptor(bitOpts.requisi), RequisiControllers.getRequisiByController);
router.post("/requisi", bitacoraInterceptor(bitOpts.requisi),RequisiControllers.createRequisiController);
router.put("/requisi/:id",bitacoraInterceptor(bitOpts.requisi), RequisiControllers.UpdateRequisiController);
//router.delete("/requisi/:id", bitacoraInterceptor(bitOpts.requisi),RequisiControllers.deleteRequisiController);

// create router scompras
router.get("/scompras",  bitacoraInterceptor(bitOpts.scompras),ScomprasControllers.getAllScomprasController);
router.get("/scompras/:id",bitacoraInterceptor(bitOpts.scompras), ScomprasControllers.getScomprasByIDController);
router.post("/scompras",bitacoraInterceptor(bitOpts.scompras), ScomprasControllers.createdScomprasController);
router.put("/scompras/:id",bitacoraInterceptor(bitOpts.scompras), ScomprasControllers.updateScompraController);
//router.delete("/:id_scompras", ScomprasControllers.deleteRequisiController);

// create router units_pacts
router.get("/unitPacts",    bitacoraInterceptor(bitOpts.pacts), UnitsPactsControllers.getAllController);
router.get("/unitPacts/:id",  bitacoraInterceptor(bitOpts.pacts),   UnitsPactsControllers.getByIdController);
router.post("/unitPacts",  bitacoraInterceptor(bitOpts.pacts),  UnitsPactsControllers.registerUnitPactController);
router.put("/unitPacts/:id", bitacoraInterceptor(bitOpts.pacts),   UnitsPactsControllers.editUnitPacts);


// create router Shopping
router.get("/shopping", bitacoraInterceptor(bitOpts.shopping), ShoppingControllers.getAllShoppingController); 
router.get("/shopping/:id",bitacoraInterceptor(bitOpts.shopping), ShoppingControllers.getByIdShoppingController); 
router.post("/shopping",bitacoraInterceptor(bitOpts.shopping), ShoppingControllers.createShoppingController);
router.put("/shopping/:id", bitacoraInterceptor(bitOpts.shopping),ShoppingControllers.UpdateShoppingController);
router.delete("/shopping/:id", bitacoraInterceptor(bitOpts.shopping),ShoppingControllers.deleteController);


//create router vendedor

router.get("/vendedor", bitacoraInterceptor(bitOpts.vendedor), VendedorControllers.getAllVendedorController); 
router.get("/vendedor/:id",bitacoraInterceptor(bitOpts.vendedor), VendedorControllers.getVendedorByIdController); 
router.post("/vendedor",bitacoraInterceptor(bitOpts.vendedor), VendedorControllers.createVendedorController);
router.put("/vendedor/:id",bitacoraInterceptor(bitOpts.vendedor), VendedorControllers.updateVendedorController);
router.delete("/vendedor/:id",bitacoraInterceptor(bitOpts.vendedor), VendedorControllers.deleteVendedorController);

// create router supplier
router.get("/supplier",  bitacoraInterceptor(bitOpts.supplier),SupplierControllers.getAllSuppliersController); 
router.get("/supplier/:id",bitacoraInterceptor(bitOpts.supplier), SupplierControllers.getSuppliersByIdController); 
router.post("/supplier", bitacoraInterceptor(bitOpts.supplier),SupplierControllers.createSuppliersController);
router.put("/supplier/:id", bitacoraInterceptor(bitOpts.supplier),SupplierControllers.updateSuppliersController);
router.delete("/supplier/:id", bitacoraInterceptor(bitOpts.supplier),SupplierControllers.deleteSuppliersController);
// create router category
router.get("/category",  bitacoraInterceptor(bitOpts.category),CategoryControllers.getAllCategoryController); 
router.get("/category/:id",bitacoraInterceptor(bitOpts.category), CategoryControllers.getCategoryByIdController); 
router.post("/category", bitacoraInterceptor(bitOpts.category),CategoryControllers.createCategoryController);
router.put("/category/:id", bitacoraInterceptor(bitOpts.category),CategoryControllers.updateCategoryController);
router.delete("/category/:id", bitacoraInterceptor(bitOpts.category),CategoryControllers.deleteCategoryController);


// create router subcategory

router.get("/subcategory",  bitacoraInterceptor(bitOpts.subcategory),SubcategoryControllers.getAllsubcategoryController);   
router.get("/subcategory/:id",bitacoraInterceptor(bitOpts.subcategory), SubcategoryControllers.getsubcategoryByidcontroller); 
router.post("/subcategory", bitacoraInterceptor(bitOpts.subcategory),SubcategoryControllers.createSubcategoryController);
router.put("/subcategory/:id", bitacoraInterceptor(bitOpts.subcategory),SubcategoryControllers.updateSubcategoryController);
router.delete("/subcategory/:id", bitacoraInterceptor(bitOpts.subcategory),SubcategoryControllers.deleteSubcategoryController);

// create router Kardex

router.get("/kardex/details",pagination(20, 100),KardexControllers.getKardexDetailsController);
router.get ("/kardex",  bitacoraInterceptor(bitOpts.kardex),KardexControllers.getAllKardexController);
router.get("/kardex/:id",bitacoraInterceptor(bitOpts.kardex), KardexControllers.getByIdController);
router.post("/kardex",bitacoraInterceptor(bitOpts.kardex), KardexControllers.createKardexController);
router.put("/kardex/:id",bitacoraInterceptor(bitOpts.kardex), KardexControllers.updateKardexController);
router.delete("/kardex/:id",bitacoraInterceptor(bitOpts.kardex), KardexControllers.deleteKardexController);

// create router Product

router.get("/product",  bitacoraInterceptor(bitOpts.product),ProductControllers.getAllProductController);   
router.get("/product/:id",bitacoraInterceptor(bitOpts.product), ProductControllers.getByIdProductoController);
router.post("/product",bitacoraInterceptor(bitOpts.product), ProductControllers.createProductController);
router.put("/product/:id",bitacoraInterceptor(bitOpts.product), ProductControllers.updateProductController);
router.delete("/product/:id",bitacoraInterceptor(bitOpts.product), ProductControllers.deleteProductController);

// create router subdireccion

router.get("/subdireccion",  bitacoraInterceptor(bitOpts.subdireccion),SubdireccionControllers.getAllSubdireccionesController);   
router.get("/subdireccion/:id",bitacoraInterceptor(bitOpts.subdireccion), SubdireccionControllers.getSubdireccionByIdController);
router.post("/subdireccion",bitacoraInterceptor(bitOpts.subdireccion), SubdireccionControllers.CreateSubdireccionController);
router.put("/subdireccion/:id",bitacoraInterceptor(bitOpts.subdireccion), SubdireccionControllers.UpdateSubdireccionController);
router.delete("/subdireccion/:id",bitacoraInterceptor(bitOpts.subdireccion), SubdireccionControllers.deleteSubdireccionController);

// create router requisicion y productos

router.get ("/requiXproduct",  bitacoraInterceptor(bitOpts.requiXproduct),RequiXproductControllers.getAllRequisiProductController);
router.get("/requiXproduct/:id",bitacoraInterceptor(bitOpts.requiXproduct), RequiXproductControllers.getByIdController);
router.post("/requiXproduct",bitacoraInterceptor(bitOpts.requiXproduct), RequiXproductControllers.createRequisiProductController);
router.put("/requiXproduct/:id",bitacoraInterceptor(bitOpts.requiXproduct), RequiXproductControllers.UpdateRequisiProductController);
//router.delete("/requiXproduct/:id",bitacoraInterceptor(bitOpts.requiXproduct), RequiXproductControllers);


//create router direction
router.get("/direction",  bitacoraInterceptor(bitOpts.direction),DirectionControllers.getAllDirectionController); 
router.get("/direction/:id",bitacoraInterceptor(bitOpts.direction), DirectionControllers.getDirectionByIdController); 
router.post("/direction", bitacoraInterceptor(bitOpts.direction),DirectionControllers.CreateDirectionController);
router.put("/direction/:id", bitacoraInterceptor(bitOpts.direction),DirectionControllers.UpdateDirectionController);
router.delete("/direction/:id", bitacoraInterceptor(bitOpts.direction),DirectionControllers.deleteDirectionController);

// create router Bitacora


router.get("/bitacora",  bitacoraInterceptor(bitOpts.bitacora),BitacoraControllers.getAllBitacoraController); 
router.get("/bitacora/:id",bitacoraInterceptor(bitOpts.bitacora), BitacoraControllers.getBitacoraByIdController); 
/*router.post("/bitacora", bitacoraInterceptor(bitOpts.bitacora),BitacoraControllers.createBitacoraController);
router.put("/bitacora/:id", bitacoraInterceptor(bitOpts.bitacora),BitacoraControllers.UpdateBitacoraController);
router.delete("/bitacora/:id", bitacoraInterceptor(bitOpts.bitacora),BitacoraControllers.deleteBitacoraController);
*/

export default router;
