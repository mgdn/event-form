import styled from "styled-components";
import FormRow from "components/FormRow";
import RowLabel from "components/RowLabel";
import Input from "components/Input";
import ControlsWrapper from "components/ControlsWrapper";
import Tooltip from "components/Tooltip";

const RewardControlsWrapper = styled(ControlsWrapper)`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  span {
    margin-left: 0.5em;
  }
`;

const Reward = ({ value, onChange, error }) => (
  <FormRow>
    <RowLabel htmlFor="reward">Reward</RowLabel>
    <RewardControlsWrapper>
      <Input
        type="text"
        id="reward"
        name="reward"
        placeholder="Number"
        inputMode="numeric"
        value={value}
        onChange={onChange}
        size="5em"
      />
      <span>reward points for attendance</span>
    </RewardControlsWrapper>
    {error && <Tooltip>{error}</Tooltip>}
  </FormRow>
);

export { Reward as default };
