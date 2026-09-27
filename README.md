# React Quiz: Vite Template

Repo for [React Quiz](./README.md)

Este es un template de React con Vite para la materia manejo de frameworks.

## Pasos para levantar el proyecto en desarrollo

### Prerequisitos

- [Node.js](https://nodejs.org/en/download/)
- [git](https://git-scm.com/)
- [pnpm](https://pnpm.io/installation). _Descarguen pnpm antes de intentar descargar las
  dependencias del proyecto_. Con cualquier >= 9 van bien.

1. Clonar el repositorio:

```bash
git clone https://github.com/jonnerpaz/react-quiz.git
```

2. Una vez estén dentro de la carpeta, instalar las dependencias:

```bash
pnpm install
```

3. Para levantar el proyecto en modo desarrollo, usan el siguiente comando:

```bash
pnpm dev
```

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler)
for more information.

Note: This will impact Vite dev & build performances.
You can also try
[the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler)
by using `compiler: true` in the plugin options instead of using the Babel plugin.

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript
with type-aware lint rules enabled. Check out the
[TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)
for information on how to integrate TypeScript and Oxlint's TypeScript related
rules in your project.
