import { Link } from 'react-router-dom';
import { SWIGGY_RES_API, FILTER_BY } from '../utils/constants';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { useEffect, useState } from 'react';
import { getFilteredData } from '../utils/helper';
import useOnline from '../utils/useOnline';

const Body = () => {
  // Local state variable
  const [allRestaurantList, setAllRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState();

  useEffect(() => {
    getRestaurants();
  }, []);

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>🛑 Offline, Please check your internet connection!</h1>;
  }

  async function getRestaurants() {
    const data = await fetch(SWIGGY_RES_API);
    const json = await data.json();
    const restaurants = json?.data?.cards?.[2]?.data?.data?.cards ?? [];
    setAllRestaurantList(restaurants);
    setFilteredRestaurantList(restaurants);
  }

  if (!allRestaurantList) return null;

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
              const filteredList = getFilteredData({
                restaurants: allRestaurantList,
                filterBy: FILTER_BY.NAME,
                filterData: searchText,
              });
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
              const filteredList = getFilteredData({
                restaurants: allRestaurantList,
                filterBy: FILTER_BY.RATING,
                filterData: 4,
              });
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
          <Link to={`/restaurant/${restaurant.data.id}`}>
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
