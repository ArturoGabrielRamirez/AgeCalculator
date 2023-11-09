# Calculadora de Edad

Soy Arturo Gabriel Ramírez, un desarrollador Junior ya en marcha de autogestionar su camino de aprendizaje. Esta es la primera de una serie de mini aplicaciones que estoy creando para mejorar mis habilidades y desafiar mi lógica.

## Objetivo y Motivación

El objetivo de esta aplicación es crear una calculadora de edad precisa sin usar librerías externas. La motivación es aprender a manejar los métodos de Next.js y resolver problemas complejos con JavaScript Vanilla.

## Retos y Aprendizajes

Uno de los principales retos que enfrenté fue calcular la edad teniendo en cuenta los años bisiestos. Me di cuenta de que si pasaron 6 años bisiestos desde tu nacimiento, podría haber una diferencia de hasta 6 días en el cálculo de tu edad. Para solucionar este problema, tuve que crear una lógica que condicionara si han pasado años bisiestos o no, y hacer un cálculo u otro para obtener los milisegundos de diferencia que ofrece el método nativo de JS "Date()". Fue una experiencia muy satisfactoria y un gran aprendizaje para mi razonamiento lógico en JavaScript.

## Dependencias e Instalación

Esta aplicación utiliza las siguientes dependencias:

```json
{
  "name": "age-calculator",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.0.1",
    "react": "^18",
    "react-dom": "^18",
    "react-hook-form": "^7.47.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "14.0.1",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "typescript": "^5"
  }
}
```

Para instalar y ejecutar la aplicación, sigue estos pasos:

1. Clona el repositorio en tu máquina local usando `git clone`.
2. Navega hasta el directorio del proyecto usando `cd age-calculator`.
3. Instala las dependencias necesarias usando `npm install`.
4. Inicia el servidor de desarrollo usando `npm run dev`.

Ahora deberías poder acceder a la aplicación en `http://localhost:3000`. Espero que disfrutes de esta aplicación y que te sea útil la calculadora de edad. 😊
