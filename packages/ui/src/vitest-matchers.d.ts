import type { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";

// Vitest 5 declares `Assertion` with two type parameters, while jest-dom's
// bundled augmentation still declares one, so it silently fails to merge.
// `Matchers` is Vitest's intended extension point; augmenting it works.
declare module "vitest" {
  interface Matchers<
    R extends void | Promise<void> = void | Promise<void>,
    T = unknown,
  > extends TestingLibraryMatchers<any, R> {}
}
