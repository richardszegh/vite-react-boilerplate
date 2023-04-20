# README.md

This is a boilerplate repo that can be used to scaffold React web apps.

The tech stack that the boilerplate uses is:

Core:

- Vite
- React (+ React Router)
- TypeScript
- TailwindCSS

Extras:

- Vitest
- React Testing Library
- Storybook
- React Query
- Axios
- React Helmet
- Utils (`lodash-es`, `date-fns` etc...)

It comes with sensible defaults for code structure and libraries being used, but there'll be some code pieces that you can safely remove and/or change, depending on your use-case.

## Available scripts

```shell
npm run dev
```

- Start Vite development server

```shell
npm run build
```

- Build application for production

```shell
npm run preview
```

- Preview production build locally _(never use this to run your application in production)_

```shell
npm run typecheck
```

- Runs TypeScript compiler to check for any type errors

```shell
npm run typecheck:watch
```

- Runs TypeScript compiler to check for any type errors - will keep running and watch for file changes _(useful during development)_

```shell
npm run test
```

- Runs all tests in watch mode

```shell
npm run test:ci
```

- Runs all tests. Useful for running in CI/CD environments, as the name suggests :)

```shell
npm run validate:lint
```

- Run `eslint` on whole codebase to check for linting issues

```shell
npm run validate:typecheck
```

- Alias to `typecheck`

```shell
npm run validate:build
```

- Alias to `build`

```shell
npm run validate:test
```

- Alias to `test:ci`

```shell
npm run validate:formatting
```

- Checks if the codebase is properly formatted according to the Prettier configuration

```shell
npm run format
```

- Formats the whole codebase based on the Prettier configuration

```shell
npm run validate
```

- Runs all scripts starting with `validate:` in parallel. Useful for ensuring your codebase is in a good shape

```shell
npm run storybook
```

- Start Storybook development server

```shell
npm run storybook:build
```

- Build Storybook for production

## Development

First, run the development server:

```shell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Vite will watch all your source files and re-compile them as you develop, also providing HMR.

### Important

Vite development server (`npm run dev`) does **NOT** check for errors by default (see: [Transpile Only | Vite](https://vitejs.dev/guide/features.html#transpile-only)). It assumes type checking is taken care of by your IDE and build process.

This can make it harder to catch TS errors during development. To solve this, there is a script that you can run besides `npm run dev` to check for TS errors as you develop:

```shell
npm run typecheck:watch
```

The recommended and optimal way to develop is to have both `npm run dev` and `npm run typecheck:watch` running at the same time.

## Building for production

To deploy your app to production, run `npm run build` and the contents of the generated `dist` folder to any HTTP server.

The recommended way to deploy and host your web app is through [Netlify](https://www.netlify.com/).

### Preview production locally

To preview how your app would look like and behave when deployed to a server, you can run:

```shell
npm run build && npm run preview
```

and open [http://localhost:4173](http://localhost:4173) in your preferred browser.

_**Important:** never use `npm run preview` to run your app in a production environment._

## Absolute imports

Absolute imports are configured for both source code and for tests by default. This means you can do:

```typescript
import { someModule } from '@/utils/some-module.util.ts';
```

in both your source and your test files.

_**Note:** `@` resolves to the `src` folder._

## Other docs

- [Commiting and pushing](docs/COMMITS.md)
- [Recommended folder structure and namings](docs/CODE_STRUCTURE.md)
- [Writing tests](docs/TESTING.md)
- [Storybook](docs/STORYBOOK.md)

## Learn more

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/), [React Router](https://reactrouter.com/en/main)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vitest](https://vitest.dev/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [React Query](https://tanstack.com/query/latest/)
