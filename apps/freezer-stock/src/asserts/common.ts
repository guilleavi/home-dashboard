// Arrow functions are not allow on assert functions. See: https://github.com/microsoft/TypeScript/issues/34523

export function assertUnreachable(_x: never): never {
    throw new Error("Didn't expect to get here")
}