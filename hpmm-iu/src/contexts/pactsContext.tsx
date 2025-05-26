import React, { createContext, useState, useEffect } from "react";
import {
      GetPactsService,
  //  GetPactByIdService,
  //  PostCreatePactService,
  //  PutUpdatePactService,
  //  DeletePactService,
} from "../services/PactsService";
import { PactContextType, ProviderProps } from "../interfaces/context";
import { PactInterface } from "../interfaces/pacts.interface";
import { useAuth } from "../hooks/useAuth";

export const PactContext = createContext<PactContextType>({
  pacts: [],
  GetPactsContext: async () => [],
  GetPactByIdContext: async () => undefined,
  PostCreatePactContext: async () => {},
  PutUpdatePactContext: async () => {},
  DeletePactContext: async () => {},
});
export const PactProvider: React.FC<ProviderProps> = ({ children }) => {
    const [pacts, setPacts] = useState<PactInterface[]>([]);
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (isAuthenticated) {
            GetPactsContext()
                .then((data) => {
                    if (data !== null) {
                        setPacts(data);
                    } else {
                        console.error("Error al recuperar los pactos");
                    }
                })
                .catch((error) => {
                    console.error("Error al recuperar los pactos", error);
                });
        }
    }, [isAuthenticated]);

    const GetPactsContext = async (): Promise<PactInterface[] | null> => {
        try {
            const pacts = await GetPactsService();
            return pacts;
        } catch (error) {
            console.error("Error al recuperar los pactos", error);
            return null;
        }
    };




    const GetPactByIdContext = async (id_pacts: string): Promise<PactInterface | undefined> => {
        try {
            const pact = await GetPactByIdContext(id_pacts);
            return pact;
        } catch (error) {
            console.error("Error al recuperar el pacto", error);
            return undefined;
        }
    };


    const PostCreatePactContext = async (pacts: PactInterface): Promise<PactInterface> => {
        try {
            const newPact = await PostCreatePactContext(pacts);
            setPacts((prev) => [...prev, newPact]);
            return newPact;
        } catch (error) {
            console.error(`Error al crear el pacto `, error);
            throw error;
        }
    };

    
    const PutUpdatePactContext = async (id_pacts: string, pacts: PactInterface): Promise<void> => {
        try {
            await PutUpdatePactContext(id_pacts, pacts);
            setPacts((prev) =>
                prev.map((p) => (p.id_pacts === id_pacts ? { ...p, ...pacts } : p))
            );
        } catch (error) {
            console.error("Error al actualizar el pacto", error);
            throw error;
        }
    };

    const DeletePactContext = async (id_pacts: string): Promise<void> => {
        try {
            await DeletePactContext(id_pacts);
            setPacts((prev) => prev.filter((p) => p.id_pacts !== id_pacts));
        } catch (error) {
            console.error("Error al eliminar el pacto", error);
            throw error;
        }
    };
    
    return (
      <PactContext.Provider
        value={{
          pacts,
          GetPactsContext,
          GetPactByIdContext,
          PostCreatePactContext,
          PutUpdatePactContext,
          DeletePactContext,
        }}
      >
        {children}
      </PactContext.Provider>
    );
};

