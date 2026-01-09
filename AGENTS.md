# Repository Guidelines

## Project Structure
- This is a Vite + React + TypeScript + Material UI app
- `src/App.css` may contain layout wrappers and high-level utility
- `src/App.tsx` configures client-side routing using React Router
- `src/index.css` contains global resets, root variables, and base element rules
- `src/main.tsx` bootstraps the UI and injects the Auth0 provider
- `src/ProtectedRoute.tsx` is a wrapper component for protected routes
- `src/theme.ts` defines the Material UI theme
- `src/components/` contains all reusable components
- `src/pages/` contains all application pages
- `src/services/` contains all reusable functions, e.g., for calling REST APIs
- `src/types/` contains all reusable types and interfaces

## Styling
- Material UI is the primary styling system
- Custom colors, spacing, typography, etc. are defined in the Material UI theme
- Components reference the Material UI theme instead of specifying hardcoded values
- The Material UI theme can be extended when necessary
- CSS is only used when something cannot be done cleanly with Material UI (exceptions: `index.css` and `App.css`)
- When CSS is unavoidable, it is kept inside the component's `.tsx` file

## General Guidelines
- Follow the established ESLint and Prettier rules
- Match the design system using the Material UI theme
- Don't write any tests (not necessary for this project)
- Don't do anything related to git (the repo owner will handle it)
- Don't introduce new libraries without asking first
