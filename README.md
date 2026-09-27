# React Quiz: Vite Template

Repo for [React Quiz](./README.md)

Este es un template de React con Vite para la materia manejo de frameworks.

## Pasos para levantar el proyecto en desarrollo

### Prerequisitos

- [Node.js](https://nodejs.org/en/download/)
- [git](https://git-scm.com/)
- [pnpm](https://pnpm.io/installation). _**Descarguen pnpm antes de intentar descargar las
  dependencias del proyecto**_. Con cualquier >= 9 van bien.
- Para sus editores:
  - Descargar la extensión de prettier (si no la tienen ya)

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

## Antes de hacer commit:

El proyecto cuenta con **Git Hooks automáticos** configurados con Husky y lint-staged.
Al hacer `git commit`, los archivos modificados se formatearán automáticamente con Prettier y se validarán con Oxlint.

Si deseas verificar manualmente todo el repositorio antes de hacer commit:

1. Ejecute `pnpm check` (verifica formateo y reglas de linter en todo el repo)
2. Para formatear automáticamente todo el código: `pnpm format`

> [!important]
> Si el linter falla o detecta errores que no puede autocorregir, el commit se cancelará automáticamente.
> Asegúrate de corregir los errores señalados en consola antes de volver a intentar el commit.

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler)
for more information.

Note: This will impact Vite dev & build performances.
You can also try
[the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler)
by using `compiler: true` in the plugin options instead of using the Babel plugin.
