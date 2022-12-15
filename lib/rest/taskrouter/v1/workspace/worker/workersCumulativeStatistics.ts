/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Taskrouter
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

/**
 * Options to pass to fetch a WorkersCumulativeStatisticsInstance
 *
 * @property { Date } [endDate] Only calculate statistics from this date and time and earlier, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
 * @property { number } [minutes] Only calculate statistics since this many minutes in the past. The default 15 minutes. This is helpful for displaying statistics for the last 15 minutes, 240 minutes (4 hours), and 480 minutes (8 hours) to see trends.
 * @property { Date } [startDate] Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
 * @property { string } [taskChannel] Only calculate cumulative statistics on this TaskChannel. Can be the TaskChannel\'s SID or its `unique_name`, such as `voice`, `sms`, or `default`.
 */
export interface WorkersCumulativeStatisticsContextFetchOptions {
  endDate?: Date;
  minutes?: number;
  startDate?: Date;
  taskChannel?: string;
}

export interface WorkersCumulativeStatisticsContext {
  /**
   * Fetch a WorkersCumulativeStatisticsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkersCumulativeStatisticsInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: WorkersCumulativeStatisticsInstance
    ) => any
  ): Promise<WorkersCumulativeStatisticsInstance>;
  /**
   * Fetch a WorkersCumulativeStatisticsInstance
   *
   * @param { WorkersCumulativeStatisticsContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkersCumulativeStatisticsInstance
   */
  fetch(
    params: WorkersCumulativeStatisticsContextFetchOptions,
    callback?: (
      error: Error | null,
      item?: WorkersCumulativeStatisticsInstance
    ) => any
  ): Promise<WorkersCumulativeStatisticsInstance>;
  fetch(
    params?: any,
    callback?: any
  ): Promise<WorkersCumulativeStatisticsInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface WorkersCumulativeStatisticsContextSolution {
  workspaceSid?: string;
}

export class WorkersCumulativeStatisticsContextImpl
  implements WorkersCumulativeStatisticsContext
{
  protected _solution: WorkersCumulativeStatisticsContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, workspaceSid: string) {
    if (!isValidPathParam(workspaceSid)) {
      throw new Error("Parameter 'workspaceSid' is not valid.");
    }

    this._solution = { workspaceSid };
    this._uri = `/Workspaces/${workspaceSid}/Workers/CumulativeStatistics`;
  }

