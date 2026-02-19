export class InvalidUserCredentials extends Error {
  constructor() {
    super('Invalid user credentials.')
  }
}