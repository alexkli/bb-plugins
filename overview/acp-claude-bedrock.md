## What you get

- **Claude Code (Bedrock ACP)** as an agent in the model picker. Threads run Claude Code through the ACP adapter and bill your AWS account instead of a Claude subscription.
- Setup in the plugin settings: Bedrock API key, AWS region or profile. The key is stored as a bb secret and never written to the agent config.
- **Estimated spend** in the Provider usage panel and footer: this month and today, against a monthly budget you set.
- A **price factor** for negotiated Bedrock pricing, for the cost bb shows in each thread and for the usage entry.
- Plan mode that waits for you: when Claude finishes a plan, it opens in the side panel of the thread you're looking at and follows later revisions, and you get Claude's "Ready to code?" question, even in Full Access, where bb would otherwise approve it on its own.
- A provider icon: the Claude mark with an AWS badge.

## How it works

The plugin ships a launcher script that runs Claude Code in Bedrock mode over ACP, using the claude-agent-acp adapter, and a small proxy that records each thread's cost in a local ledger. It registers the launcher as a custom agent in bb's ACP agents plugin and keeps that entry current across updates. The plugin uses only the public plugin SDK.

The spend figures are Claude Code's own list-price estimates, not your AWS bill.

## Requirements

- bb 0.49 or later, with the built-in ACP agents plugin
- Node.js and Claude Code
- Access to the Anthropic models on Amazon Bedrock, with a Bedrock API key or AWS credentials
- Optional: the claude-agent-acp adapter installed once; without it the launcher uses npx, which is slower to start

Details: https://github.com/alexkli/bb-plugin-acp-claude-bedrock#setup
