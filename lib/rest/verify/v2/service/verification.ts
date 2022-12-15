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
import V2 from "../../V2";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

type VerificationChannel = "sms" | "call" | "email" | "whatsapp" | "sna";

type VerificationStatus = "canceled" | "approved";

/**
 * Options to pass to update a VerificationInstance
 *
 * @property { VerificationStatus } status
 */
export interface VerificationContextUpdateOptions {
  status: VerificationStatus;
}

/**
 * Options to pass to create a VerificationInstance
 *
 * @property { string } to The phone number or [email](https://www.twilio.com/docs/verify/email) to verify. Phone numbers must be in [E.164 format](https://www.twilio.com/docs/glossary/what-e164).
 * @property { string } channel The verification method to use. One of: [`email`](https://www.twilio.com/docs/verify/email), `sms`, `whatsapp`, `call`, or `sna`.
 * @property { string } [customFriendlyName] A custom user defined friendly name that overwrites the existing one in the verification message
 * @property { string } [customMessage] The text of a custom message to use for the verification.
 * @property { string } [sendDigits] The digits to send after a phone call is answered, for example, to dial an extension. For more information, see the Programmable Voice documentation of [sendDigits](https://www.twilio.com/docs/voice/twiml/number#attributes-sendDigits).
 * @property { string } [locale] Locale will automatically resolve based on phone number country code for SMS, WhatsApp and call channel verifications. This parameter will override the automatic locale. [See supported languages and more information here](https://www.twilio.com/docs/verify/supported-languages).
 * @property { string } [customCode] A pre-generated code to use for verification. The code can be between 4 and 10 characters, inclusive.
 * @property { string } [amount] The amount of the associated PSD2 compliant transaction. Requires the PSD2 Service flag enabled.
 * @property { string } [payee] The payee of the associated PSD2 compliant transaction. Requires the PSD2 Service flag enabled.
 * @property { any } [rateLimits] The custom key-value pairs of Programmable Rate Limits. Keys correspond to `unique_name` fields defined when [creating your Rate Limit](https://www.twilio.com/docs/verify/api/service-rate-limits). Associated value pairs represent values in the request that you are rate limiting on. You may include multiple Rate Limit values in each request.
 * @property { any } [channelConfiguration] [`email`](https://www.twilio.com/docs/verify/email) channel configuration in json format. The fields \\\'from\\\' and \\\'from_name\\\' are optional but if included the \\\'from\\\' field must have a valid email address.
 * @property { string } [appHash] Your [App Hash](https://developers.google.com/identity/sms-retriever/verify#computing_your_apps_hash_string) to be appended at the end of your verification SMS body. Applies only to SMS. Example SMS body: `<#> Your AppName verification code is: 1234 He42w354ol9`.
 * @property { string } [templateSid] The message [template](https://www.twilio.com/docs/verify/api/templates). If provided, will override the default template for the Service. SMS and Voice channels only.
 * @property { string } [templateCustomSubstitutions] A stringified JSON object in which the keys are the template\\\'s special variables and the values are the variables substitutions.
 */
export interface VerificationListInstanceCreateOptions {
  to: string;
  channel: string;
  customFriendlyName?: string;
  customMessage?: string;
  sendDigits?: string;
  locale?: string;
  customCode?: string;
  amount?: string;
  payee?: string;
  rateLimits?: any;
  channelConfiguration?: any;
  appHash?: string;
  templateSid?: string;
  templateCustomSubstitutions?: string;
}

export interface VerificationContext {
  /**
   * Fetch a VerificationInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed VerificationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: VerificationInstance) => any
  ): Promise<VerificationInstance>;

  /**
   * Update a VerificationInstance
   *
   * @param { VerificationContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed VerificationInstance
   */
  update(
    params: VerificationContextUpdateOptions,
    callback?: (error: Error | null, item?: VerificationInstance) => any
  ): Promise<VerificationInstance>;
  update(params: any, callback?: any): Promise<VerificationInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface VerificationContextSolution {
  serviceSid?: string;
  sid?: string;
}

export class VerificationContextImpl implements VerificationContext {
  protected _solution: VerificationContextSolution;
  protected _uri: string;

  constructor(protected _version: V2, serviceSid: string, sid: string) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { serviceSid, sid };
    this._uri = `/Services/${serviceSid}/Verifications/${sid}`;
  }

