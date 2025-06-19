import {
  type AdditionalDataHolder,
  type Parsable,
  type ParseNode,
  type SerializationWriter,
} from '@microsoft/kiota-abstractions';
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {User}
 */
export declare function createUserFromDiscriminatorValue(
  parseNode: ParseNode | undefined
): (instance?: Parsable) => Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoUser(
  user?: Partial<User> | undefined
): Record<string, (node: ParseNode) => void>;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeUser(
  writer: SerializationWriter,
  user?: Partial<User> | undefined | null
): void;
export interface User extends AdditionalDataHolder, Parsable {
  /**
   * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
   */
  additionalData?: Record<string, unknown>;
  /**
   * The displayName property
   */
  displayName?: string | null;
  /**
   * The id property
   */
  id?: string | null;
}
//# sourceMappingURL=index.d.ts.map
