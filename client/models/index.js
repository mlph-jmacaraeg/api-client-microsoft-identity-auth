/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {User}
 */
// @ts-ignore
export function createUserFromDiscriminatorValue(parseNode) {
  return deserializeIntoUser;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoUser(user = {}) {
  return {
    displayName: n => {
      user.displayName = n.getStringValue();
    },
    id: n => {
      user.id = n.getStringValue();
    },
  };
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeUser(writer, user = {}) {
  if (user) {
    writer.writeStringValue('displayName', user.displayName);
    writer.writeStringValue('id', user.id);
    writer.writeAdditionalData(user.additionalData);
  }
}
/* tslint:enable */
/* eslint-enable */
//# sourceMappingURL=index.js.map
