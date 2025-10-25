/**
 * -----------------------------------------------------
 * 🖤  G & G Luxury – IQ400 Auto-Repair Utility
 * -----------------------------------------------------
 * Repairs:
 * • Missing globals.css
 * • Missing SWC binaries
 * • Stale node_modules or lockfile
 * -----------------------------------------------------
 */

import fs from "fs";
import { execSync } from "child_process";
import path from "path";

function ensureGlobalsCSS() {
  const cssPath = path.resolve("styles/globals.css");
  if (!fs.existsSync(cssPath)) {
    console.log("⚙️  Recreating styles/globals.css...");
    fs.mkdirSync(path.dirname(cssPath), { recursive: true });
    fs.writeFileSync(
      cssPath,
      "/* Auto-generated fallback stylesheet */\nbody{margin:0;padding:0;}"
    );
  }
}

function ensureSWC() {
  try {
    execSync("npm ls @next/swc-linux-x64-gnu", { stdio: "ignore" });
  } catch {
    console.log("⚙️  Installing SWC compiler binaries...");
    execSync(
      "npm install @next/swc-linux-x64-gnu @next/swc-linux-x64-musl @next/swc-darwin-x64 @next/swc-darwin-arm64",
      { stdio: "inherit" }
    );
  }
}

function rebuildLockfile() {
  if (!fs.existsSync("package-lock.json")) {
    console.log("⚙️  Rebuilding lockfile...");
    execSync("npm install", { stdio: "inherit" });
  }
}

console.log("\n--- IQ400 Auto-Repair Starting ---\n");
ensureGlobalsCSS();
ensureSWC();
rebuildLockfile();
console.log("\n✅  Auto-Repair Complete — continuing build.\n");
