/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Verify
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2 from "../../../V2";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";
import { NotificationListInstance } from "./challenge/notification";

type ChallengeChallengeReasons = "none" | "not_needed" | "not_requested";

type ChallengeChallengeStatuses = "pending" | "expired" | "approved" | "denied";

type ChallengeFactorTypes = "push" | "totp";

type ChallengeListOrders = "asc" | "desc";

/**
 * Options to pass to update a ChallengeInstance
 *
 * @property { string } [authPayload] The optional payload needed to verify the Challenge. E.g., a TOTP would use the numeric code. For `TOTP` this value must be between 3 and 8 characters long. For `Push` this value can be up to 5456 characters in length
 * @property { any } [metadata] Custom metadata associated with the challenge. This is added by the Device/SDK directly to allow for the inclusion of device information. It must be a stringified JSON with only strings values eg. `{\\\"os\\\": \\\"Android\\\"}`. Can be up to 1024 characters in length.
 */
export interface ChallengeContextUpdateOptions {
  authPayload?: string;
  metadata?: any;
}

/**
 * Options to pass to create a ChallengeInstance
 *
 * @property { string } factorSid The unique SID identifier of the Factor.
 * @property { Date } [expirationDate] The date-time when this Challenge expires, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. The default value is five (5) minutes after Challenge creation. The max value is sixty (60) minutes after creation.
 * @property { string } [details.message] Shown to the user when the push notification arrives. Required when `factor_type` is `push`. Can be up to 256 characters in length
 * @property { Array<any> } [details.fields] A list of objects that describe the Fields included in the Challenge. Each object contains the label and value of the field, the label can be up to 36 characters in length and the value can be up to 128 characters in length. Used when `factor_type` is `push`. There can be up to 20 details fields.
 * @property { any } [hiddenDetails] Details provided to give context about the Challenge. Not shown to the end user. It must be a stringified JSON with only strings values eg. `{\\\"ip\\\": \\\"172.168.1.234\\\"}`. Can be up to 1024 characters in length
 * @property { string } [authPayload] Optional payload used to verify the Challenge upon creation. Only used with a Factor of type `totp` to carry the TOTP code that needs to be verified. For `TOTP` this value must be between 3 and 8 characters long.
 */
