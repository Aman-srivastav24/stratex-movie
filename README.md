# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Features

- View a list of movies fetched from an API.
- Mark movies as favorites.
- Navigate between all movies and favorite movies.
- Smooth animations for movie cards on scroll and hover.

## Install Dependencies
- npm install 
- set environment variables (i pushed .env file so no need)
- npm run dev (Start Development Server)

## Description of Files and Directories
- public/: Contains public assets.
- src/app/store.js: Redux store configuration.
- src/components/: Contains reusable UI components.
 - src/features/movie/: Contains Redux slice for movie-related state management.
- src/pages/: Contains page components for different routes.
- src/App.jsx: Root component where routes are defined.
- src/main.jsx: Entry point of the application.
- .env: Environment variables.
- tailwind.config.js: Tailwind CSS configuration.
- vite.config.js: Vite configuration.

