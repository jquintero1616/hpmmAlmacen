import { Request, Response } from 'express';
import { authenticateUser } from '../services/auth.service';

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const authResponse = await authenticateUser(email, password);

    if (authResponse) {
      res.json({ token: authResponse?.token, userId: authResponse?.userId });
    } else {
      res.status(401).json({ msg: 'Autenticacion Fallo.' });
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Login error: ${error?.message}`);
    }
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};