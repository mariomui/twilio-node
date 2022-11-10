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
import Page from "../../../base/Page";
import Response from "../../../http/response";
import V2 from "../V2";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { AccessTokenListInstance } from "./service/accessToken";
import { EntityListInstance } from "./service/entity";
import { MessagingConfigurationListInstance } from "./service/messagingConfiguration";
import { RateLimitListInstance } from "./service/rateLimit";
import { VerificationListInstance } from "./service/verification";
import { VerificationCheckListInstance } from "./service/verificationCheck";
import { WebhookListInstance } from "./service/webhook";

/**
 * Options to pass to update a ServiceInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the verification service. It can be up to 30 characters long. **This value should not contain PII.**
 * @property { number } [codeLength] The length of the verification code to generate. Must be an integer value between 4 and 10, inclusive.
 * @property { boolean } [lookupEnabled] Whether to perform a lookup with each verification started and return info about the phone number.
 * @property { boolean } [skipSmsToLandlines] Whether to skip sending SMS verifications to landlines. Requires &#x60;lookup_enabled&#x60;.
 * @property { boolean } [dtmfInputRequired] Whether to ask the user to press a number before delivering the verify code in a phone call.
 * @property { string } [ttsName] The name of an alternative text-to-speech service to use in phone calls. Applies only to TTS languages.
 * @property { boolean } [psd2Enabled] Whether to pass PSD2 transaction parameters when starting a verification.
 * @property { boolean } [doNotShareWarningEnabled] Whether to add a privacy warning at the end of an SMS. **Disabled by default and applies only for SMS.**
 * @property { boolean } [customCodeEnabled] Whether to allow sending verifications with a custom code instead of a randomly generated one. Not available for all customers.
 * @property { boolean } [push.includeDate] Optional configuration for the Push factors. If true, include the date in the Challenge\\\&#39;s response. Otherwise, the date is omitted from the response. See [Challenge](https://www.twilio.com/docs/verify/api/challenge) resource’s details parameter for more info. Default: false. **Deprecated** do not use this parameter.
 * @property { string } [push.apnCredentialSid] Optional configuration for the Push factors. Set the APN Credential for this service. This will allow to send push notifications to iOS devices. See [Credential Resource](https://www.twilio.com/docs/notify/api/credential-resource)
 * @property { string } [push.fcmCredentialSid] Optional configuration for the Push factors. Set the FCM Credential for this service. This will allow to send push notifications to Android devices. See [Credential Resource](https://www.twilio.com/docs/notify/api/credential-resource)
 * @property { string } [totp.issuer] Optional configuration for the TOTP factors. Set TOTP Issuer for this service. This will allow to configure the issuer of the TOTP URI.
 * @property { number } [totp.timeStep] Optional configuration for the TOTP factors. Defines how often, in seconds, are TOTP codes generated. i.e, a new TOTP code is generated every time_step seconds. Must be between 20 and 60 seconds, inclusive. Defaults to 30 seconds
 * @property { number } [totp.codeLength] Optional configuration for the TOTP factors. Number of digits for generated TOTP codes. Must be between 3 and 8, inclusive. Defaults to 6
 * @property { number } [totp.skew] Optional configuration for the TOTP factors. The number of time-steps, past and future, that are valid for validation of TOTP codes. Must be between 0 and 2, inclusive. Defaults to 1
 * @property { string } [defaultTemplateSid] The default message [template](https://www.twilio.com/docs/verify/api/templates). Will be used for all SMS verifications unless explicitly overriden. SMS channel only.
 */
export interface ServiceContextUpdateOptions {
  friendlyName?: string;
  codeLength?: number;
  lookupEnabled?: boolean;
  skipSmsToLandlines?: boolean;
  dtmfInputRequired?: boolean;
  ttsName?: string;
  psd2Enabled?: boolean;
  doNotShareWarningEnabled?: boolean;
  customCodeEnabled?: boolean;
  "push.includeDate"?: boolean;
  "push.apnCredentialSid"?: string;
  "push.fcmCredentialSid"?: string;
  "totp.issuer"?: string;
  "totp.timeStep"?: number;
  "totp.codeLength"?: number;
  "totp.skew"?: number;
  defaultTemplateSid?: string;
}

