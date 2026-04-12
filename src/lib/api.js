const DEFAULT_API_BASE = "https://cdlbackend-lagfzewagq-ue.a.run.app/api";

// Allow local development and CI builds to override the API target without
// changing component code.
export const API_BASE = (import.meta.env.VITE_API_BASE || DEFAULT_API_BASE).replace(/\/+$/, "");

export function apiUrl(path) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE}${normalizedPath}`;
}