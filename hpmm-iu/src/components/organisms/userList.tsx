import React, { useEffect, useState } from "react";
import { useUser } from "../../hooks/useUser";
import { userInfertace } from "../../interfaces/user.interface";
import ButtonProps from "../atoms/Button";

const tableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "0.9rem",
};

const thtdStyle: React.CSSProperties = {
  border: "1px solid #ccc",
  padding: "0.4em 0.5em",
  textAlign: "center",
};

const UserList: React.FC = () => {
  const { users, GetUsersContext } = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetUsersContext().finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Cargando usuarios...</div>;

  return (
    <div>
      <h2 style={{ fontSize: "1.1rem", marginBottom: "0.5em" }}>
        Lista de Usuarios
      </h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thtdStyle}>Usuario</th>
            <th style={thtdStyle}>Correo</th>
            <th style={thtdStyle}>Rol</th>
            <th style={thtdStyle}>Estado</th>
            <th style={thtdStyle}>Acción</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u: userInfertace) => (
            <tr key={u.id_user}>
              <td style={thtdStyle}>{u.username}</td>
              <td style={thtdStyle}>{u.email}</td>
              <td style={thtdStyle}>{u.id_rol}</td>
              <td style={thtdStyle}>
                {u.estado ? "Activo" : "Inactivo"}
              </td>
              <td style={thtdStyle}>
                <ButtonProps>editar</ButtonProps>{" "}
                <ButtonProps>eliminar</ButtonProps>
                <ButtonProps>Detalles</ButtonProps>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
