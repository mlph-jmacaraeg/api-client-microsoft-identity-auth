import { type User } from '../models/index.js';
import {
  type BaseRequestBuilder,
  type RequestConfiguration,
  type RequestInformation,
  type RequestsMetadata,
} from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /me
 */
export interface MeRequestBuilder extends BaseRequestBuilder<MeRequestBuilder> {
  /**
   * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
   * @returns {Promise<User>}
   */
  get(
    requestConfiguration?: RequestConfiguration<object> | undefined
  ): Promise<User | undefined>;
  /**
   * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
   * @returns {RequestInformation}
   */
  toGetRequestInformation(
    requestConfiguration?: RequestConfiguration<object> | undefined
  ): RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export declare const MeRequestBuilderUriTemplate = '{+baseurl}/me';
/**
 * Metadata for all the requests in the request builder.
 */
export declare const MeRequestBuilderRequestsMetadata: RequestsMetadata;
//# sourceMappingURL=index.d.ts.map
