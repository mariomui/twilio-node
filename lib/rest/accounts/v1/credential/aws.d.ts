/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { SerializableClass } from '../../../../interfaces';

/**
 * Initialize the AwsList
 *
 * @param version - Version of the resource
 */
declare function AwsList(version: V1): AwsListInstance;

/**
 * Options to pass to update
 *
 * @property friendlyName - A string to describe the resource
 */
interface AwsInstanceUpdateOptions {
  friendlyName?: string;
}

interface AwsListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): AwsContext;
  /**
   * create a AwsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: AwsListInstanceCreateOptions, callback?: (error: Error | null, item: AwsInstance) => any): Promise<AwsInstance>;
  /**
   * Streams AwsInstance records from the API.
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
  each(opts?: AwsListInstanceEachOptions, callback?: (item: AwsInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a aws
   *
   * @param sid - The unique string that identifies the resource
   */
  get(sid: string): AwsContext;
  /**
   * Retrieve a single target page of AwsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: AwsPage) => any): Promise<AwsPage>;
  /**
   * Lists AwsInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: AwsListInstanceOptions, callback?: (error: Error | null, items: AwsInstance[]) => any): Promise<AwsInstance[]>;
  /**
   * Retrieve a single page of AwsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: AwsListInstancePageOptions, callback?: (error: Error | null, items: AwsPage) => any): Promise<AwsPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property accountSid - The Subaccount this Credential should be associated with.
 * @property credentials - A string that contains the AWS access credentials in the format <AWS_ACCESS_KEY_ID>:<AWS_SECRET_ACCESS_KEY>
 * @property friendlyName - A string to describe the resource
 */
interface AwsListInstanceCreateOptions {
  accountSid?: string;
  credentials: string;
  friendlyName?: string;
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
interface AwsListInstanceEachOptions {
  callback?: (item: AwsInstance, done: (err?: Error) => void) => void;
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
interface AwsListInstanceOptions {
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
interface AwsListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface AwsPayload extends AwsResource, Page.TwilioResponsePayload {
}

interface AwsResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  sid: string;
  url: string;
}

interface AwsSolution {
}


declare class AwsContext {
  /**
   * Initialize the AwsContext
   *
   * @param version - Version of the resource
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V1, sid: string);

  /**
   * fetch a AwsInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AwsInstance) => any): Promise<AwsInstance>;
  /**
   * remove a AwsInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: AwsInstance) => any): void;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a AwsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: AwsInstanceUpdateOptions, callback?: (error: Error | null, items: AwsInstance) => any): Promise<AwsInstance>;
}


declare class AwsInstance extends SerializableClass {
  /**
   * Initialize the AwsContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V1, payload: AwsPayload, sid: string);

  private _proxy: AwsContext;
  accountSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a AwsInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AwsInstance) => any): void;
  friendlyName: string;
  /**
   * remove a AwsInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: AwsInstance) => any): void;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a AwsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: AwsInstanceUpdateOptions, callback?: (error: Error | null, items: AwsInstance) => any): void;
  url: string;
}


declare class AwsPage extends Page<V1, AwsPayload, AwsResource, AwsInstance> {
  /**
   * Initialize the AwsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: AwsSolution);

  /**
   * Build an instance of AwsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AwsPayload): AwsInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { AwsContext, AwsInstance, AwsList, AwsListInstance, AwsListInstanceCreateOptions, AwsListInstanceEachOptions, AwsListInstanceOptions, AwsListInstancePageOptions, AwsPage, AwsPayload, AwsResource, AwsSolution }
