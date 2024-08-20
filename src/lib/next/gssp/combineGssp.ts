import { ErrResponse, HttpResponse } from "@/lib/api";
import { AssertsError } from "@/lib/asserts";
import { HttpError, errors } from "@/lib/errors";
import { GetServerSidePropsResult } from "next";
import { RedirectError } from "./error";
import { GetServerSideProps, GsspMiddleware, GsspMiddlewareArgs } from "./type";

export function combineGssp<T extends HttpResponse<any>>(
  ...gsspMiddlewares: [...GsspMiddleware[], GetServerSideProps<T>]
) {
  return async (...args: GsspMiddlewareArgs) => {
    try {
      return (await gsspMiddlewares.reduce(
        (current, next) =>
          current.then((arg) => {
            if (typeof next !== "function") return arg;
            return (next as GsspMiddleware)(...arg);
          }),
        Promise.resolve(args),
      )) as unknown as GetServerSidePropsResult<T>;
    } catch (err) {
      if (err instanceof HttpError) {
        const props: ErrResponse = {
          data: null,
          err: err.serialize(),
          status: err.status,
        };
        return { props };
      }
      if (err instanceof RedirectError) return err.toProps();
      if (err instanceof AssertsError) {
        const error = errors["INTERNAL_SERVER"];
        return { props: { data: null, err: error, status: 500 } };
      }
      throw err;
    }
  };
}
