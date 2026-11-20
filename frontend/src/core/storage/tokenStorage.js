// Prefer secure HttpOnly cookies for production authentication.
// Do not store sensitive long-lived credentials in localStorage.
export const tokenStorage = {
  get: () => null,
  set: () => {},
  clear: () => {},
};
