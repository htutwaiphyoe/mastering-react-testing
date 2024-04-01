# Vitest

Testing Frameworks => Jest, Jasmine, Mocha, Vitest, Enzyme

npm i -D vitest

npm script => "test": "vitest", "test:ui": "vitest --ui"

npm i -D @testing-library/react

jsdom => browser environment

tell vitest to use jsdom => vitest.config.ts

restart vitest server after adding config

npm i -D @testing-library/jest-dom for custom jest matchers

Testing components

1. how they render
2. how they response user actions

no tests is better than bad tests

test the behavior, not implementation

testing pyramid => unit > integration > e2e

don't test styles (visual tests)

test component behavior, not styles

Greet.test.tsx

simplifying setup

vitest.config.ts => globals: true, setupFiles: 'filepaths'

tsconfig => "types": ["vitest/globals"]

treat components as black box

testing list

testing user interactions => use user-events library instead of fireEvents

user event is asynchronous, so make async/await function

user.type(input, value + "{key}")

asynchronous => findAllByRole => waitFor + getAllByRole

matchMedia => window property does not have in jsdom env => add in setup file

[https://github.com/vitest-dev/vitest/issues/821](https://github.com/vitest-dev/vitest/issues/821)

[https://typescript-eslint.io/](https://typescript-eslint.io/)

[https://github.com/testing-library/user-event/discussions/1087](https://github.com/testing-library/user-event/discussions/1087)
