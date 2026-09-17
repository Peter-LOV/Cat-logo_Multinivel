const MiRed = () => {
  const referidos = [
    { id: 1, nombre: "Ana García", nivel: "Nivel 1", ventas: "$1,200" },
    { id: 2, nombre: "Luis Poveda", nivel: "Nivel 1", ventas: "$850" },
    { id: 3, nombre: "Marta Sánchez", nivel: "Nivel 2", ventas: "$430" },
  ];

  return (
    <div>
      <h1 className="text-xl md:text-2xl font-bold text-slate-800 mb-6">
        Mi Red de Referidos
      </h1>

      {/* Tarjetas en móvil (< md), tabla en desktop (>= md) */}
      <div className="md:hidden space-y-4">
        {referidos.map((ref) => (
          <div
            key={ref.id}
            className="bg-white rounded-lg border border-slate-200 shadow-sm p-4"
          >
            <h3 className="font-semibold text-slate-800 mb-2">{ref.nombre}</h3>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Jerarquía:</span>
                <span className="text-slate-700 font-medium">{ref.nivel}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Ventas Mensuales:</span>
                <span className="text-indigo-600 font-semibold">{ref.ventas}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tabla en desktop */}
      <div className="hidden md:block bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="p-4 font-semibold text-slate-600">Nombre</th>
              <th className="p-4 font-semibold text-slate-600">Jerarquía</th>
              <th className="p-4 font-semibold text-slate-600">
                Ventas Mensuales
              </th>
            </tr>
          </thead>
          <tbody>
            {referidos.map((ref) => (
              <tr
                key={ref.id}
                className="border-b border-slate-100 hover:bg-slate-50"
              >
                <td className="p-4 text-slate-700">{ref.nombre}</td>
                <td className="p-4 text-slate-500">{ref.nivel}</td>
                <td className="p-4 text-indigo-600 font-medium">
                  {ref.ventas}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MiRed;