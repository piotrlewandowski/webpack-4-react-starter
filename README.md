# Webpack 4 React Starter

Simple Webpack 4 React Starter. It contains:
- [x] React 17.0.1
- [x] Latest Webpack 4 (v4.44.2) and Webpack Dev Server 3 (v3.11.0) with Scope Hoisting enabled
- [x] Babel 7
- [x] ECMAScript 6+ and JSX support 
- [x] [Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement)
- [x] Production config
- [x] Automatic HTML generation
- [x] Export Separate Vendor Files
- [x] SASS and PostCSS support
- [x] Separate CSS stylesheets generation
- [x] ES6 linting with continuous linting on file change
- [x] Stylelint
- [x] Prettier
- [x] Linting files and commit messages on commit

## Prerequisites

* [Node](https://nodejs.org/) (Make sure you have the node 12+ installed)

## Getting Started

1. Clone the repository `git clone git@github.com:piotrlewandowski/webpack-4-react-starter.git`
2. If you're using NVM run `nvm use` inside project directory to use node version set in `.nvmrc` file
3. Run `npm install` or `npm i` to install all the dependencies
4. To begin development task, run `npm start`
5. Open [http://localhost:8080](http://localhost:8080)

## Available commands

- `npm clean` - delete the dist folder
- `npm start` - start the dev server and watch for changes
- `npm run build` - create a production ready build in `dist` folder
- `npm run eslint:check` - execute eslint check
- `npm run eslint:fix` - execute eslint check and automatically fix problems
- `npm run stylelint:check` - execute stylelint check
- `npm run stylelint:fix` - execute stylelint check and automatically fix problems
