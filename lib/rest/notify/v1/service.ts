/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Notify
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { BindingListInstance } from "./service/binding";
import { NotificationListInstance } from "./service/notification";

/**
 * Options to pass to update a ServiceInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It can be up to 64 characters long.
 * @property { string } [apnCredentialSid] The SID of the [Credential](https://www.twilio.com/docs/notify/api/credential-resource) to use for APN Bindings.
 * @property { string } [gcmCredentialSid] The SID of the [Credential](https://www.twilio.com/docs/notify/api/credential-resource) to use for GCM Bindings.
 * @property { string } [messagingServiceSid] The SID of the [Messaging Service](https://www.twilio.com/docs/sms/send-messages#messaging-services) to use for SMS Bindings. This parameter must be set in order to send SMS notifications.
 * @property { string } [facebookMessengerPageId] Deprecated.
 * @property { string } [defaultApnNotificationProtocolVersion] The protocol version to use for sending APNS notifications. Can be overridden on a Binding by Binding basis when creating a [Binding](https://www.twilio.com/docs/notify/api/binding-resource) resource.
 * @property { string } [defaultGcmNotificationProtocolVersion] The protocol version to use for sending GCM notifications. Can be overridden on a Binding by Binding basis when creating a [Binding](https://www.twilio.com/docs/notify/api/binding-resource) resource.
 * @property { string } [fcmCredentialSid] The SID of the [Credential](https://www.twilio.com/docs/notify/api/credential-resource) to use for FCM Bindings.
 * @property { string } [defaultFcmNotificationProtocolVersion] The protocol version to use for sending FCM notifications. Can be overridden on a Binding by Binding basis when creating a [Binding](https://www.twilio.com/docs/notify/api/binding-resource) resource.
 * @property { boolean } [logEnabled] Whether to log notifications. Can be: &#x60;true&#x60; or &#x60;false&#x60; and the default is &#x60;true&#x60;.
 * @property { string } [alexaSkillId] Deprecated.
 * @property { string } [defaultAlexaNotificationProtocolVersion] Deprecated.
 * @property { string } [deliveryCallbackUrl] URL to send delivery status callback.
 * @property { boolean } [deliveryCallbackEnabled] Callback configuration that enables delivery callbacks, default false
 */
export interface ServiceContextUpdateOptions {
  friendlyName?: string;
  apnCredentialSid?: string;
  gcmCredentialSid?: string;
  messagingServiceSid?: string;
  facebookMessengerPageId?: string;
  defaultApnNotificationProtocolVersion?: string;
  defaultGcmNotificationProtocolVersion?: string;
  fcmCredentialSid?: string;
  defaultFcmNotificationProtocolVersion?: string;
  logEnabled?: boolean;
  alexaSkillId?: string;
  defaultAlexaNotificationProtocolVersion?: string;
  deliveryCallbackUrl?: string;
  deliveryCallbackEnabled?: boolean;
}

/**
 * Options to pass to create a ServiceInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It can be up to 64 characters long.
 * @property { string } [apnCredentialSid] The SID of the [Credential](https://www.twilio.com/docs/notify/api/credential-resource) to use for APN Bindings.
 * @property { string } [gcmCredentialSid] The SID of the [Credential](https://www.twilio.com/docs/notify/api/credential-resource) to use for GCM Bindings.
 * @property { string } [messagingServiceSid] The SID of the [Messaging Service](https://www.twilio.com/docs/sms/send-messages#messaging-services) to use for SMS Bindings. This parameter must be set in order to send SMS notifications.
 * @property { string } [facebookMessengerPageId] Deprecated.
 * @property { string } [defaultApnNotificationProtocolVersion] The protocol version to use for sending APNS notifications. Can be overridden on a Binding by Binding basis when creating a [Binding](https://www.twilio.com/docs/notify/api/binding-resource) resource.
 * @property { string } [defaultGcmNotificationProtocolVersion] The protocol version to use for sending GCM notifications. Can be overridden on a Binding by Binding basis when creating a [Binding](https://www.twilio.com/docs/notify/api/binding-resource) resource.
 * @property { string } [fcmCredentialSid] The SID of the [Credential](https://www.twilio.com/docs/notify/api/credential-resource) to use for FCM Bindings.
 * @property { string } [defaultFcmNotificationProtocolVersion] The protocol version to use for sending FCM notifications. Can be overridden on a Binding by Binding basis when creating a [Binding](https://www.twilio.com/docs/notify/api/binding-resource) resource.
 * @property { boolean } [logEnabled] Whether to log notifications. Can be: &#x60;true&#x60; or &#x60;false&#x60; and the default is &#x60;true&#x60;.
 * @property { string } [alexaSkillId] Deprecated.
 * @property { string } [defaultAlexaNotificationProtocolVersion] Deprecated.
 * @property { string } [deliveryCallbackUrl] URL to send delivery status callback.
 * @property { boolean } [deliveryCallbackEnabled] Callback configuration that enables delivery callbacks, default false
 */
