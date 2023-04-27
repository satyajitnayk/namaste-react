const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', { id: '' }, 'I am an h1 tag'),
    React.createElement('h2', { id: '' }, 'I am an h2 tag'),
    React.createElement('h3', { id: '' }, 'I am an h3 tag'),
    React.createElement('h4', { id: '' }, 'I am an h4 tag'),
    React.createElement('h5', { id: '' }, 'I am an h5 tag'),
    React.createElement('h6', { id: '' }, 'I am an h6 tag'),
  ]),
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', { id: '' }, 'I am an h1 tag'),
    React.createElement('h2', { id: '' }, 'I am an h2 tag'),
    React.createElement('h3', { id: '' }, 'I am an h3 tag'),
    React.createElement('h4', { id: '' }, 'I am an h4 tag'),
    React.createElement('h5', { id: '' }, 'I am an h5 tag'),
    React.createElement('h6', { id: '' }, 'I am an h6 tag'),
  ]),
]);
// const parent = React.createElement('div', { id: 'parent' }, heading);
// JSX
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
