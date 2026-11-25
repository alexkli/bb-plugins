## What you get

- **Claude Code (Bedrock ACP)** as a provider in the model picker. Threads run Claude Code through the ACP adapter and bill your AWS account instead of a Claude subscription. Forks and side chats work.
- Setup in the plugin settings, grouped like bb's own Claude Code provider screen: **AWS Bedrock** (Bedrock API key stored in a 0600 secret file the agent reads it from, AWS region, AWS profile) and **Usage** (monthly budget and price factor). Removing the plugin removes the key.
- **Estimated spend** in the Provider usage panel and footer: this month and today, against a monthly budget you set.
- A **price factor** for negotiated Bedrock pricing, for the cost bb shows in each thread and for the usage entry.
- Plan mode that waits for you: when Claude finishes a plan, it opens in the side panel of the thread you're looking at and follows later revisions, and you get Claude's "Ready to code?" question, even in Full Access, where bb would otherwise approve it on its own.
- A provider icon: the Claude mark with an AWS badge.

## How it works

The plugin registers its own provider, which bb runs through the plugin SDK's ACP bridge. The provider starts a launcher script that runs Claude Code in Bedrock mode over ACP with the bundled claude-agent-acp adapter, and a small proxy that records each thread's cost in a local ledger. Versions before 0.2 added a custom agent to bb's ACP agents plugin instead; the first load hands that over, and existing threads keep working.

The spend figures are Claude Code's own list-price estimates, not your AWS bill.

## Requirements

- bb 0.49 or later, on macOS or Linux (tested on macOS); the provider runs on the machine bb runs on
- Node.js and Claude Code (`claude` on PATH)
- Access to the Anthropic models on Amazon Bedrock, with a Bedrock API key or AWS credentials

Details: https://github.com/alexkli/bb-plugin-acp-claude-bedrock#setup
