import React, { useEffect, useState } from "react";
import { usePacts } from "../../hooks/usePacts";
import { PactInterface } from "../../interfaces/pacts.interface";

const UserList: React.FC = () => {
  const { pacts, GetPactsContext } = usePacts();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetPactsContext().finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Cargando usuarios...</div>;

  return (
    <div>
      <h2 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>Lista de Pactos</h2>
      <table style={{ fontSize: "0.9rem", borderCollapse: "collapse", width: "100%", maxWidth: 600 }}>
        <thead>
          <tr>
            <th style={{ padding: "4px 8px" }}>Nombre</th>
            <th style={{ padding: "4px 8px" }}>Tipo</th>
            <th style={{ padding: "4px 8px" }}>Estado</th>
            <th style={{ padding: "4px 8px" }}>Accion</th>
          </tr>
        </thead>
        <tbody>
          {pacts.map((u: PactInterface) => (
            <tr key={u.id_pacts} style={{ borderBottom: "1px solid #ccc" }}>
              <td style={{ padding: "4px 8px" }}>{u.name}</td>
              <td style={{ padding: "4px 8px" }}>
                {u.tipo === "Diario"
                  ? "Diario"
                  : u.tipo === "Quincenal"
                  ? "Mensual"
                  : "Mensual"}
              </td>
              <td style={{ padding: "4px 8px" }}>{u.estado ? "Activo" : "Inactivo"}</td>
              <td style={{ padding: "4px 8px", textAlign: "center" }}>
                {u.tipo === "Diario"
                  ? "Diario"
                  : u.tipo === "Quincenal"
                  ? "Quincenal"
                  : u.tipo === "Mensual"
                  ? "Mensual"
                  : u.tipo === "Trimestral"
                  ? "Trimestral"
                  : "Desconocido"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;