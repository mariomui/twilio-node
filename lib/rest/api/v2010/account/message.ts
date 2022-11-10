/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Api
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page from "../../../../base/Page";
import Response from "../../../../http/response";
import V2010 from "../../V2010";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { FeedbackListInstance } from "./message/feedback";
import { MediaListInstance } from "./message/media";

type MessageAddressRetention = "retain";

type MessageContentRetention = "retain";

type MessageDirection =
  | "inbound"
  | "outbound-api"
  | "outbound-call"
  | "outbound-reply";

type MessageScheduleType = "fixed";

type MessageStatus =
  | "queued"
  | "sending"
  | "sent"
  | "failed"
  | "delivered"
  | "undelivered"
  | "receiving"
  | "received"
  | "accepted"
  | "scheduled"
  | "read"
  | "partially_delivered"
  | "canceled";

type MessageUpdateStatus = "canceled";

/**
 * Options to pass to update a MessageInstance
 *
 * @property { string } [body] The text of the message you want to send. Can be up to 1,600 characters long.
 * @property { MessageUpdateStatus } [status]
 */
export interface MessageContextUpdateOptions {
  body?: string;
  status?: MessageUpdateStatus;
}

/**
 * Options to pass to create a MessageInstance
 *
 * @property { string } to The destination phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format for SMS/MMS or [Channel user address](https://www.twilio.com/docs/sms/channels#channel-addresses) for other 3rd-party channels.
 * @property { string } [statusCallback] The URL we should call using the &#x60;status_callback_method&#x60; to send status information to your application. If specified, we POST these message status changes to the URL: &#x60;queued&#x60;, &#x60;failed&#x60;, &#x60;sent&#x60;, &#x60;delivered&#x60;, or &#x60;undelivered&#x60;. Twilio will POST its [standard request parameters](https://www.twilio.com/docs/sms/twiml#request-parameters) as well as some additional parameters including &#x60;MessageSid&#x60;, &#x60;MessageStatus&#x60;, and &#x60;ErrorCode&#x60;. If you include this parameter with the &#x60;messaging_service_sid&#x60;, we use this URL instead of the Status Callback URL of the [Messaging Service](https://www.twilio.com/docs/sms/services/api). URLs must contain a valid hostname and underscores are not allowed.
 * @property { string } [applicationSid] The SID of the application that should receive message status. We POST a &#x60;message_sid&#x60; parameter and a &#x60;message_status&#x60; parameter with a value of &#x60;sent&#x60; or &#x60;failed&#x60; to the [application](https://www.twilio.com/docs/usage/api/applications)\\\&#39;s &#x60;message_status_callback&#x60;. If a &#x60;status_callback&#x60; parameter is also passed, it will be ignored and the application\\\&#39;s &#x60;message_status_callback&#x60; parameter will be used.
 * @property { number } [maxPrice] The maximum total price in US dollars that you will pay for the message to be delivered. Can be a decimal value that has up to 4 decimal places. All messages are queued for delivery and the message cost is checked before the message is sent. If the cost exceeds &#x60;max_price&#x60;, the message will fail and a status of &#x60;Failed&#x60; is sent to the status callback. If &#x60;MaxPrice&#x60; is not set, the message cost is not checked.
 * @property { boolean } [provideFeedback] Whether to confirm delivery of the message. Set this value to &#x60;true&#x60; if you are sending messages that have a trackable user action and you intend to confirm delivery of the message using the [Message Feedback API](https://www.twilio.com/docs/sms/api/message-feedback-resource). This parameter is &#x60;false&#x60; by default.
 * @property { number } [attempt] Total number of attempts made ( including this ) to send out the message regardless of the provider used
 * @property { number } [validityPeriod] How long in seconds the message can remain in our outgoing message queue. After this period elapses, the message fails and we call your status callback. Can be between 1 and the default value of 14,400 seconds. After a message has been accepted by a carrier, however, we cannot guarantee that the message will not be queued after this period. We recommend that this value be at least 5 seconds.
 * @property { boolean } [forceDelivery] Reserved
 * @property { MessageContentRetention } [contentRetention]
 * @property { MessageAddressRetention } [addressRetention]
 * @property { boolean } [smartEncoded] Whether to detect Unicode characters that have a similar GSM-7 character and replace them. Can be: &#x60;true&#x60; or &#x60;false&#x60;.
 * @property { Array<string> } [persistentAction] Rich actions for Channels Messages.
 * @property { boolean } [shortenUrls] Determines the usage of Click Tracking. Setting it to &#x60;true&#x60; will instruct Twilio to replace all links in the Message with a shortened version based on the associated Domain Sid and track clicks on them. If this parameter is not set on an API call, we will use the value set on the Messaging Service. If this parameter is not set and the value is not configured on the Messaging Service used this will default to &#x60;false&#x60;.
 * @property { MessageScheduleType } [scheduleType]
 * @property { Date } [sendAt] The time that Twilio will send the message. Must be in ISO 8601 format.
 * @property { boolean } [sendAsMms] If set to True, Twilio will deliver the message as a single MMS message, regardless of the presence of media.
 * @property { string } [contentSid] The SID of the Content object returned at Content API content create time (https://www.twilio.com/docs/content-api/create-and-send-your-first-content-api-template#create-a-template). If this parameter is not specified, then the Content API will not be utilized.
 * @property { string } [contentVariables] Key-value pairs of variable names to substitution values, used alongside a content_sid. If not specified, Content API will default to the default variables defined at create time.
 * @property { string } [from] A Twilio phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, an [alphanumeric sender ID](https://www.twilio.com/docs/sms/send-messages#use-an-alphanumeric-sender-id), or a [Channel Endpoint address](https://www.twilio.com/docs/sms/channels#channel-addresses) that is enabled for the type of message you want to send. Phone numbers or [short codes](https://www.twilio.com/docs/sms/api/short-code) purchased from Twilio also work here. You cannot, for example, spoof messages from a private cell phone number. If you are using &#x60;messaging_service_sid&#x60;, this parameter must be empty.
 * @property { string } [messagingServiceSid] The SID of the [Messaging Service](https://www.twilio.com/docs/sms/services#send-a-message-with-copilot) you want to associate with the Message. Set this parameter to use the [Messaging Service Settings and Copilot Features](https://www.twilio.com/console/sms/services) you have configured and leave the &#x60;from&#x60; parameter empty. When only this parameter is set, Twilio will use your enabled Copilot Features to select the &#x60;from&#x60; phone number for delivery.
 * @property { string } [body] The text of the message you want to send. Can be up to 1,600 characters in length.
 * @property { Array<string> } [mediaUrl] The URL of the media to send with the message. The media can be of type &#x60;gif&#x60;, &#x60;png&#x60;, and &#x60;jpeg&#x60; and will be formatted correctly on the recipient\\\&#39;s device. The media size limit is 5MB for supported file types (JPEG, PNG, GIF) and 500KB for [other types](https://www.twilio.com/docs/sms/accepted-mime-types) of accepted media. To send more than one image in the message body, provide multiple &#x60;media_url&#x60; parameters in the POST request. You can include up to 10 &#x60;media_url&#x60; parameters per message. You can send images in an SMS message in only the US and Canada.
 */
