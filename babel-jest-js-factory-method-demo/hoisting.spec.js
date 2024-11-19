import { hoistingId } from "./hoisting.js";

jest.mock("nanoid", () => ({
  customAlphabet: jest
    .fn()
    .mockImplementation(() => jest.fn().mockReturnValue('TEST_ID')),
}));

describe("hoisting module", () => {
  test("hoistingId to be opId object", () => {
    expect(hoistingId()).toEqual({ opId: "TEST_ID" });
  });
});

