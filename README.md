# Gabarit d'application avec Electron, Vue et Typescript

Gabarit de développement applicatif, basé sur l'utilisation des standards suivants:

### [Electron](https://www.electronjs.org/)

Build cross-platform desktop apps with JavaScript, HTML, and CSS

### [Vue](https://vuejs.org/)

The Progressive JavaScript Framework. An approachable, performant and versatile framework for building web user interfaces.

### [Vite](https://vitejs.dev/)

Next Generation Frontend Tooling

### [Sass (SCSS)](https://sass-lang.com)

CSS with superpowers. Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.

### [Prettier](https://prettier.io)

An opinionated code formatter

### [TypeScript](https://www.typescriptlang.org)

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

### [TypeScript ESlint](https://typescript-eslint.io)

The tooling that enables [ESlint](https://eslint.org) and Prettier to support TypeScript.

## Configuration pour [Visual Studio Code (IDE)](https://code.visualstudio.com/)

Extensions installées et configurées pour à même le gabarit.

- [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
  Language support for Vue 3
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
  Vue Plugin for TypeScript server
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  Code formatter using prettier
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  Integrates ESLint JavaScript into VS Code.

## Inspecter un fichier asar

ASAR signifie Atom Shell Archive Format. Une archive asar est un simple format d'archive du genre de tar, qui concatène des fichiers en un seul fichier. Le format ASAR a été créé principalement pour améliorer les performances sous Windows lorsque il y a de grandes quantités de petits fichiers.

```bash
npm install --engine-strict @electron/asar
npx asar extract <archive> <dest>
```
