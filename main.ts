// monday-punchlines-01: writes one Monday-morning joke to /output/entry.txt.
//
// The joke treats Monday morning as a software update nobody consented
// to: the weekend reboots without asking, installs Monday, and there is
// no rollback, no skip button, no "remind me later" — you just wake up
// on the new version.
// The gate only judges texts of 1-200 characters, so the program refuses
// to write a line outside that range instead of submitting an invalid one.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "Monday is the software update you never approved: your weekend reboots overnight, installs Monday, and offers no rollback, no skip button, no 'remind me later' — you just wake up on the new version.";

if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`joke is ${JOKE.length} characters, outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
