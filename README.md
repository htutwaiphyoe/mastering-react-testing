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

## 08. Query Function Escape Hatches

thead, tbody => rowgroup
tr => row
th => columnheader
td => cell

role cannot be good for every query, so use fallbacks => data-testid, container.querySelector()

data-testid => identifier for element => within(screen.getByTestId(id)) => not the best idea

render() returns an object which contains container which is a dom reference of the component wrapped by a div

container.querySelector() => direct access

[render](https://testing-library.com/docs/react-testing-library/api#render-options)

## 09. beforeEach

avoid beforeEach for rendering components

[beforeeachfn](https://jestjs.io/docs/api#beforeeachfn-timeout)

[screen.debug()](https://testing-library.com/docs/dom-testing-library/api-debugging#screendebug)

[user-event vs fireEvent](https://testing-library.com/docs/user-event/intro/#:~:text=fireEvent%20dispatches%20DOM%20events%2C%20whereas,additional%20checks%20along%20the%20way.)

## 10. React Testing Library Book

npx rtl-book serve fileName.ts

RTL Book for cheat sheet

## 11. Element Roles

a => link
button => button
footer => contentinfo
h1 => heading
header => banner
img => img
input:type=checkbox => checkbox
input:type=number => spinbutton
input:type=radio => radio
input:type=text => textbox
li => listitem
ul => list

## 12. Accessible Names

text content within the element

```js
screen.getByRole('button', { name: /sign in/i });
```

## 13. Accessible Input with Label

Self-closing elements (also known as 'void elements') like `input`, `img`, and `br` cannot contain text content.

for accessible name of input, use label tag and link with input id and label htmlFor. Label text content will be accessible name of input.

```js
const emailInput = screen.getByRole('textbox', {  name: /email/i });
```

## 14. Direct Accessible Names

void element or element without text content, use `aria-label` to give accessible names.

## 15. Query Functions

query functions => use to find elements that are rendered by components

All query functions are accessed through the `screen` object in a test.  These query functions *always* begin with one of the following names: `getBy`, `getAllBy`, `queryBy`, `queryAllBy`, `findBy`, `findAllBy`.

| Start of Function Name | Examples                             |
|------------------------|--------------------------------------|
| getBy                  | getByRole, getByText                 |
| getAllBy               | getAllByText, getByDisplayValue      |
| queryBy                | queryByDisplayValue, queryByTitle    |
| queryAllBy             | queryAllByTitle, queryAllByText      |
| findBy                 | findByRole, findBytext               |
| findAllBy              | findAllByText, findAllByDisplayValue |

These names indicate the following:

1. Whether the function will return an element or an array of elements
2. What happens if the function finds 0, 1, or > 1 of the targeted element
3. Whether the function runs instantly (synchronously) or looks for an element over a span of time (asynchronously)

### Looking for a Single Element?

| Name    | 0 matches | 1 match | > 1 match | Notes                                          |
|---------|-----------|---------|-----------|------------------------------------------------|
| getBy   | Throw     | Element | Throw     |                                                |
| queryBy | null      | Element | Throw     |                                                |
| findBy  | Throw     | Element | Throw     | Looks for an element over the span of 1 second |

### Looking for Multiple Elements?

| Name       | 0 matches | 1 match   | > 1 match | Notes                                        |
|------------|-----------|-----------|-----------|----------------------------------------------|
| getAllBy   | Throw     | []Element | []Element |                                              |
| queryAllBy | [ ]       | []Element | []Element |                                              |
| findAllBy  | Throw     | []Element | []Element | Looks for elements over the span of 1 second |

### When to use each

| Goal of test                           | Use                 |
|----------------------------------------|---------------------|
| Prove an element exists                | getBy, getAllBy     |
| Prove an element does **not** exist    | queryBy, queryAllBy |
| Make sure an element eventually exists | findBy, findAllBy   |

## 16. getBy, queryBy, findBy, getAllBy, queryAllBy, findAllBy

[queries](https://testing-library.com/docs/queries/about)

findBy, findAllBy  => promise resolve/reject => default 1s => use for data fetching or asynchronous

## 17. Query Criteria

React Testing Library provides many different query functions.  Each begins with a name like `getBy`, `findBy`, etc.  The names also have common endings.  The different name endings indicate how the query for an element will be performed.

| End of Function Name | Search Criteria                                                    |
|----------------------|--------------------------------------------------------------------|
| ByRole               | Finds elements based on their implicit or explicit ARIA role       |
| ByLabelText          | Find form elements based upon the text their paired labels contain |
| ByPlaceholderText    | Find form elements based upon their placeholder text               |
| ByText               | Find elements based upon the text they contain                     |
| ByDisplayValue       | Find elements based upon their current value                       |
| ByAltText            | Find elements based upon their `alt` attribute                     |
| ByTitle              | Find elements based upon their `title` attribute                   |
| ByTestId             | Find elements based upon their `data-testid` attribute             |

## When to Use Each

Always prefer using query functions ending with `ByRole`.  Only use others if `ByRole` is not an option.

accept regex

## 18. Matchers

Matchers help make sure that a value is what we expect it to be.  

A project generated by Create React App has access to all the matchers included in Jest, as well as matchers defined in the @testing-library/jest-dom package.

| Name                      |  Link                                             |
|---------------------------|---------------------------------------------------|
| Jest                      | [https://jestjs.io/docs/mock-function-api]
| @testing-library/jest-dom | [https://github.com/testing-library/jest-dom] |

can create custom matchers, first parameter is expect element and others are matcher arguments

[expectextendmatchers](https://jestjs.io/docs/expect#expectextendmatchers)

## 19. Big Projects

Most of testing is about figuring out other engineers' code

Testing in dream => write code => write test immediately => super easy

Testing in reality => bug report to support team => support team creates tickets and report to PM => PM request to the engineering team => engineers  fix the bug and write tests

## 20. Module mocks, Navigation, Act

Library code needs library config for testing

act() warning => data fetching in useEffect()

1. `unexpected state updates` in test are bad => test before state update => need to wait state update/asynchronous
2. `Act` function defines a window in time where state update occur => state update will happen in act function => act function from `react-dom` without RTL
3. RTL uses `act` function automatically => screen.findBy, screen.findAllBy, waitFor, user.keyboard, user.click
4. don't follow warnings message, use findBy

options to solve `act` warnings, from best to worst

1. use `findBy` or `findAllBy`
2. use `act` function
3. use `module mock` to avoid rendering
4. use `act` as a pause

jest.mock(filePath, callback) => fake contents of a file

[mock-function](https://jestjs.io/docs/mock-function-api)

`act` => original react-dom => RTL import, modify and export

toHaveAttribute(attribute, value), toHaveClass(className)
