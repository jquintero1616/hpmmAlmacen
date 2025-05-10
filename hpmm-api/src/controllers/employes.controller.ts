import { Request, Response } from "express";
import * as RolService from "../services/employes.service";
import { asyncWrapper } from "../utils/errorHandler";
import { NewEmploye } from "../types/employes";


export const getAllController = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const employes = await RolService.getAllEmployesService();
    res.status(200).json({
      msg: "Empleados buscados correctamente",
      totalEmployes: employes.length,
      employes,
    });
  }
);


export const getByIdController = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const id_employes = parseInt(req.params.id_employes, 10);
    const employe = await RolService.getEmployeByIdService(id_employes);

    if (!employe) {
      res.status(404).json({ msg: "Empleado no encontrado" });
      return;
    }

    res.status(200).json({ msg: `Empleado encontrado con id_employes ${id_employes}`, employe });
  }
);

export const registerEmployesController = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const employeData: NewEmploye = req.body;
    const newEmploye = await RolService.createEmployeService(employeData);
    res.status(201).json(newEmploye);
  }
);

export const editEmployeController = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const id_employes = parseInt(req.params.id_employes, 10);
    const { name, puesto, correo, telefono, estado } = req.body;
    const updatedEmploye = await RolService.updateEmployeService(
      id_employes,
      name,
      puesto,
      correo,
      telefono,
      estado
    );

    if (!updatedEmploye) {
      res.status(404).json({ msg: "Empleado no encontrado" });
      return;
    }

    res.status(200).json({ msg: `Empleado actualizado con id_employes ${id_employes}`, updatedEmploye });
  }
);  

export const deleteEmployeController = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const id_employes = parseInt(req.params.id_employes, 10);
    const deactivatedEmploye = await RolService.deleteEmployeService(id_employes);

    if (!deactivatedEmploye) {
      res.status(404).json({ msg: "Empleado no encontrado" });
      return;
    }

    res.status(200).json({ msg: `Empleado eliminado con id_employes ${id_employes}`, deactivatedEmploye });
  }
);

