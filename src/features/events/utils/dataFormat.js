import { paidOrFreeEnum, amOrPmEnum } from "../constants";

const createDateTimeString = (date, time, amOrPm) => {
  const [h, m] = time.split(":");
  let h24;
  if (h === "12") {
    h24 = amOrPm === amOrPmEnum.AM ? "00" : "12";
  } else {
    h24 = amOrPm === amOrPmEnum.AM ? h : (parseInt(h, 10) + 12).toString();
  }
  return date + "T" + h24 + ":" + m;
};

const SECONDS_IN_HOUR = 3600;

const durationInSeconds = (duration) => parseFloat(duration) * SECONDS_IN_HOUR;

export const mapFormDataToEvent = (data) => {
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
  } = data;
  return {
    title,
    description,
    category_id: categoryId ? parseInt(categoryId, 10) : null,
    paid_event: paidOrFree === paidOrFreeEnum.PAID,
    event_fee: paidOrFree === paidOrFreeEnum.PAID ? parseFloat(fee) : 0,
    reward: reward ? parseInt(reward, 10) : 0,
    date: createDateTimeString(date, time, amOrPm),
    duration: duration ? durationInSeconds(duration) : 0,
    coordinator: {
      email: coordinatorEmail,
      id: coordinatorId.toString(),
    },
  };
};
