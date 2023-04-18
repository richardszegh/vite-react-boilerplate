# README.md

This is a boilerplate repo that can be used to scaffold React web apps.

The tech stack that the boilerplate uses is:

Core:

- Vite
- React (+ React Router)
- TypeScript
- TailwindCSS

Extras:

- Storybook
- React Query
- Axios
- React Helmet
- Utils (`lodash-es`, `date-fns` etc...)

It comes with sensible defaults for code structure and libraries being used, but there'll be some code pieces that you can safely remove, depending on your use-case.

## Available scripts

```shell
npm run dev
```

Start Vite development server

```shell
npm run build
```

Build application for production

```shell
npm run preview
```

Preview production build locally _(never use this to run your application in production)_

```shell
npm run typecheck
```

Runs TypeScript compiler to check for any type errors

```shell
npm run typecheck:watch
```

Runs TypeScript compiler to check for any type errors - will keep running and watch for file changes _(useful during development)_

```shell
npm run validate:lint
```

Run `eslint` on whole codebase to check for linting issues

```shell
npm run validate:typecheck
```

Alias to `typecheck`

```shell
npm run validate:build
```

Alias to `build`

```shell
npm run validate:formatting
```

Checks if the codebase is properly formatted according to the Prettier configuration

```shell
npm run format
```

Formats the whole codebase based on the Prettier configuration

```shell
npm run validate
```

Runs all scripts starting with `validate:` in parallel. Useful for ensuring your codebase is in a good shape

```shell
npm run storybook
```

Start Storybook development server

```shell
npm run storybook:build
```

Build Storybook for production
