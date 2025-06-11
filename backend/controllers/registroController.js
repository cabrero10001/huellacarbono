import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const Registro = async (req, res) => {
    const data = req.body;
    console.log(data)
    try {
        const usuarioExistente = await prisma.user.findMany({
            where: { email: data.email }
        })

        if (usuarioExistente.length > 0) {
            return res.status(409).json({error: "El usuario ya existe en la base de datos"})
        }

        const contraseñaHasheada = await bcrypt.hash(data.password, 10)
        const envioRegistro = await prisma.user.create (
            {
                data: {
                    "email": data.email,
                    "password": contraseñaHasheada
                }
            }
        )
        return res.status(201).json({proceso: "ususario registrado con exito"})
    } catch (error) {
        console.log("Error al registrar al usuario ", error)
        res.status(500).json({error:"Error interno del servidor al registrar al usuario"})
    }
}