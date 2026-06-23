const DEFAULT_MODEL = "anthropic/claude-haiku-4.5";

export function resolveAgentModel(env: NodeJS.ProcessEnv = process.env): string {
  return env.DM_AGENT_MODEL?.trim() || DEFAULT_MODEL;
}

export { DEFAULT_MODEL };
