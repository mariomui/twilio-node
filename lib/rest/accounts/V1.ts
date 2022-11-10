/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Accounts
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import AccountsBase from "../AccountsBase";
import Version from "../../base/Version";
import { AuthTokenPromotionListInstance } from "./v1/authTokenPromotion";
import { CredentialListInstance } from "./v1/credential";
import { SecondaryAuthTokenListInstance } from "./v1/secondaryAuthToken";

export default class V1 extends Version {
  /**
   * Initialize the V1 version of Accounts
   *
   * @property { Twilio.Accounts.V1.AuthTokenPromotionListInstance } authTokenPromotion - authTokenPromotion resource
   * @property { Twilio.Accounts.V1.CredentialListInstance } credentials - credentials resource
   * @property { Twilio.Accounts.V1.SecondaryAuthTokenListInstance } secondaryAuthToken - secondaryAuthToken resource
   *
   * @param { Twilio.Accounts } domain - The Twilio domain
   */
  constructor(domain: AccountsBase) {
    super(domain, "v1");
  }

  protected _authTokenPromotion?: AuthTokenPromotionListInstance;
  protected _credentials?: CredentialListInstance;
  protected _secondaryAuthToken?: SecondaryAuthTokenListInstance;

  get authTokenPromotion(): AuthTokenPromotionListInstance {
    this._authTokenPromotion =
      this._authTokenPromotion || AuthTokenPromotionListInstance(this);
    return this._authTokenPromotion;
  }

  get credentials(): CredentialListInstance {
    this._credentials = this._credentials || CredentialListInstance(this);
    return this._credentials;
  }

  get secondaryAuthToken(): SecondaryAuthTokenListInstance {
    this._secondaryAuthToken =
      this._secondaryAuthToken || SecondaryAuthTokenListInstance(this);
    return this._secondaryAuthToken;
  }
}