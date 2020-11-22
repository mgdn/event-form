import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "components/Select";
import {
  fetchCoordinators,
  selectCoordinators,
} from "features/coordinators/coordinatorsSlice";
import { selectUser } from "features/user/userSlice";

const CoordinatorSelect = ({ id, value, onChange }) => {
  const { coordinators, loading } = useSelector(selectCoordinators);
  const dispatch = useDispatch();
  const { user } = useSelector(selectUser);

  useEffect(() => {
    if (!coordinators.length) {
      dispatch(fetchCoordinators());
    }
  }, [coordinators, dispatch]);

  return (
    <Select id={id} name="coordinatorId" value={value} onChange={onChange}>
      {loading ? (
        <option value="" disabled>
          Loading...
        </option>
      ) : (
        <>
          {user && (
            <optgroup label="Me">
              <option key={user.id} value={user.id}>
                {`${user.name} ${user.lastname}`}
              </option>
            </optgroup>
          )}
          <optgroup label="Others">
            {coordinators
              .filter(({ id }) => user?.id !== id)
              .map(({ id, name, lastname }) => (
                <option key={id} value={id}>
                  {`${name} ${lastname}`}
                </option>
              ))}
          </optgroup>
        </>
      )}
    </Select>
  );
};

export { CoordinatorSelect as default };
