const CATEGORIES_ENDPOINT = "http://www.mocky.io/v2/5bcdd3942f00002c00c855ba";
const COORDINATORS_ENDPOINT = "http://www.mocky.io/v2/5bcdd7992f00006300c855d5";

export const getCategories = () =>
  fetch(CATEGORIES_ENDPOINT).then((response) => response.json());

export const getCoordinators = () =>
  fetch(COORDINATORS_ENDPOINT).then((response) => response.json());
