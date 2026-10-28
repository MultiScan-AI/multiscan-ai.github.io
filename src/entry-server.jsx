import { renderToString } from "react-dom/server";
import App from "./App";

/* Renders the page to HTML at build time, so search engines and link previews see the full text
   without running any JavaScript (scripts/prerender.js puts it into dist/index.html). */
export function render() {
  return renderToString(<App />);
}
