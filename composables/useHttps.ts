/* eslint-disable @typescript-eslint/no-explicit-any */
import type { UseFetchOptions, AsyncData } from 'nuxt/app'
import type { FetchError, FetchResponse, SearchParameters } from 'ofetch'
import { hash } from 'ohash'
import { nextTick } from 'vue'
// import { useNotify } from './states/notifyState'
import { useUser } from './states/userState'
import { useLoading } from './states/loadingState'

type KeysOf<T> = Array<
  T extends T ? (keyof T extends string ? keyof T : never) : never
>

type UrlType =
  | string
  | Request
  | Ref<string | Request>
  | (() => string | Request)
type $TSFixed = any // Fix the TypeScript error

export interface ResOptions<T> {
  data?: T
  status: number
  message: string
  isSuccess: boolean
}

export type HttpOption<T> = UseFetchOptions<
  ResOptions<T>,
  T,
  KeysOf<T>,
  $TSFixed
>

function handleError<T>(
  _method: string | undefined,
  _response: FetchResponse<ResOptions<T>> & FetchResponse<ResponseType>,
) {
  // Handle the error
}

function checkRef(obj: Record<string, any>) {
  return Object.keys(obj).some(key => isRef(obj[key]))
}

function fetch<T>(url: UrlType, opts: HttpOption<T>) {
  // const notify = useNotify()
  const isLoading = useLoading()
  // Check the `key` option
  const { key, params, watch } = opts
  if (!key && ((params && checkRef(params)) || (watch && checkRef(watch))))
    console.error(
      '\x1B[31m%s\x1B[0m %s',
      '[useHttp] [error]',
      'The `key` option is required when `params` or `watch` has ref properties, please set a unique key for the current request.',
    )

  const options = opts as UseFetchOptions<ResOptions<T>>

  options.lazy = options.lazy ?? true
  // const { apiBase } = useRuntimeConfig().public;

  const data = useFetch<ResOptions<T>>(url, {
    // Request interception
    onRequest({ options }) {
      // Set the base URL
      const {
        public: { apiBase },
      } = useRuntimeConfig()

      if (apiBase && typeof apiBase === 'string') options.baseURL = apiBase
      // Set the request headers
      // const { $i18n } = useNuxtApp()
      // const locale = $i18n.locale.value
      // options.headers = {
      //   'Content-Type': 'application/json',
      // }

      // options.headers.set('Content-Language', locale)

      options.headers = new Headers()
      const { userData } = useUser()
      options.headers.set('ngrok-skip-browser-warning', 'true')
      if (userData.value?.jwtToken) {
        // Add JWT Token to the headers if it exists
        options.headers.set('Authorization', `Bearer ${userData.value?.jwtToken}`)
      }
    },
    // Response interception
    onResponse(
      { response: { _data: data }, options: { method } },
    ) {
      // Handle the response
      console.log('onResponse', method, data)

      nextTick(() => {
        // if (method !== 'GET')
        //   notify.value = {
        //     visible: true,
        //     status: data.isSuccess ? 'success' : 'danger',
        //     message: data.message,
        //   }
        isLoading.value = true
      })
    },
    // Error interception
    onResponseError({ response, options: { method } }) {
      handleError<T>(method, response)
    },
    // Set the cache key
    key: key ?? hash(['api-fetch', url, JSON.stringify(options)]),
    // Merge the options
    ...options,
  }) as AsyncData<ResOptions<T>, FetchError<ResOptions<T>> | null>
  return data
}
const baseUrl = '/api'

export const useHttp = {
  get: <T>(url: UrlType, params?: SearchParameters, option?: HttpOption<T>) => {
    let str = ''
    if (params) {
      Object.entries(params as object).forEach(function ([key, value], index) {
        if (index === 0) str += `${key}=${value}`
        else str += `&${key}=${value}`
      })
    }
    if (str)url = `${url}?${str}`
    else url = `${url}`
    // console.log(
    //   'method:'
    //   + 'get'
    //   + ' || url:'
    //   + url
    //   + ' || data:'
    //   + JSON.stringify(params),
    // )
    return fetch<T>(() => baseUrl + url, {
      method: 'get',
      params,
      ...option,
    })
  },

  post: <T>(
    url: UrlType,
    body?: RequestInit['body'] | Record<string, any>,
    option?: HttpOption<T>,
  ) => {
    // console.log(
    //   'method:'
    //   + 'post'
    //   + ' || url:'
    //   + url
    //   + ' || data:'
    //   + JSON.stringify(body),
    // )
    return fetch<T>(() => baseUrl + url, {
      method: 'post',
      body,
      ...option,
    })
  },

  patch: <T>(
    url: UrlType,
    body?: RequestInit['body'] | Record<string, any>,
    option?: HttpOption<T>,
  ) => {
    // console.log(
    //   'method:'
    //   + 'patch'
    //   + ' || url:'
    //   + url
    //   + ' || data:'
    //   + JSON.stringify(body),
    // )
    return fetch<T>(() => baseUrl + url, { method: 'patch', body, ...option })
  },

  delete: <T>(
    url: UrlType,
    body?: RequestInit['body'] | Record<string, any>,
    option?: HttpOption<T>,
  ) => {
    // console.log(
    //   'method:'
    //   + 'delete'
    //   + ' || url:'
    //   + url
    //   + ' || data:'
    //   + JSON.stringify(body),
    // )
    return fetch<T>(() => baseUrl + url, { method: 'delete', body, ...option })
  },
  uploadPost: <T>(
    url: UrlType,
    body?: RequestInit['body'] | Record<string, any>,
    option?: HttpOption<T>,
  ) => {
    return fetch<T>(() => baseUrl + url, {
      method: 'post',
      body: body,
      ...option,
    })
  },
}
