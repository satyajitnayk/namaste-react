import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search Input
 * - Restaurant Container
 *  - Restaurant Card
 *   - Image
 *   - Name,rating,ETA,cusine
 * Footer
 * - Copyright
 * - Links
 * - Contact
 *
 */

const AppLayout = () => {
  return (
    <div className="app">
      {/* Header  */}
      <Header />
      {/* Body  */}
      <Body />

      {/* Footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
