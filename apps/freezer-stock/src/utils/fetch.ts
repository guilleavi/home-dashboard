import axios from "axios"

type Fetch<T> = {
  abortSignal: AbortSignal
  defaultValue: T
  url: string
}

/**
 * Fetch data from the API
 * @param Fetch.abortSignal signal to cancel previous fetches
 * @param Fetch.defaultValue {T} Default value to return when the API doesn't return a value
 * @param Fetch.url {string} Endpoint url
 * @returns {T} Data returned by the API
 */
export const fetch = async <T>({
  abortSignal,
  defaultValue,
  url,
}: Fetch<T>): Promise<T> => {
  try {
    // TODO: create axios facade
    const response = (await axios.get(url, { signal: abortSignal }))
      .data as T

    return response || defaultValue
  } catch (e: unknown) {
    console.log(e)
    return defaultValue
  }
}