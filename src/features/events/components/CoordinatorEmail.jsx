import FormRow from "components/FormRow";
import RowLabel from "components/RowLabel";
import Input from "components/Input";
import ControlsWrapper from "components/ControlsWrapper";
import Tooltip from "components/Tooltip";

const CoordinatorEmail = ({ value, onChange, error }) => (
  <FormRow>
    <RowLabel htmlFor="email">Email</RowLabel>
    <ControlsWrapper>
      <Input
        type="email"
        id="email"
        name="coordinatorEmail"
        placeholder="Email"
        value={value}
        onChange={onChange}
      />
    </ControlsWrapper>
    {error && <Tooltip>{error}</Tooltip>}
  </FormRow>
);

export { CoordinatorEmail as default };
