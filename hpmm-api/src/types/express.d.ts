import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";
import { Pagination } from "../../middlewares/pagination.middleware";


declare global {
  namespace Express {
    interface Request {
      /** El middleware pagination() inyecta este objeto */
      pagination?: Pagination;
    }
  }
}

declare global {
  namespace Express {
    interface Request {
      /** Lo que inyecta tu auth middleware */
      user?: JwtPayload & { id_user: string; username: string };
    }
  }
}
export interface CustomRequest extends Request {
  user?: string | JwtPayload;
}

export type JwtPayloadWithUserId = {
  userId: string;
};

export interface AuthResponse {
  token: string;
  userId: string;
}
