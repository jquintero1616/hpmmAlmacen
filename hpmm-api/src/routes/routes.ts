// src/routes.ts
import { Router } from "express";
import * as UserControllers from "../controllers/user.controller";
import * as RolControllers from "../controllers/rol.controller";
import * as EmployesControllers from "../controllers/employes.controller";
import * as UnitsControllers from "../controllers/unit.controller";
import * as pactsController from "../controllers/pacts.controller"


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

// Create router auth
router.post("/employes", EmployesControllers.getAllController);
router.get("/employes/:id", EmployesControllers.getByIdController);
router.post("/employes", EmployesControllers.registerEmployesController);
router.put("/employes/:id", EmployesControllers.editEmployeController);
router.delete("/employes/:id", EmployesControllers.deleteEmployeController);

// Create router auth
router.post("/units", UnitsControllers.getAllUnitsController);
router.get("/units/:id", UnitsControllers.getUnitByIdController);
router.post("/units", UnitsControllers.registerUnitController);
router.put("/units/:id", UnitsControllers.editUnitController);
router.delete("/units/:id", UnitsControllers.deleteUnitController);

// create routers auth 

router.get("/", pactsController.getAllPactsController);
router.get("/:id_pacts", pactsController.getPactByIdController);
router.post("/", pactsController.createPactController);
router.put("/:id_pacts", pactsController.updatePactController);
router.delete("/:id_pacts", pactsController.deletePactController);



export default router;
