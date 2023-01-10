// Arrow functions are not allow on assert functions. See: https://github.com/microsoft/TypeScript/issues/34523
/* eslint-disable func-style */

export function assertUnreachable(): never {
  throw new Error("Didn't expect to get here")
}

/* eslint-enable func-style */
