# Copilot Instructions for my-app (React + Vite)

## Project Overview
- This project is a minimal React application bootstrapped with Vite for fast development and HMR (Hot Module Replacement).
- The entry point is `src/main.jsx`, which renders the `App` component into the `#root` div in `index.html`.
- All main React code lives in `src/`, with assets in `src/assets/` and static files in `public/` or `images/`.

## Key Files & Structure
- `src/App.jsx`: Main React component. Demonstrates state, HMR, and logo assets.
- `src/main.jsx`: App entry point, uses React 19+ and `createRoot` API.
- `index.html`: HTML template, includes the root div and loads the React app.
- `vite.config.js`: Vite configuration, uses `@vitejs/plugin-react` for React Fast Refresh.
- `eslint.config.js`: Flat config, enables recommended JS, React Hooks, and React Refresh linting. Ignores `dist/`.
- `package.json`: Scripts and dependencies. Key scripts:
  - `npm run dev`: Start dev server with HMR
  - `npm run build`: Build for production
  - `npm run preview`: Preview production build
  - `npm run lint`: Run ESLint

## Patterns & Conventions
- Use functional React components and hooks (see `App.jsx`).
- Import assets (SVG, images) directly in components from `src/assets/` or `/public`.
- CSS is colocated: `App.css` for component styles, `index.css` for global styles.
- Use ES modules throughout (`import`/`export`).
- Linting: Unused variables starting with uppercase or underscore are ignored (see ESLint config).
- No TypeScript or React Compiler by default (see README for upgrade guidance).

## Development Workflow
- Start with `npm run dev` (or `yarn dev`).
- Edit files in `src/` for instant HMR updates.
- Add new components in `src/`, import and use them in `App.jsx` or other components.
- Place static assets in `public/` for root-relative access, or in `src/assets/` for importable assets.
- Run `npm run lint` to check code style and errors.
- Build with `npm run build`, preview with `npm run preview`.

## External Integrations
- Uses `@vitejs/plugin-react` for React Fast Refresh.
- ESLint plugins: `react-hooks`, `react-refresh`.
- No backend or API integration by default.

## Example: Adding a New Component
1. Create `src/MyComponent.jsx`:
   ```jsx
   export default function MyComponent() {
     return <div>Hello from MyComponent!</div>;
   }
   ```
2. Import and use in `App.jsx`:
   ```jsx
   import MyComponent from './MyComponent';
   // ...
   <MyComponent />
   ```

## References
- See `README.md` for more details and links to Vite/React docs.
- For advanced config, check `vite.config.js` and `eslint.config.js`.
