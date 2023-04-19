/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  // use SWC to compile tests
  // (`@swc/jest` is a lot faster than `ts-jest`)
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        sourceMaps: true,
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },

  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  roots: ['<rootDir>/src'],

  moduleNameMapper: {
    // you need to add all absolute paths defined in `tsconfig.json` here
    // or else some of your `import` statements will cause tests fail to run
    //
    // (this is because `ts-jest` is not using your `tsconfig.json`)
    '@/(.*)': '<rootDir>/src/$1',

    // mock media & font imports in React components,
    // because `ts-jest` doesn't recognise these imports
    //
    // (media & font imports are irrelevant when running tests, so there's no harm doing this)
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file-mock.ts',

    // mock css file imports in React components,
    // because `ts-jest` doesn't recognise these imports
    //
    // (css styling is irrelevant when running tests, so there's no harm doing this)
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
