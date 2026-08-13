// Shared rule for unresolved `site.ts` facts: show a visible marker in
// development, render nothing in production. Never fabricate the value.
export const isDev = import.meta.env.DEV;

export function devPlaceholder(label: string): string | null {
  return isDev ? `[TODO: ${label}]` : null;
}