/**
 * Options to pass to create a ServiceInstance
 *
 * @property { string } friendlyName A descriptive string that you create to describe the verification service. It can be up to 30 characters long. **This value should not contain PII.**
 * @property { number } [codeLength] The length of the verification code to generate. Must be an integer value between 4 and 10, inclusive.
 * @property { boolean } [lookupEnabled] Whether to perform a lookup with each verification started and return info about the phone number.
 * @property { boolean } [skipSmsToLandlines] Whether to skip sending SMS verifications to landlines. Requires &#x60;lookup_enabled&#x60;.
 * @property { boolean } [dtmfInputRequired] Whether to ask the user to press a number before delivering the verify code in a phone call.
 * @property { string } [ttsName] The name of an alternative text-to-speech service to use in phone calls. Applies only to TTS languages.
 * @property { boolean } [psd2Enabled] Whether to pass PSD2 transaction parameters when starting a verification.
 * @property { boolean } [doNotShareWarningEnabled] Whether to add a security warning at the end of an SMS verification body. Disabled by default and applies only to SMS. Example SMS body: &#x60;Your AppName verification code is: 1234. Don’t share this code with anyone; our employees will never ask for the code&#x60;
 * @property { boolean } [customCodeEnabled] Whether to allow sending verifications with a custom code instead of a randomly generated one. Not available for all customers.
 * @property { boolean } [push.includeDate] Optional configuration for the Push factors. If true, include the date in the Challenge\\\&#39;s response. Otherwise, the date is omitted from the response. See [Challenge](https://www.twilio.com/docs/verify/api/challenge) resource’s details parameter for more info. Default: false. **Deprecated** do not use this parameter. This timestamp value is the same one as the one found in &#x60;date_created&#x60;, please use that one instead.
 * @property { string } [push.apnCredentialSid] Optional configuration for the Push factors. Set the APN Credential for this service. This will allow to send push notifications to iOS devices. See [Credential Resource](https://www.twilio.com/docs/notify/api/credential-resource)
 * @property { string } [push.fcmCredentialSid] Optional configuration for the Push factors. Set the FCM Credential for this service. This will allow to send push notifications to Android devices. See [Credential Resource](https://www.twilio.com/docs/notify/api/credential-resource)
 * @property { string } [totp.issuer] Optional configuration for the TOTP factors. Set TOTP Issuer for this service. This will allow to configure the issuer of the TOTP URI. Defaults to the service friendly name if not provided.
 * @property { number } [totp.timeStep] Optional configuration for the TOTP factors. Defines how often, in seconds, are TOTP codes generated. i.e, a new TOTP code is generated every time_step seconds. Must be between 20 and 60 seconds, inclusive. Defaults to 30 seconds
 * @property { number } [totp.codeLength] Optional configuration for the TOTP factors. Number of digits for generated TOTP codes. Must be between 3 and 8, inclusive. Defaults to 6
 * @property { number } [totp.skew] Optional configuration for the TOTP factors. The number of time-steps, past and future, that are valid for validation of TOTP codes. Must be between 0 and 2, inclusive. Defaults to 1
 * @property { string } [defaultTemplateSid] The default message [template](https://www.twilio.com/docs/verify/api/templates). Will be used for all SMS verifications unless explicitly overriden. SMS channel only.
 */
