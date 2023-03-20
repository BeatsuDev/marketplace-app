/* tslint:disable */
/* eslint-disable */
/**
 * let API - OpenAPI 3.0
 * A simple API for listing items for sale.  Some useful links: - [The GitHub repository](https://github.com/BeatsuDev/let)
 *
 * OpenAPI spec version: 1.0.0
 * Contact: vkbugge@hotmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from "axios";
import { Configuration } from "../configuration";
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from "../base";
import { Image } from "../models";
/**
 * ImageApi - axios parameter creator
 * @export
 */
export const ImageApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Retrieve an existing image
     * @summary Retrieve an image.
     * @param {number} id The id of the image to retrieve
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    imageIdGet: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          "id",
          "Required parameter id was null or undefined when calling imageIdGet."
        );
      }
      const localVarPath = `/image/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, "https://example.com");
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      const query = new URLSearchParams(localVarUrlObj.search);
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key]);
      }
      for (const key in options.params) {
        query.set(key, options.params[key]);
      }
      localVarUrlObj.search = new URLSearchParams(query).toString();
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      };
    },
    /**
     * Upload a new image.
     * @summary Upload an image.
     * @param {Object} [body] Upload a new image (base64 encoded).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    imagePost: async (body?: Object, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      const localVarPath = `/image`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, "https://example.com");
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication bearerAuth required

      // authentication cookieAuth required
      if (configuration && configuration.apiKey) {
        const localVarApiKeyValue =
          typeof configuration.apiKey === "function"
            ? await configuration.apiKey("Authorization")
            : await configuration.apiKey;
        localVarQueryParameter["Authorization"] = localVarApiKeyValue;
      }

      localVarHeaderParameter["Content-Type"] = "application/octet-stream";

      const query = new URLSearchParams(localVarUrlObj.search);
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key]);
      }
      for (const key in options.params) {
        query.set(key, options.params[key]);
      }
      localVarUrlObj.search = new URLSearchParams(query).toString();
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      const needsSerialization =
        typeof body !== "string" ||
        localVarRequestOptions.headers["Content-Type"] === "application/json";
      localVarRequestOptions.data = needsSerialization
        ? JSON.stringify(body !== undefined ? body : {})
        : body || "";

      return {
        url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * ImageApi - functional programming interface
 * @export
 */
export const ImageApiFp = function (configuration?: Configuration) {
  return {
    /**
     * Retrieve an existing image
     * @summary Retrieve an image.
     * @param {number} id The id of the image to retrieve
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async imageIdGet(
      id: number,
      options?: AxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Blob>>> {
      const localVarAxiosArgs = await ImageApiAxiosParamCreator(configuration).imageIdGet(
        id,
        options
      );
      return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
    /**
     * Upload a new image.
     * @summary Upload an image.
     * @param {Object} [body] Upload a new image (base64 encoded).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async imagePost(
      body?: Object,
      options?: AxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Image>>> {
      const localVarAxiosArgs = await ImageApiAxiosParamCreator(configuration).imagePost(
        body,
        options
      );
      return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
  };
};

/**
 * ImageApi - factory interface
 * @export
 */
export const ImageApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     * Retrieve an existing image
     * @summary Retrieve an image.
     * @param {number} id The id of the image to retrieve
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async imageIdGet(id: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Blob>> {
      return ImageApiFp(configuration)
        .imageIdGet(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Upload a new image.
     * @summary Upload an image.
     * @param {Object} [body] Upload a new image (base64 encoded).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async imagePost(body?: Object, options?: AxiosRequestConfig): Promise<AxiosResponse<Image>> {
      return ImageApiFp(configuration)
        .imagePost(body, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * ImageApi - object-oriented interface
 * @export
 * @class ImageApi
 * @extends {BaseAPI}
 */
export class ImageApi extends BaseAPI {
  /**
   * Retrieve an existing image
   * @summary Retrieve an image.
   * @param {number} id The id of the image to retrieve
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ImageApi
   */
  public async imageIdGet(id: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Blob>> {
    return ImageApiFp(this.configuration)
      .imageIdGet(id, options)
      .then((request) => request(this.axios, this.basePath));
  }
  /**
   * Upload a new image.
   * @summary Upload an image.
   * @param {Object} [body] Upload a new image (base64 encoded).
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ImageApi
   */
  public async imagePost(
    body?: Object,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<Image>> {
    return ImageApiFp(this.configuration)
      .imagePost(body, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
