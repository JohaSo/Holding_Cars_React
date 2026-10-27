# Holding Cars - Frontend React

Consiste en la actualización del frontend de un sistema de gestión de arriendo de vehículos utilizando React, Bootstrap y pruebas unitarias.

## Tecnologías Utilizadas
*   React (con Vite)
*   React Router DOM (Navegación)
*   Bootstrap y React-Bootstrap (Diseño responsivo)
*   Jasmine y Karma (Pruebas unitarias)

## Requisitos Previos
*   Tener instalado Node.js y npm.
  
## Instalación y Ejecución

1.  Clonar el repositorio:
    git clone https://github.com/JohaSo/Holding_Cars_React.git
    cd Holding_Cars_React
2. Instalar las dependencias:
  npm install
3. Ejecutar el servidor de desarrollo:
  npm run dev

Abre http://localhost:5173/ en el navegador.

## Pruebas Unitarias
Para ejecutar las pruebas configuradas con Jasmine y Karma:
  npm run test
  
(Se abrirá el navegador en modo headless para ejecutar las pruebas del componente VehiculoCard).

## Estructura del Proyecto
src/components/: Componentes reutilizables (Navbar, VehiculoCard).
src/pages/: Vistas de la aplicación (Home, Ofertas, Nosotros, Contacto, Login, Registro).
src/data/: Datos simulados (Mock) de los vehículos.
public/img/: Recursos gráficos (Logos, banners, fotos de autos).
