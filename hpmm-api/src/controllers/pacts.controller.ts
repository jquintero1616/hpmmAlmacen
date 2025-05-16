import { Request, Response } from "express";
import * as pactsService from "../services/pacts.service";
import { asyncWrapper } from "../utils/errorHandler";

export const getAllPactsController = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const pacts = await pactsService.getAllPactsService();
    res.status(200).json({
      msg: "Pactos buscados correctamente",
      totalPacts: pacts.length,
      pacts,
    });
  }
);

export const getPactByIdController = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const id_pacts = Number(req.params.id_pacts);
    const pact = await pactsService.getPactByIdService(id_pacts);
    res.status(200).json({ msg: "Pacto encontrado correctamente", pact });
  }
);

export const createPactController = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const payload = req.body;
    const newPact = await pactsService.createPactService(payload);
    res.status(201).json({ msg: "Pacto creado correctamente", newPact });
  }
);

export const updatePactController = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const id_pacts = Number(req.params.id_pacts);
    const payload = req.body;
    const updatedPact = await pactsService.updatePactService(id_pacts, payload);
    res.status(200).json({ msg: "Pacto actualizado correctamente", updatedPact });
  }
);

export const deletePactController = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const id_pacts = Number(req.params.id_pacts);
    const deletedPact = await pactsService.deletePactService(id_pacts);
    res.status(200).json({ msg: "Pacto eliminado correctamente", deletedPact });
  }
);
