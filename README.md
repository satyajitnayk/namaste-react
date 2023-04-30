# Namaste React 🚀

1. What is the diff b/w `package.json` & `package-lock.json`?

- `package.json`:
  - configuration file for npm, containing approx version of package installed.
  - Every dependecies has `package.json` in their directory.
- `package-lock.json`: - contains track of exact version of each package installed to avoid any build error in production.
- Both files need to be pushed to github.

2. What are the use cases of `parcel` package?

- Dev build
- Local sever
- HMR (Hot Module Replacement)
- It uses a file watching algorithm (written in C++)
- Faster build (Caching)
- Image Optimization
- Minification
- Compressing
- Content hashing
- Code splitting
- Differetial bundling (To support older browsers)
- Diagnostic
- Error handling
- Allow HTTPs server
- Tree shaking (remove unused code)
- `Note`: When doing prod build using command `npx parcel build index.html` error will pop, because of 1 config: `main: App.js` in `package.json` file. So we need to remove the line.

3. What is a `React Element`?

- Its an object. But when it endered to browser then it converts to html.

4. What is `JSX` ?

- Easier way to write react code for html element.
- Make the developers life easy.
- JSX is not HTML inside Javascript, but HTML/XML like syntax.
- Both will print same object. But since jsx format is more readable so we are going to use it.
  ```
    const heading = React.createElement(
    'h1',
    { id: 'heading' },
    'Namaste React 🚀'
    );
    const jsxHeaing = <h1 id="heading">Namaste React 🚀</h1>;
    console.log(heading);
    console.log(jsxHeaing);
  ```
- Browser can not understand JSX, but behind the scene `babel`(JS compiler) is doing the job.
- `babel` transpile the JSX code to ReactElement before sending to the `js engine`, so that js engine can understand it. `babel` is required by `parcel`.
- JSX => transpiled to React element => JS element => rendered as HTML element
- We have to use `camelCase` while `assigning attributes to JSX`.
- To write JSX in multiple lines we need to wrap it around `()`.
- JSX `sanitize` the data to avoid `cross site scripting`.

5. React Component(2 types)

- class based component(old way)
- functional component(latest standard)
  - normal js function that returns a JSX code/ React element(s).
  - ex:
  ```
    const FunctionalComponent = () => {
      return (some JSX)
    }
  ```
- Components can be used inside other component (Also called component composition)
  ```
    const TitleComponent = () => (
      <h1 id="heading" className="heading" tabIndex={1}>
        Namaste React 🚀 using JSX
      </h1>
    );
    const HeadingComponent = () => (
      <div>
        <TitleComponent /> or {TitleComponent()}
        <h1 id="heading" className="heading" tabIndex={1}>
          Namaste React Functional Component
        </h1>
      </div>
    );
  ```
- Components can be rendered using the syntax `root.render(<HeadingComponent />);`

6. How to put ReactElement inside a ReactComponent & vice versa?

- ```
    const Title =(
      <h1 id="heading" className="heading" tabIndex={1}>
        Namaste React 🚀 using JSX
      </h1>
    );
    const HeadingComponent = () => (
      <div>
        {Title}
        <h1 id="heading" className="heading" tabIndex={1}>
          Namaste React Functional Component
        </h1>
      </div>
    );
  ```
- Same for putting one ReactElement inside another.

7. What is `React Fragment` ?

- Used to wrap multiple html elements with out any div tag.
- Behaves as an empty tag.
- ```
    <React.Fragment>
      <div>Hello</hello>
      <div>I am Satya</hello>
    </React.Fragment>
  ```

- The above can be written like(`<>` is short hand for `<React.Fragment>`)
  ```
    <>
      <div>Hello</hello>
      <div>I am Satya</hello>
    </>
  ```

8. `Config Driven UI`:

- UI is driven by api response.

9. Why we need `key` when iterating ?(very important)

- Each List items/components need to represented uniquely to optimize the rendering cycle.
- When ever we write a map write a key for each item.
- Don't use index as a key.

10. Type of export?

- Default :
  - synatx: export default EXPORT_NAME
  - Used when only 1 export is there
- Named :
  - syntax: export EXPORT_NAME
  - Used when multiple exports are there
