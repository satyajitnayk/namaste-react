import { useEffect, useState } from 'react';
import { SWIGGY_RES_MENU_API } from './constants';

/**Custom Hook to get restaurant info */
const useRestaurantDetails = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  // get data from API
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(SWIGGY_RES_MENU_API + resId);
    const json = await data.json();
    const resdata = json?.data?.cards?.[0]?.card?.card?.info;
    setRestaurant(resdata);
  }

  // return restaurant data
  return restaurant;
};

export default useRestaurantDetails;
