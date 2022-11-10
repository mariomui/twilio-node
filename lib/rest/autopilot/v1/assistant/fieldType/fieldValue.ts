/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Autopilot
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");

/**
 * Options to pass to create a FieldValueInstance
 *
 * @property { string } language The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) tag that specifies the language of the value. Currently supported tags: &#x60;en-US&#x60;
 * @property { string } value The Field Value data.
 * @property { string } [synonymOf] The string value that indicates which word the field value is a synonym of.
 */
export interface FieldValueListInstanceCreateOptions {
  language: string;
  value: string;
  synonymOf?: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [language] The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) tag that specifies the language of the value. Currently supported tags: &#x60;en-US&#x60;
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
export interface FieldValueListInstanceEachOptions {
  language?: string;
  pageSize?: number;
  callback?: (item: FieldValueInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { string } [language] The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) tag that specifies the language of the value. Currently supported tags: &#x60;en-US&#x60;
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface FieldValueListInstanceOptions {
  language?: string;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { string } [language] The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) tag that specifies the language of the value. Currently supported tags: &#x60;en-US&#x60;
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface FieldValueListInstancePageOptions {
  language?: string;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface FieldValueContext {
  /**
   * Remove a FieldValueInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a FieldValueInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FieldValueInstance
   */
  fetch(
    callback?: (error: Error | null, item?: FieldValueInstance) => any
  ): Promise<FieldValueInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface FieldValueContextSolution {
  assistantSid?: string;
  fieldTypeSid?: string;
  sid?: string;
}

export class FieldValueContextImpl implements FieldValueContext {
  protected _solution: FieldValueContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V1,
    assistantSid: string,
    fieldTypeSid: string,
    sid: string
  ) {
    this._solution = { assistantSid, fieldTypeSid, sid };
    this._uri = `/Assistants/${assistantSid}/FieldTypes/${fieldTypeSid}/FieldValues/${sid}`;
  }

  remove(callback?: any): Promise<boolean> {
    let operationVersion = this._version,
      operationPromise = operationVersion.remove({
        uri: this._uri,
        method: "delete",
      });

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(callback?: any): Promise<FieldValueInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new FieldValueInstance(
          operationVersion,
          payload,
          this._solution.assistantSid,
          this._solution.fieldTypeSid,
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

interface FieldValuePayload
  extends FieldValueResource,
    Page.TwilioResponsePayload {}

interface FieldValueResource {
  account_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  field_type_sid?: string | null;
  language?: string | null;
  assistant_sid?: string | null;
  sid?: string | null;
  value?: string | null;
  url?: string | null;
  synonym_of?: string | null;
}

export class FieldValueInstance {
  protected _solution: FieldValueContextSolution;
  protected _context?: FieldValueContext;

  constructor(
    protected _version: V1,
    payload: FieldValuePayload,
    assistantSid: string,
    fieldTypeSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.fieldTypeSid = payload.field_type_sid;
    this.language = payload.language;
    this.assistantSid = payload.assistant_sid;
    this.sid = payload.sid;
    this.value = payload.value;
    this.url = payload.url;
    this.synonymOf = payload.synonym_of;

    this._solution = { assistantSid, fieldTypeSid, sid: sid || this.sid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The SID of the Field Type associated with the Field Value
   */
  fieldTypeSid?: string | null;
  /**
   * The ISO language-country tag that identifies the language of the value
   */
  language?: string | null;
  /**
   * The SID of the Assistant that is the parent of the FieldType associated with the resource
   */
  assistantSid?: string | null;
  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The Field Value data
   */
  value?: string | null;
  /**
   * The absolute URL of the FieldValue resource
   */
  url?: string | null;
  /**
   * The word for which the field value is a synonym of
   */
  synonymOf?: string | null;

  private get _proxy(): FieldValueContext {
    this._context =
      this._context ||
      new FieldValueContextImpl(
        this._version,
        this._solution.assistantSid,
        this._solution.fieldTypeSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a FieldValueInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a FieldValueInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FieldValueInstance
   */
  fetch(
    callback?: (error: Error | null, item?: FieldValueInstance) => any
  ): Promise<FieldValueInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      fieldTypeSid: this.fieldTypeSid,
      language: this.language,
      assistantSid: this.assistantSid,
      sid: this.sid,
      value: this.value,
      url: this.url,
      synonymOf: this.synonymOf,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface FieldValueListInstance {
  (sid: string): FieldValueContext;
  get(sid: string): FieldValueContext;

  /**
   * Create a FieldValueInstance
   *
   * @param { FieldValueListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FieldValueInstance
   */
  create(
    params: FieldValueListInstanceCreateOptions,
    callback?: (error: Error | null, item?: FieldValueInstance) => any
  ): Promise<FieldValueInstance>;
  create(params: any, callback?: any): Promise<FieldValueInstance>;

  /**
   * Streams FieldValueInstance records from the API.
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
    callback?: (item: FieldValueInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams FieldValueInstance records from the API.
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
   * @param { FieldValueListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: FieldValueListInstanceEachOptions,
    callback?: (item: FieldValueInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of FieldValueInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: FieldValuePage) => any
  ): Promise<FieldValuePage>;
  /**
   * Retrieve a single target page of FieldValueInstance records from the API.
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
    callback?: (error: Error | null, items: FieldValuePage) => any
  ): Promise<FieldValuePage>;
  getPage(params?: any, callback?: any): Promise<FieldValuePage>;
  /**
   * Lists FieldValueInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: FieldValueInstance[]) => any
  ): Promise<FieldValueInstance[]>;
  /**
   * Lists FieldValueInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FieldValueListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: FieldValueListInstanceOptions,
    callback?: (error: Error | null, items: FieldValueInstance[]) => any
  ): Promise<FieldValueInstance[]>;
  list(params?: any, callback?: any): Promise<FieldValueInstance[]>;
  /**
   * Retrieve a single page of FieldValueInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: FieldValuePage) => any
  ): Promise<FieldValuePage>;
  /**
   * Retrieve a single page of FieldValueInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FieldValueListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: FieldValueListInstancePageOptions,
    callback?: (error: Error | null, items: FieldValuePage) => any
  ): Promise<FieldValuePage>;
  page(params?: any, callback?: any): Promise<FieldValuePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface FieldValueSolution {
  assistantSid?: string;
  fieldTypeSid?: string;
}

interface FieldValueListInstanceImpl extends FieldValueListInstance {}
class FieldValueListInstanceImpl implements FieldValueListInstance {
  _version?: V1;
  _solution?: FieldValueSolution;
  _uri?: string;
}

export function FieldValueListInstance(
  version: V1,
  assistantSid: string,
  fieldTypeSid: string
): FieldValueListInstance {
  const instance = ((sid) => instance.get(sid)) as FieldValueListInstanceImpl;

  instance.get = function get(sid): FieldValueContext {
    return new FieldValueContextImpl(version, assistantSid, fieldTypeSid, sid);
  };

  instance._version = version;
  instance._solution = { assistantSid, fieldTypeSid };
  instance._uri = `/Assistants/${assistantSid}/FieldTypes/${fieldTypeSid}/FieldValues`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<FieldValueInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["language"] === null || params["language"] === undefined) {
      throw new Error("Required parameter \"params['language']\" missing.");
    }

    if (params["value"] === null || params["value"] === undefined) {
      throw new Error("Required parameter \"params['value']\" missing.");
    }

    let data: any = {};

    data["Language"] = params["language"];

    data["Value"] = params["value"];
    if (params["synonymOf"] !== undefined)
      data["SynonymOf"] = params["synonymOf"];

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
        new FieldValueInstance(
          operationVersion,
          payload,
          this._solution.assistantSid,
          this._solution.fieldTypeSid
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
  ): Promise<FieldValuePage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["language"] !== undefined) data["Language"] = params["language"];
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
      (payload) => new FieldValuePage(operationVersion, payload, this._solution)
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
  ): Promise<FieldValuePage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new FieldValuePage(this._version, payload, this._solution)
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

export class FieldValuePage extends Page<
  V1,
  FieldValuePayload,
  FieldValueResource,
  FieldValueInstance
> {
  /**
   * Initialize the FieldValuePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: FieldValueSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of FieldValueInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FieldValuePayload): FieldValueInstance {
    return new FieldValueInstance(
      this._version,
      payload,
      this._solution.assistantSid,
      this._solution.fieldTypeSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}