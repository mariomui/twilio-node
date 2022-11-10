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

import PreviewBase from "../PreviewBase";
import Version from "../../base/Version";
import { AvailableAddOnListInstance } from "./marketplace/availableAddOn";
import { InstalledAddOnListInstance } from "./marketplace/installedAddOn";

export default class Marketplace extends Version {
  /**
   * Initialize the Marketplace version of Preview
   *
   * @property { Twilio.Preview.Marketplace.AvailableAddOnListInstance } availableAddOns - availableAddOns resource
   * @property { Twilio.Preview.Marketplace.InstalledAddOnListInstance } installedAddOns - installedAddOns resource
   *
   * @param { Twilio.Preview } domain - The Twilio domain
   */
  constructor(domain: PreviewBase) {
    super(domain, "marketplace");
  }

  protected _availableAddOns?: AvailableAddOnListInstance;
  protected _installedAddOns?: InstalledAddOnListInstance;

  get availableAddOns(): AvailableAddOnListInstance {
    this._availableAddOns =
      this._availableAddOns || AvailableAddOnListInstance(this);
    return this._availableAddOns;
  }

  get installedAddOns(): InstalledAddOnListInstance {
    this._installedAddOns =
      this._installedAddOns || InstalledAddOnListInstance(this);
    return this._installedAddOns;
  }
}