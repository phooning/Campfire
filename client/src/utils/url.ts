import queryString from "query-string";

export const objectToQueryString = (obj, options = {}) =>
  queryString.stringify(obj, {
    arrayFormat: "bracket",
    ...options,
  });
