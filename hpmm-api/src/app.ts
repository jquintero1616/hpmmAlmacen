import express from "express";
import helmet from "helmet";
import cors, { CorsOptions } from "cors";
import "dotenv/config";

import authRouter from "./routes/auth.routes";
import userRouter from "./routes/routes";     // tus rutas /users
import { errorHandler } from "./utils/errorHandler";

const FRONTEND_ORIGINS = [
  "http://localhost:5173",
  "http://192.168.234.1:5173",
  "http://192.168.1.175:5173",
];

const corsOptions: CorsOptions = {
  origin: process.env.NODE_ENV === "production" ? FRONTEND_ORIGINS : "*",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200,
};

const app = express();
app.use(cors(corsOptions));
app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json());

// monta tus rutas **públicas** y protegidas de Auth:
app.use('/api/auth', authRouter);

// monta todas las otras rutas de tu monolito (users, roles, etc):
app.use('/api', userRouter);

// manejador de errores al final
app.use(errorHandler);

export default app;