import { ParsedUrlQuery } from "querystring"

export type ContextParams = ParsedUrlQuery & {
  name: string
}