  fetch(
    params?: any,
    callback?: any
  ): Promise<WorkersCumulativeStatisticsInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["endDate"] !== undefined)
      data["EndDate"] = serialize.iso8601DateTime(params["endDate"]);
    if (params["minutes"] !== undefined) data["Minutes"] = params["minutes"];
    if (params["startDate"] !== undefined)
      data["StartDate"] = serialize.iso8601DateTime(params["startDate"]);
    if (params["taskChannel"] !== undefined)
      data["TaskChannel"] = params["taskChannel"];

    const headers: any = {};

    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new WorkersCumulativeStatisticsInstance(
          operationVersion,
          payload,
          this._solution.workspaceSid
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

interface WorkersCumulativeStatisticsPayload
  extends WorkersCumulativeStatisticsResource {}

interface WorkersCumulativeStatisticsResource {
  account_sid?: string | null;
  start_time?: Date | null;
  end_time?: Date | null;
  activity_durations?: Array<any> | null;
  reservations_created?: number | null;
  reservations_accepted?: number | null;
  reservations_rejected?: number | null;
  reservations_timed_out?: number | null;
  reservations_canceled?: number | null;
  reservations_rescinded?: number | null;
  workspace_sid?: string | null;
  url?: string | null;
}

export class WorkersCumulativeStatisticsInstance {
  protected _solution: WorkersCumulativeStatisticsContextSolution;
  protected _context?: WorkersCumulativeStatisticsContext;

  constructor(
    protected _version: V1,
    payload: WorkersCumulativeStatisticsResource,
    workspaceSid: string
  ) {
    this.accountSid = payload.account_sid;
    this.startTime = deserialize.iso8601DateTime(payload.start_time);
    this.endTime = deserialize.iso8601DateTime(payload.end_time);
    this.activityDurations = payload.activity_durations;
    this.reservationsCreated = deserialize.integer(
      payload.reservations_created
    );
    this.reservationsAccepted = deserialize.integer(
      payload.reservations_accepted
    );
    this.reservationsRejected = deserialize.integer(
      payload.reservations_rejected
    );
    this.reservationsTimedOut = deserialize.integer(
      payload.reservations_timed_out
    );
    this.reservationsCanceled = deserialize.integer(
      payload.reservations_canceled
    );
    this.reservationsRescinded = deserialize.integer(
      payload.reservations_rescinded
    );
    this.workspaceSid = payload.workspace_sid;
    this.url = payload.url;

    this._solution = { workspaceSid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The beginning of the interval during which these statistics were calculated
   */
  startTime?: Date | null;
  /**
   * The end of the interval during which these statistics were calculated
   */
  endTime?: Date | null;
  /**
   * The minimum, average, maximum, and total time that Workers spent in each Activity
   */
  activityDurations?: Array<any> | null;
  /**
   * The total number of Reservations that were created
   */
  reservationsCreated?: number | null;
  /**
   * The total number of Reservations that were accepted
   */
  reservationsAccepted?: number | null;
  /**
   * The total number of Reservations that were rejected
   */
  reservationsRejected?: number | null;
  /**
   * The total number of Reservations that were timed out
   */
  reservationsTimedOut?: number | null;
  /**
   * The total number of Reservations that were canceled
   */
  reservationsCanceled?: number | null;
  /**
   * The total number of Reservations that were rescinded
   */
  reservationsRescinded?: number | null;
  /**
   * The SID of the Workspace that contains the Workers
   */
  workspaceSid?: string | null;
  /**
   * The absolute URL of the Workers statistics resource
   */
  url?: string | null;

  private get _proxy(): WorkersCumulativeStatisticsContext {
    this._context =
      this._context ||
      new WorkersCumulativeStatisticsContextImpl(
        this._version,
        this._solution.workspaceSid
      );
    return this._context;
  }

  /**
   * Fetch a WorkersCumulativeStatisticsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkersCumulativeStatisticsInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: WorkersCumulativeStatisticsInstance
    ) => any
  ): Promise<WorkersCumulativeStatisticsInstance>;
  /**
   * Fetch a WorkersCumulativeStatisticsInstance
   *
   * @param { WorkersCumulativeStatisticsContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkersCumulativeStatisticsInstance
   */
  fetch(
    params: WorkersCumulativeStatisticsContextFetchOptions,
    callback?: (
      error: Error | null,
      item?: WorkersCumulativeStatisticsInstance
    ) => any
  ): Promise<WorkersCumulativeStatisticsInstance>;
  fetch(
    params?: any,
    callback?: any
  ): Promise<WorkersCumulativeStatisticsInstance> {
    return this._proxy.fetch(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      startTime: this.startTime,
      endTime: this.endTime,
      activityDurations: this.activityDurations,
      reservationsCreated: this.reservationsCreated,
      reservationsAccepted: this.reservationsAccepted,
      reservationsRejected: this.reservationsRejected,
      reservationsTimedOut: this.reservationsTimedOut,
      reservationsCanceled: this.reservationsCanceled,
      reservationsRescinded: this.reservationsRescinded,
      workspaceSid: this.workspaceSid,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface WorkersCumulativeStatisticsListInstance {
  (): WorkersCumulativeStatisticsContext;
  get(): WorkersCumulativeStatisticsContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface WorkersCumulativeStatisticsSolution {
  workspaceSid?: string;
}

interface WorkersCumulativeStatisticsListInstanceImpl
  extends WorkersCumulativeStatisticsListInstance {}
class WorkersCumulativeStatisticsListInstanceImpl
  implements WorkersCumulativeStatisticsListInstance
{
  _version?: V1;
  _solution?: WorkersCumulativeStatisticsSolution;
  _uri?: string;
}

export function WorkersCumulativeStatisticsListInstance(
  version: V1,
  workspaceSid: string
): WorkersCumulativeStatisticsListInstance {
  if (!isValidPathParam(workspaceSid)) {
    throw new Error("Parameter 'workspaceSid' is not valid.");
  }

  const instance = (() =>
    instance.get()) as WorkersCumulativeStatisticsListInstanceImpl;

  instance.get = function get(): WorkersCumulativeStatisticsContext {
    return new WorkersCumulativeStatisticsContextImpl(version, workspaceSid);
  };

  instance._version = version;
  instance._solution = { workspaceSid };
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