  fetch(callback?: any): Promise<VerificationInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new VerificationInstance(
          operationVersion,
          payload,
          this._solution.serviceSid,
          this._solution.sid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params: any, callback?: any): Promise<VerificationInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["status"] === null || params["status"] === undefined) {
      throw new Error("Required parameter \"params['status']\" missing.");
    }

    let data: any = {};

    data["Status"] = params["status"];

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
        new VerificationInstance(
          operationVersion,
          payload,
          this._solution.serviceSid,
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

interface VerificationPayload extends VerificationResource {}

interface VerificationResource {
  sid?: string | null;
  service_sid?: string | null;
  account_sid?: string | null;
  to?: string | null;
  channel?: VerificationChannel;
  status?: string | null;
  valid?: boolean | null;
  lookup?: any | null;
  amount?: string | null;
  payee?: string | null;
  send_code_attempts?: Array<any> | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  sna?: any | null;
  url?: string | null;
}

export class VerificationInstance {
  protected _solution: VerificationContextSolution;
  protected _context?: VerificationContext;

  constructor(
    protected _version: V2,
    payload: VerificationResource,
    serviceSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.serviceSid = payload.service_sid;
    this.accountSid = payload.account_sid;
    this.to = payload.to;
    this.channel = payload.channel;
    this.status = payload.status;
    this.valid = payload.valid;
    this.lookup = payload.lookup;
    this.amount = payload.amount;
    this.payee = payload.payee;
    this.sendCodeAttempts = payload.send_code_attempts;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.sna = payload.sna;
    this.url = payload.url;

    this._solution = { serviceSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The SID of the Service that the resource is associated with
   */
  serviceSid?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The phone number or email being verified
   */
  to?: string | null;
  channel?: VerificationChannel;
  /**
   * The status of the verification resource
   */
  status?: string | null;
  /**
   * Whether the verification was successful
   */
  valid?: boolean | null;
  /**
   * Information about the phone number being verified
   */
  lookup?: any | null;
  /**
   * The amount of the associated PSD2 compliant transaction.
   */
  amount?: string | null;
  /**
   * The payee of the associated PSD2 compliant transaction
   */
  payee?: string | null;
  /**
   * An array of verification attempt objects.
   */
  sendCodeAttempts?: Array<any> | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The set of fields used for a silent network auth (`sna`) verification
   */
  sna?: any | null;
  /**
   * The absolute URL of the Verification resource
   */
  url?: string | null;

  private get _proxy(): VerificationContext {
    this._context =
      this._context ||
      new VerificationContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Fetch a VerificationInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed VerificationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: VerificationInstance) => any
  ): Promise<VerificationInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a VerificationInstance
   *
   * @param { VerificationContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed VerificationInstance
   */
  update(
    params: VerificationContextUpdateOptions,
    callback?: (error: Error | null, item?: VerificationInstance) => any
  ): Promise<VerificationInstance>;
  update(params: any, callback?: any): Promise<VerificationInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      serviceSid: this.serviceSid,
      accountSid: this.accountSid,
      to: this.to,
      channel: this.channel,
      status: this.status,
      valid: this.valid,
      lookup: this.lookup,
      amount: this.amount,
      payee: this.payee,
      sendCodeAttempts: this.sendCodeAttempts,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      sna: this.sna,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface VerificationListInstance {
  (sid: string): VerificationContext;
  get(sid: string): VerificationContext;

  /**
   * Create a VerificationInstance
   *
   * @param { VerificationListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed VerificationInstance
   */
  create(
    params: VerificationListInstanceCreateOptions,
    callback?: (error: Error | null, item?: VerificationInstance) => any
  ): Promise<VerificationInstance>;
  create(params: any, callback?: any): Promise<VerificationInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface VerificationSolution {
  serviceSid?: string;
}

interface VerificationListInstanceImpl extends VerificationListInstance {}
class VerificationListInstanceImpl implements VerificationListInstance {
  _version?: V2;
  _solution?: VerificationSolution;
  _uri?: string;
}

export function VerificationListInstance(
  version: V2,
  serviceSid: string
): VerificationListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as VerificationListInstanceImpl;

  instance.get = function get(sid): VerificationContext {
    return new VerificationContextImpl(version, serviceSid, sid);
  };

  instance._version = version;
  instance._solution = { serviceSid };
  instance._uri = `/Services/${serviceSid}/Verifications`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<VerificationInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["to"] === null || params["to"] === undefined) {
      throw new Error("Required parameter \"params['to']\" missing.");
    }

    if (params["channel"] === null || params["channel"] === undefined) {
      throw new Error("Required parameter \"params['channel']\" missing.");
    }

    let data: any = {};

    data["To"] = params["to"];

    data["Channel"] = params["channel"];
    if (params["customFriendlyName"] !== undefined)
      data["CustomFriendlyName"] = params["customFriendlyName"];
    if (params["customMessage"] !== undefined)
      data["CustomMessage"] = params["customMessage"];
    if (params["sendDigits"] !== undefined)
      data["SendDigits"] = params["sendDigits"];
    if (params["locale"] !== undefined) data["Locale"] = params["locale"];
    if (params["customCode"] !== undefined)
      data["CustomCode"] = params["customCode"];
    if (params["amount"] !== undefined) data["Amount"] = params["amount"];
    if (params["payee"] !== undefined) data["Payee"] = params["payee"];
    if (params["rateLimits"] !== undefined)
      data["RateLimits"] = serialize.object(params["rateLimits"]);
    if (params["channelConfiguration"] !== undefined)
      data["ChannelConfiguration"] = serialize.object(
        params["channelConfiguration"]
      );
    if (params["appHash"] !== undefined) data["AppHash"] = params["appHash"];
    if (params["templateSid"] !== undefined)
      data["TemplateSid"] = params["templateSid"];
    if (params["templateCustomSubstitutions"] !== undefined)
      data["TemplateCustomSubstitutions"] =
        params["templateCustomSubstitutions"];

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
        new VerificationInstance(
          operationVersion,
          payload,
          this._solution.serviceSid
        )
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
