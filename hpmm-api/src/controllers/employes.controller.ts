import { Request, Response } from "express";
import * as EmployeService from "../services/employes.service";
import { asyncWrapper } from "../utils/errorHandler";
import { NewEmploye } from "../types/employes";

export const getAllController = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const employes = await EmployeService.getAllEmployesService();
    res.status(200).json({
      msg: "Empleados buscados correctamente",
      totalEmployes: employes.length,
      employes,
    });
  }
);

export const getByIdController = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const id_employes = (req.params.id || "").trim();
    const employe = await EmployeService.getEmployeByIdService(id_employes);

    if (!employe) {
      res.status(404).json({ msg: "Empleado no encontrado" });
      return;
    }

    res.status(200).json({
      msg: `Empleado encontrado con id_employes ${id_employes}`,
      employe,
    });
  }
);

export const registerEmployesController = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const employeData: NewEmploye = req.body;
    const newEmploye = await EmployeService.createEmployeService(employeData);
    res.status(201).json({
      msg: `Ingresado correctamente nuevo empleado con id_employes ${newEmploye.name}`,
      newEmploye,
    });
  }
);

export const UpdateEmployeController = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const id_employes = (req.params.id || "").trim();
    const { name, puesto, email, telefono, estado } = req.body;
    const updatedEmploye = await EmployeService.updateEmployeService(
      id_employes,
      name,
      puesto,
      email,
      telefono,
      estado
    );

    if (!updatedEmploye) {
      res.status(404).json({ msg: "Empleado no encontrado" });
      return;
    }

    res.status(200).json({
      msg: `Empleado actualizado con id_employes ${id_employes}`,
      updatedEmploye,
    });
  }
);

export const deleteEmployeController = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const id_employes = (req.params.id || "").trim();
    const deactivatedEmploye =
      await EmployeService.deleteEmployeService(id_employes);

    if (!deactivatedEmploye) {
      res.status(404).json({ msg: "Empleado no encontrado" });
      return;
    }

    res.status(200).json({
      msg: `Empleado eliminado con id_employes ${id_employes}, empleado desactivado`,
      deactivatedEmploye,
    });
  }
);
