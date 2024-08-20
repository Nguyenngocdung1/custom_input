import { InvalidPathParamError, UnauthorizedError } from "../errors";

export class AssertsError extends Error {}

type Check = string | string[] | undefined;

function assertPathParam(
  queryStringLike: Check,
): asserts queryStringLike is string {
  if (typeof queryStringLike !== "string") throw new InvalidPathParamError();
}

function assertNumericPathParam(
  queryStringLike: Check,
): asserts queryStringLike is string {
  if (
    typeof queryStringLike !== "string" ||
    !/^([1-9]\d*|0)$/.test(queryStringLike)
  )
    throw new InvalidPathParamError();
}

export function str(queryStringLike: Check) {
  assertPathParam(queryStringLike);
  return queryStringLike;
}

export function num(queryStringLike: Check) {
  assertNumericPathParam(queryStringLike);
  return queryStringLike;
}

export function assertBoolean(value: unknown): asserts value is boolean {
  if (typeof value !== "boolean") throw new AssertsError();
}

export function assertString(value: unknown): asserts value is string {
  if (typeof value !== "string") throw new AssertsError();
}

export function addToken(value: unknown) {
  return value;
}
