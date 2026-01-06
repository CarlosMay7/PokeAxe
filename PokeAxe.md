# 📘 Documentación Técnica y Funcional

## Proyecto: **PokeAxe**

**Autor:** Carlos Augusto May Vivas
**Tipo:** Aplicación Web Frontend
**Tecnologías:** React + Vite, Redux Toolkit, Tailwind CSS

---

## 1. Descripción General

**PokeAxe** es una aplicación web tipo Pokédex que permite:

* Listar Pokémon consumiendo la PokeAPI
* Buscar Pokémon por nombre
* Paginar resultados
* Visualizar tarjetas con diseño dinámico según el tipo del Pokémon

La aplicación fue desarrollada como parte de un **examen técnico frontend**, priorizando buenas prácticas, experiencia de usuario y arquitectura limpia.

---

## 2. Objetivos del Proyecto

### Funcionales

* Mostrar una lista paginada de Pokémon
* Permitir búsqueda por nombre
* Visualizar detalles básicos del Pokémon
* Manejar estados de carga y error

### Técnicos

* Implementar manejo de estado global con Redux Toolkit
* Consumir API externa de forma asincrónica
* Diseñar una interfaz responsive
* Aplicar separación de responsabilidades

---

## 3. Arquitectura General

La aplicación sigue una arquitectura **React + Redux**, con separación clara entre:

* **Componentes de UI**
* **Estado global (Redux)**
* **Lógica asincrónica (Thunks)**

```
src/
├── components/
├── features/
│   └── pokemon/
├── pages/
├── utils/
└── App.jsx
```

---

## 4. Tecnologías Utilizadas

| Tecnología        | Uso                             |
| ----------------- | ------------------------------- |
| React             | Construcción de UI              |
| Vite              | Bundler y entorno de desarrollo |
| Redux Toolkit     | Estado global                   |
| Tailwind CSS      | Estilos y responsive            |
| ESLint + Prettier | Calidad de código               |
| PokeAPI           | Fuente de datos                 |

---

## 5. Documentación Funcional

### 5.1 Pantalla Principal (Home)

* Muestra una grilla de Pokémon
* Carga inicial de 6 Pokémon por página
* Diseño responsive (1–3 columnas)

### 5.2 Búsqueda

* Campo de texto para buscar por nombre
* Botón "Buscar" habilitado solo cuando hay texto
* Botón "Limpiar" para volver al estado inicial

### 5.3 Paginación

* Navegación entre páginas
* Controlada por Redux
* Oculta automáticamente durante una búsqueda

### 5.4 Estados del Sistema

* **Cargando:** Spinner animado
* **Error:** Mensaje descriptivo
* **Vacío:** Mensaje informativo

---

## 6. Documentación Técnica

### 6.1 Redux Toolkit

#### Estado global (`pokemonSlice`)

```js
{
  pokemons: [],
  search: '',
  searchResult: null,
  page: 0,
  loading: false,
  error: null
}
```

#### Actions

* `setSearch`
* `clearSearch`
* `resetPage`
* `nextPage`
* `previousPage`

#### Thunks

* `getPokemons({ limit, offset })`
* `searchPokemon(name)`

---

### 6.2 Componentes Clave

#### `PokemonCard`

* Presenta información del Pokémon
* Fondo dinámico según tipo
* Imagen centrada con animación hover

#### `SearchBar`

* Manejo controlado del input
* Acciones desacopladas
* Responsive y accesible

#### `StatusMessage`

* Componente reutilizable
* Tipos: loading, error, info

---

## 7. Diseño y UX

* Diseño dark con blur
* Feedback visual inmediato
* Accesibilidad básica
* Layout consistente

---

## 8. Buenas Prácticas Aplicadas

* Separación de responsabilidades
* Componentes reutilizables
* Manejo explícito de errores
* Código formateado con Prettier
* Validaciones de UX

---

## 9. Posibles Mejoras Futuras

* Skeleton loaders
* Filtros por tipo
* Infinite scroll
* Tests unitarios
* Cache de resultados

---

## 10. Conclusión

PokeAxe demuestra una implementación sólida de una aplicación frontend moderna, enfocada en experiencia de usuario, claridad arquitectónica y buenas prácticas, cumpliendo con los requerimientos funcionales y técnicos del examen.

---

📌 *Proyecto desarrollado por Carlos Augusto May Vivas*
