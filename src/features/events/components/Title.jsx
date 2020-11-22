import FormRow from "components/FormRow";
import RowLabel from "components/RowLabel";
import Input from "components/Input";
import ControlsWrapper from "components/ControlsWrapper";
import Tooltip from "components/Tooltip";

const Title = ({ value, onChange, error }) => (
  <FormRow>
    <RowLabel htmlFor="title">Title *</RowLabel>
    <ControlsWrapper>
      <Input
        name="title"
        id="title"
        placeholder="Make it short and clear"
        value={value}
        onChange={onChange}
        fullWidth
      />
    </ControlsWrapper>
    {error && <Tooltip>{error}</Tooltip>}
  </FormRow>
);

export { Title as default };
