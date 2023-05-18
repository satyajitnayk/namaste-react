import { Link } from 'react-router-dom';
import { SWIGGY_RES_API, FILTER_BY } from '../utils/constants';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { useEffect, useState } from 'react';
import { getFilteredData } from '../utils/helper';

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

  return allRestaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-filter-container">
        <div className="search-container p-5 bg-pink-50 my-4">
          <input
            type="text"
            className="focus:bg-cyan-100 p-2 m-2"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="search-btn p-2 m-2 bg-purple-700 text-white rounded-md hover:bg-purple-900"
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

      <div className="flex flex-wrap items-stretch">
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
