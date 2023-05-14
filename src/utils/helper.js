import { FILTER_BY } from './constants';

export const getFilteredData = ({ restaurants, filterBy, filterData }) => {
  if (filterBy == FILTER_BY.NAME) {
    return restaurants.filter((res) =>
      res.data.name.toLowerCase().includes(filterData?.toLowerCase())
    );
  } else if (filterBy == FILTER_BY.RATING) {
    return restaurants.filter((res) => res.data.avgRating > +filterData);
  }
};
