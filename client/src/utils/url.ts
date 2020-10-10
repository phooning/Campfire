import queryString, { StringifiableRecord } from "query-string";

const objectToQueryString = (obj: StringifiableRecord, options = {}): string =>
  queryString.stringify(obj, {
    arrayFormat: "bracket",
    ...options,
  });

export { objectToQueryString };
