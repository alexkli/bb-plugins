## What you get

- **Claude Code (Bedrock ACP)** as an agent in the model picker. Threads run Claude Code through the ACP adapter and bill your AWS account instead of a Claude subscription.
- Setup in the plugin settings: Bedrock API key, AWS region or profile. The key is stored as a bb secret and never written to the agent config.
- bb's permission modes: in **Accept Edits**, Bash runs in Claude Code's sandbox, as with bb's own Claude Code provider, so writes stay in the workspace and Claude asks before running a command outside it. Full Access has no sandbox. A setting turns the sandbox off.
- `/compact` in the composer, using Claude Code's own compaction.
- Plan mode that waits for you: when Claude finishes a plan, it opens in the side panel of the thread you're looking at and follows later revisions, and you get Claude's "Ready to code?" question, even in Full Access, where bb would otherwise approve it on its own.
- **Estimated spend** in the Provider usage panel and footer: this month and today, against a monthly budget you set.
- A **price factor** for negotiated Bedrock pricing, for the cost bb shows in each thread and for the usage entry.
- `bb acp-claude-bedrock status`, `repair` and `unregister` to check the setup, rewrite the agent entry, or remove it before uninstalling. Setup problems show in bb's plugin list.
- A provider icon: the Claude mark with an AWS badge.

## How it works

The plugin ships a launcher script that runs Claude Code in Bedrock mode over ACP with the claude-agent-acp adapter, which comes with the plugin at a pinned version. A small proxy between bb and the adapter adds the sandbox in Accept Edits, holds the plan approval for you, and records each thread's cost in a local ledger. The plugin registers the launcher as a custom agent in bb's ACP agents plugin, with bb's permission modes and compaction, and keeps that entry current across updates. The plugin uses only the public plugin SDK.

The spend figures are Claude Code's own list-price estimates, not your AWS bill.

## Requirements

- bb 0.49 or later, with the built-in ACP agents plugin
- Node.js. Claude Code on PATH is used when present; otherwise the adapter's bundled Claude Code runs
- Access to the Anthropic models on Amazon Bedrock, with a Bedrock API key or AWS credentials

Details: https://github.com/alexkli/bb-plugin-acp-claude-bedrock#setup
