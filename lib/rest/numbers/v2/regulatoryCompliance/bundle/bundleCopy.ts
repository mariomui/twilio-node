/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Numbers
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2 from "../../../V2";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");

type BundleCopyStatus =
  | "draft"
  | "pending-review"
  | "in-review"
  | "twilio-rejected"
  | "twilio-approved"
  | "provisionally-approved";

/**
 * Options to pass to create a BundleCopyInstance
 *
 * @property { string } [friendlyName] The string that you assigned to describe the copied bundle.
 */
export interface BundleCopyListInstanceCreateOptions {
  friendlyName?: string;
}
/**
 * Options to pass to each
 *
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
export interface BundleCopyListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: BundleCopyInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface BundleCopyListInstanceOptions {
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface BundleCopyListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface BundleCopyListInstance {
  /**
   * Create a BundleCopyInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed BundleCopyInstance
   */
  create(
    callback?: (error: Error | null, item?: BundleCopyInstance) => any
  ): Promise<BundleCopyInstance>;
  /**
   * Create a BundleCopyInstance
   *
   * @param { BundleCopyListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed BundleCopyInstance
   */
  create(
    params: BundleCopyListInstanceCreateOptions,
    callback?: (error: Error | null, item?: BundleCopyInstance) => any
  ): Promise<BundleCopyInstance>;
  create(params?: any, callback?: any): Promise<BundleCopyInstance>;

  /**
   * Streams BundleCopyInstance records from the API.
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
    callback?: (item: BundleCopyInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams BundleCopyInstance records from the API.
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
   * @param { BundleCopyListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: BundleCopyListInstanceEachOptions,
    callback?: (item: BundleCopyInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of BundleCopyInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: BundleCopyPage) => any
  ): Promise<BundleCopyPage>;
  /**
   * Retrieve a single target page of BundleCopyInstance records from the API.
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
    callback?: (error: Error | null, items: BundleCopyPage) => any
  ): Promise<BundleCopyPage>;
  getPage(params?: any, callback?: any): Promise<BundleCopyPage>;
  /**
   * Lists BundleCopyInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: BundleCopyInstance[]) => any
  ): Promise<BundleCopyInstance[]>;
  /**
   * Lists BundleCopyInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { BundleCopyListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: BundleCopyListInstanceOptions,
    callback?: (error: Error | null, items: BundleCopyInstance[]) => any
  ): Promise<BundleCopyInstance[]>;
  list(params?: any, callback?: any): Promise<BundleCopyInstance[]>;
  /**
   * Retrieve a single page of BundleCopyInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: BundleCopyPage) => any
  ): Promise<BundleCopyPage>;
  /**
   * Retrieve a single page of BundleCopyInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { BundleCopyListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: BundleCopyListInstancePageOptions,
    callback?: (error: Error | null, items: BundleCopyPage) => any
  ): Promise<BundleCopyPage>;
  page(params?: any, callback?: any): Promise<BundleCopyPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface BundleCopySolution {
  bundleSid?: string;
}

interface BundleCopyListInstanceImpl extends BundleCopyListInstance {}
class BundleCopyListInstanceImpl implements BundleCopyListInstance {
  _version?: V2;
  _solution?: BundleCopySolution;
  _uri?: string;
}

export function BundleCopyListInstance(
  version: V2,
  bundleSid: string
): BundleCopyListInstance {
  const instance = {} as BundleCopyListInstanceImpl;

  instance._version = version;
  instance._solution = { bundleSid };
  instance._uri = `/RegulatoryCompliance/Bundles/${bundleSid}/Copies`;

  instance.create = function create(
    params?: any,
    callback?: any
  ): Promise<BundleCopyInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new BundleCopyInstance(
          operationVersion,
          payload,
          this._solution.bundleSid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<BundleCopyPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

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
      (payload) => new BundleCopyPage(operationVersion, payload, this._solution)
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
  ): Promise<BundleCopyPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new BundleCopyPage(this._version, payload, this._solution)
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

interface BundleCopyPayload
  extends BundleCopyResource,
    Page.TwilioResponsePayload {}

interface BundleCopyResource {
  sid?: string | null;
  account_sid?: string | null;
  regulation_sid?: string | null;
  friendly_name?: string | null;
  status?: BundleCopyStatus;
  valid_until?: Date | null;
  email?: string | null;
  status_callback?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
}

export class BundleCopyInstance {
  constructor(
    protected _version: V2,
    payload: BundleCopyPayload,
    bundleSid: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.regulationSid = payload.regulation_sid;
    this.friendlyName = payload.friendly_name;
    this.status = payload.status;
    this.validUntil = deserialize.iso8601DateTime(payload.valid_until);
    this.email = payload.email;
    this.statusCallback = payload.status_callback;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The unique string of a regulation
   */
  regulationSid?: string | null;
  /**
   * The string that you assigned to describe the resource
   */
  friendlyName?: string | null;
  status?: BundleCopyStatus;
  /**
   * The ISO 8601 date and time in GMT when the resource will be valid until
   */
  validUntil?: Date | null;
  /**
   * The email address
   */
  email?: string | null;
  /**
   * The URL we call to inform your application of status changes
   */
  statusCallback?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      accountSid: this.accountSid,
      regulationSid: this.regulationSid,
      friendlyName: this.friendlyName,
      status: this.status,
      validUntil: this.validUntil,
      email: this.email,
      statusCallback: this.statusCallback,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class BundleCopyPage extends Page<
  V2,
  BundleCopyPayload,
  BundleCopyResource,
  BundleCopyInstance
> {
  /**
   * Initialize the BundleCopyPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2,
    response: Response<string>,
    solution: BundleCopySolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of BundleCopyInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: BundleCopyPayload): BundleCopyInstance {
    return new BundleCopyInstance(
      this._version,
      payload,
      this._solution.bundleSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
