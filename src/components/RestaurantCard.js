import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
  const {
    name,
    cuisines,
    costForTwoString,
    deliveryTime,
    slugs,
    avgRating,
    cloudinaryImageId,
  } = props.resData.data;
  // console.log(props.resData);
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-100">
      <img
        className="res-logo"
        alt="res logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-xl">{name}</h3>
      <h4>
        {cuisines[0]}, {costForTwoString.toLowerCase()}, {slugs.city}
      </h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
