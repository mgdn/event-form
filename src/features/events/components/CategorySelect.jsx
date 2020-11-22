import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "components/Select";
import {
  fetchCategories,
  selectCategories,
} from "features/categories/categoriesSlice";

const CategorySelect = ({ value, onChange }) => {
  const { categories, loading } = useSelector(selectCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!categories.length) {
      dispatch(fetchCategories());
    }
  }, [categories, dispatch]);

  return (
    <Select name="categoryId" value={value} onChange={onChange}>
      <option value="">Select category</option>
      {loading ? (
        <option value="" disabled>
          Loading...
        </option>
      ) : (
        categories.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))
      )}
    </Select>
  );
};

export { CategorySelect as default };