export interface ChallengeListInstanceCreateOptions {
  factorSid: string;
  expirationDate?: Date;
  "details.message"?: string;
  "details.fields"?: Array<any>;
  hiddenDetails?: any;
  authPayload?: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [factorSid] The unique SID identifier of the Factor.
 * @property { ChallengeChallengeStatuses } [status] The Status of the Challenges to fetch. One of `pending`, `expired`, `approved` or `denied`.
 * @property { ChallengeListOrders } [order] The desired sort order of the Challenges list. One of `asc` or `desc` for ascending and descending respectively. Defaults to `asc`.
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
export interface ChallengeListInstanceEachOptions {
  factorSid?: string;
  status?: ChallengeChallengeStatuses;
  order?: ChallengeListOrders;
  pageSize?: number;
  callback?: (item: ChallengeInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { string } [factorSid] The unique SID identifier of the Factor.
 * @property { ChallengeChallengeStatuses } [status] The Status of the Challenges to fetch. One of `pending`, `expired`, `approved` or `denied`.
 * @property { ChallengeListOrders } [order] The desired sort order of the Challenges list. One of `asc` or `desc` for ascending and descending respectively. Defaults to `asc`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface ChallengeListInstanceOptions {
  factorSid?: string;
  status?: ChallengeChallengeStatuses;
  order?: ChallengeListOrders;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { string } [factorSid] The unique SID identifier of the Factor.
 * @property { ChallengeChallengeStatuses } [status] The Status of the Challenges to fetch. One of `pending`, `expired`, `approved` or `denied`.
 * @property { ChallengeListOrders } [order] The desired sort order of the Challenges list. One of `asc` or `desc` for ascending and descending respectively. Defaults to `asc`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface ChallengeListInstancePageOptions {
  factorSid?: string;
  status?: ChallengeChallengeStatuses;
  order?: ChallengeListOrders;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface ChallengeContext {
  notifications: NotificationListInstance;

  /**
   * Fetch a ChallengeInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ChallengeInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ChallengeInstance) => any
  ): Promise<ChallengeInstance>;

  /**
   * Update a ChallengeInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ChallengeInstance
   */
  update(
    callback?: (error: Error | null, item?: ChallengeInstance) => any
  ): Promise<ChallengeInstance>;
  /**
   * Update a ChallengeInstance
   *
   * @param { ChallengeContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ChallengeInstance
   */
  update(
    params: ChallengeContextUpdateOptions,
    callback?: (error: Error | null, item?: ChallengeInstance) => any
  ): Promise<ChallengeInstance>;
  update(params?: any, callback?: any): Promise<ChallengeInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ChallengeContextSolution {
  serviceSid?: string;
  identity?: string;
  sid?: string;
}

export class ChallengeContextImpl implements ChallengeContext {
  protected _solution: ChallengeContextSolution;
  protected _uri: string;

  protected _notifications?: NotificationListInstance;

  constructor(
    protected _version: V2,
    serviceSid: string,
    identity: string,
    sid: string
  ) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(identity)) {
      throw new Error("Parameter 'identity' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { serviceSid, identity, sid };
    this._uri = `/Services/${serviceSid}/Entities/${identity}/Challenges/${sid}`;
  }

  get notifications(): NotificationListInstance {
    this._notifications =
      this._notifications ||
      NotificationListInstance(
        this._version,
        this._solution.serviceSid,
        this._solution.identity,
        this._solution.sid
      );
    return this._notifications;
  }

  fetch(callback?: any): Promise<ChallengeInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ChallengeInstance(
          operationVersion,
          payload,
          this._solution.serviceSid,
          this._solution.identity,
          this._solution.sid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<ChallengeInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["authPayload"] !== undefined)
      data["AuthPayload"] = params["authPayload"];
    if (params["metadata"] !== undefined)
      data["Metadata"] = serialize.object(params["metadata"]);

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = this._version,
      operationPromise = operationVersion.update({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ChallengeInstance(
          operationVersion,
          payload,
          this._solution.serviceSid,
          this._solution.identity,
          this._solution.sid
        )
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

interface ChallengePayload extends TwilioResponsePayload {
  challenges: ChallengeResource[];
}

interface ChallengeResource {
  sid?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  entity_sid?: string | null;
  identity?: string | null;
  factor_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  date_responded?: Date | null;
  expiration_date?: Date | null;
  status?: ChallengeChallengeStatuses;
  responded_reason?: ChallengeChallengeReasons;
  details?: any | null;
  hidden_details?: any | null;
  metadata?: any | null;
  factor_type?: ChallengeFactorTypes;
  url?: string | null;
  links?: object | null;
}

export class ChallengeInstance {
  protected _solution: ChallengeContextSolution;
  protected _context?: ChallengeContext;

  constructor(
    protected _version: V2,
    payload: ChallengeResource,
    serviceSid: string,
    identity: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.entitySid = payload.entity_sid;
    this.identity = payload.identity;
    this.factorSid = payload.factor_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.dateResponded = deserialize.iso8601DateTime(payload.date_responded);
    this.expirationDate = deserialize.iso8601DateTime(payload.expiration_date);
    this.status = payload.status;
    this.respondedReason = payload.responded_reason;
    this.details = payload.details;
    this.hiddenDetails = payload.hidden_details;
    this.metadata = payload.metadata;
    this.factorType = payload.factor_type;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { serviceSid, identity, sid: sid || this.sid };
  }

  /**
   * A string that uniquely identifies this Challenge.
   */
  sid?: string | null;
  /**
   * Account Sid.
   */
  accountSid?: string | null;
  /**
   * Service Sid.
   */
  serviceSid?: string | null;
  /**
   * Entity Sid.
   */
  entitySid?: string | null;
  /**
   * Unique external identifier of the Entity
   */
  identity?: string | null;
  /**
   * Factor Sid.
   */
  factorSid?: string | null;
  /**
   * The date this Challenge was created
   */
  dateCreated?: Date | null;
  /**
   * The date this Challenge was updated
   */
  dateUpdated?: Date | null;
  /**
   * The date this Challenge was responded
   */
  dateResponded?: Date | null;
  /**
   * The date-time when this Challenge expires
   */
  expirationDate?: Date | null;
  status?: ChallengeChallengeStatuses;
  respondedReason?: ChallengeChallengeReasons;
  /**
   * Details about the Challenge.
   */
  details?: any | null;
  /**
   * Hidden details about the Challenge
   */
  hiddenDetails?: any | null;
  /**
   * Metadata of the challenge.
   */
  metadata?: any | null;
  factorType?: ChallengeFactorTypes;
  /**
   * The URL of this resource.
   */
  url?: string | null;
  /**
   * Nested resource URLs.
   */
  links?: object | null;

  private get _proxy(): ChallengeContext {
    this._context =
      this._context ||
      new ChallengeContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.identity,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Fetch a ChallengeInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ChallengeInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ChallengeInstance) => any
  ): Promise<ChallengeInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a ChallengeInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ChallengeInstance
   */
  update(
    callback?: (error: Error | null, item?: ChallengeInstance) => any
  ): Promise<ChallengeInstance>;
  /**
   * Update a ChallengeInstance
   *
   * @param { ChallengeContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ChallengeInstance
   */
  update(
    params: ChallengeContextUpdateOptions,
    callback?: (error: Error | null, item?: ChallengeInstance) => any
  ): Promise<ChallengeInstance>;
  update(params?: any, callback?: any): Promise<ChallengeInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the notifications.
   */
  notifications(): NotificationListInstance {
    return this._proxy.notifications;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      accountSid: this.accountSid,
      serviceSid: this.serviceSid,
      entitySid: this.entitySid,
      identity: this.identity,
      factorSid: this.factorSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      dateResponded: this.dateResponded,
      expirationDate: this.expirationDate,
      status: this.status,
      respondedReason: this.respondedReason,
      details: this.details,
      hiddenDetails: this.hiddenDetails,
      metadata: this.metadata,
      factorType: this.factorType,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ChallengeListInstance {
  (sid: string): ChallengeContext;
  get(sid: string): ChallengeContext;

  /**
   * Create a ChallengeInstance
   *
   * @param { ChallengeListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ChallengeInstance
   */
  create(
    params: ChallengeListInstanceCreateOptions,
    callback?: (error: Error | null, item?: ChallengeInstance) => any
  ): Promise<ChallengeInstance>;
  create(params: any, callback?: any): Promise<ChallengeInstance>;

  /**
   * Streams ChallengeInstance records from the API.
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
    callback?: (item: ChallengeInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams ChallengeInstance records from the API.
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
   * @param { ChallengeListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: ChallengeListInstanceEachOptions,
    callback?: (item: ChallengeInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of ChallengeInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: ChallengePage) => any
  ): Promise<ChallengePage>;
  /**
   * Retrieve a single target page of ChallengeInstance records from the API.
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
    callback?: (error: Error | null, items: ChallengePage) => any
  ): Promise<ChallengePage>;
  getPage(params?: any, callback?: any): Promise<ChallengePage>;
  /**
   * Lists ChallengeInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: ChallengeInstance[]) => any
  ): Promise<ChallengeInstance[]>;
  /**
   * Lists ChallengeInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ChallengeListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: ChallengeListInstanceOptions,
    callback?: (error: Error | null, items: ChallengeInstance[]) => any
  ): Promise<ChallengeInstance[]>;
  list(params?: any, callback?: any): Promise<ChallengeInstance[]>;
  /**
   * Retrieve a single page of ChallengeInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: ChallengePage) => any
  ): Promise<ChallengePage>;
  /**
   * Retrieve a single page of ChallengeInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ChallengeListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: ChallengeListInstancePageOptions,
    callback?: (error: Error | null, items: ChallengePage) => any
  ): Promise<ChallengePage>;
  page(params?: any, callback?: any): Promise<ChallengePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ChallengeSolution {
  serviceSid?: string;
  identity?: string;
}

interface ChallengeListInstanceImpl extends ChallengeListInstance {}
class ChallengeListInstanceImpl implements ChallengeListInstance {
  _version?: V2;
  _solution?: ChallengeSolution;
  _uri?: string;
}

export function ChallengeListInstance(
  version: V2,
  serviceSid: string,
  identity: string
): ChallengeListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  if (!isValidPathParam(identity)) {
    throw new Error("Parameter 'identity' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as ChallengeListInstanceImpl;

  instance.get = function get(sid): ChallengeContext {
    return new ChallengeContextImpl(version, serviceSid, identity, sid);
  };

  instance._version = version;
  instance._solution = { serviceSid, identity };
  instance._uri = `/Services/${serviceSid}/Entities/${identity}/Challenges`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<ChallengeInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["factorSid"] === null || params["factorSid"] === undefined) {
      throw new Error("Required parameter \"params['factorSid']\" missing.");
    }

    let data: any = {};

    data["FactorSid"] = params["factorSid"];
    if (params["expirationDate"] !== undefined)
      data["ExpirationDate"] = serialize.iso8601DateTime(
        params["expirationDate"]
      );
    if (params["details.message"] !== undefined)
      data["Details.Message"] = params["details.message"];
    if (params["details.fields"] !== undefined)
      data["Details.Fields"] = serialize.map(params["details.fields"], (e) =>
        serialize.object(e)
      );
    if (params["hiddenDetails"] !== undefined)
      data["HiddenDetails"] = serialize.object(params["hiddenDetails"]);
    if (params["authPayload"] !== undefined)
      data["AuthPayload"] = params["authPayload"];

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
        new ChallengeInstance(
          operationVersion,
          payload,
          this._solution.serviceSid,
          this._solution.identity
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
  ): Promise<ChallengePage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["factorSid"] !== undefined)
      data["FactorSid"] = params["factorSid"];
    if (params["status"] !== undefined) data["Status"] = params["status"];
    if (params["order"] !== undefined) data["Order"] = params["order"];
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
      (payload) => new ChallengePage(operationVersion, payload, this._solution)
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
  ): Promise<ChallengePage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new ChallengePage(this._version, payload, this._solution)
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

export class ChallengePage extends Page<
  V2,
  ChallengePayload,
  ChallengeResource,
  ChallengeInstance
> {
  /**
   * Initialize the ChallengePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2,
    response: Response<string>,
    solution: ChallengeSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ChallengeInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ChallengeResource): ChallengeInstance {
    return new ChallengeInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.identity
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
