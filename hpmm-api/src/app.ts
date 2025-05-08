import express from 'express';
import helmet from 'helmet';
import cors, { CorsOptions } from 'cors';
import 'dotenv/config';


import userRoutes from './routes/routes';        // tu router actual que solo tiene /users
import authRoutes from './routes/auth.routes';

const FRONTEND_ORIGINS = [
  'http://localhost:5173',
  'http://192.168.234.1:5173',
  'http://192.168.1.175:5173',
];

const corsOptions: CorsOptions = {
  origin: FRONTEND_ORIGINS,
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ['GET','POST','PUT','DELETE','PATCH','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization']
};

const app = express();

// 1) CORS antes de todo
app.use(cors(corsOptions));

// 2) Helmet (desactivas CSP si bloquea algo)
app.use(
  helmet({
    contentSecurityPolicy: false,
  }),
);

// 3) Parseo de JSON
app.use(express.json());

// Montas authRoutes en /api/auth
app.use('/api/auth', authRoutes);

// Montas userRoutes en /api/users
// (si quieres URL base /api/users en lugar de /api/users/users, cambia dentro de routes/routes)
app.use('/api/users', userRoutes);

export default app;