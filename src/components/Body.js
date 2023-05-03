import restaurants from '../../restaurants.json';
import RestaurantCard from './RestaurantCard';
import { useState } from 'react';

const Body = () => {
  // Local state variable
  const [restaurantList, setRestaurantList] = useState(restaurants);
  const [searchText, setSearchText] = useState('KFC');

  return (
    <div className="body">
      <div className="search-filter-container">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredList = restaurants.filter((res) =>
                res.data.name.includes(searchText)
              );
              setRestaurantList(filteredList);
            }}
          >
            search
          </button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = restaurants.filter(
                (res) => res.data.avgRating > 4
              );
              setRestaurantList(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="res-container">
        {/* Restaurant Card */}
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
