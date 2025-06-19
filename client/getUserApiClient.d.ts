import { type MeRequestBuilder } from './me/index.js';
import {
  type BaseRequestBuilder,
  type KeysToExcludeForNavigationMetadata,
  type NavigationMetadata,
  type RequestAdapter,
} from '@microsoft/kiota-abstractions';
/**
 * Instantiates a new {@link GetUserApiClient} and sets the default values.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
export declare function createGetUserApiClient(
  requestAdapter: RequestAdapter
): GetUserApiClient;
/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface GetUserApiClient extends BaseRequestBuilder<GetUserApiClient> {
  /**
   * The me property
   */
  get me(): MeRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export declare const GetUserApiClientUriTemplate = '{+baseurl}';
/**
 * Metadata for all the navigation properties in the request builder.
 */
export declare const GetUserApiClientNavigationMetadata: Record<
  Exclude<keyof GetUserApiClient, KeysToExcludeForNavigationMetadata>,
  NavigationMetadata
>;
//# sourceMappingURL=getUserApiClient.d.ts.map
