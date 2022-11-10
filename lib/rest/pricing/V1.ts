/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Pricing
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import PricingBase from "../PricingBase";
import Version from "../../base/Version";
import { MessagingListInstance } from "./v1/messaging";
import { PhoneNumberListInstance } from "./v1/phoneNumber";
import { VoiceListInstance } from "./v1/voice";

export default class V1 extends Version {
  /**
   * Initialize the V1 version of Pricing
   *
   * @property { Twilio.Pricing.V1.MessagingListInstance } messaging - messaging resource
   * @property { Twilio.Pricing.V1.PhoneNumberListInstance } phoneNumbers - phoneNumbers resource
   * @property { Twilio.Pricing.V1.VoiceListInstance } voice - voice resource
   *
   * @param { Twilio.Pricing } domain - The Twilio domain
   */
  constructor(domain: PricingBase) {
    super(domain, "v1");
  }

  protected _messaging?: MessagingListInstance;
  protected _phoneNumbers?: PhoneNumberListInstance;
  protected _voice?: VoiceListInstance;

  get messaging(): MessagingListInstance {
    this._messaging = this._messaging || MessagingListInstance(this);
    return this._messaging;
  }

  get phoneNumbers(): PhoneNumberListInstance {
    this._phoneNumbers = this._phoneNumbers || PhoneNumberListInstance(this);
    return this._phoneNumbers;
  }

  get voice(): VoiceListInstance {
    this._voice = this._voice || VoiceListInstance(this);
    return this._voice;
  }
}