# Namaste React 🚀

1. What is the diff b/w `package.json` & `package-lock.json`?

- - `package.json`:
    - configuration file for npm, containing approx version of package installed.
    - Every dependecies has `package.json` in their directory.
  - `package-lock.json`: - contains track of exact version of each package installed to avoid any production build.
  - Both files need to be pushed to github.

2. What are the use cases of `parcel` package?

- - Dev build
  - Local sever
  - HMR (Hot Module Replacement)
  - It uses a file watching algorithm (written in C++)
  - Faster build (Caching)
  - Image Optimization
  - Minification
  - Compressing
  - Content hashing
  - Code splitting
  - Differetial bundling (To support older browsers)
  - Diagnostic
  - Error handling
  - Allow HTTPs server
  - Tree shaking (remove unused code)
  - \*Note: When doing prod build using command `npx parcel build index.html` error will pop, because of 1 config: `main: App.js` in `package.json` file. So we need to remove the line.
