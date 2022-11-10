/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Preview
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import TrustedComms from "../TrustedComms";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { ChannelListInstance } from "./brandedChannel/channel";

export interface BrandedChannelContext {
  channels: ChannelListInstance;

  /**
   * Fetch a BrandedChannelInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed BrandedChannelInstance
   */
  fetch(
    callback?: (error: Error | null, item?: BrandedChannelInstance) => any
  ): Promise<BrandedChannelInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface BrandedChannelContextSolution {
  sid?: string;
}

export class BrandedChannelContextImpl implements BrandedChannelContext {
  protected _solution: BrandedChannelContextSolution;
  protected _uri: string;

  protected _channels?: ChannelListInstance;

  constructor(protected _version: TrustedComms, sid: string) {
    this._solution = { sid };
    this._uri = `/BrandedChannels/${sid}`;
  }

  get channels(): ChannelListInstance {
    this._channels =
      this._channels || ChannelListInstance(this._version, this._solution.sid);
    return this._channels;
  }

  fetch(callback?: any): Promise<BrandedChannelInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new BrandedChannelInstance(
          operationVersion,
          payload,
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

interface BrandedChannelPayload extends BrandedChannelResource {}

interface BrandedChannelResource {
  account_sid?: string | null;
  business_sid?: string | null;
  brand_sid?: string | null;
  sid?: string | null;
  links?: object | null;
  url?: string | null;
}

export class BrandedChannelInstance {
  protected _solution: BrandedChannelContextSolution;
  protected _context?: BrandedChannelContext;

  constructor(
    protected _version: TrustedComms,
    payload: BrandedChannelPayload,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.businessSid = payload.business_sid;
    this.brandSid = payload.brand_sid;
    this.sid = payload.sid;
    this.links = payload.links;
    this.url = payload.url;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * Account Sid.
   */
  accountSid?: string | null;
  /**
   * Business Sid.
   */
  businessSid?: string | null;
  /**
   * Brand Sid.
   */
  brandSid?: string | null;
  /**
   * Branded Channel Sid.
   */
  sid?: string | null;
  /**
   * Nested resource URLs.
   */
  links?: object | null;
  /**
   * The URL of this resource.
   */
  url?: string | null;

  private get _proxy(): BrandedChannelContext {
    this._context =
      this._context ||
      new BrandedChannelContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a BrandedChannelInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed BrandedChannelInstance
   */
  fetch(
    callback?: (error: Error | null, item?: BrandedChannelInstance) => any
  ): Promise<BrandedChannelInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Access the channels.
   */
  channels(): ChannelListInstance {
    return this._proxy.channels;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      businessSid: this.businessSid,
      brandSid: this.brandSid,
      sid: this.sid,
      links: this.links,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface BrandedChannelListInstance {
  (sid: string): BrandedChannelContext;
  get(sid: string): BrandedChannelContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface BrandedChannelSolution {}

interface BrandedChannelListInstanceImpl extends BrandedChannelListInstance {}
class BrandedChannelListInstanceImpl implements BrandedChannelListInstance {
  _version?: TrustedComms;
  _solution?: BrandedChannelSolution;
  _uri?: string;
}

export function BrandedChannelListInstance(
  version: TrustedComms
): BrandedChannelListInstance {
  const instance = ((sid) =>
    instance.get(sid)) as BrandedChannelListInstanceImpl;

  instance.get = function get(sid): BrandedChannelContext {
    return new BrandedChannelContextImpl(version, sid);
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