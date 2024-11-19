import { hoistingId } from "./hoisting.js";

// This doesn't get hoisted before jest.mock
// https://jestjs.io/docs/es6-class-mocks#calling-jestmockdocsenjest-objectjestmockmodulename-factory-options-with-the-module-factory-parameter
const mockGetId = jest.fn().mockReturnValue({ opId: "TEST_ID" })

jest.mock("nanoid", () => ({
  customAlphabet: jest
    .fn()
    .mockImplementation(() => mockGetId),
}));

describe("hoisting module const", () => {
    test("hoistingId to be opId object", () => {
      expect(hoistingId()).toEqual({ opId: "TEST_ID" });
    });
  });
  
  