export interface MessageListInstanceCreateOptions {
  to: string;
  statusCallback?: string;
  applicationSid?: string;
  maxPrice?: number;
  provideFeedback?: boolean;
  attempt?: number;
  validityPeriod?: number;
  forceDelivery?: boolean;
  contentRetention?: MessageContentRetention;
  addressRetention?: MessageAddressRetention;
  smartEncoded?: boolean;
  persistentAction?: Array<string>;
  shortenUrls?: boolean;
  scheduleType?: MessageScheduleType;
  sendAt?: Date;
  sendAsMms?: boolean;
  contentSid?: string;
  contentVariables?: string;
  from?: string;
  messagingServiceSid?: string;
  body?: string;
  mediaUrl?: Array<string>;
}
/**
 * Options to pass to each
 *
 * @property { string } [to] Read messages sent to only this phone number.
 * @property { string } [from] Read messages sent from only this phone number or alphanumeric sender ID.
 * @property { Date } [dateSent] The date of the messages to show. Specify a date as &#x60;YYYY-MM-DD&#x60; in GMT to read only messages sent on this date. For example: &#x60;2009-07-06&#x60;. You can also specify an inequality, such as &#x60;DateSent&lt;&#x3D;YYYY-MM-DD&#x60;, to read messages sent on or before midnight on a date, and &#x60;DateSent&gt;&#x3D;YYYY-MM-DD&#x60; to read messages sent on or after midnight on a date.
 * @property { Date } [dateSentBefore] The date of the messages to show. Specify a date as &#x60;YYYY-MM-DD&#x60; in GMT to read only messages sent on this date. For example: &#x60;2009-07-06&#x60;. You can also specify an inequality, such as &#x60;DateSent&lt;&#x3D;YYYY-MM-DD&#x60;, to read messages sent on or before midnight on a date, and &#x60;DateSent&gt;&#x3D;YYYY-MM-DD&#x60; to read messages sent on or after midnight on a date.
 * @property { Date } [dateSentAfter] The date of the messages to show. Specify a date as &#x60;YYYY-MM-DD&#x60; in GMT to read only messages sent on this date. For example: &#x60;2009-07-06&#x60;. You can also specify an inequality, such as &#x60;DateSent&lt;&#x3D;YYYY-MM-DD&#x60;, to read messages sent on or before midnight on a date, and &#x60;DateSent&gt;&#x3D;YYYY-MM-DD&#x60; to read messages sent on or after midnight on a date.
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
export interface MessageListInstanceEachOptions {
  to?: string;
  from?: string;
  dateSent?: Date;
  dateSentBefore?: Date;
  dateSentAfter?: Date;
  pageSize?: number;
  callback?: (item: MessageInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { string } [to] Read messages sent to only this phone number.
 * @property { string } [from] Read messages sent from only this phone number or alphanumeric sender ID.
 * @property { Date } [dateSent] The date of the messages to show. Specify a date as &#x60;YYYY-MM-DD&#x60; in GMT to read only messages sent on this date. For example: &#x60;2009-07-06&#x60;. You can also specify an inequality, such as &#x60;DateSent&lt;&#x3D;YYYY-MM-DD&#x60;, to read messages sent on or before midnight on a date, and &#x60;DateSent&gt;&#x3D;YYYY-MM-DD&#x60; to read messages sent on or after midnight on a date.
 * @property { Date } [dateSentBefore] The date of the messages to show. Specify a date as &#x60;YYYY-MM-DD&#x60; in GMT to read only messages sent on this date. For example: &#x60;2009-07-06&#x60;. You can also specify an inequality, such as &#x60;DateSent&lt;&#x3D;YYYY-MM-DD&#x60;, to read messages sent on or before midnight on a date, and &#x60;DateSent&gt;&#x3D;YYYY-MM-DD&#x60; to read messages sent on or after midnight on a date.
 * @property { Date } [dateSentAfter] The date of the messages to show. Specify a date as &#x60;YYYY-MM-DD&#x60; in GMT to read only messages sent on this date. For example: &#x60;2009-07-06&#x60;. You can also specify an inequality, such as &#x60;DateSent&lt;&#x3D;YYYY-MM-DD&#x60;, to read messages sent on or before midnight on a date, and &#x60;DateSent&gt;&#x3D;YYYY-MM-DD&#x60; to read messages sent on or after midnight on a date.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface MessageListInstanceOptions {
  to?: string;
  from?: string;
  dateSent?: Date;
  dateSentBefore?: Date;
  dateSentAfter?: Date;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { string } [to] Read messages sent to only this phone number.
 * @property { string } [from] Read messages sent from only this phone number or alphanumeric sender ID.
 * @property { Date } [dateSent] The date of the messages to show. Specify a date as &#x60;YYYY-MM-DD&#x60; in GMT to read only messages sent on this date. For example: &#x60;2009-07-06&#x60;. You can also specify an inequality, such as &#x60;DateSent&lt;&#x3D;YYYY-MM-DD&#x60;, to read messages sent on or before midnight on a date, and &#x60;DateSent&gt;&#x3D;YYYY-MM-DD&#x60; to read messages sent on or after midnight on a date.
 * @property { Date } [dateSentBefore] The date of the messages to show. Specify a date as &#x60;YYYY-MM-DD&#x60; in GMT to read only messages sent on this date. For example: &#x60;2009-07-06&#x60;. You can also specify an inequality, such as &#x60;DateSent&lt;&#x3D;YYYY-MM-DD&#x60;, to read messages sent on or before midnight on a date, and &#x60;DateSent&gt;&#x3D;YYYY-MM-DD&#x60; to read messages sent on or after midnight on a date.
 * @property { Date } [dateSentAfter] The date of the messages to show. Specify a date as &#x60;YYYY-MM-DD&#x60; in GMT to read only messages sent on this date. For example: &#x60;2009-07-06&#x60;. You can also specify an inequality, such as &#x60;DateSent&lt;&#x3D;YYYY-MM-DD&#x60;, to read messages sent on or before midnight on a date, and &#x60;DateSent&gt;&#x3D;YYYY-MM-DD&#x60; to read messages sent on or after midnight on a date.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface MessageListInstancePageOptions {
  to?: string;
  from?: string;
  dateSent?: Date;
  dateSentBefore?: Date;
  dateSentAfter?: Date;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface MessageContext {
  feedback: FeedbackListInstance;
  media: MediaListInstance;

  /**
   * Remove a MessageInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a MessageInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MessageInstance
   */
  fetch(
    callback?: (error: Error | null, item?: MessageInstance) => any
  ): Promise<MessageInstance>;

  /**
   * Update a MessageInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MessageInstance
   */
  update(
    callback?: (error: Error | null, item?: MessageInstance) => any
  ): Promise<MessageInstance>;
  /**
   * Update a MessageInstance
   *
   * @param { MessageContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MessageInstance
   */
  update(
    params: MessageContextUpdateOptions,
    callback?: (error: Error | null, item?: MessageInstance) => any
  ): Promise<MessageInstance>;
  update(params?: any, callback?: any): Promise<MessageInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface MessageContextSolution {
  accountSid?: string;
  sid?: string;
}