export interface ServiceListInstanceCreateOptions {
  friendlyName: string;
  codeLength?: number;
  lookupEnabled?: boolean;
  skipSmsToLandlines?: boolean;
  dtmfInputRequired?: boolean;
  ttsName?: string;
  psd2Enabled?: boolean;
  doNotShareWarningEnabled?: boolean;
  customCodeEnabled?: boolean;
  "push.includeDate"?: boolean;
  "push.apnCredentialSid"?: string;
  "push.fcmCredentialSid"?: string;
  "totp.issuer"?: string;
  "totp.timeStep"?: number;
  "totp.codeLength"?: number;
  "totp.skew"?: number;
  defaultTemplateSid?: string;
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
export interface ServiceListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: ServiceInstance, done: (err?: Error) => void) => void;
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
export interface ServiceListInstanceOptions {
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
export interface ServiceListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface ServiceContext {
  accessTokens: AccessTokenListInstance;
  entities: EntityListInstance;
  messagingConfigurations: MessagingConfigurationListInstance;
  rateLimits: RateLimitListInstance;
  verifications: VerificationListInstance;
  verificationChecks: VerificationCheckListInstance;
  webhooks: WebhookListInstance;

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

  protected _accessTokens?: AccessTokenListInstance;
  protected _entities?: EntityListInstance;
  protected _messagingConfigurations?: MessagingConfigurationListInstance;
  protected _rateLimits?: RateLimitListInstance;
  protected _verifications?: VerificationListInstance;
  protected _verificationChecks?: VerificationCheckListInstance;
  protected _webhooks?: WebhookListInstance;

  constructor(protected _version: V2, sid: string) {
    this._solution = { sid };
    this._uri = `/Services/${sid}`;
  }

  get accessTokens(): AccessTokenListInstance {
    this._accessTokens =
      this._accessTokens ||
      AccessTokenListInstance(this._version, this._solution.sid);
    return this._accessTokens;
  }

  get entities(): EntityListInstance {
    this._entities =
      this._entities || EntityListInstance(this._version, this._solution.sid);
    return this._entities;
  }

  get messagingConfigurations(): MessagingConfigurationListInstance {
    this._messagingConfigurations =
      this._messagingConfigurations ||
      MessagingConfigurationListInstance(this._version, this._solution.sid);
    return this._messagingConfigurations;
  }

  get rateLimits(): RateLimitListInstance {
    this._rateLimits =
      this._rateLimits ||
      RateLimitListInstance(this._version, this._solution.sid);
    return this._rateLimits;
  }

  get verifications(): VerificationListInstance {
    this._verifications =
      this._verifications ||
      VerificationListInstance(this._version, this._solution.sid);
    return this._verifications;
  }

  get verificationChecks(): VerificationCheckListInstance {
    this._verificationChecks =
      this._verificationChecks ||
      VerificationCheckListInstance(this._version, this._solution.sid);
    return this._verificationChecks;
  }

