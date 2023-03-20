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
import { CreateListing } from "../models";
import { InlineResponse200 } from "../models";
import { ListingFull } from "../models";
import { ListingState } from "../models";
import { Location } from "../models";
import { UpdateListing } from "../models";
/**
 * ListingsApi - axios parameter creator
 * @export
 */
export const ListingsApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary Create a new listing.
     * @param {CreateListing} [body] A new listing.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createListing: async (
      body?: CreateListing,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/listing`;
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

      localVarHeaderParameter["Content-Type"] = "application/json";

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
    /**
     * Delete a listing by ID.
     * @summary Delete an existing listing.
     * @param {number} id The id of the listing you are trying to retrieve
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteListing: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          "id",
          "Required parameter id was null or undefined when calling deleteListing."
        );
      }
      const localVarPath = `/listing/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, "https://example.com");
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: "DELETE",
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
     * Get a listing by ID
     * @summary Retrieve an existing listing
     * @param {number} id The ID of the listing you are trying to retrieve
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListing: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          "id",
          "Required parameter id was null or undefined when calling getListing."
        );
      }
      const localVarPath = `/listing/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(id)));
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

      // authentication bearerAuth required

      // authentication cookieAuth required
      if (configuration && configuration.apiKey) {
        const localVarApiKeyValue =
          typeof configuration.apiKey === "function"
            ? await configuration.apiKey("Authorization")
            : await configuration.apiKey;
        localVarQueryParameter["Authorization"] = localVarApiKeyValue;
      }

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
     *
     * @summary Retrieve any listings matching a filter
     * @param {string} [searchString] A string to match listings by
     * @param {Location} [location] The center of the search
     * @param {number} [radius] The distance from the center of the search
     * @param {Array<number>} [categories]
     * @param {number} [user]
     * @param {boolean} [favorites]
     * @param {Array<ListingState>} [state]
     * @param {number} [limit]
     * @param {number} [offset]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListings: async (
      searchString?: string,
      location?: Location,
      radius?: number,
      categories?: Array<number>,
      user?: number,
      favorites?: boolean,
      state?: Array<ListingState>,
      limit?: number,
      offset?: number,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/listing`;
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

      // authentication bearerAuth required

      // authentication cookieAuth required
      if (configuration && configuration.apiKey) {
        const localVarApiKeyValue =
          typeof configuration.apiKey === "function"
            ? await configuration.apiKey("Authorization")
            : await configuration.apiKey;
        localVarQueryParameter["Authorization"] = localVarApiKeyValue;
      }

      if (searchString !== undefined) {
        localVarQueryParameter["searchString"] = searchString;
      }

      if (location !== undefined) {
        localVarQueryParameter["location"] = location;
      }

      if (radius !== undefined) {
        localVarQueryParameter["radius"] = radius;
      }

      if (categories) {
        localVarQueryParameter["categories"] = categories;
      }

      if (user !== undefined) {
        localVarQueryParameter["user"] = user;
      }

      if (favorites !== undefined) {
        localVarQueryParameter["favorites"] = favorites;
      }

      if (state) {
        localVarQueryParameter["state"] = state;
      }

      if (limit !== undefined) {
        localVarQueryParameter["limit"] = limit;
      }

      if (offset !== undefined) {
        localVarQueryParameter["offset"] = offset;
      }

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
     *
     * @summary Update a listing
     * @param {UpdateListing} [body] Update an existing listing
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateListing: async (
      body?: UpdateListing,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/listing`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, "https://example.com");
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: "PUT",
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

      localVarHeaderParameter["Content-Type"] = "application/json";

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
 * ListingsApi - functional programming interface
 * @export
 */
export const ListingsApiFp = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary Create a new listing.
     * @param {CreateListing} [body] A new listing.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createListing(
      body?: CreateListing,
      options?: AxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ListingFull>>> {
      const localVarAxiosArgs = await ListingsApiAxiosParamCreator(configuration).createListing(
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
    /**
     * Delete a listing by ID.
     * @summary Delete an existing listing.
     * @param {number} id The id of the listing you are trying to retrieve
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteListing(
      id: number,
      options?: AxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ListingFull>>> {
      const localVarAxiosArgs = await ListingsApiAxiosParamCreator(configuration).deleteListing(
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
     * Get a listing by ID
     * @summary Retrieve an existing listing
     * @param {number} id The ID of the listing you are trying to retrieve
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getListing(
      id: number,
      options?: AxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ListingFull>>> {
      const localVarAxiosArgs = await ListingsApiAxiosParamCreator(configuration).getListing(
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
     *
     * @summary Retrieve any listings matching a filter
     * @param {string} [searchString] A string to match listings by
     * @param {Location} [location] The center of the search
     * @param {number} [radius] The distance from the center of the search
     * @param {Array<number>} [categories]
     * @param {number} [user]
     * @param {boolean} [favorites]
     * @param {Array<ListingState>} [state]
     * @param {number} [limit]
     * @param {number} [offset]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getListings(
      searchString?: string,
      location?: Location,
      radius?: number,
      categories?: Array<number>,
      user?: number,
      favorites?: boolean,
      state?: Array<ListingState>,
      limit?: number,
      offset?: number,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse200>>
    > {
      const localVarAxiosArgs = await ListingsApiAxiosParamCreator(configuration).getListings(
        searchString,
        location,
        radius,
        categories,
        user,
        favorites,
        state,
        limit,
        offset,
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
     *
     * @summary Update a listing
     * @param {UpdateListing} [body] Update an existing listing
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateListing(
      body?: UpdateListing,
      options?: AxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ListingFull>>> {
      const localVarAxiosArgs = await ListingsApiAxiosParamCreator(configuration).updateListing(
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
 * ListingsApi - factory interface
 * @export
 */
export const ListingsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @summary Create a new listing.
     * @param {CreateListing} [body] A new listing.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createListing(
      body?: CreateListing,
      options?: AxiosRequestConfig
    ): Promise<AxiosResponse<ListingFull>> {
      return ListingsApiFp(configuration)
        .createListing(body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Delete a listing by ID.
     * @summary Delete an existing listing.
     * @param {number} id The id of the listing you are trying to retrieve
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteListing(
      id: number,
      options?: AxiosRequestConfig
    ): Promise<AxiosResponse<ListingFull>> {
      return ListingsApiFp(configuration)
        .deleteListing(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Get a listing by ID
     * @summary Retrieve an existing listing
     * @param {number} id The ID of the listing you are trying to retrieve
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getListing(
      id: number,
      options?: AxiosRequestConfig
    ): Promise<AxiosResponse<ListingFull>> {
      return ListingsApiFp(configuration)
        .getListing(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Retrieve any listings matching a filter
     * @param {string} [searchString] A string to match listings by
     * @param {Location} [location] The center of the search
     * @param {number} [radius] The distance from the center of the search
     * @param {Array<number>} [categories]
     * @param {number} [user]
     * @param {boolean} [favorites]
     * @param {Array<ListingState>} [state]
     * @param {number} [limit]
     * @param {number} [offset]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getListings(
      searchString?: string,
      location?: Location,
      radius?: number,
      categories?: Array<number>,
      user?: number,
      favorites?: boolean,
      state?: Array<ListingState>,
      limit?: number,
      offset?: number,
      options?: AxiosRequestConfig
    ): Promise<AxiosResponse<InlineResponse200>> {
      return ListingsApiFp(configuration)
        .getListings(
          searchString,
          location,
          radius,
          categories,
          user,
          favorites,
          state,
          limit,
          offset,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Update a listing
     * @param {UpdateListing} [body] Update an existing listing
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateListing(
      body?: UpdateListing,
      options?: AxiosRequestConfig
    ): Promise<AxiosResponse<ListingFull>> {
      return ListingsApiFp(configuration)
        .updateListing(body, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * ListingsApi - object-oriented interface
 * @export
 * @class ListingsApi
 * @extends {BaseAPI}
 */
export class ListingsApi extends BaseAPI {
  /**
   *
   * @summary Create a new listing.
   * @param {CreateListing} [body] A new listing.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ListingsApi
   */
  public async createListing(
    body?: CreateListing,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<ListingFull>> {
    return ListingsApiFp(this.configuration)
      .createListing(body, options)
      .then((request) => request(this.axios, this.basePath));
  }
  /**
   * Delete a listing by ID.
   * @summary Delete an existing listing.
   * @param {number} id The id of the listing you are trying to retrieve
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ListingsApi
   */
  public async deleteListing(
    id: number,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<ListingFull>> {
    return ListingsApiFp(this.configuration)
      .deleteListing(id, options)
      .then((request) => request(this.axios, this.basePath));
  }
  /**
   * Get a listing by ID
   * @summary Retrieve an existing listing
   * @param {number} id The ID of the listing you are trying to retrieve
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ListingsApi
   */
  public async getListing(
    id: number,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<ListingFull>> {
    return ListingsApiFp(this.configuration)
      .getListing(id, options)
      .then((request) => request(this.axios, this.basePath));
  }
  /**
   *
   * @summary Retrieve any listings matching a filter
   * @param {string} [searchString] A string to match listings by
   * @param {Location} [location] The center of the search
   * @param {number} [radius] The distance from the center of the search
   * @param {Array<number>} [categories]
   * @param {number} [user]
   * @param {boolean} [favorites]
   * @param {Array<ListingState>} [state]
   * @param {number} [limit]
   * @param {number} [offset]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ListingsApi
   */
  public async getListings(
    searchString?: string,
    location?: Location,
    radius?: number,
    categories?: Array<number>,
    user?: number,
    favorites?: boolean,
    state?: Array<ListingState>,
    limit?: number,
    offset?: number,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<InlineResponse200>> {
    return ListingsApiFp(this.configuration)
      .getListings(
        searchString,
        location,
        radius,
        categories,
        user,
        favorites,
        state,
        limit,
        offset,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }
  /**
   *
   * @summary Update a listing
   * @param {UpdateListing} [body] Update an existing listing
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ListingsApi
   */
  public async updateListing(
    body?: UpdateListing,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<ListingFull>> {
    return ListingsApiFp(this.configuration)
      .updateListing(body, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
