import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home.jsx';
import inlineScriptsRaw from './scripts/inline-scripts.txt?raw';

const BODY_EXTERNAL_SCRIPTS = [
  'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5fa61cbbf0d432b3230f62b1',
  'https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/js/ccbp-4-0-technical-intensive-project.schunk.e0c428ff9737f919.js',
  'https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/js/ccbp-4-0-technical-intensive-project.schunk.de644438c202300b.js',
  'https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/js/ccbp-4-0-technical-intensive-project.1a1ee8e2.aee8c20b60a57432.js',
];

const FORM_MODULE_SCRIPTS = [
  'https://forms.ccbp.in/webflow/runtime.7ade6786083c3cdb.js',
  'https://forms.ccbp.in/webflow/polyfills.22b45ce383b6ed1d.js',
  'https://forms.ccbp.in/webflow/bookAFreeDemo.93619acbbc6cdbad.js',
  'https://forms.ccbp.in/webflow/techIntensiveDownloadCurriculum.166c75ca908a2657.js',
];

function parseInlineScripts(raw) {
  return raw
    .split(/----- SCRIPT \d+ -----/g)
    .map((s) => s.trim())
    .filter(Boolean);
}

function loadScript(src, options = {}) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    if (options.type) {
      script.type = options.type;
    }
    script.onload = () => resolve();
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

function ScriptLoader() {
  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      try {
        const allInline = parseInlineScripts(inlineScriptsRaw);
        const preWebflowInline = allInline.slice(7, 9);
        const postWebflowInline = allInline.slice(9);

        runInlineScripts(preWebflowInline);

        for (const src of BODY_EXTERNAL_SCRIPTS) {
          if (cancelled) return;
          await loadScript(src);
        }

        for (const src of FORM_MODULE_SCRIPTS) {
          if (cancelled) return;
          await loadScript(src, { type: 'module' });
        }

        if (cancelled) return;
        runInlineScripts(postWebflowInline);
      } catch (err) {
        console.error(err);
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}

function CCBPIframe() {
  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      margin: 0, 
      padding: 0,
      overflow: 'hidden'
    }}>
      <iframe 
        src="https://www.ccbp.in/intensive"
        style={{ 
          width: '100%', 
          height: '100%', 
          border: 'none',
          display: 'block'
        }}
        title="CCBP Intensive"
        allowFullScreen
      />
    </div>
  );
}

function OriginalSite() {
  return (
    <>
      <Home />
      <ScriptLoader />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OriginalSite />} />
        <Route path="/ccbp" element={<CCBPIframe />} />
      </Routes>
    </BrowserRouter>
  );
}