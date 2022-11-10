/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Studio
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
import { ExecutionStepContextListInstance } from "./executionStep/executionStepContext";

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
export interface ExecutionStepListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: ExecutionStepInstance, done: (err?: Error) => void) => void;
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
export interface ExecutionStepListInstanceOptions {
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
export interface ExecutionStepListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface ExecutionStepContext {
  stepContext: ExecutionStepContextListInstance;

  /**
   * Fetch a ExecutionStepInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ExecutionStepInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ExecutionStepInstance) => any
  ): Promise<ExecutionStepInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ExecutionStepContextSolution {
  flowSid?: string;
  executionSid?: string;
  sid?: string;
}

export class ExecutionStepContextImpl implements ExecutionStepContext {
  protected _solution: ExecutionStepContextSolution;
  protected _uri: string;

  protected _stepContext?: ExecutionStepContextListInstance;

  constructor(
    protected _version: V2,
    flowSid: string,
    executionSid: string,
    sid: string
  ) {
    this._solution = { flowSid, executionSid, sid };
    this._uri = `/Flows/${flowSid}/Executions/${executionSid}/Steps/${sid}`;
  }

  get stepContext(): ExecutionStepContextListInstance {
    this._stepContext =
      this._stepContext ||
      ExecutionStepContextListInstance(
        this._version,
        this._solution.flowSid,
        this._solution.executionSid,
        this._solution.sid
      );
    return this._stepContext;
  }

  fetch(callback?: any): Promise<ExecutionStepInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ExecutionStepInstance(
          operationVersion,
          payload,
          this._solution.flowSid,
          this._solution.executionSid,
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

interface ExecutionStepPayload
  extends ExecutionStepResource,
    Page.TwilioResponsePayload {}

interface ExecutionStepResource {
  sid?: string | null;
  account_sid?: string | null;
  flow_sid?: string | null;
  execution_sid?: string | null;
  name?: string | null;
  context?: any | null;
  transitioned_from?: string | null;
  transitioned_to?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
  links?: object | null;
}

export class ExecutionStepInstance {
  protected _solution: ExecutionStepContextSolution;
  protected _context?: ExecutionStepContext;

  constructor(
    protected _version: V2,
    payload: ExecutionStepPayload,
    flowSid: string,
    executionSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.flowSid = payload.flow_sid;
    this.executionSid = payload.execution_sid;
    this.name = payload.name;
    this.context = payload.context;
    this.transitionedFrom = payload.transitioned_from;
    this.transitionedTo = payload.transitioned_to;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { flowSid, executionSid, sid: sid || this.sid };
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
   * The SID of the Flow
   */
  flowSid?: string | null;
  /**
   * The SID of the Execution
   */
  executionSid?: string | null;
  /**
   * The event that caused the Flow to transition to the Step
   */
  name?: string | null;
  /**
   * The current state of the flow
   */
  context?: any | null;
  /**
   * The Widget that preceded the Widget for the Step
   */
  transitionedFrom?: string | null;
  /**
   * The Widget that will follow the Widget for the Step
   */
  transitionedTo?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The absolute URL of the resource
   */
  url?: string | null;
  /**
   * The URLs of related resources
   */
  links?: object | null;

  private get _proxy(): ExecutionStepContext {
    this._context =
      this._context ||
      new ExecutionStepContextImpl(
        this._version,
        this._solution.flowSid,
        this._solution.executionSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Fetch a ExecutionStepInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ExecutionStepInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ExecutionStepInstance) => any
  ): Promise<ExecutionStepInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Access the stepContext.
   */
  stepContext(): ExecutionStepContextListInstance {
    return this._proxy.stepContext;
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
      flowSid: this.flowSid,
      executionSid: this.executionSid,
      name: this.name,
      context: this.context,
      transitionedFrom: this.transitionedFrom,
      transitionedTo: this.transitionedTo,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ExecutionStepListInstance {
  (sid: string): ExecutionStepContext;
  get(sid: string): ExecutionStepContext;

  /**
   * Streams ExecutionStepInstance records from the API.
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
    callback?: (
      item: ExecutionStepInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Streams ExecutionStepInstance records from the API.
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
   * @param { ExecutionStepListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: ExecutionStepListInstanceEachOptions,
    callback?: (
      item: ExecutionStepInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of ExecutionStepInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: ExecutionStepPage) => any
  ): Promise<ExecutionStepPage>;
  /**
   * Retrieve a single target page of ExecutionStepInstance records from the API.
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
    callback?: (error: Error | null, items: ExecutionStepPage) => any
  ): Promise<ExecutionStepPage>;
  getPage(params?: any, callback?: any): Promise<ExecutionStepPage>;
  /**
   * Lists ExecutionStepInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: ExecutionStepInstance[]) => any
  ): Promise<ExecutionStepInstance[]>;
  /**
   * Lists ExecutionStepInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ExecutionStepListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: ExecutionStepListInstanceOptions,
    callback?: (error: Error | null, items: ExecutionStepInstance[]) => any
  ): Promise<ExecutionStepInstance[]>;
  list(params?: any, callback?: any): Promise<ExecutionStepInstance[]>;
  /**
   * Retrieve a single page of ExecutionStepInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: ExecutionStepPage) => any
  ): Promise<ExecutionStepPage>;
  /**
   * Retrieve a single page of ExecutionStepInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ExecutionStepListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: ExecutionStepListInstancePageOptions,
    callback?: (error: Error | null, items: ExecutionStepPage) => any
  ): Promise<ExecutionStepPage>;
  page(params?: any, callback?: any): Promise<ExecutionStepPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ExecutionStepSolution {
  flowSid?: string;
  executionSid?: string;
}

interface ExecutionStepListInstanceImpl extends ExecutionStepListInstance {}
class ExecutionStepListInstanceImpl implements ExecutionStepListInstance {
  _version?: V2;
  _solution?: ExecutionStepSolution;
  _uri?: string;
}

export function ExecutionStepListInstance(
  version: V2,
  flowSid: string,
  executionSid: string
): ExecutionStepListInstance {
  const instance = ((sid) =>
    instance.get(sid)) as ExecutionStepListInstanceImpl;

  instance.get = function get(sid): ExecutionStepContext {
    return new ExecutionStepContextImpl(version, flowSid, executionSid, sid);
  };

  instance._version = version;
  instance._solution = { flowSid, executionSid };
  instance._uri = `/Flows/${flowSid}/Executions/${executionSid}/Steps`;

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<ExecutionStepPage> {
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
      (payload) =>
        new ExecutionStepPage(operationVersion, payload, this._solution)
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
  ): Promise<ExecutionStepPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new ExecutionStepPage(this._version, payload, this._solution)
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

export class ExecutionStepPage extends Page<
  V2,
  ExecutionStepPayload,
  ExecutionStepResource,
  ExecutionStepInstance
> {
  /**
   * Initialize the ExecutionStepPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2,
    response: Response<string>,
    solution: ExecutionStepSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ExecutionStepInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ExecutionStepPayload): ExecutionStepInstance {
    return new ExecutionStepInstance(
      this._version,
      payload,
      this._solution.flowSid,
      this._solution.executionSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}