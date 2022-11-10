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

/**
 * Options to pass to fetch a UserRolesInstance
 *
 * @property { string } [token] The Token HTTP request header
 */
export interface UserRolesContextFetchOptions {
  token?: string;
}

export interface UserRolesContext {
  /**
   * Fetch a UserRolesInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed UserRolesInstance
   */
  fetch(
    callback?: (error: Error | null, item?: UserRolesInstance) => any
  ): Promise<UserRolesInstance>;
  /**
   * Fetch a UserRolesInstance
   *
   * @param { UserRolesContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed UserRolesInstance
   */
  fetch(
    params: UserRolesContextFetchOptions,
    callback?: (error: Error | null, item?: UserRolesInstance) => any
  ): Promise<UserRolesInstance>;
  fetch(params?: any, callback?: any): Promise<UserRolesInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface UserRolesContextSolution {}

export class UserRolesContextImpl implements UserRolesContext {
  protected _solution: UserRolesContextSolution;
  protected _uri: string;

  constructor(protected _version: V1) {
    this._solution = {};
    this._uri = `/Accounts/UserRoles`;
  }

  fetch(params?: any, callback?: any): Promise<UserRolesInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    const headers: any = {};
    if (params["token"] !== undefined) headers["Token"] = params["token"];

    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new UserRolesInstance(operationVersion, payload)
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

interface UserRolesPayload extends UserRolesResource {}

interface UserRolesResource {
  roles?: Array<string> | null;
  url?: string | null;
}

export class UserRolesInstance {
  protected _solution: UserRolesContextSolution;
  protected _context?: UserRolesContext;

  constructor(protected _version: V1, payload: UserRolesPayload) {
    this.roles = payload.roles;
    this.url = payload.url;

    this._solution = {};
  }

  /**
   * Flex Insights roles for the user
   */
  roles?: Array<string> | null;
  url?: string | null;

  private get _proxy(): UserRolesContext {
    this._context = this._context || new UserRolesContextImpl(this._version);
    return this._context;
  }

  /**
   * Fetch a UserRolesInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed UserRolesInstance
   */
  fetch(
    callback?: (error: Error | null, item?: UserRolesInstance) => any
  ): Promise<UserRolesInstance>;
  /**
   * Fetch a UserRolesInstance
   *
   * @param { UserRolesContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed UserRolesInstance
   */
  fetch(
    params: UserRolesContextFetchOptions,
    callback?: (error: Error | null, item?: UserRolesInstance) => any
  ): Promise<UserRolesInstance>;
  fetch(params?: any, callback?: any): Promise<UserRolesInstance> {
    return this._proxy.fetch(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      roles: this.roles,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface UserRolesListInstance {
  (): UserRolesContext;
  get(): UserRolesContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface UserRolesSolution {}

interface UserRolesListInstanceImpl extends UserRolesListInstance {}
class UserRolesListInstanceImpl implements UserRolesListInstance {
  _version?: V1;
  _solution?: UserRolesSolution;
  _uri?: string;
}

export function UserRolesListInstance(version: V1): UserRolesListInstance {
  const instance = (() => instance.get()) as UserRolesListInstanceImpl;

  instance.get = function get(): UserRolesContext {
    return new UserRolesContextImpl(version);
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