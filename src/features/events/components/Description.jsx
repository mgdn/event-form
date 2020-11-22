import React from "react";
import FormRow from "components/FormRow";
import RowLabel from "components/RowLabel";
import Input from "components/Input";
import ControlsWrapper from "components/ControlsWrapper";
import FieldDescription from "components/FieldDescription";
import Tooltip from "components/Tooltip";
import { MAX_DESCRIPTION_COUNT } from "../constants";

const Description = ({ value, onChange, error, rows = "5" }) => {
  const count = value.length;
  return (
    <FormRow>
      <RowLabel htmlFor="description">Description *</RowLabel>
      <ControlsWrapper>
        <Input
          name="description"
          id="description"
          placeholder="Write about your event, be creative"
          rows={rows}
          value={value}
          onChange={onChange}
          multiline
        />
        <FieldDescription>
          <span>{`Max length ${MAX_DESCRIPTION_COUNT} characters`}</span>
          <span>{count}</span>
        </FieldDescription>
      </ControlsWrapper>
      {error && <Tooltip>{error}</Tooltip>}
    </FormRow>
  );
};

export { Description as default };
