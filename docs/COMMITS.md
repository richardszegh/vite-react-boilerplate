# Commiting and pushing

The repository is set up with `husky` and `lint-staged` to run Git hooks whenever you commit and/or push your changes. This is to catch errors early and keep code quality healthy.

The Git hooks configured by default are the following:

- `pre-commit`: runs `lint-staged` to run scripts on your staged files
  - `eslint` is ran on all source files by default
  - `prettier` is ran on all source files and CSS, JSON, MD files by default
  - _To configure what scripts run on staged files, see `package.json -> "lint-staged"`_
- `pre-push`: runs `npm run validate` to make sure codebase is healthy
  - `npm run validate` runs all NPM scripts that start with `validate:` parallely
  - by default, this includes
    - linting
    - type-checking
    - checking for build errors
    - running all tests
    - checking for proper code style / formatting

If your commit or push hooks fail, you need to fix your code and re-try.

If you're not sure what the problem is on `pre-push`, see which script failed during `npm run validate` and run that script _individually_ for easier debugging.
