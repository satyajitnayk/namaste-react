import React from 'react';
import ReactDOM from 'react-dom/client';
import restaurants from './restaurants.json';

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

// const restaurants = [
//   {
//     resName: 'Meghna Foods',
//     foodName: 'Pizza',
//     cuisine: 'North Indian, Asian',
//     rating: 4.4,
//     eta: 30,
//   },
//   {
//     resName: 'Tera Foods',
//     foodName: 'Pizza',
//     cuisine: 'North Indian, Asian',
//     rating: 4.2,
//     eta: 45,
//   },
// ];

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/online-food-app-icon-food-shop-location-logo-also-online-resturent-location-template_608547-155.jpg?w=1380"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const {
    name,
    cuisines,
    costForTwoString,
    deliveryTime,
    slugs,
    avgRating,
    cloudinaryImageId,
    id,
  } = props.resData.data;
  // console.log(props.resData);
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res logo"
        src={
          'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>
        {cuisines[0]}, {costForTwoString.toLowerCase()}, {slugs.city}
      </h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {/* Restaurant Card */}
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

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
