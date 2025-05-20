// src/routes.ts
import { Router } from "express";
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
import * as VendedorControllers from "../controllers/vendedor.controller";
import * as SupplierControllers from "../controllers/supplier.controller";
import { bitacoraInterceptor } from "../middlewares/bitacora.middleware";
import { bitOpts } from "../config/bitacora.config";


//import { verifyToken } from "../utils/jwt.utils";



const router = Router(); //
// Create router users
router.get("/users", bitacoraInterceptor(bitOpts.users), UserControllers.fetchAllUsersController);
router.get("/users/:id",bitacoraInterceptor(bitOpts.users), UserControllers.fetchUserByIdController);
router.post("/users",bitacoraInterceptor(bitOpts.users), UserControllers.registerUserController);
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
router.get("/units",bitacoraInterceptor(bitOpts.employes), UnitsControllers.getAllUnitsController);
router.get("/units/:id", bitacoraInterceptor(bitOpts.employes),UnitsControllers.getUnitByIdController);
router.post("/units", bitacoraInterceptor(bitOpts.employes),UnitsControllers.registerUnitController);
router.put("/units/:id", bitacoraInterceptor(bitOpts.employes),UnitsControllers.editUnitController);
router.delete("/units/:id", bitacoraInterceptor(bitOpts.employes),UnitsControllers.deleteUnitController);

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
router.put("/requisi/:id_",bitacoraInterceptor(bitOpts.requisi), RequisiControllers.UpdateRequisiController);
router.delete("/requisi/:id", bitacoraInterceptor(bitOpts.requisi),RequisiControllers.deleteRequisiController);

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


router.get("/supplier",  bitacoraInterceptor(bitOpts.supplier),SupplierControllers.getAllSuppliersController); 
router.get("/supplier/:id",bitacoraInterceptor(bitOpts.supplier), SupplierControllers.getSuppliersByIdController); 
router.post("/supplier", bitacoraInterceptor(bitOpts.supplier),SupplierControllers.createSuppliersController);
router.put("/supplier/:id", bitacoraInterceptor(bitOpts.supplier),SupplierControllers.updateSuppliersController);
router.delete("/supplier/:id", bitacoraInterceptor(bitOpts.supplier),SupplierControllers.deleteSuppliersController);

export default router;
