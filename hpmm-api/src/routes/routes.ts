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



import { verifyToken } from "../utils/jwt.utils";

const router = Router(); //
// Create router users
router.get("/users", UserControllers.fetchAllUsersController);
router.get("/users/:id", UserControllers.fetchUserByIdController);
router.post("/users", UserControllers.registerUserController);
router.put("/users/:id", UserControllers.editUserController);
router.delete("/users/:id", UserControllers.removeUserController);

// Create router roles
router.get("/roles", RolControllers.getAllController);
router.get("/roles/:id", RolControllers.getByIdController);
router.post("/roles", RolControllers.registerRolesController);
router.put("/roles/:id", RolControllers.editRolController);
router.delete("/roles/:id", RolControllers.deleteRolController);

// Create router employes
router.get("/employes", EmployesControllers.getAllController);
router.get("/employes/:id", EmployesControllers.getByIdController);
router.post("/employes", EmployesControllers.registerEmployesController);
router.put("/employes/:id", EmployesControllers.UpdateEmployeController);
router.delete("/employes/:id", EmployesControllers.deleteEmployeController);

// Create router units
router.get("/units", UnitsControllers.getAllUnitsController);
router.get("/units/:id", UnitsControllers.getUnitByIdController);
router.post("/units", UnitsControllers.registerUnitController);
router.put("/units/:id", UnitsControllers.editUnitController);
router.delete("/units/:id", UnitsControllers.deleteUnitController);

// create routers pacts

router.get("/pacts", pactsController.getAllPactsController);
router.get("/pacts/:id", pactsController.getPactByIdController);
router.post("/pacts", pactsController.createPactController);
router.put("/pacts/:id", pactsController.updatePactController);
router.delete("/pacts/:id", pactsController.deletePactController);

// create router noti 

router.get("/noti", NotiControllers.getAllNotiController);
router.get("/noti/:id", NotiControllers.getNotiByIdController);
router.post("/noti", NotiControllers.createNotiController);
router.put("/noti/:id", NotiControllers.updateNotiController);
router.delete("/noti/:id", NotiControllers.deleteNotiController);

// create router requisi
router.get("/requisi", RequisiControllers.getAllRequisiController);    
router.get("/requisi/:id", RequisiControllers.getRequisiByController);
router.post("/requisi", RequisiControllers.createRequisiController);
router.put("/requisi/:id_", RequisiControllers.UpdateRequisiController);
router.delete("/requisi/:id", RequisiControllers.deleteRequisiController);

// create router scompras
router.get("/scompras",  ScomprasControllers.getAllScomprasController);
router.get("/scompras/:id", ScomprasControllers.getScomprasByIDController);
router.post("/scompras", ScomprasControllers.createdScomprasController);
router.put("/scompras/:id", ScomprasControllers.updateScompraController);
//router.delete("/:id_scompras", ScomprasControllers.deleteRequisiController);

// create router units_pacts
router.get("/unitPacts",     UnitsPactsControllers.getAllController);
router.get("/unitPacts/:id",     UnitsPactsControllers.getByIdController);
router.post("/unitPacts",    UnitsPactsControllers.registerUnitPactController);
router.put("/unitPacts/:id",    UnitsPactsControllers.editUnitPacts);


// create router Shopping
router.get("/shopping",  ShoppingControllers.getAllShoppingController); 
router.get("/shopping/:id", ShoppingControllers.getByIdShoppingController); 
router.post("/shopping", ShoppingControllers.createShoppingController);
router.put("/shopping/:id", ShoppingControllers.UpdateShoppingController);
router.delete("/shopping/:id", ShoppingControllers.deleteController);



export default router;
