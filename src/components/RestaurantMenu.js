import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SWIGGY_RES_MENU_API } from '../utils/constants';
import { CDN_URL } from '../utils/constants';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [restaurant, setRestaurant] = useState(null);

  async function getRestaurantInfo() {
    const data = await fetch(SWIGGY_RES_MENU_API + resId);
    const json = await data.json();
    const resdata = json?.data?.cards?.[0]?.card?.card?.info;
    setRestaurant(resdata);
  }

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="">
      <div>
        <h1>Restaurant id: {resId}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={CDN_URL + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.areaName}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.costForTwoMessage}</h3>
        <h3>{restaurant?.avgRating}</h3>
      </div>
    </div>
  );
};

export default RestaurantMenu;