  get webhooks(): WebhookListInstance {
    this._webhooks =
      this._webhooks || WebhookListInstance(this._version, this._solution.sid);
    return this._webhooks;
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
    if (params["codeLength"] !== undefined)
      data["CodeLength"] = params["codeLength"];
    if (params["lookupEnabled"] !== undefined)
      data["LookupEnabled"] = serialize.bool(params["lookupEnabled"]);
    if (params["skipSmsToLandlines"] !== undefined)
      data["SkipSmsToLandlines"] = serialize.bool(params["skipSmsToLandlines"]);
    if (params["dtmfInputRequired"] !== undefined)
      data["DtmfInputRequired"] = serialize.bool(params["dtmfInputRequired"]);
    if (params["ttsName"] !== undefined) data["TtsName"] = params["ttsName"];
    if (params["psd2Enabled"] !== undefined)
      data["Psd2Enabled"] = serialize.bool(params["psd2Enabled"]);
    if (params["doNotShareWarningEnabled"] !== undefined)
      data["DoNotShareWarningEnabled"] = serialize.bool(
        params["doNotShareWarningEnabled"]
      );
    if (params["customCodeEnabled"] !== undefined)
      data["CustomCodeEnabled"] = serialize.bool(params["customCodeEnabled"]);
    if (params["push.includeDate"] !== undefined)
      data["Push.IncludeDate"] = serialize.bool(params["push.includeDate"]);
    if (params["push.apnCredentialSid"] !== undefined)
      data["Push.ApnCredentialSid"] = params["push.apnCredentialSid"];
    if (params["push.fcmCredentialSid"] !== undefined)
      data["Push.FcmCredentialSid"] = params["push.fcmCredentialSid"];
    if (params["totp.issuer"] !== undefined)
      data["Totp.Issuer"] = params["totp.issuer"];
    if (params["totp.timeStep"] !== undefined)
      data["Totp.TimeStep"] = params["totp.timeStep"];
    if (params["totp.codeLength"] !== undefined)
      data["Totp.CodeLength"] = params["totp.codeLength"];
    if (params["totp.skew"] !== undefined)
      data["Totp.Skew"] = params["totp.skew"];
    if (params["defaultTemplateSid"] !== undefined)
      data["DefaultTemplateSid"] = params["defaultTemplateSid"];

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
  code_length?: number | null;
  lookup_enabled?: boolean | null;
  psd2_enabled?: boolean | null;
  skip_sms_to_landlines?: boolean | null;
  dtmf_input_required?: boolean | null;
  tts_name?: string | null;
  do_not_share_warning_enabled?: boolean | null;
  custom_code_enabled?: boolean | null;
  push?: any | null;
  totp?: any | null;
  default_template_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
  links?: object | null;
}

export class ServiceInstance {
  protected _solution: ServiceContextSolution;
  protected _context?: ServiceContext;

  constructor(protected _version: V2, payload: ServicePayload, sid?: string) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.friendlyName = payload.friendly_name;
    this.codeLength = deserialize.integer(payload.code_length);
    this.lookupEnabled = payload.lookup_enabled;
    this.psd2Enabled = payload.psd2_enabled;
    this.skipSmsToLandlines = payload.skip_sms_to_landlines;
    this.dtmfInputRequired = payload.dtmf_input_required;
    this.ttsName = payload.tts_name;
    this.doNotShareWarningEnabled = payload.do_not_share_warning_enabled;
    this.customCodeEnabled = payload.custom_code_enabled;
    this.push = payload.push;
    this.totp = payload.totp;
    this.defaultTemplateSid = payload.default_template_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;
    this.links = payload.links;

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
   * The string that you assigned to describe the verification service
   */
  friendlyName?: string | null;
  /**
   * The length of the verification code
   */
  codeLength?: number | null;
  /**
   * Whether to perform a lookup with each verification
   */
  lookupEnabled?: boolean | null;
  /**
   * Whether to pass PSD2 transaction parameters when starting a verification
   */
  psd2Enabled?: boolean | null;
  /**
   * Whether to skip sending SMS verifications to landlines
   */
  skipSmsToLandlines?: boolean | null;
  /**
   * Whether to ask the user to press a number before delivering the verify code in a phone call
   */
  dtmfInputRequired?: boolean | null;
  /**
   * The name of an alternative text-to-speech service to use in phone calls
   */
  ttsName?: string | null;
  /**
   * Whether to add a security warning at the end of an SMS.
   */
  doNotShareWarningEnabled?: boolean | null;
  /**
   * Whether to allow sending verifications with a custom code.
   */
  customCodeEnabled?: boolean | null;
  /**
   * The service level configuration of factor push type.
   */
  push?: any | null;
  /**
   * The service level configuration of factor TOTP type.
   */
  totp?: any | null;
  defaultTemplateSid?: string | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was last updated
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
   * Access the accessTokens.
   */
  accessTokens(): AccessTokenListInstance {
    return this._proxy.accessTokens;
  }

  /**
   * Access the entities.
   */
  entities(): EntityListInstance {
    return this._proxy.entities;
  }

  /**
   * Access the messagingConfigurations.
   */
  messagingConfigurations(): MessagingConfigurationListInstance {
    return this._proxy.messagingConfigurations;
  }

  /**
   * Access the rateLimits.
   */
  rateLimits(): RateLimitListInstance {
    return this._proxy.rateLimits;
  }

