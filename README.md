# Calcu

## Descripción del Proyecto

Una **calculadora web interactiva** llamada "Calcu" que genera números aleatorios y realiza operaciones aritméticas básicas.

## Funcionalidades

- **Generación de números aleatorios** (1-99) mediante un botón
- **Operaciones aritméticas**: suma, resta, multiplicación y división
- Los resultados se muestran debajo de los números generados

## Estructura del Proyecto

```
├── index.html              - Página principal de la calculadora
├── js/
│   ├── index.js           - Lógica principal (manejo de eventos)
│   └── operaciones-aritmeticas.js - Funciones matemáticas (exportadas)
├── css/
│   └── index.css          - Estilos (diseño moderno con bordes dashed/solid)
└── README.md
```

## Características Técnicas

- Usa módulos ES6 para importar funciones
- Event listeners para interactividad
- Diseño responsive con CSS Grid
- Validación de división por cero
