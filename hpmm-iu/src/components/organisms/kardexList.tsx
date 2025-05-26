import React, {useEffect, useState} from "react";
import { useKardex } from "../../hooks/useKardex";
import { kardexInterface  } from "../../interfaces/kardex.interface";

const KardexList: React.FC = () => {
  const { kardex, GetKardexContext } = useKardex();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetKardexContext().finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Cargando kardex...</div>;

  return (
    <div>
      <h2 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>Lista de Kardex</h2>
      <table style={{ fontSize: "0.9rem", borderCollapse: "collapse", width: "100%", maxWidth: 600 }}>
        <thead>
          <tr>
            <th style={{ padding: "4px 8px" }}>id_kardex</th>
            <th style={{ padding: "4px 8px" }}>id_producto</th>
            <th style={{ padding: "4px 8px" }}>id_compras</th>
            <th style={{ padding: "4px 8px" }}>Año</th>
            <th style={{ padding: "4px 8px" }}>Tipo Movimiento</th>
            <th style={{ padding: "4px 8px" }}>Fecha Movimiento</th>
            <th style={{ padding: "4px 8px" }}>Numero Factura</th>
            <th style={{ padding: "4px 8px" }}>Cantidad</th>
            <th style={{ padding: "4px 8px" }}>Precio Unitario</th>
            <th style={{ padding: "4px 8px" }}>Tipo Solicitud</th>
            <th style={{ padding: "4px 8px" }}>Requisicion Numero</th>
            <th style={{ padding: "4px 8px" }}>Tipo</th>
            <th style={{ padding: "4px 8px" }}>Observacion</th>
            <th style={{ padding: "4px 8px" }}>Estado</th>
          </tr>
        </thead>
        <tbody>
          {kardex.map((k: kardexInterface ) => (
            <tr key={k.id_kardex} style={{ borderBottom: "1px solid #ccc" }}>
              <td style={{ padding: "4px 8px" }}>{k.id_kardex}</td>
              <td style={{ padding: "4px 8px" }}>{k.id_product}</td>
              <td style={{ padding: "4px 8px" }}>{k.id_shopping}</td>
              <td style={{ padding: "4px 8px" }}>{k.anio_creacion}</td>
              <td style={{ padding: "4px 8px" }}>{k.tipo_movimiento}</td>
              <td style={{ padding: "4px 8px" }}>{new Date(k.fecha_movimiento).toLocaleDateString()}</td>
              <td style={{ padding: "4px 8px" }}>{k.numero_factura}</td>
              <td style={{ padding: "4px 8px" }}>{k.cantidad}</td>
              <td style={{ padding: "4px 8px" }}>{k.precio_unitario}</td>
              <td style={{ padding: "4px 8px" }}>{k.tipo_solicitud}</td>
              <td style={{ padding: "4px 8px" }}>{k.requisicion_numero}</td>
              <td style={{ padding: "4px 8px" }}>{k.tipo}</td>
              <td style={{ padding: "4px 8px" }}>{k.observacion}</td>
              <td style={{ padding: "4px 8px" }}>{k.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KardexList;