// Shared settings for the Anthropic Messages API calls (policy narrative + standard author).

export const LLM_MODEL = process.env.POLICY_LLM_MODEL || "claude-sonnet-5-5";

// Server-side refusal fallback: if a safety classifier declines a request (security content can
// trip the cyber classifier), the API retries it on a suitable model inside the same call.
// Only these models accept the parameter; anything else is sent without it.
const FALLBACK_MODELS = /^claude-(opus-5|fable-5-1|sonnet-5-5)/;
const useFallback = FALLBACK_MODELS.test(LLM_MODEL);

export function llmHeaders(): Record<string, string> {
  return {
    "content-type": "application/json",
    "x-api-key": process.env.ANTHROPIC_API_KEY as string,
    "anthropic-version": "2023-06-01",
    ...(useFallback ? { "anthropic-beta": "server-side-fallback-2026-07-01" } : {}),
  };
}

// Request body fields shared by every call. `effort` sets how much the model thinks; thinking
// tokens count toward max_tokens, so size max_tokens for both.
export function llmBody(effort: "low" | "medium" | "high"): Record<string, unknown> {
  return {
    model: LLM_MODEL,
    output_config: { effort },
    ...(useFallback ? { fallbacks: "default" } : {}),
  };
}