export interface ServiceListInstanceCreateOptions {
  friendlyName?: string;
  apnCredentialSid?: string;
  gcmCredentialSid?: string;
  messagingServiceSid?: string;
  facebookMessengerPageId?: string;
  defaultApnNotificationProtocolVersion?: string;
  defaultGcmNotificationProtocolVersion?: string;
  fcmCredentialSid?: string;
  defaultFcmNotificationProtocolVersion?: string;
  logEnabled?: boolean;
  alexaSkillId?: string;
  defaultAlexaNotificationProtocolVersion?: string;
  deliveryCallbackUrl?: string;
  deliveryCallbackEnabled?: boolean;
}
/**
 * Options to pass to each
 *
 * @property { string } [friendlyName] The string that identifies the Service resources to read.
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
export interface ServiceListInstanceEachOptions {
  friendlyName?: string;
  pageSize?: number;
  callback?: (item: ServiceInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { string } [friendlyName] The string that identifies the Service resources to read.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface ServiceListInstanceOptions {
  friendlyName?: string;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { string } [friendlyName] The string that identifies the Service resources to read.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface ServiceListInstancePageOptions {
  friendlyName?: string;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface ServiceContext {
  bindings: BindingListInstance;
  notifications: NotificationListInstance;

  /**
   * Remove a ServiceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a ServiceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ServiceInstance) => any
  ): Promise<ServiceInstance>;

  /**
   * Update a ServiceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  update(
    callback?: (error: Error | null, item?: ServiceInstance) => any
  ): Promise<ServiceInstance>;
  /**
   * Update a ServiceInstance
   *
   * @param { ServiceContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  update(
    params: ServiceContextUpdateOptions,
    callback?: (error: Error | null, item?: ServiceInstance) => any
  ): Promise<ServiceInstance>;
  update(params?: any, callback?: any): Promise<ServiceInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ServiceContextSolution {
  sid?: string;
}

export class ServiceContextImpl implements ServiceContext {
  protected _solution: ServiceContextSolution;
  protected _uri: string;

  protected _bindings?: BindingListInstance;
  protected _notifications?: NotificationListInstance;

  constructor(protected _version: V1, sid: string) {
    this._solution = { sid };
    this._uri = `/Services/${sid}`;
  }

  get bindings(): BindingListInstance {
    this._bindings =
      this._bindings || BindingListInstance(this._version, this._solution.sid);
    return this._bindings;
  }

  get notifications(): NotificationListInstance {
    this._notifications =
      this._notifications ||
      NotificationListInstance(this._version, this._solution.sid);
    return this._notifications;
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

  fetch(callback?: any): Promise<ServiceInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ServiceInstance(operationVersion, payload, this._solution.sid)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<ServiceInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["apnCredentialSid"] !== undefined)
      data["ApnCredentialSid"] = params["apnCredentialSid"];
    if (params["gcmCredentialSid"] !== undefined)
      data["GcmCredentialSid"] = params["gcmCredentialSid"];
    if (params["messagingServiceSid"] !== undefined)
      data["MessagingServiceSid"] = params["messagingServiceSid"];
    if (params["facebookMessengerPageId"] !== undefined)
      data["FacebookMessengerPageId"] = params["facebookMessengerPageId"];
    if (params["defaultApnNotificationProtocolVersion"] !== undefined)
      data["DefaultApnNotificationProtocolVersion"] =
        params["defaultApnNotificationProtocolVersion"];
    if (params["defaultGcmNotificationProtocolVersion"] !== undefined)
      data["DefaultGcmNotificationProtocolVersion"] =
        params["defaultGcmNotificationProtocolVersion"];
    if (params["fcmCredentialSid"] !== undefined)
      data["FcmCredentialSid"] = params["fcmCredentialSid"];
    if (params["defaultFcmNotificationProtocolVersion"] !== undefined)
      data["DefaultFcmNotificationProtocolVersion"] =
        params["defaultFcmNotificationProtocolVersion"];
    if (params["logEnabled"] !== undefined)
      data["LogEnabled"] = serialize.bool(params["logEnabled"]);
    if (params["alexaSkillId"] !== undefined)
      data["AlexaSkillId"] = params["alexaSkillId"];
    if (params["defaultAlexaNotificationProtocolVersion"] !== undefined)
      data["DefaultAlexaNotificationProtocolVersion"] =
        params["defaultAlexaNotificationProtocolVersion"];
    if (params["deliveryCallbackUrl"] !== undefined)
      data["DeliveryCallbackUrl"] = params["deliveryCallbackUrl"];
    if (params["deliveryCallbackEnabled"] !== undefined)
      data["DeliveryCallbackEnabled"] = serialize.bool(
        params["deliveryCallbackEnabled"]
      );

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
        new ServiceInstance(operationVersion, payload, this._solution.sid)
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

interface ServicePayload extends ServiceResource, Page.TwilioResponsePayload {}

interface ServiceResource {
  sid?: string | null;
  account_sid?: string | null;
  friendly_name?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  apn_credential_sid?: string | null;
  gcm_credential_sid?: string | null;
  fcm_credential_sid?: string | null;
  messaging_service_sid?: string | null;
  facebook_messenger_page_id?: string | null;
  default_apn_notification_protocol_version?: string | null;
  default_gcm_notification_protocol_version?: string | null;
  default_fcm_notification_protocol_version?: string | null;
  log_enabled?: boolean | null;
  url?: string | null;
  links?: object | null;
  alexa_skill_id?: string | null;
  default_alexa_notification_protocol_version?: string | null;
  delivery_callback_url?: string | null;
  delivery_callback_enabled?: boolean | null;
}

export class ServiceInstance {
  protected _solution: ServiceContextSolution;
  protected _context?: ServiceContext;

  constructor(protected _version: V1, payload: ServicePayload, sid?: string) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.friendlyName = payload.friendly_name;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.apnCredentialSid = payload.apn_credential_sid;
    this.gcmCredentialSid = payload.gcm_credential_sid;
    this.fcmCredentialSid = payload.fcm_credential_sid;
    this.messagingServiceSid = payload.messaging_service_sid;
    this.facebookMessengerPageId = payload.facebook_messenger_page_id;
    this.defaultApnNotificationProtocolVersion =
      payload.default_apn_notification_protocol_version;
    this.defaultGcmNotificationProtocolVersion =
      payload.default_gcm_notification_protocol_version;
    this.defaultFcmNotificationProtocolVersion =
      payload.default_fcm_notification_protocol_version;
    this.logEnabled = payload.log_enabled;
    this.url = payload.url;
    this.links = payload.links;
    this.alexaSkillId = payload.alexa_skill_id;
    this.defaultAlexaNotificationProtocolVersion =
      payload.default_alexa_notification_protocol_version;
    this.deliveryCallbackUrl = payload.delivery_callback_url;
    this.deliveryCallbackEnabled = payload.delivery_callback_enabled;

    this._solution = { sid: sid || this.sid };
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
   * The string that you assigned to describe the resource
   */
  friendlyName?: string | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The SID of the Credential to use for APN Bindings
   */
  apnCredentialSid?: string | null;
  /**
   * The SID of the Credential to use for GCM Bindings
   */
  gcmCredentialSid?: string | null;
  /**
   * The SID of the Credential to use for FCM Bindings
   */
  fcmCredentialSid?: string | null;
  /**
   * The SID of the Messaging Service to use for SMS Bindings
   */
  messagingServiceSid?: string | null;
  /**
   * Deprecated
   */
  facebookMessengerPageId?: string | null;
  /**
   * The protocol version to use for sending APNS notifications
   */
  defaultApnNotificationProtocolVersion?: string | null;
  /**
   * The protocol version to use for sending GCM notifications
   */
  defaultGcmNotificationProtocolVersion?: string | null;
  /**
   * The protocol version to use for sending FCM notifications
   */
  defaultFcmNotificationProtocolVersion?: string | null;
  /**
   * Whether to log notifications
   */
  logEnabled?: boolean | null;
  /**
   * The absolute URL of the Service resource
   */
  url?: string | null;
  /**
   * The URLs of the resources related to the service
   */
  links?: object | null;
  /**
   * Deprecated
   */
  alexaSkillId?: string | null;
  /**
   * Deprecated
   */
  defaultAlexaNotificationProtocolVersion?: string | null;
  /**
   * Webhook URL
   */
  deliveryCallbackUrl?: string | null;
  /**
   * Enable delivery callbacks
   */
  deliveryCallbackEnabled?: boolean | null;

  private get _proxy(): ServiceContext {
    this._context =
      this._context ||
      new ServiceContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a ServiceInstance
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
   * Fetch a ServiceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ServiceInstance) => any
  ): Promise<ServiceInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a ServiceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  update(
    callback?: (error: Error | null, item?: ServiceInstance) => any
  ): Promise<ServiceInstance>;
  /**
   * Update a ServiceInstance
   *
   * @param { ServiceContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  update(
    params: ServiceContextUpdateOptions,
    callback?: (error: Error | null, item?: ServiceInstance) => any
  ): Promise<ServiceInstance>;
  update(params?: any, callback?: any): Promise<ServiceInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the bindings.
   */
  bindings(): BindingListInstance {
    return this._proxy.bindings;
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
      friendlyName: this.friendlyName,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      apnCredentialSid: this.apnCredentialSid,
      gcmCredentialSid: this.gcmCredentialSid,
      fcmCredentialSid: this.fcmCredentialSid,
      messagingServiceSid: this.messagingServiceSid,
      facebookMessengerPageId: this.facebookMessengerPageId,
      defaultApnNotificationProtocolVersion:
        this.defaultApnNotificationProtocolVersion,
      defaultGcmNotificationProtocolVersion:
        this.defaultGcmNotificationProtocolVersion,
      defaultFcmNotificationProtocolVersion:
        this.defaultFcmNotificationProtocolVersion,
      logEnabled: this.logEnabled,
      url: this.url,
      links: this.links,
      alexaSkillId: this.alexaSkillId,
      defaultAlexaNotificationProtocolVersion:
        this.defaultAlexaNotificationProtocolVersion,
      deliveryCallbackUrl: this.deliveryCallbackUrl,
      deliveryCallbackEnabled: this.deliveryCallbackEnabled,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ServiceListInstance {
  (sid: string): ServiceContext;
  get(sid: string): ServiceContext;

  /**
   * Create a ServiceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  create(
    callback?: (error: Error | null, item?: ServiceInstance) => any
  ): Promise<ServiceInstance>;
  /**
   * Create a ServiceInstance
   *
   * @param { ServiceListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  create(
    params: ServiceListInstanceCreateOptions,
    callback?: (error: Error | null, item?: ServiceInstance) => any
  ): Promise<ServiceInstance>;
  create(params?: any, callback?: any): Promise<ServiceInstance>;

  /**
   * Streams ServiceInstance records from the API.
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
    callback?: (item: ServiceInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams ServiceInstance records from the API.
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
   * @param { ServiceListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: ServiceListInstanceEachOptions,
    callback?: (item: ServiceInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of ServiceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: ServicePage) => any
  ): Promise<ServicePage>;
  /**
   * Retrieve a single target page of ServiceInstance records from the API.
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
    callback?: (error: Error | null, items: ServicePage) => any
  ): Promise<ServicePage>;
  getPage(params?: any, callback?: any): Promise<ServicePage>;
  /**
   * Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: ServiceInstance[]) => any
  ): Promise<ServiceInstance[]>;
  /**
   * Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ServiceListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: ServiceListInstanceOptions,
    callback?: (error: Error | null, items: ServiceInstance[]) => any
  ): Promise<ServiceInstance[]>;
  list(params?: any, callback?: any): Promise<ServiceInstance[]>;
  /**
   * Retrieve a single page of ServiceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: ServicePage) => any
  ): Promise<ServicePage>;
  /**
   * Retrieve a single page of ServiceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ServiceListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: ServiceListInstancePageOptions,
    callback?: (error: Error | null, items: ServicePage) => any
  ): Promise<ServicePage>;
  page(params?: any, callback?: any): Promise<ServicePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ServiceSolution {}

interface ServiceListInstanceImpl extends ServiceListInstance {}
class ServiceListInstanceImpl implements ServiceListInstance {
  _version?: V1;
  _solution?: ServiceSolution;
  _uri?: string;
}

export function ServiceListInstance(version: V1): ServiceListInstance {
  const instance = ((sid) => instance.get(sid)) as ServiceListInstanceImpl;

  instance.get = function get(sid): ServiceContext {
    return new ServiceContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Services`;

  instance.create = function create(
    params?: any,
    callback?: any
  ): Promise<ServiceInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["apnCredentialSid"] !== undefined)
      data["ApnCredentialSid"] = params["apnCredentialSid"];
    if (params["gcmCredentialSid"] !== undefined)
      data["GcmCredentialSid"] = params["gcmCredentialSid"];
    if (params["messagingServiceSid"] !== undefined)
      data["MessagingServiceSid"] = params["messagingServiceSid"];
    if (params["facebookMessengerPageId"] !== undefined)
      data["FacebookMessengerPageId"] = params["facebookMessengerPageId"];
    if (params["defaultApnNotificationProtocolVersion"] !== undefined)
      data["DefaultApnNotificationProtocolVersion"] =
        params["defaultApnNotificationProtocolVersion"];
    if (params["defaultGcmNotificationProtocolVersion"] !== undefined)
      data["DefaultGcmNotificationProtocolVersion"] =
        params["defaultGcmNotificationProtocolVersion"];
    if (params["fcmCredentialSid"] !== undefined)
      data["FcmCredentialSid"] = params["fcmCredentialSid"];
    if (params["defaultFcmNotificationProtocolVersion"] !== undefined)
      data["DefaultFcmNotificationProtocolVersion"] =
        params["defaultFcmNotificationProtocolVersion"];
    if (params["logEnabled"] !== undefined)
      data["LogEnabled"] = serialize.bool(params["logEnabled"]);
    if (params["alexaSkillId"] !== undefined)
      data["AlexaSkillId"] = params["alexaSkillId"];
    if (params["defaultAlexaNotificationProtocolVersion"] !== undefined)
      data["DefaultAlexaNotificationProtocolVersion"] =
        params["defaultAlexaNotificationProtocolVersion"];
    if (params["deliveryCallbackUrl"] !== undefined)
      data["DeliveryCallbackUrl"] = params["deliveryCallbackUrl"];
    if (params["deliveryCallbackEnabled"] !== undefined)
      data["DeliveryCallbackEnabled"] = serialize.bool(
        params["deliveryCallbackEnabled"]
      );

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
      (payload) => new ServiceInstance(operationVersion, payload)
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
  ): Promise<ServicePage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
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
      (payload) => new ServicePage(operationVersion, payload, this._solution)
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
  ): Promise<ServicePage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new ServicePage(this._version, payload, this._solution)
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

export class ServicePage extends Page<
  V1,
  ServicePayload,
  ServiceResource,
  ServiceInstance
> {
  /**
   * Initialize the ServicePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: ServiceSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ServiceInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ServicePayload): ServiceInstance {
    return new ServiceInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}