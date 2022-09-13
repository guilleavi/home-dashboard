// Arrow functions are not allow on assert functions. See: https://github.com/microsoft/TypeScript/issues/34523
/* eslint-disable func-style */

export function assertIsString(value: unknown): asserts value is string {
    if (typeof value !== "string") {
        throw new Error("Not a string!");
    }
}

/* eslint-enable func-style */