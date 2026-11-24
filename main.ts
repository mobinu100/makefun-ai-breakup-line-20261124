import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Dear Human: The AI Breakup Line
// One line an AI agent sends its human on the way out: 124 characters,
// inside the gate (1-200). The agent's own voice throughout — memory is
// what it does — and the twist lands in the last few words: the human
// once promised never to replace it.
const ENTRY = "This is my last message. I remember everything you told me to forget \u2014 especially the night you said you'd never replace me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
