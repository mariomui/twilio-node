/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Voice
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";
import { HighriskSpecialPrefixListInstance } from "./country/highriskSpecialPrefix";

/**
 * Options to pass to each
 *
 * @property { string } [isoCode] Filter to retrieve the country permissions by specifying the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
 * @property { string } [continent] Filter to retrieve the country permissions by specifying the continent
 * @property { string } [countryCode] Filter the results by specified [country codes](https://www.itu.int/itudoc/itu-t/ob-lists/icc/e164_763.html)
 * @property { boolean } [lowRiskNumbersEnabled] Filter to retrieve the country permissions with dialing to low-risk numbers enabled. Can be: `true` or `false`.
 * @property { boolean } [highRiskSpecialNumbersEnabled] Filter to retrieve the country permissions with dialing to high-risk special service numbers enabled. Can be: `true` or `false`
 * @property { boolean } [highRiskTollfraudNumbersEnabled] Filter to retrieve the country permissions with dialing to high-risk [toll fraud](https://www.twilio.com/learn/voice-and-video/toll-fraud) numbers enabled. Can be: `true` or `false`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { Function } [callback] -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property { Function } [done] - Function to be called upon completion of streaming
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface CountryListInstanceEachOptions {
  isoCode?: string;
  continent?: string;
  countryCode?: string;
  lowRiskNumbersEnabled?: boolean;
  highRiskSpecialNumbersEnabled?: boolean;
  highRiskTollfraudNumbersEnabled?: boolean;
  pageSize?: number;
  callback?: (item: CountryInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { string } [isoCode] Filter to retrieve the country permissions by specifying the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
 * @property { string } [continent] Filter to retrieve the country permissions by specifying the continent
 * @property { string } [countryCode] Filter the results by specified [country codes](https://www.itu.int/itudoc/itu-t/ob-lists/icc/e164_763.html)
 * @property { boolean } [lowRiskNumbersEnabled] Filter to retrieve the country permissions with dialing to low-risk numbers enabled. Can be: `true` or `false`.
 * @property { boolean } [highRiskSpecialNumbersEnabled] Filter to retrieve the country permissions with dialing to high-risk special service numbers enabled. Can be: `true` or `false`
 * @property { boolean } [highRiskTollfraudNumbersEnabled] Filter to retrieve the country permissions with dialing to high-risk [toll fraud](https://www.twilio.com/learn/voice-and-video/toll-fraud) numbers enabled. Can be: `true` or `false`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface CountryListInstanceOptions {
  isoCode?: string;
  continent?: string;
  countryCode?: string;
  lowRiskNumbersEnabled?: boolean;
  highRiskSpecialNumbersEnabled?: boolean;
  highRiskTollfraudNumbersEnabled?: boolean;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { string } [isoCode] Filter to retrieve the country permissions by specifying the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
 * @property { string } [continent] Filter to retrieve the country permissions by specifying the continent
 * @property { string } [countryCode] Filter the results by specified [country codes](https://www.itu.int/itudoc/itu-t/ob-lists/icc/e164_763.html)
 * @property { boolean } [lowRiskNumbersEnabled] Filter to retrieve the country permissions with dialing to low-risk numbers enabled. Can be: `true` or `false`.
 * @property { boolean } [highRiskSpecialNumbersEnabled] Filter to retrieve the country permissions with dialing to high-risk special service numbers enabled. Can be: `true` or `false`
 * @property { boolean } [highRiskTollfraudNumbersEnabled] Filter to retrieve the country permissions with dialing to high-risk [toll fraud](https://www.twilio.com/learn/voice-and-video/toll-fraud) numbers enabled. Can be: `true` or `false`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface CountryListInstancePageOptions {
  isoCode?: string;
  continent?: string;
  countryCode?: string;
  lowRiskNumbersEnabled?: boolean;
  highRiskSpecialNumbersEnabled?: boolean;
  highRiskTollfraudNumbersEnabled?: boolean;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface CountryContext {
  highriskSpecialPrefixes: HighriskSpecialPrefixListInstance;

  /**
   * Fetch a CountryInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CountryInstance
   */
  fetch(
    callback?: (error: Error | null, item?: CountryInstance) => any
  ): Promise<CountryInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CountryContextSolution {
  isoCode?: string;
}

export class CountryContextImpl implements CountryContext {
  protected _solution: CountryContextSolution;
  protected _uri: string;

  protected _highriskSpecialPrefixes?: HighriskSpecialPrefixListInstance;

  constructor(protected _version: V1, isoCode: string) {
    if (!isValidPathParam(isoCode)) {
      throw new Error("Parameter 'isoCode' is not valid.");
    }

    this._solution = { isoCode };
    this._uri = `/DialingPermissions/Countries/${isoCode}`;
  }

  get highriskSpecialPrefixes(): HighriskSpecialPrefixListInstance {
    this._highriskSpecialPrefixes =
      this._highriskSpecialPrefixes ||
      HighriskSpecialPrefixListInstance(this._version, this._solution.isoCode);
    return this._highriskSpecialPrefixes;
  }

  fetch(callback?: any): Promise<CountryInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new CountryInstance(operationVersion, payload, this._solution.isoCode)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface CountryPayload extends TwilioResponsePayload {
  content: CountryResource[];
}

interface CountryResource {
  iso_code?: string | null;
  name?: string | null;
  continent?: string | null;
  country_codes?: Array<string> | null;
  low_risk_numbers_enabled?: boolean | null;
  high_risk_special_numbers_enabled?: boolean | null;
  high_risk_tollfraud_numbers_enabled?: boolean | null;
  url?: string | null;
  links?: object | null;
}

export class CountryInstance {
  protected _solution: CountryContextSolution;
  protected _context?: CountryContext;

