import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { CustomRequest } from '../types/express';

const SECRET_KEY = process.env.JWT_SECRET as string;

export const generateToken = (userId: string): string => {
  return jwt.sign({ userId }, SECRET_KEY, { expiresIn: '1h' });
};

export const verifyToken = (req: CustomRequest, res: Response, next: NextFunction) => {
  const token = req.get('Authorization')?.split(' ')[1];

  if (!token) {
    res.status(403).json({ msg: 'Se necesita un token de autenticación' });
    return;
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // Add the decoded user to the request
  } catch (error) {
    res.status(401).json({ msg: 'Token Invalido' });
    return;
  }

  next();
};
