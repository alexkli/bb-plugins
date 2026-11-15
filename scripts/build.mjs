#!/usr/bin/env node
// Builds marketplace.json (a bb marketplace v2 document) from entries/*.json,
// inlining each entry's overview/<id>.md and adding the categories the
// entries use. Run after changing an entry or overview: node scripts/build.mjs
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = join(import.meta.dirname, "..");
const CATEGORIES = {
  "agents-and-providers": ["Agents & Providers", "Add, choose, configure, route, or coordinate who runs a thread."],
  "thread-management": ["Thread Management", "Find, identify, organize, or archive threads."],
  utilities: ["Utilities", "Small tools that make bb quicker to use."],
};

const plugins = readdirSync(join(root, "entries"))
  .filter((f) => f.endsWith(".json"))
  .sort()
  .map((f) => {
    const entry = JSON.parse(readFileSync(join(root, "entries", f), "utf8"));
    if (`${entry.id}.json` !== f) throw new Error(`${f}: id ${entry.id} does not match the file name`);
    if (entry.overview) {
      const text = readFileSync(join(root, entry.overview), "utf8").trim();
      if (text.length > 4000) throw new Error(`${entry.overview}: ${text.length} characters, at most 4000`);
      entry.overview = text;
    }
    if (entry.category && !CATEGORIES[entry.category]) throw new Error(`${f}: unknown category ${entry.category}`);
    return entry;
  });

const used = [...new Set(plugins.map((p) => p.category).filter(Boolean))];
const doc = {
  $schema: "https://getbb.app/schemas/marketplace-v2.schema.json",
  schemaVersion: 2,
  name: "alexkli",
  displayName: "alexkli's bb plugins",
  description: "Claude Code on Amazon Bedrock and GitHub Copilot, small bb helpers and a cozy pixel-art office, by Alexander Klimetschek.",
  categories: used.map((id) => ({ id, displayName: CATEGORIES[id][0], description: CATEGORIES[id][1] })),
  plugins,
};
writeFileSync(join(root, "marketplace.json"), `${JSON.stringify(doc, null, 2)}\n`);
console.log(`marketplace.json: ${plugins.length} plugins (${plugins.map((p) => p.id).join(", ")})`);
