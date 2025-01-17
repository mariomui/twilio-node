/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2 = require('../../V2');
import { SerializableClass } from '../../../../interfaces';

type WebhookMethods = 'GET'|'POST';

type WebhookStatus = 'enabled'|'disabled';

type WebhookVersion = 'v1'|'v2';

/**
 * Initialize the WebhookList
 *
 * @param version - Version of the resource
 * @param serviceSid - Service Sid.
 */
declare function WebhookList(version: V2, serviceSid: string): WebhookListInstance;

/**
 * Options to pass to update
 *
 * @property eventTypes - The array of events that this Webhook is subscribed to.
 * @property friendlyName - The string that you assigned to describe the webhook
 * @property status - The webhook status
 * @property version - The webhook version
 * @property webhookUrl - The URL associated with this Webhook.
 */
interface WebhookInstanceUpdateOptions {
  eventTypes?: string | string[];
  friendlyName?: string;
  status?: WebhookStatus;
  version?: WebhookVersion;
  webhookUrl?: string;
}

interface WebhookListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): WebhookContext;
  /**
   * create a WebhookInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: WebhookListInstanceCreateOptions, callback?: (error: Error | null, item: WebhookInstance) => any): Promise<WebhookInstance>;
  /**
   * Streams WebhookInstance records from the API.
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
   * @param callback - Function to process each record
   */
  each(callback?: (item: WebhookInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams WebhookInstance records from the API.
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
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: WebhookListInstanceEachOptions, callback?: (item: WebhookInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a webhook
   *
   * @param sid - The unique string that identifies the resource to fetch
   */
  get(sid: string): WebhookContext;
  /**
   * Retrieve a single target page of WebhookInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: WebhookPage) => any): Promise<WebhookPage>;
  /**
   * Retrieve a single target page of WebhookInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: WebhookPage) => any): Promise<WebhookPage>;
  /**
   * Lists WebhookInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: WebhookInstance[]) => any): Promise<WebhookInstance[]>;
  /**
   * Lists WebhookInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: WebhookListInstanceOptions, callback?: (error: Error | null, items: WebhookInstance[]) => any): Promise<WebhookInstance[]>;
  /**
   * Retrieve a single page of WebhookInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: WebhookPage) => any): Promise<WebhookPage>;
  /**
   * Retrieve a single page of WebhookInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: WebhookListInstancePageOptions, callback?: (error: Error | null, items: WebhookPage) => any): Promise<WebhookPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property eventTypes - The array of events that this Webhook is subscribed to.
 * @property friendlyName - The string that you assigned to describe the webhook
 * @property status - The webhook status
 * @property version - The webhook version
 * @property webhookUrl - The URL associated with this Webhook.
 */
interface WebhookListInstanceCreateOptions {
  eventTypes: string | string[];
  friendlyName: string;
  status?: WebhookStatus;
  version?: WebhookVersion;
  webhookUrl: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface WebhookListInstanceEachOptions {
  callback?: (item: WebhookInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface WebhookListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface WebhookListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface WebhookPayload extends WebhookResource, Page.TwilioResponsePayload {
}

interface WebhookResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  event_types: string[];
  friendly_name: string;
  service_sid: string;
  sid: string;
  status: WebhookStatus;
  url: string;
  version: WebhookVersion;
  webhook_method: WebhookMethods;
  webhook_url: string;
}

interface WebhookSolution {
  serviceSid?: string;
}


declare class WebhookContext {
  /**
   * Initialize the WebhookContext
   *
   * @param version - Version of the resource
   * @param serviceSid - Service Sid.
   * @param sid - The unique string that identifies the resource to fetch
   */
  constructor(version: V2, serviceSid: string, sid: string);

  /**
   * fetch a WebhookInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: WebhookInstance) => any): Promise<WebhookInstance>;
  /**
   * remove a WebhookInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: WebhookInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a WebhookInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: WebhookInstance) => any): Promise<WebhookInstance>;
  /**
   * update a WebhookInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: WebhookInstanceUpdateOptions, callback?: (error: Error | null, items: WebhookInstance) => any): Promise<WebhookInstance>;
}


declare class WebhookInstance extends SerializableClass {
  /**
   * Initialize the WebhookContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Sid.
   * @param sid - The unique string that identifies the resource to fetch
   */
  constructor(version: V2, payload: WebhookPayload, serviceSid: string, sid: string);

  private _proxy: WebhookContext;
  accountSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  eventTypes: string[];
  /**
   * fetch a WebhookInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: WebhookInstance) => any): Promise<WebhookInstance>;
  friendlyName: string;
  /**
   * remove a WebhookInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: WebhookInstance) => any): Promise<boolean>;
  serviceSid: string;
  sid: string;
  status: WebhookStatus;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a WebhookInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: WebhookInstance) => any): Promise<WebhookInstance>;
  /**
   * update a WebhookInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: WebhookInstanceUpdateOptions, callback?: (error: Error | null, items: WebhookInstance) => any): Promise<WebhookInstance>;
  url: string;
  version: WebhookVersion;
  webhookMethod: WebhookMethods;
  webhookUrl: string;
}


declare class WebhookPage extends Page<V2, WebhookPayload, WebhookResource, WebhookInstance> {
  /**
   * Initialize the WebhookPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2, response: Response<string>, solution: WebhookSolution);

  /**
   * Build an instance of WebhookInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: WebhookPayload): WebhookInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { WebhookContext, WebhookInstance, WebhookInstanceUpdateOptions, WebhookList, WebhookListInstance, WebhookListInstanceCreateOptions, WebhookListInstanceEachOptions, WebhookListInstanceOptions, WebhookListInstancePageOptions, WebhookMethods, WebhookPage, WebhookPayload, WebhookResource, WebhookSolution, WebhookStatus, WebhookVersion }