export class MessageContextImpl implements MessageContext {
  protected _solution: MessageContextSolution;
  protected _uri: string;

  protected _feedback?: FeedbackListInstance;
  protected _media?: MediaListInstance;

  constructor(protected _version: V2010, accountSid: string, sid: string) {
    this._solution = { accountSid, sid };
    this._uri = `/Accounts/${accountSid}/Messages/${sid}.json`;
  }

  get feedback(): FeedbackListInstance {
    this._feedback =
      this._feedback ||
      FeedbackListInstance(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    return this._feedback;
  }

  get media(): MediaListInstance {
    this._media =
      this._media ||
      MediaListInstance(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    return this._media;
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

  fetch(callback?: any): Promise<MessageInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new MessageInstance(
          operationVersion,
          payload,
          this._solution.accountSid,
          this._solution.sid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<MessageInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["body"] !== undefined) data["Body"] = params["body"];
    if (params["status"] !== undefined) data["Status"] = params["status"];

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
        new MessageInstance(
          operationVersion,
          payload,
          this._solution.accountSid,
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

interface MessagePayload extends MessageResource, Page.TwilioResponsePayload {}

interface MessageResource {
  body?: string | null;
  num_segments?: string | null;
  direction?: MessageDirection;
  from?: string | null;
  to?: string | null;
  date_updated?: string | null;
  price?: string | null;
  error_message?: string | null;
  uri?: string | null;
  account_sid?: string | null;
  num_media?: string | null;
  status?: MessageStatus;
  messaging_service_sid?: string | null;
  sid?: string | null;
  date_sent?: string | null;
  date_created?: string | null;
  error_code?: number | null;
  price_unit?: string | null;
  api_version?: string | null;
  subresource_uris?: object | null;
}

export class MessageInstance {
  protected _solution: MessageContextSolution;
  protected _context?: MessageContext;

  constructor(
    protected _version: V2010,
    payload: MessagePayload,
    accountSid: string,
    sid?: string
  ) {
    this.body = payload.body;
    this.numSegments = payload.num_segments;
    this.direction = payload.direction;
    this.from = payload.from;
    this.to = payload.to;
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.price = payload.price;
    this.errorMessage = payload.error_message;
    this.uri = payload.uri;
    this.accountSid = payload.account_sid;
    this.numMedia = payload.num_media;
    this.status = payload.status;
    this.messagingServiceSid = payload.messaging_service_sid;
    this.sid = payload.sid;
    this.dateSent = deserialize.rfc2822DateTime(payload.date_sent);
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.errorCode = deserialize.integer(payload.error_code);
    this.priceUnit = payload.price_unit;
    this.apiVersion = payload.api_version;
    this.subresourceUris = payload.subresource_uris;

    this._solution = { accountSid, sid: sid || this.sid };
  }

  /**
   * The message text
   */
  body?: string | null;
  /**
   * The number of messages used to deliver the message body
   */
  numSegments?: string | null;
  direction?: MessageDirection;
  /**
   * The phone number that initiated the message
   */
  from?: string | null;
  /**
   * The phone number that received the message
   */
  to?: string | null;
  /**
   * The RFC 2822 date and time in GMT that the resource was last updated
   */
  dateUpdated?: string | null;
  /**
   * The amount billed for the message
   */
  price?: string | null;
  /**
   * The description of the error_code
   */
  errorMessage?: string | null;
  /**
   * The URI of the resource, relative to `https://api.twilio.com`
   */
  uri?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The number of media files associated with the message
   */
  numMedia?: string | null;
  status?: MessageStatus;
  /**
   * The SID of the Messaging Service used with the message.
   */
  messagingServiceSid?: string | null;
  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The RFC 2822 date and time in GMT when the message was sent
   */
  dateSent?: string | null;
  /**
   * The RFC 2822 date and time in GMT that the resource was created
   */
  dateCreated?: string | null;
  /**
   * The error code associated with the message
   */
  errorCode?: number | null;
  /**
   * The currency in which price is measured
   */
  priceUnit?: string | null;
  /**
   * The API version used to process the message
   */
  apiVersion?: string | null;
  /**
   * A list of related resources identified by their relative URIs
   */
  subresourceUris?: object | null;

  private get _proxy(): MessageContext {
    this._context =
      this._context ||
      new MessageContextImpl(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a MessageInstance
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
   * Fetch a MessageInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MessageInstance
   */
  fetch(
    callback?: (error: Error | null, item?: MessageInstance) => any
  ): Promise<MessageInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a MessageInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MessageInstance
   */
  update(
    callback?: (error: Error | null, item?: MessageInstance) => any
  ): Promise<MessageInstance>;
  /**
   * Update a MessageInstance
   *
   * @param { MessageContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MessageInstance
   */
  update(
    params: MessageContextUpdateOptions,
    callback?: (error: Error | null, item?: MessageInstance) => any
  ): Promise<MessageInstance>;
  update(params?: any, callback?: any): Promise<MessageInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the feedback.
   */
  feedback(): FeedbackListInstance {
    return this._proxy.feedback;
  }

  /**
   * Access the media.
   */
  media(): MediaListInstance {
    return this._proxy.media;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      body: this.body,
      numSegments: this.numSegments,
      direction: this.direction,
      from: this.from,
      to: this.to,
      dateUpdated: this.dateUpdated,
      price: this.price,
      errorMessage: this.errorMessage,
      uri: this.uri,
      accountSid: this.accountSid,
      numMedia: this.numMedia,
      status: this.status,
      messagingServiceSid: this.messagingServiceSid,
      sid: this.sid,
      dateSent: this.dateSent,
      dateCreated: this.dateCreated,
      errorCode: this.errorCode,
      priceUnit: this.priceUnit,
      apiVersion: this.apiVersion,
      subresourceUris: this.subresourceUris,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface MessageListInstance {
  (sid: string): MessageContext;
  get(sid: string): MessageContext;

  /**
   * Create a MessageInstance
   *
   * @param { MessageListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MessageInstance
   */
  create(
    params: MessageListInstanceCreateOptions,
    callback?: (error: Error | null, item?: MessageInstance) => any
  ): Promise<MessageInstance>;
  create(params: any, callback?: any): Promise<MessageInstance>;

  /**
   * Streams MessageInstance records from the API.
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
    callback?: (item: MessageInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams MessageInstance records from the API.
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
   * @param { MessageListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: MessageListInstanceEachOptions,
    callback?: (item: MessageInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of MessageInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: MessagePage) => any
  ): Promise<MessagePage>;
  /**
   * Retrieve a single target page of MessageInstance records from the API.
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
    callback?: (error: Error | null, items: MessagePage) => any
  ): Promise<MessagePage>;
  getPage(params?: any, callback?: any): Promise<MessagePage>;
  /**
   * Lists MessageInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: MessageInstance[]) => any
  ): Promise<MessageInstance[]>;
  /**
   * Lists MessageInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MessageListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: MessageListInstanceOptions,
    callback?: (error: Error | null, items: MessageInstance[]) => any
  ): Promise<MessageInstance[]>;
  list(params?: any, callback?: any): Promise<MessageInstance[]>;
  /**
   * Retrieve a single page of MessageInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: MessagePage) => any
  ): Promise<MessagePage>;
  /**
   * Retrieve a single page of MessageInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MessageListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: MessageListInstancePageOptions,
    callback?: (error: Error | null, items: MessagePage) => any
  ): Promise<MessagePage>;
  page(params?: any, callback?: any): Promise<MessagePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface MessageSolution {
  accountSid?: string;
}

interface MessageListInstanceImpl extends MessageListInstance {}
class MessageListInstanceImpl implements MessageListInstance {
  _version?: V2010;
  _solution?: MessageSolution;
  _uri?: string;
}

export function MessageListInstance(
  version: V2010,
  accountSid: string
): MessageListInstance {
  const instance = ((sid) => instance.get(sid)) as MessageListInstanceImpl;

  instance.get = function get(sid): MessageContext {
    return new MessageContextImpl(version, accountSid, sid);
  };

  instance._version = version;
  instance._solution = { accountSid };
  instance._uri = `/Accounts/${accountSid}/Messages.json`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<MessageInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["to"] === null || params["to"] === undefined) {
      throw new Error("Required parameter \"params['to']\" missing.");
    }

    let data: any = {};

    data["To"] = params["to"];
    if (params["statusCallback"] !== undefined)
      data["StatusCallback"] = params["statusCallback"];
    if (params["applicationSid"] !== undefined)
      data["ApplicationSid"] = params["applicationSid"];
    if (params["maxPrice"] !== undefined) data["MaxPrice"] = params["maxPrice"];
    if (params["provideFeedback"] !== undefined)
      data["ProvideFeedback"] = serialize.bool(params["provideFeedback"]);
    if (params["attempt"] !== undefined) data["Attempt"] = params["attempt"];
    if (params["validityPeriod"] !== undefined)
      data["ValidityPeriod"] = params["validityPeriod"];
    if (params["forceDelivery"] !== undefined)
      data["ForceDelivery"] = serialize.bool(params["forceDelivery"]);
    if (params["contentRetention"] !== undefined)
      data["ContentRetention"] = params["contentRetention"];
    if (params["addressRetention"] !== undefined)
      data["AddressRetention"] = params["addressRetention"];
    if (params["smartEncoded"] !== undefined)
      data["SmartEncoded"] = serialize.bool(params["smartEncoded"]);
    if (params["persistentAction"] !== undefined)
      data["PersistentAction"] = serialize.map(
        params["persistentAction"],
        (e) => e
      );
    if (params["shortenUrls"] !== undefined)
      data["ShortenUrls"] = serialize.bool(params["shortenUrls"]);
    if (params["scheduleType"] !== undefined)
      data["ScheduleType"] = params["scheduleType"];
    if (params["sendAt"] !== undefined)
      data["SendAt"] = serialize.iso8601DateTime(params["sendAt"]);
    if (params["sendAsMms"] !== undefined)
      data["SendAsMms"] = serialize.bool(params["sendAsMms"]);
    if (params["contentSid"] !== undefined)
      data["ContentSid"] = params["contentSid"];
    if (params["contentVariables"] !== undefined)
      data["ContentVariables"] = params["contentVariables"];
    if (params["from"] !== undefined) data["From"] = params["from"];
    if (params["messagingServiceSid"] !== undefined)
      data["MessagingServiceSid"] = params["messagingServiceSid"];
    if (params["body"] !== undefined) data["Body"] = params["body"];
    if (params["mediaUrl"] !== undefined)
      data["MediaUrl"] = serialize.map(params["mediaUrl"], (e) => e);

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
        new MessageInstance(
          operationVersion,
          payload,
          this._solution.accountSid
        )
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
  ): Promise<MessagePage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["to"] !== undefined) data["To"] = params["to"];
    if (params["from"] !== undefined) data["From"] = params["from"];
    if (params["dateSent"] !== undefined)
      data["DateSent"] = serialize.iso8601DateTime(params["dateSent"]);
    if (params["dateSentBefore"] !== undefined)
      data["DateSent<"] = serialize.iso8601DateTime(params["dateSentBefore"]);
    if (params["dateSentAfter"] !== undefined)
      data["DateSent>"] = serialize.iso8601DateTime(params["dateSentAfter"]);
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
      (payload) => new MessagePage(operationVersion, payload, this._solution)
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
  ): Promise<MessagePage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new MessagePage(this._version, payload, this._solution)
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

export class MessagePage extends Page<
  V2010,
  MessagePayload,
  MessageResource,
  MessageInstance
> {
  /**
   * Initialize the MessagePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2010,
    response: Response<string>,
    solution: MessageSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of MessageInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: MessagePayload): MessageInstance {
    return new MessageInstance(
      this._version,
      payload,
      this._solution.accountSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}