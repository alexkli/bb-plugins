## What you get

- **Claude Code (Copilot ACP)** as a provider in the model picker. Threads run Claude Code through the ACP adapter on your GitHub Copilot subscription instead of an Anthropic login. Forks and side chats work.
- Every Copilot chat model in the model picker: Claude, plus GPT, Gemini, Grok and others through copilot-api's Messages translation.
- A settings page for GitHub sign-in with a device code, copilot-api start and stop, the default model, and the Copilot models behind Claude Code's opus, sonnet and haiku aliases.
- A **Copilot usage** page with copilot-api's token and cost dashboard. It also works from bb on a phone.
- The Copilot credits each thread has used, under the prompt next to the context-window control, with a breakdown by model. bb has no plugin slot there yet: if a bb update changes that row, the credits move to the composer's action row.
- Your Copilot premium-request quota in the Provider usage panel.
- Plan mode that waits for you: when Claude finishes a plan, it opens in the side panel of the thread you're looking at, and you get Claude's "Ready to code?" question, even in Full Access, where bb would otherwise approve it on its own.
- bb's permission modes: in Accept Edits, Bash runs in Claude Code's sandbox (writes stay in the workspace), as with bb's Claude Code provider; Full Access has none. `/compact` works too.
- `bb acp-claude-copilot` commands: status (checks the whole setup), repair, login, logout, start and stop. If the plugin can't register its provider, bb shows it as needing configuration, with the reason.

## How it works

The plugin ships a launcher script that runs Claude Code over ACP with the claude-agent-acp adapter (bundled, at a pinned version), and a small proxy in front of it. The proxy starts the plugin's own copilot-api (https://github.com/caozhiyuan/copilot-api) on a random local port with a generated key when a thread needs it, and points Claude Code at it. copilot-api stops after 30 idle minutes by default and starts again with the next message. The plugin registers its own provider, which bb runs through the plugin SDK's ACP bridge. Versions before 0.2 added a custom agent to bb's ACP agents plugin instead; the first load hands that over, and existing threads keep working.

It is independent of the Claude Copilot provider plugin, with its own sign-in and copilot-api; the two can be installed side by side.

## Requirements

- A GitHub Copilot subscription. Model availability and premium-request use follow your Copilot plan.
- bb 0.49 or later, on macOS or Linux (tested on macOS); the provider runs on the machine bb runs on
- Node.js and Claude Code (`claude` on PATH)

Details: https://github.com/alexkli/bb-plugin-acp-claude-copilot#setup
