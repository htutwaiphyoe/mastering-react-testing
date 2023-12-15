# React Testing Library & Jest

## 01. Introduction

[rtl-starter](https://codesandbox.io/s/rtl-starter-sq54b4)

## 02. Libraries

@testing-library/react => uses ReactDOM to render components for testing

@testing-library/user-event => simulate user actions for testing

@testing-library/dom => find elements in rendered components

jest => run tests and reports results

jsdom => simulate a browser for nodejs environment

jest finds all files ending with .spec or .test or in \_\_test\_\_ folder and runs

## 03. Test

test() global function

[vite-react-typescript-jest-setup](https://dev.to/hannahadora/jest-testing-with-vite-and-react-typescript-4bap)

jsdom creates fake browser environment in nodejs env when render function call

screen object access elements in the fake dom

element query => find elements that components rendered

React Testing Library Query System => 48 functions

[queries](https://testing-library.com/docs/queries/about)

## 04. ARIA Role

getAllByRole, getByRole => ARIA Role, the purpose of the element for disability and screen reader

by default html tag assigned role automatically => implicit

can assign role manually => explicit

heading => h1,h2,h3,h4,h5,h6
list => ul,li
button => button
link => a
textbox => input

[html-aria](https://www.w3.org/TR/html-aria/#docconformance)

role is preferred way to find elements
