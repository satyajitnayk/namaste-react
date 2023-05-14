import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CDN_URL } from '../utils/constants';
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);

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
