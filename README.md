# AOE-UNITS

**Live Demo:** https://aoe-units-pi.vercel.app/

**Figma:** https://www.figma.com/design/OyUAOXyMxPQubhzOEIlw9Q/aoe-units?node-id=0-1&t=z296sGrfFMEj5nxb-1

## Technologies Used

- [Vue.js](https://reactjs.org/): Used for building the user interface.
- [Pinia](https://pinia.esm.dev/): Used for state management in Vue applications. While Vuex is a great state management solution, especially for smaller applications or when using Vue 2, Pinia's TypeScript support, modular design, and performance optimizations make it an attractive choice for larger and more complex Vue 3 projects. Pinia was used instead of Vuex for the following reasons:

  - TypeScript Support
  - Modular Store Design
  - Composable API
  - Reactiveness and Devtools
  - Ecosystem Integration

- [TailwindCSS](https://tailwindcss.com/): A utility-first CSS framework for styling the application, allowing for rapid UI development.
- [Vitest](https://vitest.dev/): Employed for unit testing the components and ensuring code reliability.

## Project Structure

The folder structure includes:

- **components**
- **data**
- **pages**
- **router**
- **store**
- **tests**
- **utils**

## How to Run

Navigate to the project folder and follow the steps below:

1. Run `npm install` to install project dependencies.
2. Run `npm run dev` to start the development server.

You can follow the steps below for Unit Test:

1. Run `npx vitest`
