/**
 * -----------------------------------------------------
 * 🖤  G & G Luxury – IQ400 Pre-Build Verification
 * -----------------------------------------------------
 * Checks that:
 * • globals.css exists
 * • SWC binaries are installed
 * • Node version is compatible
 * -----------------------------------------------------
 */

import { existsSync } from "fs";
import { execSync } from "child_process";
import process from "process";

const issues = [];

// 1️⃣  Global stylesheet
if (!existsSync("./styles/globals.css")) {
  issues.push("❌  Missing: styles/globals.css");
}

// 2️⃣  SWC binaries
try {
  execSync("npm ls @next/swc-linux-x64-gnu", { stdio: "ignore" });
} catch {
  issues.push("⚠️  SWC binaries not found — will trigger auto-repair.");
}

// 3️⃣  Node version
const major = parseInt(process.versions.node.split(".")[0]);
if (major < 18) {
  issues.push(`⚠️  Node ${process.versions.node} detected — use ≥ 18.18`);
}

if (issues.length) {
  console.log("\n--- IQ400 Pre-Build Check ---");
  for (const msg of issues) console.log(msg);
  console.log("Running auto-repair...\n");
  // exit with 0 so repair script runs next
  process.exit(0);
} else {
  console.log("✅  Pre-Build Check passed.");
}
