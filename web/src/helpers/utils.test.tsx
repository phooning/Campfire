import { truncateNumber } from "./utils";

test("truncates numbers correctly", () => {
  expect(truncateNumber(58291, 2)).toEqual("58.29k");
  expect(truncateNumber(58000, 1)).toEqual("58k");
  expect(truncateNumber(998)).toEqual(998);
});
