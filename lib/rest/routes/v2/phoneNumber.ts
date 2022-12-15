/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Routes
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V2 from "../V2";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

/**
 * Options to pass to update a PhoneNumberInstance
 *
 * @property { string } [voiceRegion] The Inbound Processing Region used for this phone number for voice
 * @property { string } [friendlyName] A human readable description of this resource, up to 64 characters.
 */
export interface PhoneNumberContextUpdateOptions {
  voiceRegion?: string;
  friendlyName?: string;
}

export interface PhoneNumberContext {
  /**
   * Fetch a PhoneNumberInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed PhoneNumberInstance
   */
  fetch(
    callback?: (error: Error | null, item?: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance>;

  /**
   * Update a PhoneNumberInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed PhoneNumberInstance
   */
  update(
    callback?: (error: Error | null, item?: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance>;
  /**
   * Update a PhoneNumberInstance
   *
   * @param { PhoneNumberContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed PhoneNumberInstance
   */
  update(
    params: PhoneNumberContextUpdateOptions,
    callback?: (error: Error | null, item?: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance>;
  update(params?: any, callback?: any): Promise<PhoneNumberInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface PhoneNumberContextSolution {
  phoneNumber?: string;
}

export class PhoneNumberContextImpl implements PhoneNumberContext {
  protected _solution: PhoneNumberContextSolution;
  protected _uri: string;

  constructor(protected _version: V2, phoneNumber: string) {
    if (!isValidPathParam(phoneNumber)) {
      throw new Error("Parameter 'phoneNumber' is not valid.");
    }

    this._solution = { phoneNumber };
    this._uri = `/PhoneNumbers/${phoneNumber}`;
  }

  fetch(callback?: any): Promise<PhoneNumberInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new PhoneNumberInstance(
          operationVersion,
          payload,
          this._solution.phoneNumber
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<PhoneNumberInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["voiceRegion"] !== undefined)
      data["VoiceRegion"] = params["voiceRegion"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];

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
        new PhoneNumberInstance(
          operationVersion,
          payload,
          this._solution.phoneNumber
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

interface PhoneNumberPayload extends PhoneNumberResource {}

interface PhoneNumberResource {
  phone_number?: string | null;
  url?: string | null;
  sid?: string | null;
  account_sid?: string | null;
  friendly_name?: string | null;
  voice_region?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
}

export class PhoneNumberInstance {
  protected _solution: PhoneNumberContextSolution;
  protected _context?: PhoneNumberContext;

  constructor(
    protected _version: V2,
    payload: PhoneNumberResource,
    phoneNumber?: string
  ) {
    this.phoneNumber = payload.phone_number;
    this.url = payload.url;
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.friendlyName = payload.friendly_name;
    this.voiceRegion = payload.voice_region;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);

    this._solution = { phoneNumber: phoneNumber || this.phoneNumber };
  }

  /**
   * The phone number
   */
  phoneNumber?: string | null;
  /**
   * The absolute URL of the resource
   */
  url?: string | null;
  /**
   * A string that uniquely identifies the Inbound Processing Region assignments for this phone number.
   */
  sid?: string | null;
  /**
   * Account Sid.
   */
  accountSid?: string | null;
  /**
   * A human readable description of the Inbound Processing Region assignments for this phone number.
   */
  friendlyName?: string | null;
  /**
   * The Inbound Processing Region used for this phone number for voice.
   */
  voiceRegion?: string | null;
  /**
   * The date that this phone number was assigned an Inbound Processing Region.
   */
  dateCreated?: Date | null;
  /**
   * The date that the Inbound Processing Region was updated for this phone number.
   */
  dateUpdated?: Date | null;

  private get _proxy(): PhoneNumberContext {
    this._context =
      this._context ||
      new PhoneNumberContextImpl(this._version, this._solution.phoneNumber);
    return this._context;
  }

  /**
   * Fetch a PhoneNumberInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed PhoneNumberInstance
   */
  fetch(
    callback?: (error: Error | null, item?: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a PhoneNumberInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed PhoneNumberInstance
   */
  update(
    callback?: (error: Error | null, item?: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance>;
  /**
   * Update a PhoneNumberInstance
   *
   * @param { PhoneNumberContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed PhoneNumberInstance
   */
  update(
    params: PhoneNumberContextUpdateOptions,
    callback?: (error: Error | null, item?: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance>;
  update(params?: any, callback?: any): Promise<PhoneNumberInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      phoneNumber: this.phoneNumber,
      url: this.url,
      sid: this.sid,
      accountSid: this.accountSid,
      friendlyName: this.friendlyName,
      voiceRegion: this.voiceRegion,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface PhoneNumberListInstance {
  (phoneNumber: string): PhoneNumberContext;
  get(phoneNumber: string): PhoneNumberContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface PhoneNumberSolution {}

interface PhoneNumberListInstanceImpl extends PhoneNumberListInstance {}
class PhoneNumberListInstanceImpl implements PhoneNumberListInstance {
  _version?: V2;
  _solution?: PhoneNumberSolution;
  _uri?: string;
}

export function PhoneNumberListInstance(version: V2): PhoneNumberListInstance {
  const instance = ((phoneNumber) =>
    instance.get(phoneNumber)) as PhoneNumberListInstanceImpl;

  instance.get = function get(phoneNumber): PhoneNumberContext {
    return new PhoneNumberContextImpl(version, phoneNumber);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = ``;

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
