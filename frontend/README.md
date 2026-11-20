# ARCHBUILD Frontend Structure

This folder contains the modular React + Vite frontend architecture for ARCHBUILD.

## Suggested stack
- React + Vite
- React Router DOM
- Axios
- TanStack Query
- Framer Motion + GSAP
- Three.js / React Three Fiber
- React Icons
- Zustand
- React Hook Form + Zod
- CSS Modules

## Setup
Create a Vite React app in this folder (or copy these folders into an existing Vite React app), then install dependencies:

```bash
npm install
npm install react-router-dom axios @tanstack/react-query
npm install framer-motion gsap
npm install three @react-three/fiber @react-three/drei
npm install react-icons zustand
npm install react-hook-form zod @hookform/resolvers
```

Copy `.env.example` to `.env` and set `VITE_API_BASE_URL` to your backend API base URL.

Most feature files are intentionally placeholders. Implement each module as development progresses.
