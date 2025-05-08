// src/routes.ts
import { Router } from "express";
import {
  fetchAllUsersController,
  fetchUserByIdController,
  registerUserController,
  editUserController,
  removeUserController,
} from "../controllers/user.controller";
import { verifyToken } from "../utils/jwt.utils";

const router = Router(); // ← también es un Router

router.get("/users", fetchAllUsersController);
router.get("/users/:id", fetchUserByIdController);
router.post("/users",  registerUserController);
router.put("/users/:id",  editUserController);
router.delete("/users/:id", removeUserController);

export default router;
