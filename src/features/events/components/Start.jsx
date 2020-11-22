import styled from "styled-components";
import FormRow from "components/FormRow";
import ControlsWrapper from "components/ControlsWrapper";
import RowLabel from "components/RowLabel";
import Input from "components/Input";
import Radio from "components/Radio";
import Tooltip from "components/Tooltip";
import { amOrPmEnum } from "../constants";

const StartsControlsWrapper = styled(ControlsWrapper)`
  display: flex;
  flex-wrap: wrap;
  input[type="date"] {
    margin-bottom: 0.5em;
  }
  label {
    margin-left: 1em;
    input[type="time"] {
      margin-left: 1em;
    }
  }
`;

const ErrorWrapper = styled.div`
  width: 100%;
`;

const Start = ({ date, time, amOrPm, onChange, dateError, timeError }) => (
  <FormRow>
    <RowLabel htmlFor="date">Starts on * </RowLabel>
    <StartsControlsWrapper>
      <Input
        id="date"
        type="date"
        name="date"
        value={date}
        onChange={onChange}
        placeholder="YYYY-MM-DD"
      />
      <label>
        at
        <Input
          type="time"
          name="time"
          min="01:00"
          max="12:59"
          value={time}
          onChange={onChange}
          placeholder="HH:mm"
        />
      </label>
      <span>
        <Radio
          type="radio"
          name="amOrPm"
          value={amOrPmEnum.AM}
          checked={amOrPm === amOrPmEnum.AM}
          onChange={onChange}
          label="AM"
        />
        <Radio
          type="radio"
          name="amOrPm"
          value={amOrPmEnum.PM}
          checked={amOrPm === amOrPmEnum.PM}
          onChange={onChange}
          label="PM"
        />
      </span>
    </StartsControlsWrapper>
    <ErrorWrapper>
      {dateError && <Tooltip>{dateError}</Tooltip>}
      {timeError && <Tooltip>{timeError}</Tooltip>}
    </ErrorWrapper>
  </FormRow>
);

export { Start as default };
