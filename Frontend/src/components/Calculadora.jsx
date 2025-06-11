import React, { useState } from "react";

export const CalculadoraHuella = () => {
    const [datos, setDatos] = useState({
        transporteKm: 0,
        tipoTransporte: "auto",
        electricidad: 0,
        dieta: "omnivoro"
    });

    const [resultado, setResultado] = useState(null);

    const handleChange = (e) => {
        setDatos({ ...datos, [e.target.name]: e.target.value });
    };

    const calcularHuella = () => {
        let total = 0;

        // Transporte
        const km = parseFloat(datos.transporteKm);
        if (datos.tipoTransporte === "auto") total += km * 0.2; // gasolina promedio
        if (datos.tipoTransporte === "bus") total += km * 0.105;
        if (datos.tipoTransporte === "moto") total += km * 0.1;

        // Electricidad
        total += parseFloat(datos.electricidad) * 0.2;

        // Dieta
        if (datos.dieta === "carnivoro") total += 250;
        if (datos.dieta === "omnivoro") total += 208;
        if (datos.dieta === "vegetariano") total += 167;
        if (datos.dieta === "vegano") total += 125;

        setResultado(total.toFixed(2));
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="p-8 max-w-md mx-auto bg-white rounded-xl shadow-md">
                <h2 className="text-2xl font-Newake mb-4 text-green-800 text-pretty">Calculadora de Huella de Carbono</h2>

                <label className="block mb-2">Kilómetros por semana (transporte):</label>
                <input type="number" name="transporteKm" onChange={handleChange} className="w-full mb-4 border px-2 py-1" />

                <label className="block mb-2">Tipo de transporte:</label>
                <select name="tipoTransporte" onChange={handleChange} className="w-full mb-4 border px-2 py-1">
                    <option value="auto">Auto</option>
                    <option value="bus">Bus</option>
                    <option value="moto">Moto</option>
                </select>

                <label className="block mb-2">Consumo mensual de electricidad (kWh):</label>
                <input type="number" name="electricidad" onChange={handleChange} className="w-full mb-4 border px-2 py-1" />

                <label className="block mb-2">Tipo de dieta:</label>
                <select name="dieta" onChange={handleChange} className="w-full mb-4 border px-2 py-1">
                    <option value="carnivoro">Carnívoro</option>
                    <option value="omnivoro">Omnívoro</option>
                    <option value="vegetariano">Vegetariano</option>
                    <option value="vegano">Vegano</option>
                </select>

                <button onClick={calcularHuella} className="w-full bg-gray-600 hover:bg-green-800 text-white py-2 rounded-xl transition duration-300 cursor-pointer">Calcular</button>

                {resultado && (
                    <div className="mt-4 p-4 bg-green-100 rounded">
                        <h3 className="font-bold">Tu huella mensual estimada:</h3>
                        <p>{resultado} kg CO₂</p>
                    </div>
                )}
            </div>
        </div>
    );
};
