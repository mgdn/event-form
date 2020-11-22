import FormRow from "components/FormRow";
import RowLabel from "components/RowLabel";
import CategorySelect from "./CategorySelect";
import ControlsWrapper from "components/ControlsWrapper";
import FieldDescription from "components/FieldDescription";

const Category = ({ value, onChange }) => (
  <FormRow>
    <RowLabel htmlFor="categoryId">Category</RowLabel>
    <ControlsWrapper>
      <CategorySelect value={value} onChange={onChange} />
      <FieldDescription>Describes topic and...</FieldDescription>
    </ControlsWrapper>
  </FormRow>
);

export { Category as default };
