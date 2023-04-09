import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onFilterChange = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <FilterLabel htmlFor="filter">
      <p>Find contacts by name</p>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </FilterLabel>
  );
};
