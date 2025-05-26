import { Router } from "express";
import { login, checkSession } from "../controllers/auth.controller";
import { authenticateJWT } from "../middlewares/auth.middleware";

const router = Router();

router.post("/login", login);
router.get("/check-session", authenticateJWT, checkSession);

export default router;
