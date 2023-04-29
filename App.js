import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = (
  <h1 id="" className="heading" tabIndex={1}>
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

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />);
