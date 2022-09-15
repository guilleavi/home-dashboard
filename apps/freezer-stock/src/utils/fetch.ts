import axios from "axios"

interface SafeFetch<T> {
  abortSignal: AbortSignal
  defaultValue: T
  url: string
}

/**
 * Fetch data from the API and validate structure with expected schema
 * @param SafeFetch.defaultValue {U} Default value to return when the API couldn't return a value
 * @param SafeFetch.entityName {string} Entity that we are trying to fetch
 * @param SafeFetch.schema {T} Zod schema that is going to be use to validate the API response
 * @param SafeFetch.url {string} API Endpoint url
 * @returns {T} Data returned by the API, it doesn't matter if it passed or not the schema validation
 */
const safeFetch = async <T>({
  abortSignal,
  defaultValue,
  url,
}: SafeFetch<T>): Promise<T> => {
  try {
    // TODO: create axios facade
    const rawResponse = (await axios.get(url, { signal: abortSignal }))
      .data as T

    return rawResponse || defaultValue
  } catch (e: unknown) {
    console.log(e)
    return defaultValue
  }
}

export { safeFetch }
