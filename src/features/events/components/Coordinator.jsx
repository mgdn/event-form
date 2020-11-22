import FormRow from "components/FormRow";
import RowLabel from "components/RowLabel";
import CoordinatorSelect from "./CoordinatorSelect";
import ControlsWrapper from "components/ControlsWrapper";
import Tooltip from "components/Tooltip";

const Coordinator = ({ value, onChange, error }) => (
  <FormRow>
    <RowLabel htmlFor="coordinator">Responsible *</RowLabel>
    <ControlsWrapper>
      <CoordinatorSelect id="coordinator" value={value} onChange={onChange} />
    </ControlsWrapper>
    {error && <Tooltip>{error}</Tooltip>}
  </FormRow>
);

export { Coordinator as default };
