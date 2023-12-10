# spdload-test

This repository contains the source code for the **spdload-test** React
application. The project is bootstrapped with
[Create React App](https://reactjs.org/docs/create-a-new-react-app.html) and
leverages various libraries and tools for enhanced functionality and development
experience.
Link for gh-pages https://ilyalevchenko04.github.io/spdload-test/

## Table of Contents

- [Libraries](#libraries)
  - [Apollo Client](#apollo-client)
  - [React Router](#react-router)
  - [Recoil](#recoil)
  - [Styled Components](#styled-components)
  - [React Slick](#react-slick)
- [Development Tools](#development-tools)
  - [TypeScript](#typescript)
  - [ESLint](#eslint)
- [Scripts](#scripts)
  - [start](#start)
  - [build](#build)
  - [deploy](#deploy)

## Libraries

### Apollo Client

[Apollo Client](https://www.apollographql.com/docs/react/) is a powerful GraphQL
client for React applications. It simplifies data fetching and state management
by providing a declarative approach to work with GraphQL APIs. The
`@apollo/client` package is used to integrate Apollo Client into the project.

### React Router

[React Router](https://reactrouter.com/) is a standard library for routing in
React applications. It enables navigation and keeps the UI in sync with the URL.
The project utilizes `react-router-dom` for declarative routing and navigation.

### Recoil

[Recoil](https://recoiljs.org/) is a state management library for React
applications. It provides a simple and efficient way to manage the state of your
application. Recoil is chosen for its flexibility and ease of use.

### Styled Components

[Styled Components](https://styled-components.com/) is a CSS-in-JS library that
allows you to write actual CSS code to style React components. It enhances
component-based styling and makes it more maintainable and scalable.

### React Slick

[React Slick](https://react-slick.neostack.com/) is a carousel/slider component
for React applications. It is used to create responsive and customizable image
sliders with ease.

## Development Tools

### TypeScript

[TypeScript](https://www.typescriptlang.org/) is a superset of JavaScript that
adds static types to your code. It enhances code quality, provides better
tooling, and improves the development experience. TypeScript is chosen to catch
errors early and enable a more robust codebase.

### ESLint

[ESLint](https://eslint.org/) is a static code analysis tool used to find and
fix problems in the code. The configuration in this project extends the standard
ESLint setup for Create React App and Jest.

## Scripts

### start

The `start` script is used to launch the development server. It enables
hot-reloading, allowing you to view changes in real-time as you edit the code.
Run the script using:

```bash
npm start
```

### build

The `build` script is responsible for creating a production-ready build of the
application. It generates optimized and minified files in the "build" directory.
Execute the script with:

```bash
npm run build
```

### deploy

The `deploy` script uses the `gh-pages` package to deploy the application to
GitHub Pages. It pushes the contents of the "build" directory to the "gh-pages"
branch. Run the script with:

```bash
npm run deploy
```

Feel free to explore the source code and leverage these libraries and scripts to
build powerful and maintainable React applications. If you have any questions or
feedback, please create an issue or reach out to the project contributors. Happy
coding!
