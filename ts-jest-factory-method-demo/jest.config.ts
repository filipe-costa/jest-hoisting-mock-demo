/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import { createDefaultEsmPreset } from "ts-jest";

const config = {
  ...createDefaultEsmPreset(),
  clearMocks: true,
  collectCoverage: true,
  extensionsToTreatAsEsm: ['.ts'],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  transformIgnorePatterns: ['node_modules'],
  testMatch: ['**/*.spec.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  }
};

export default config;
