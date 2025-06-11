import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

;

export const Register = () => {

    const nav = useNavigate()

    const [data, setData] = useState({
        email: '',
        password: '',
        confirm: ''
    });
    
    const [response, setResponse] = useState(null);
    

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log("Datos de usuario: ", data)
        const res = await axios.post('http://localhost:3000/api/Registro', data)
        if (res.status == 201) {
            console.log("Usuario registrado exitosamente")
            alert("Usuario registrado exitosamente")
            nav("/login")
        }
    } catch (error) {
        console.log(error)
        if (error.response?.status == 409) {
            alert("el usuario ya existe en la base de datos")
        } else {
            console.log("error inesperado del servidor")
            alert("error inesperado del servidor")
        }
    }

    };

    return (
    <div className="flex w-screen h-screen justify-center items-center">
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl text-green-950 font-Newake mb-6 text-center">REGISTRO</h2>
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
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-3 focus:ring-gray-400"
                name="password"
                onChange={handleChange}
                required
                />
            </div>

            <div className="mb-2">
                <label
                className="block text-sm font-semibold text-gray-700 mb-1"
                htmlFor="confirm"
                >
                Repita su contraseña
                </label>
                <input
                type="password"
                id="confirm"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-3 focus:ring-gray-400"
                name="confirm"
                onChange={handleChange}
                required
                />
            </div>

            <Link to={'/login'} className="block mb-5 text-center text-sky-700 text-sm underline"><p>Ya tengo una cuenta</p></Link>

            <button
                type="submit"
                className="w-full mb-2 bg-gray-600 hover:bg-green-800 text-white font-semibold py-2 rounded-xl transition duration-300 cursor-pointer"
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
    </div>
    );
}
