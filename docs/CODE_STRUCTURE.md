# Recommended folder structure and namings

All of your source files should be under the `src` folder. This includes your `.test.ts(x)` and your `.stories.tsx` files as well.

## React components

- the components that are mapped to route paths (via React Router) should be under the `src/pages` directory
- other components should be under the `src/components` directory
  - here you can use sub-folders for different categories of components
    - e.g. use `utils` for non-visual components, `layouts` for layouts, `forms` for all forms etc.
    - the only time your component should be placed directly within `src/components` directory is, if it is a generic component or if it cannot be easily categorised (there may be some exceptions)

### Naming convention

Your React components should follow lowercase naming, with a dash between words.

_Examples:_

- `button.tsx`
- `feature-card.tsx`
- `route-wrapper.tsx`

_**Note:** It is also preferred to **use named exports** (rather than default exports) for your React components (and generally for your whole codebase - with some rare exceptions)._

## Hooks

React hooks should be placed under the `src/hooks` directory.

React Query hooks should be placed under `src/hooks/queries` and `src/hooks/mutations`.

## Configuration files

- all configuration files for your app should be under the `src/config` directory
- naming convention: `your-config.config.ts(x)`

## Dependencies

Setting up dependencies should be done in the `src/libs` folder rather than the `src/config` folder. _(You can still use the `src/config` folder for their config.)_

_Examples:_

- Firebase `app`, `firestore` etc. initialisation
- React Query `queryClient` initialisation
- Algolia `searchClient` initialisation
- ...

## Utilities

Utilities should be placed under the `src/utils` directory. They are mostly utility functions, but technically a utility can be any piece of code.

## API calls (a.k.a. Services)

It is a good idea to separate your API call functions from your React Query hooks. Write API call functions in a way that they could be used with any data fetching solution (whether that be React Query, SWR etc.).

API call functions should be under the `src/services` directory.

### Naming convention

Use `.service.ts` extension.

Structure your API calls in a way that they're exported under the same object, e.g.:

```typescript
async function fetchSomeData() {
  // fetch and return some data here
}

async function fetchSomeOtherData() {
  // fetch and return some data here
}

export const exampleService = Object.freeze({
  fetchSomeData,
  fetchSomeOtherData,
});
```

## Types

All your typings should be under the `src/types` directory.

There are some exceptions, such as React component prop types. If in doubt, it is generally a good idea to place your typings that are tightly related to the code - next to the code. Otherwise use `src/types`.

### Naming convention

Always use the `.d.ts` extension for your types instead of just `.ts`.

## Assets

Assets - such as images - should be under the `src/assets` folder.

If you have assets that are:

- Never referenced in source code (e.g. robots.txt)
- Must retain the exact same file name (without hashing)
- ...or you simply don't want to have to import an asset first just to get its URL

Then you can place the asset in a special `public` directory under your project root. Assets in `public` cannot be imported in your source code, they can only be referenced.

_See also: [Static Asset Handling | Vite](https://vitejs.dev/guide/assets.html#static-asset-handling)_

## Tests

Test should be put next to the component / module that they're testing.

Mocks for modules should be put under `src/__mocks__`.

Mocks for source code should be put next to the source file they're mocking, within a `__mocks__` folder.

### Naming convention

Use `.test.ts` and `.test.tsx` extensions.

## Stories

Stories should be under the `src/stories` directory.