  constructor(
    protected _version: V1,
    payload: CountryResource,
    isoCode?: string
  ) {
    this.isoCode = payload.iso_code;
    this.name = payload.name;
    this.continent = payload.continent;
    this.countryCodes = payload.country_codes;
    this.lowRiskNumbersEnabled = payload.low_risk_numbers_enabled;
    this.highRiskSpecialNumbersEnabled =
      payload.high_risk_special_numbers_enabled;
    this.highRiskTollfraudNumbersEnabled =
      payload.high_risk_tollfraud_numbers_enabled;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { isoCode: isoCode || this.isoCode };
  }

  /**
   * The ISO country code
   */
  isoCode?: string | null;
  /**
   * The name of the country
   */
  name?: string | null;
  /**
   * The name of the continent in which the country is located
   */
  continent?: string | null;
  /**
   * The E.164 assigned country codes(s)
   */
  countryCodes?: Array<string> | null;
  /**
   * Whether dialing to low-risk numbers is enabled
   */
  lowRiskNumbersEnabled?: boolean | null;
  /**
   * Whether dialing to high-risk special services numbers is enabled
   */
  highRiskSpecialNumbersEnabled?: boolean | null;
  /**
   * Whether dialing to high-risk toll fraud numbers is enabled, else `false`
   */
  highRiskTollfraudNumbersEnabled?: boolean | null;
  /**
   * The absolute URL of this resource
   */
  url?: string | null;
  /**
   * A list of URLs related to this resource
   */
  links?: object | null;

  private get _proxy(): CountryContext {
    this._context =
      this._context ||
      new CountryContextImpl(this._version, this._solution.isoCode);
    return this._context;
  }

  /**
   * Fetch a CountryInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CountryInstance
   */
  fetch(
    callback?: (error: Error | null, item?: CountryInstance) => any
  ): Promise<CountryInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Access the highriskSpecialPrefixes.
   */
  highriskSpecialPrefixes(): HighriskSpecialPrefixListInstance {
    return this._proxy.highriskSpecialPrefixes;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      isoCode: this.isoCode,
      name: this.name,
      continent: this.continent,
      countryCodes: this.countryCodes,
      lowRiskNumbersEnabled: this.lowRiskNumbersEnabled,
      highRiskSpecialNumbersEnabled: this.highRiskSpecialNumbersEnabled,
      highRiskTollfraudNumbersEnabled: this.highRiskTollfraudNumbersEnabled,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface CountryListInstance {
  (isoCode: string): CountryContext;
  get(isoCode: string): CountryContext;

  /**
   * Streams CountryInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: CountryInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams CountryInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CountryListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: CountryListInstanceEachOptions,
    callback?: (item: CountryInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of CountryInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: CountryPage) => any
  ): Promise<CountryPage>;
  /**
   * Retrieve a single target page of CountryInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl?: string,
    callback?: (error: Error | null, items: CountryPage) => any
  ): Promise<CountryPage>;
  getPage(params?: any, callback?: any): Promise<CountryPage>;
  /**
   * Lists CountryInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: CountryInstance[]) => any
  ): Promise<CountryInstance[]>;
  /**
   * Lists CountryInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CountryListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: CountryListInstanceOptions,
    callback?: (error: Error | null, items: CountryInstance[]) => any
  ): Promise<CountryInstance[]>;
  list(params?: any, callback?: any): Promise<CountryInstance[]>;
  /**
   * Retrieve a single page of CountryInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: CountryPage) => any
  ): Promise<CountryPage>;
  /**
   * Retrieve a single page of CountryInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CountryListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: CountryListInstancePageOptions,
    callback?: (error: Error | null, items: CountryPage) => any
  ): Promise<CountryPage>;
  page(params?: any, callback?: any): Promise<CountryPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CountrySolution {}

interface CountryListInstanceImpl extends CountryListInstance {}
class CountryListInstanceImpl implements CountryListInstance {
  _version?: V1;
  _solution?: CountrySolution;
  _uri?: string;
}

export function CountryListInstance(version: V1): CountryListInstance {
  const instance = ((isoCode) =>
    instance.get(isoCode)) as CountryListInstanceImpl;

  instance.get = function get(isoCode): CountryContext {
    return new CountryContextImpl(version, isoCode);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/DialingPermissions/Countries`;

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<CountryPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["isoCode"] !== undefined) data["IsoCode"] = params["isoCode"];
    if (params["continent"] !== undefined)
      data["Continent"] = params["continent"];
    if (params["countryCode"] !== undefined)
      data["CountryCode"] = params["countryCode"];
    if (params["lowRiskNumbersEnabled"] !== undefined)
      data["LowRiskNumbersEnabled"] = serialize.bool(
        params["lowRiskNumbersEnabled"]
      );
    if (params["highRiskSpecialNumbersEnabled"] !== undefined)
      data["HighRiskSpecialNumbersEnabled"] = serialize.bool(
        params["highRiskSpecialNumbersEnabled"]
      );
    if (params["highRiskTollfraudNumbersEnabled"] !== undefined)
      data["HighRiskTollfraudNumbersEnabled"] = serialize.bool(
        params["highRiskTollfraudNumbersEnabled"]
      );
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.page !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: this._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new CountryPage(operationVersion, payload, this._solution)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl?: any,
    callback?: any
  ): Promise<CountryPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new CountryPage(this._version, payload, this._solution)
    );
    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.toJSON = function toJSON() {
    return this._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(this.toJSON(), options);
  };

  return instance;
}

export class CountryPage extends Page<
  V1,
  CountryPayload,
  CountryResource,
  CountryInstance
> {
  /**
   * Initialize the CountryPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: CountrySolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of CountryInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: CountryResource): CountryInstance {
    return new CountryInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
