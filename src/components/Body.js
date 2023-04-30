import restaurants from '../../restaurants.json';
import RestaurantCard from './RestaurantCard';

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

export default Body;
