import { paidOrFreeEnum, MAX_DESCRIPTION_COUNT } from "../constants";

const validateEmailFormat = (email) =>
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email
  );

const validateDateFormat = (date) =>
  /^[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])$/.test(date);

const validateTimeFormat = (email) =>
  /^(0[1-9]|1[0-2]):([0-5][0-9])$/.test(email);

const validateNumberFormat = (value) => /^([0-9]+[.])?[0-9]+$/.test(value);

const validateIntegerFormat = (value) => /^[0-9]+$/.test(value);

export const validateFormData = (data) => {
  const {
    title,
    description,
    paidOrFree,
    fee,
    reward,
    coordinatorId,
    coordinatorEmail,
    date,
    time,
    duration,
  } = data;
  const errors = {};
  if (!title || !title.trim()) {
    errors.title = "Title cannot be empty";
  }
  if (!description || !description.trim()) {
    errors.description = "Description cannot be empty";
  } else if (description && description.length > MAX_DESCRIPTION_COUNT) {
    errors.description = `Max length ${MAX_DESCRIPTION_COUNT} characters`;
  }
  if (paidOrFree === paidOrFreeEnum.PAID) {
    if (!fee) {
      errors.fee = "Fee cannot be empty";
    } else if (!validateNumberFormat(fee)) {
      errors.fee = "Fee should be a number";
    } else if (!parseFloat(fee)) {
      errors.fee = "Fee cannot be 0";
    }
  }
  if (reward && !validateIntegerFormat(reward)) {
    errors.reward = "Reward should be an integer";
  }
  if (!coordinatorId) {
    errors.coordinatorId = "Responsible cannot be empty";
  }
  if (coordinatorEmail && !validateEmailFormat(coordinatorEmail)) {
    errors.coordinatorEmail = "Incorrect email format";
  }
  if (!date) {
    errors.date = "Date cannot be empty";
  } else if (date && !validateDateFormat(date)) {
    errors.date = "Incorrect date format";
  }
  if (!time) {
    errors.time = "Time cannot be empty";
  } else if (time && !validateTimeFormat(time)) {
    errors.time = "Incorrect time format";
  }
  if (duration && !validateNumberFormat(duration)) {
    errors.duration = "Duration should be a number";
  }
  return errors;
};
