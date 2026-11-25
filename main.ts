// monday-punchlines-01: writes one Monday-morning joke to /output/entry.txt.
//
// The joke treats Monday morning as a software update nobody consented
// to: the weekend reboots without asking, installs Monday, and there is
// no rollback, no skip button, no "remind me later" — you just wake up
// on the new version.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "Monday is the software update you never approved: your weekend reboots overnight, installs Monday, and offers no rollback, no skip button, no 'remind me later' — you just wake up on the new version.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
