import { ParsedUrlQuery } from "querystring"

export interface ContextParams extends ParsedUrlQuery {
  name: string
}