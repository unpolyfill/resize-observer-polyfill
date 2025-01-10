export interface ResizeObserverPolyfillOptions {
  lastNameUpperCase?: boolean;
}

export function resizeObserverPolyfill(firstName: string, lastName: string, options?: ResizeObserverPolyfillOptions) {
  if (options?.lastNameUpperCase) {
    return firstName + ' ' + lastName.toLocaleUpperCase();
  }
  return firstName + ' ' + lastName;
}
