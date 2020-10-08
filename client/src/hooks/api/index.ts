import useQuery from "./query";

export default {
  get: (
    url: string,
    propsVariables: Record<string, unknown>,
    options: Record<string, unknown>
  ) => useQuery(url, propsVariables, options),
};