  /**
   * Access the verifications.
   */
  verifications(): VerificationListInstance {
    return this._proxy.verifications;
  }

  /**
   * Access the verificationChecks.
   */
  verificationChecks(): VerificationCheckListInstance {
    return this._proxy.verificationChecks;
  }

  /**
   * Access the webhooks.
   */
  webhooks(): WebhookListInstance {
    return this._proxy.webhooks;
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
      codeLength: this.codeLength,
      lookupEnabled: this.lookupEnabled,
      psd2Enabled: this.psd2Enabled,
      skipSmsToLandlines: this.skipSmsToLandlines,
      dtmfInputRequired: this.dtmfInputRequired,
      ttsName: this.ttsName,
      doNotShareWarningEnabled: this.doNotShareWarningEnabled,
      customCodeEnabled: this.customCodeEnabled,
      push: this.push,
      totp: this.totp,
      defaultTemplateSid: this.defaultTemplateSid,
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

export interface ServiceListInstance {
  (sid: string): ServiceContext;
  get(sid: string): ServiceContext;

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
  create(params: any, callback?: any): Promise<ServiceInstance>;

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
  _version?: V2;
  _solution?: ServiceSolution;
  _uri?: string;
}

export function ServiceListInstance(version: V2): ServiceListInstance {
  const instance = ((sid) => instance.get(sid)) as ServiceListInstanceImpl;

  instance.get = function get(sid): ServiceContext {
    return new ServiceContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Services`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<ServiceInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["friendlyName"] === null ||
      params["friendlyName"] === undefined
    ) {
      throw new Error("Required parameter \"params['friendlyName']\" missing.");
    }

    let data: any = {};

    data["FriendlyName"] = params["friendlyName"];
    if (params["codeLength"] !== undefined)
      data["CodeLength"] = params["codeLength"];
    if (params["lookupEnabled"] !== undefined)
      data["LookupEnabled"] = serialize.bool(params["lookupEnabled"]);
    if (params["skipSmsToLandlines"] !== undefined)
      data["SkipSmsToLandlines"] = serialize.bool(params["skipSmsToLandlines"]);
    if (params["dtmfInputRequired"] !== undefined)
      data["DtmfInputRequired"] = serialize.bool(params["dtmfInputRequired"]);
    if (params["ttsName"] !== undefined) data["TtsName"] = params["ttsName"];
    if (params["psd2Enabled"] !== undefined)
      data["Psd2Enabled"] = serialize.bool(params["psd2Enabled"]);
    if (params["doNotShareWarningEnabled"] !== undefined)
      data["DoNotShareWarningEnabled"] = serialize.bool(
        params["doNotShareWarningEnabled"]
      );
    if (params["customCodeEnabled"] !== undefined)
      data["CustomCodeEnabled"] = serialize.bool(params["customCodeEnabled"]);
    if (params["push.includeDate"] !== undefined)
      data["Push.IncludeDate"] = serialize.bool(params["push.includeDate"]);
    if (params["push.apnCredentialSid"] !== undefined)
      data["Push.ApnCredentialSid"] = params["push.apnCredentialSid"];
    if (params["push.fcmCredentialSid"] !== undefined)
      data["Push.FcmCredentialSid"] = params["push.fcmCredentialSid"];
    if (params["totp.issuer"] !== undefined)
      data["Totp.Issuer"] = params["totp.issuer"];
    if (params["totp.timeStep"] !== undefined)
      data["Totp.TimeStep"] = params["totp.timeStep"];
    if (params["totp.codeLength"] !== undefined)
      data["Totp.CodeLength"] = params["totp.codeLength"];
    if (params["totp.skew"] !== undefined)
      data["Totp.Skew"] = params["totp.skew"];
    if (params["defaultTemplateSid"] !== undefined)
      data["DefaultTemplateSid"] = params["defaultTemplateSid"];

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
  V2,
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
    version: V2,
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