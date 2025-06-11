import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export const Login = () => {

    const nav = useNavigate();

    const [data, setData] = useState({
        email: '',
        password:''
    });

    const handleChange = (e) => {
    setData({
            ...data,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const respuesta = await axios.post('http://localhost:3000/api/Login', data);
            if (respuesta.status == 201) {
                console.log("logueo exitoso");
                alert("SESION INICIADA")
                nav("/calculadora")
            }
        } catch (error) {
            if (error.response?.status == 404) {
                alert("El correo no se encuentra registrado")
                console.log("el usuario no existe")
            } else if (error.response?.status == 401) {
                alert("La contraseña es incorrecta")
                console.log("la contraseña es incorrecta")
            }
            
        }
    } 
    return (
    <section className="flex w-screen h-screen justify-center items-center">
        <div className=" w-full max-w-sm bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl text-green-950 font-Newake mb-6 text-center">INICIAR SESION</h2>
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
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-3 focus:ring-green-600"
                name="email"
                onChange={handleChange}
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
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-3 focus:ring-green-600"
                name="password"
                onChange={handleChange}
                required
                />
            </div>

            <Link to="/register" className="block mb-5 text-center text-sky-700 text-sm underline"><p>No tengo una cuenta</p></Link>

            <button
                type="submit"
                className="w-full mb-3 bg-gray-600 hover:bg-green-800 text-white font-semibold py-2 rounded-xl transition duration-300 cursor-pointer"
            >
                Ingresar
            </button>

            <button
                    type="button"
                    className="w-full bg-gray-600 hover:bg-green-800 text-white font-semibold py-2 rounded-xl transition duration-300 cursor-pointer"
                >
                    Ingresar como invitado
                </button>
            </form>
        </div>
    </section>
    );
}
