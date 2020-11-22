import React, { useCallback, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Fieldset from "components/Fieldset";
import Title from "./Title";
import Description from "./Description";
import Category from "./Category";
import Payment from "./Payment";
import Reward from "./Reward";
import Coordinator from "./Coordinator";
import CoordinatorEmail from "./CoordinatorEmail";
import Start from "./Start";
import Duration from "./Duration";
import Button from "components/Button";
import { validateFormData } from "../utils/formValidation";
import { paidOrFreeEnum, amOrPmEnum } from "../constants";
import { selectUser } from "features/user/userSlice";

const EventForm = ({ event = {}, onSubmit: submitForm, className }) => {
  const [formData, setFormData] = useState({ ...event });
  const [errors, setErrors] = useState("");
  const { user } = useSelector(selectUser);

  const {
    title,
    description,
    categoryId,
    paidOrFree,
    fee,
    reward,
    coordinatorId,
    coordinatorEmail,
    date,
    time,
    amOrPm,
    duration,
  } = formData;

  const isCoordinatorIdNotSet = !coordinatorId;

  useEffect(() => {
    if (isCoordinatorIdNotSet && user) {
      setFormData((data) => ({ ...data, coordinatorId: user.id }));
    }
  }, [isCoordinatorIdNotSet, user]);

  const onSubmit = (e) => {
    e.preventDefault();
    const errors = validateFormData(formData);
    setErrors(errors);
    if (!Object.keys(errors).length) {
      submitForm(formData);
    }
  };

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  }, []);

  return (
    <form onSubmit={onSubmit} className={className}>
      <Fieldset legend="About">
        <Title value={title} onChange={onChange} error={errors.title} />
        <Description
          value={description}
          onChange={onChange}
          error={errors.description}
        />
        <Category value={categoryId} onChange={onChange} />
        <Payment
          paidOrFree={paidOrFree}
          fee={fee}
          onChange={onChange}
          error={errors.fee}
        />
        <Reward value={reward} onChange={onChange} error={errors.reward} />
      </Fieldset>
      <Fieldset legend="Coordinator">
        <Coordinator
          value={coordinatorId}
          onChange={onChange}
          error={errors.coordinatorId}
        />
        <CoordinatorEmail
          value={coordinatorEmail}
          onChange={onChange}
          error={errors.coordinatorEmail}
        />
      </Fieldset>
      <Fieldset legend="When">
        <Start
          date={date}
          time={time}
          amOrPm={amOrPm}
          onChange={onChange}
          dateError={errors.date}
          timeError={errors.time}
        />
        <Duration
          value={duration}
          onChange={onChange}
          error={errors.duration}
        />
      </Fieldset>
      <Button>Publish Event</Button>
    </form>
  );
};

EventForm.defaultProps = {
  event: {
    title: "",
    description: "",
    categoryId: "",
    paidOrFree: paidOrFreeEnum.FREE,
    fee: "",
    reward: "",
    coordinatorId: "",
    coordinatorEmail: "",
    date: "",
    time: "",
    amOrPm: amOrPmEnum.AM,
    duration: "",
  },
};

export { EventForm as default };
