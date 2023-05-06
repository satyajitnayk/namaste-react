import restaurants from '../../restaurants.json';
import { SWIGGY_RES_API } from '../utils/constants';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { useEffect, useState } from 'react';

const Body = () => {
  // Local state variable
  const [allRestaurantList, setAllRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState();

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(SWIGGY_RES_API);
    const json = await data.json();
    const restaurants = json?.data?.cards?.[2]?.data?.data?.cards ?? [];
    setAllRestaurantList(restaurants);
    setFilteredRestaurantList(restaurants);
  }

  if (!allRestaurantList) return null;

  if (filteredRestaurantList?.length == 0) {
    return <h1>No restaurant match the search!</h1>;
  }

  return allRestaurantList.length === 0 ? (
    <Shimmer />
  ) : (
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
              const filteredList = allRestaurantList.filter((res) =>
                res.data.name.toLowerCase().includes(searchText?.toLowerCase())
              );
              setFilteredRestaurantList(filteredList);
            }}
          >
            search
          </button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = allRestaurantList.filter(
                (res) => res.data.avgRating > 4
              );
              setFilteredRestaurantList(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="res-container">
        {/* Restaurant Card */}
        {filteredRestaurantList?.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
