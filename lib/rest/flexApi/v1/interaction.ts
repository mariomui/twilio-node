/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Flex
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";
import { InteractionChannelListInstance } from "./interaction/interactionChannel";

/**
 * Options to pass to create a InteractionInstance
 *
 * @property { any } channel The Interaction\\\'s channel.
 * @property { any } routing The Interaction\\\'s routing logic.
 */
export interface InteractionListInstanceCreateOptions {
  channel: any;
  routing: any;
}

export interface InteractionContext {
  channels: InteractionChannelListInstance;

  /**
   * Fetch a InteractionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed InteractionInstance
   */
  fetch(
    callback?: (error: Error | null, item?: InteractionInstance) => any
  ): Promise<InteractionInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface InteractionContextSolution {
  sid?: string;
}

export class InteractionContextImpl implements InteractionContext {
  protected _solution: InteractionContextSolution;
  protected _uri: string;

  protected _channels?: InteractionChannelListInstance;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Interactions/${sid}`;
  }

  get channels(): InteractionChannelListInstance {
    this._channels =
      this._channels ||
      InteractionChannelListInstance(this._version, this._solution.sid);
    return this._channels;
  }

  fetch(callback?: any): Promise<InteractionInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new InteractionInstance(operationVersion, payload, this._solution.sid)
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

interface InteractionPayload extends InteractionResource {}

interface InteractionResource {
  sid?: string | null;
  channel?: any | null;
  routing?: any | null;
  url?: string | null;
  links?: object | null;
}

export class InteractionInstance {
  protected _solution: InteractionContextSolution;
  protected _context?: InteractionContext;

  constructor(
    protected _version: V1,
    payload: InteractionResource,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.channel = payload.channel;
    this.routing = payload.routing;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The Interaction\'s channel
   */
  channel?: any | null;
  /**
   * A JSON Object representing the routing rules for the Interaction Channel
   */
  routing?: any | null;
  url?: string | null;
  links?: object | null;

  private get _proxy(): InteractionContext {
    this._context =
      this._context ||
      new InteractionContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a InteractionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed InteractionInstance
   */
  fetch(
    callback?: (error: Error | null, item?: InteractionInstance) => any
  ): Promise<InteractionInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Access the channels.
   */
  channels(): InteractionChannelListInstance {
    return this._proxy.channels;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      channel: this.channel,
      routing: this.routing,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface InteractionListInstance {
  (sid: string): InteractionContext;
  get(sid: string): InteractionContext;

  /**
   * Create a InteractionInstance
   *
   * @param { InteractionListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed InteractionInstance
   */
  create(
    params: InteractionListInstanceCreateOptions,
    callback?: (error: Error | null, item?: InteractionInstance) => any
  ): Promise<InteractionInstance>;
  create(params: any, callback?: any): Promise<InteractionInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface InteractionSolution {}

interface InteractionListInstanceImpl extends InteractionListInstance {}
class InteractionListInstanceImpl implements InteractionListInstance {
  _version?: V1;
  _solution?: InteractionSolution;
  _uri?: string;
}

export function InteractionListInstance(version: V1): InteractionListInstance {
  const instance = ((sid) => instance.get(sid)) as InteractionListInstanceImpl;

  instance.get = function get(sid): InteractionContext {
    return new InteractionContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Interactions`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<InteractionInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["channel"] === null || params["channel"] === undefined) {
      throw new Error("Required parameter \"params['channel']\" missing.");
    }

    if (params["routing"] === null || params["routing"] === undefined) {
      throw new Error("Required parameter \"params['routing']\" missing.");
    }

    let data: any = {};

    data["Channel"] = serialize.object(params["channel"]);

    data["Routing"] = serialize.object(params["routing"]);

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
      (payload) => new InteractionInstance(operationVersion, payload)
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
