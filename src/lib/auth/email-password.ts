/**
 * Local email/password sign-in for SafePath CSP.
 *
 * Email/password is enabled in production so the application has a real
 * credential flow instead of relying on browser-local account records.
 * Password reset delivery is configured by the server auth layer; never store
 * passwords or password hashes in browser storage.
 */
export const emailAndPasswordEnabled = true;
