import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs"

const prisma = new PrismaClient();

export const Login = async (req, res) => {
    const data = req.body;
    console.log("Información recibida: ", data);

    try {
        const usuarioExistente = await prisma.user.findMany({
            where: {email: data.email}
        })

        const user = usuarioExistente[0];

        if (!user) {
            return res.status(404).json({error: "El usuario no existe"})
        }

        const contraseña = await bcrypt.compare(data.password, user.password)

        if (!contraseña) {
            return res.status(401).json({ error: "Contraseña incorrecta" });
        }

        return res.status(201).json({ mensaje: "Inicio de sesión exitoso", usuarioExistente });
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}