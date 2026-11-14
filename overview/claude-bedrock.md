## What you get

- **Claude Code (Bedrock)**, a second Claude Code provider next to bb's own. Threads bill your AWS account through Amazon Bedrock instead of an Anthropic login.
- Everything bb's Claude Code provider does: plan mode, approvals and permission modes, subagents and workflows, skills, rewind and fork, compaction and the context meter.
- The Bedrock models Claude Code reports in the model picker, including inference profiles such as us.anthropic.claude-opus-5-5.
- Estimated spend in the Provider usage panel and footer: this month and today, against a monthly budget you set, with a price factor for negotiated Bedrock pricing.
- Setup in the plugin settings: Bedrock API key (stored as a bb secret), AWS region, AWS profile and an optional Claude Code executable.

## How it works

The plugin is bb's own Claude Code provider, copied unchanged at a bb release, under its own provider id. Bedrock is plain Claude Code configuration: the plugin gives this provider CLAUDE_CODE_USE_BEDROCK, the region and the credentials as environment, and a plain claude binary even when a machine-wide override points bb's Claude Code provider elsewhere.

The spend figures are Claude Code's own list-price estimates, recorded by a small wrapper around claude, not your AWS bill.

A weekly job in the plugin's repository picks up new bb releases of the provider, so fixes reach this plugin through updates.

## Requirements

- bb 0.49 or later
- Claude Code installed on the machine; Node.js for the spend estimate
- Access to the Anthropic models on Amazon Bedrock, with a Bedrock API key or AWS credentials. On macOS the plugin can also read the key from the keychain.

Details: https://github.com/alexkli/bb-plugin-claude-bedrock#setup
