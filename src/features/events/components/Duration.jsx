import styled from "styled-components";
import FormRow from "components/FormRow";
import RowLabel from "components/RowLabel";
import Input from "components/Input";
import ControlsWrapper from "components/ControlsWrapper";
import Tooltip from "components/Tooltip";

const DurationInput = styled(Input)`
  margin-right: 0.5em;
`;

const Duration = ({ value, onChange, error }) => (
  <FormRow>
    <RowLabel htmlFor="duration">Duration </RowLabel>
    <ControlsWrapper>
      <DurationInput
        type="text"
        id="duration"
        name="duration"
        inputMode="decimal"
        placeholder="Number"
        value={value}
        onChange={onChange}
        size="5em"
      />
      <span>hour</span>
    </ControlsWrapper>
    {error && <Tooltip>{error}</Tooltip>}
  </FormRow>
);

export { Duration as default };
