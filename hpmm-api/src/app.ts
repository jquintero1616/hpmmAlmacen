import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import 'dotenv/config';




import routes from './routes/routes';

const FRONTEND_ORIGIN = [
  'http://192.168.234.1:5173',
  'http://192.168.1.175:5173',
];

const corsOptions = {
  origin: FRONTEND_ORIGIN,
  credentials: true,
  optionSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-type', 'Authorization', 'cross-origin-resource-policy'],
};

const app = express();

app.use(
  helmet({
    contentSecurityPolicy: false,
  }),
);
app.use(cors(corsOptions));
app.use(express.json());

app.use('/api', routes);

export default app;
