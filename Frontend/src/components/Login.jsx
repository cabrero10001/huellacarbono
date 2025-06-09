import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", { email, password });
    // Aquí iría la lógica para autenticar al usuario
    };

    return (
    <section className="flex w-screen h-screen justify-center items-center">
        <div className=" w-full max-w-sm bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Iniciar sesión</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label
                className="block text-sm font-semibold text-gray-700 mb-1"
                htmlFor="email"
                >
                Correo electrónico
                </label>
                <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-3 focus:ring-gray-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>

            <div className="mb-2">
                <label
                className="block text-sm font-semibold text-gray-700 mb-1"
                htmlFor="password"
                >
                Contraseña
                </label>
                <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-3 focus:ring-gray-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                requiredx
                />
            </div>

            <Link to="/register" className="block mb-5 text-center text-sky-700 text-sm underline"><p>No tengo una cuenta</p></Link>

            <button
                type="submit"
                className="w-full mb-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 rounded-xl transition duration-300"
            >
                Ingresar
            </button>

            <button
                    type="submit"
                    className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 rounded-xl transition duration-300"
                >
                    Ingresar como invitado
                </button>
            </form>
        </div>
    </section>
    );
}
