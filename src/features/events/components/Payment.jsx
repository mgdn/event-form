import styled from "styled-components";
import FormRow from "components/FormRow";
import RowLabel from "components/RowLabel";
import Radio from "components/Radio";
import Input from "components/Input";
import ControlsWrapper from "components/ControlsWrapper";
import Tooltip from "components/Tooltip";
import { paidOrFreeEnum } from "../constants";

const PaidRadio = styled(Radio)`
  margin-right: 1em;
`;

const FeeInput = styled(Input)`
  margin-right: 0.5em;
`;

const RowLegend = styled(RowLabel)`
  float: left;
`;

const Payment = ({ paidOrFree, fee, onChange, error }) => (
  <FormRow as="fieldset">
    <RowLegend as="legend">Payment</RowLegend>
    <ControlsWrapper>
      <PaidRadio
        type="radio"
        name="paidOrFree"
        value={paidOrFreeEnum.FREE}
        checked={paidOrFree === paidOrFreeEnum.FREE}
        onChange={onChange}
        label="Free event"
      />
      <PaidRadio
        type="radio"
        name="paidOrFree"
        value={paidOrFreeEnum.PAID}
        checked={paidOrFree === paidOrFreeEnum.PAID}
        onChange={onChange}
        label="Paid event"
      />
      {paidOrFree === paidOrFreeEnum.PAID && (
        <label>
          <FeeInput
            type="text"
            name="fee"
            inputMode="decimal"
            placeholder="Fee"
            value={fee}
            onChange={onChange}
            size="5em"
          />
          $
        </label>
      )}
    </ControlsWrapper>
    {error && <Tooltip>{error}</Tooltip>}
  </FormRow>
);

export { Payment as default };
