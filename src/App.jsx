import { useEffect } from 'react';
import Home from './pages/Home.jsx';
import inlineScriptsRaw from './scripts/inline-scripts.txt?raw';

/* ---------------- SCRIPT CONFIG ---------------- */

const BODY_EXTERNAL_SCRIPTS = [
  // ❗ DO NOT put jQuery here anymore
  'https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/js/ccbp-4-0-technical-intensive-project.schunk.e0c428ff9737f919.js',
  'https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/js/ccbp-4-0-technical-intensive-project.schunk.de644438c202300b.js',
  'https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/js/ccbp-4-0-technical-intensive-project.1a1ee8e2.aee8c20b60a57432.js',
];

/* ---------------- HELPERS ---------------- */

function parseInlineScripts(raw) {
  return raw
    .split(/----- SCRIPT \d+ -----/g)
    .map((s) => s.trim())
    .filter(Boolean);
}

function loadScript(src) {
  return new Promise((resolve, reject) => {

    // ✅ Prevent duplicate script injection
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.defer = true; // safer than async=false

    script.onload = resolve;
    script.onerror = () => reject(new Error(`Failed to load ${src}`));

    document.body.appendChild(script);
  });
}

function runInlineScripts(scripts) {
  scripts.forEach((code) => {
    const script = document.createElement('script');
    script.text = code;
    document.body.appendChild(script);
  });
}

/* ---------------- SCRIPT LOADER ---------------- */

function ScriptLoader() {
  useEffect(() => {

    let cancelled = false;

    const run = async () => {
      try {

        /* ✅ STEP 1 — GUARANTEE jQuery exists */
        if (!window.jQuery) {
          await loadScript(
            "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js"
          );
        }

        /* ✅ STEP 2 — Load Webflow scripts AFTER jQuery */
        for (const src of BODY_EXTERNAL_SCRIPTS) {
          if (cancelled) return;
          await loadScript(src);
        }

        /* ✅ STEP 3 — Run inline scripts LAST */
        const allInline = parseInlineScripts(inlineScriptsRaw);
        runInlineScripts(allInline);

        console.log("✅ Webflow scripts loaded correctly");

      } catch (err) {
        console.error("SCRIPT LOAD ERROR:", err);
      }
    };

    run();

    return () => {
      cancelled = true;
    };

  }, []);

  return null;
}

/* ---------------- APP ---------------- */

export default function App() {
  return (
    <>
      <Home />
      <ScriptLoader />
    </>
  );
}
