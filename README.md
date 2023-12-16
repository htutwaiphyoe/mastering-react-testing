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

getAllByRole, getByRole => ARIA Role, the purpose of the element for disability with vision and screen reader

by default html tag assigned role automatically => implicit

can assign role manually => explicit

heading => h1,h2,h3,h4,h5,h6
list => ul,li
button => button
link => a
textbox => input default or type:text

[html-aria](https://www.w3.org/TR/html-aria/#docconformance)

role is preferred way to find elements

## 05. Jest Matchers

expect() with matchers (Jest + RTL) for assertion

Jest Matchers => JS related, toHaveLength(), toEqual(), toContain(), toThrow(), toHaveBeenCalled()

[expect](https://jestjs.io/docs/expect)

RTL Matchers => DOM related, toBeInTheDocument(), toBeEnabled(), toHaveClass(), toHaveTextContain(), toHaveValue()

[custom-matchers](https://github.com/testing-library/jest-dom?tab=readme-ov-file#custom-matchers)

## 06. Mock Functions

knowing what to test + the best way to test

getAllByRole => multiple elements
getByRole => only one element, throw error if not found or multiple, use for exact one element

user-event lib for user action

click(), keyboard(), keyboard('{Enter}')

jest can run specific test files

mock => fake => does not do anything, get called with arguments

mock function => jest.fn() => track number of calls and arguments

[mock-function](https://jestjs.io/docs/mock-function-api)

[react-hook-form-testing](https://react-hook-form.com/advanced-usage#TestingForm)

## 07. Testing Playground

screen.logTestingPlaygroundURL() => open playground link

to know how to find proper query functions by selecting dom element in playground
