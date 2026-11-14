# alexkli's bb plugins

A [bb](https://getbb.app) plugin marketplace with my plugins. Add it once:

```sh
bb marketplace add git:https://github.com/alexkli/bb-plugins.git@main
```

Then find the plugins with `bb plugin search` or in bb's plugin store, and
install one with, for example, `bb plugin install claude-bedrock@alexkli`.
Adding the marketplace installs nothing. These plugins are not reviewed by the
bb team; bb shows the author and source before it installs one.

| Plugin | What it does |
| --- | --- |
| [Claude Code (Bedrock)](https://github.com/alexkli/bb-plugin-claude-bedrock) | Claude Code on Amazon Bedrock as its own provider, with all of bb's Claude Code features and an estimated-spend usage entry |
| [Claude Code ACP (Bedrock)](https://github.com/alexkli/bb-plugin-acp-claude-bedrock) | Claude Code on Amazon Bedrock over ACP, with plan approval in the side panel and an estimated-spend usage entry |
| [Claude Code (Copilot)](https://github.com/alexkli/bb-plugin-claude-copilot) | Claude Code on your GitHub Copilot subscription as its own provider, with Copilot's GPT, Gemini and Grok models, a usage page and per-thread credits |
| [Claude Code ACP (Copilot)](https://github.com/alexkli/bb-plugin-acp-claude-copilot) | Claude Code on your GitHub Copilot subscription over ACP, with plan approval, Copilot's other models, a usage page and per-thread credits |
| [Thread Badges](https://github.com/alexkli/bb-plugin-thread-badges) | Each thread's git branch and pull request status under its title in the sidebar |
| [Settings Shortcuts](https://github.com/alexkli/bb-plugin-settings-shortcuts) | Sidebar-footer icons that open a chosen Settings page in one click |

## Layout

- `entries/<id>.json`: one entry per plugin (bb marketplace v2 entry fields;
  the plugin code stays in its own repository, installed from a git tag range).
- `overview/<id>.md`: the long description, a copy of the plugin's
  `PLUGIN_OVERVIEW.md`.
- `marketplace.json`: the document bb reads, built by `node scripts/build.mjs`.

To publish a new plugin version, tag it in its repository (`vX.Y.Z`); bb picks
it up within the entry's range. Change an entry only for a new source, range,
description, screenshots or overview, then rebuild and push.

## License

MIT
