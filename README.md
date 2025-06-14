# Calculadora Huella de Carbono
### Creadores: Santiago Salazar Becerra y Alexs Quiroz Gonzalez
**Descripción:** Este proyecto se encarga de brindarte un calculo a nivel cuantitativo de tu impacto en la huella de carbono y lo hace con base en la entrada de unos datos y te los enseña por pantalla.
## Tecnologias Usadas
- 🔧 **Backend:** Node.js, Javascript
- 💾 **Bases de datos:** Mysql + prisma ORM
- 🖼️ **Frontend:** Vite+React, Javascript
# Instalación
Aseegurate de tener dos terminales corriendo, una para el backend y otra para el frontend.
## Proceso de instalcion del Backend
1. Clonacion de repositorio y accede al archivo principal
```bash
    git clone https://github.com/cabrero10001/huellacarbono.git
    cd huellacarbono/backend
```
2. Instala las dependencias
```bash
    npm i
```
3. Configura el URL de tu base de datos en tu .env
```bash
    DATABASE_URL="mysql://usuario:contraseña@Host:puerto/dbname"
    PORT=numeroPuerto #En caso de que sea necesario 
```
4. Ejecuta las migraciones del modelo
```bash
    npx prisma migrate
    npx prisma db push
```
5. Inicia el servidor
```bash
    npm run dev
```
## Proceso de instalcion del Frontend
1. Clonacion de repositorio y accede al archivo principal
```bash
    git clone https://github.com/cabrero10001/huellacarbono.git
    cd huellacarbono/frontend
```
2. Instala las dependencias
```bash
    npm i
```
3. En caso de que te salga que debes hacer un audit solo sigue los pasos de la terminal y vuelve a intentar el npm i para reinstalacion de dependencias.
```bash
    npm i
```
4. Inicia el servidor
```bash
    npm run dev
```
## Endpoints Disponibles Backend

| METODO | ENDPOINT | DESCRIPCION |
|--------------|--------------|--------------|
| POST | /api/Registro | Resgistro de nuevo usuario |
| POST | /api/Login | VErificacion de ingreso de usuario |

## Rutas disponibles para navegación Frontend

|RUTA | DESCRIPCION |
|--------------|--------------|
| /login |pagina de ingreso |
| /register| pagina de registro de nuevo usuario |
| /calculadora| pagina para calculadora|
