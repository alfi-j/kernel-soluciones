/**
 * Universal Preline v4 initializer.
 *
 * The per-plugin packages (`@preline/select`, `@preline/dropdown`,
 * `@preline/overlay`) expose the plugin class in different shapes depending
 * on how the bundler resolves them (named export, default export, or nested
 * inside the default export). Calling `SomeExport.autoInit()` assuming a
 * single shape throws `...autoInit is not a function` in one environment
 * while silently doing nothing in another.
 *
 * This helper scans every plausible shape for a static `autoInit()` and
 * calls the first one found. If none exists it gives up silently.
 */
export const initPreline = async (
  selectors: string[],
  loader: () => Promise<unknown>,
): Promise<void> => {
  if (typeof document === "undefined") return;

  const hasComponent = selectors.some((selector) => {
    try {
      return !!document.querySelector(selector);
    } catch {
      return false;
    }
  });
  if (!hasComponent) return;

  let mod: unknown;
  try {
    mod = await loader();
  } catch {
    return;
  }
  if (!mod) return;

  // Collect the module plus two levels of nested exports so every shape
  // (namespace, default class, { Named }, { default: { Named } }) is covered.
  const pool: unknown[] = [mod];
  const pushValues = (obj: unknown) => {
    if (obj && (typeof obj === "object" || typeof obj === "function")) {
      for (const value of Object.values(obj)) {
        if (
          value &&
          (typeof value === "object" || typeof value === "function") &&
          !pool.includes(value)
        ) {
          pool.push(value);
        }
      }
    }
  };
  pushValues(mod);
  for (const value of [...pool]) pushValues(value);

  for (const candidate of pool) {
    const autoInit = (candidate as { autoInit?: unknown })?.autoInit;
    if (typeof autoInit === "function") {
      try {
        (autoInit as () => void).call(candidate);
      } catch (error) {
        console.warn("Preline init omitido:", error);
      }
      return;
    }
  }
};
