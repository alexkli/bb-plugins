## What you get

- **Claude Code (Copilot)**, a second Claude Code provider next to bb's own. It keeps bb's Claude Code features, such as plan mode, and runs on your GitHub Copilot subscription instead of an Anthropic login.
- Every Copilot chat model in the model picker: Claude, plus GPT, Gemini, Grok and others through copilot-api's Messages translation.
- A settings page for GitHub sign-in with a device code, copilot-api start and stop, the default model and reasoning level, and the Copilot models behind Claude Code's opus, sonnet and haiku aliases.
- A **Copilot usage** page with copilot-api's token and cost dashboard. It also works from bb on a phone.
- The Copilot credits each thread has used, under the prompt next to the context-window control, with a breakdown by model. bb has no plugin slot there yet: if a bb update changes that row, the credits move to the composer's action row.
- Your premium-request quota in the Provider usage panel.
- `bb claude-copilot` commands: status, login, logout, start and stop.

## How it works

The plugin runs its own copy of copilot-api (https://github.com/caozhiyuan/copilot-api) on a random local port with a generated key, and points only this provider's Claude Code at it. copilot-api stops after 30 idle minutes by default and starts again on the next turn.

## Requirements

- A GitHub Copilot subscription. Model availability and premium-request use follow your Copilot plan.
- Claude Code, with `claude` on PATH
- bb 0.49 or later

## Based on bb's Claude Code provider

The plugin contains a copy of bb's own Claude Code provider (MIT), so Copilot threads get the same features as normal Claude Code threads. It uses only public plugin API. A weekly job picks up changes to that provider from new bb releases.
