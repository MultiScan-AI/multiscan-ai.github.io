import { useEffect, useRef, useState } from "react";

/* Fades content up as it scrolls into view (CSS in index.css; off for reduced motion). */
function Reveal({ children, className = "", delay = 0, as = "div" }) {
  const Tag = as;
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.classList.add("is-in");
        io.disconnect();
      }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</Tag>;
}

/* Small running label that opens each section, like a chapter mark in a journal. */
function Kicker({ n, children, light = false }) {
  return (
    <p className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] ${light ? "text-white/70" : "text-ink-faint"}`}>
      <span className={`font-serif text-base normal-case italic tracking-normal ${light ? "text-mint" : "text-avocado"}`}>{n}</span>
      <span className={`h-px w-8 ${light ? "bg-white/30" : "bg-ink/20"}`} aria-hidden />
      {children}
    </p>
  );
}

/* ----------------------------------------------------------------------------- the field, read live */
const CELLS = [
  [92, 70], [150, 56], [210, 74], [268, 62], [70, 128], [128, 120], [190, 132], [250, 120], [304, 132],
  [96, 186], [156, 182], [222, 190], [280, 182], [120, 244], [182, 246], [244, 240], [300, 236], [62, 238],
  [160, 300], [222, 300], [104, 298], [276, 292], [334, 184], [44, 180], [330, 90], [40, 110],
];
function Field() {
  return (
    <svg viewBox="0 0 380 380" className="h-full w-full" role="img"
         aria-label="Drawing of a blood film: two parasites are marked and a white cell is set aside">
      <defs>
        <radialGradient id="lens" cx="50%" cy="42%" r="62%">
          <stop offset="0%" stopColor="#FFF8F3" />
          <stop offset="72%" stopColor="#FBE6DE" />
          <stop offset="100%" stopColor="#EFCDC3" />
        </radialGradient>
        <radialGradient id="rbc" cx="45%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#F6C2BA" />
          <stop offset="60%" stopColor="#E8968E" />
          <stop offset="100%" stopColor="#D57C75" />
        </radialGradient>
        <linearGradient id="beam" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#3DDBAA" stopOpacity="0" />
          <stop offset="85%" stopColor="#3DDBAA" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#3DDBAA" stopOpacity="0.9" />
        </linearGradient>
        <clipPath id="disc"><circle cx="190" cy="190" r="176" /></clipPath>
      </defs>
      <circle cx="190" cy="190" r="188" fill="#141A3A" />
      <g clipPath="url(#disc)">
        <rect width="380" height="380" fill="url(#lens)" />
        {CELLS.map(([x, y], i) => (
          <g key={i} transform={`translate(${x} ${y}) rotate(${(i * 37) % 180})`}>
            <ellipse rx="25" ry="23" fill="url(#rbc)" />
            <ellipse rx="10" ry="9" fill="#F8D0C9" opacity="0.75" />
          </g>
        ))}
        <circle cx="198" cy="126" r="5.5" fill="none" stroke="#5B2A86" strokeWidth="2.4" />
        <circle cx="203" cy="122" r="2.2" fill="#5B2A86" />
        <circle cx="114" cy="252" r="5" fill="none" stroke="#5B2A86" strokeWidth="2.2" />
        <circle cx="118" cy="248" r="2" fill="#5B2A86" />
        <g transform="translate(286 248)">
          <circle r="30" fill="#E7D3EF" />
          <path d="M-14 -6c6-12 22-10 24 2 3 12-10 10-9 18-1 8-15 8-17-2-2-8 6-10 2-18Z" fill="#7A4FA0" />
        </g>
        <circle cx="160" cy="214" r="3" fill="#7B5A86" opacity="0.7" />
        <g className="scan-beam"><rect x="0" y="0" width="380" height="60" fill="url(#beam)" /></g>
      </g>
      <rect className="mark mark-1" x="168" y="96" width="56" height="58" rx="10" fill="none" stroke="#3DDBAA" strokeWidth="3" />
      <rect className="mark mark-2" x="86" y="222" width="56" height="56" rx="10" fill="none" stroke="#3DDBAA" strokeWidth="3" />
      <rect className="mark mark-3" x="250" y="212" width="72" height="72" rx="12" fill="none" stroke="#B9BEDA" strokeWidth="2.5" strokeDasharray="6 6" />
    </svg>
  );
}

/* A faint scatter of cell outlines behind the hero, fading out towards the edges, like looking down a lens. */
function CellPattern() {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full text-deep [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_70%)]" aria-hidden>
      <defs>
        <pattern id="cells" width="120" height="120" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="currentColor" strokeOpacity="0.09" strokeWidth="1.5">
            <ellipse cx="22" cy="26" rx="15" ry="14" /><ellipse cx="22" cy="26" rx="5.5" ry="5" />
            <ellipse cx="78" cy="18" rx="13" ry="12" />
            <ellipse cx="58" cy="66" rx="16" ry="15" /><ellipse cx="58" cy="66" rx="6" ry="5.5" />
            <ellipse cx="104" cy="74" rx="12" ry="11" />
            <ellipse cx="18" cy="96" rx="12" ry="11" /><ellipse cx="88" cy="108" rx="14" ry="13" />
          </g>
          <circle cx="62" cy="63" r="2.2" fill="#179E76" fillOpacity="0.25" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#cells)" />
    </svg>
  );
}

/* One drawing per step, all in the same frame and line weight, so the three read left to right as a story.
   Step one shows the eyepiece adapter that holds the phone. */
function StepArt({ i }) {
  const svg = { viewBox: "0 0 160 120", className: "h-full w-full", "aria-hidden": true };
  const ink = "#2E3667";
  if (i === 0)
    return (
      <svg {...svg}>
        <rect x="64" y="70" width="32" height="44" rx="5" fill="#E2E5EE" stroke={ink} strokeWidth="2" />
        <path d="M70 70 L74 52 H86 L90 70" fill="#F7F4EE" stroke={ink} strokeWidth="2" strokeLinejoin="round" />
        {/* the adapter: a collar on the eyepiece, arms up to a clamp that grips the phone */}
        <rect x="62" y="62" width="36" height="10" rx="3" fill="#179E76" />
        <path d="M64 64 L50 56 M96 64 L110 56" stroke="#179E76" strokeWidth="3" strokeLinecap="round" />
        <rect x="42" y="8" width="76" height="46" rx="9" fill="#fff" stroke={ink} strokeWidth="2" />
        <rect x="36" y="18" width="8" height="26" rx="3" fill="#179E76" />
        <rect x="116" y="18" width="8" height="26" rx="3" fill="#179E76" />
        <circle cx="80" cy="31" r="15" fill="#FBE6DE" stroke={ink} strokeWidth="1.5" />
        <circle cx="75" cy="28" r="4.5" fill="#E8968E" /><circle cx="86" cy="34" r="4.5" fill="#E8968E" />
        <circle cx="112" cy="14" r="2" fill="#3DDBAA" />
      </svg>
    );
  if (i === 1)
    return (
      <svg {...svg}>
        <circle cx="80" cy="60" r="46" fill="#FBE6DE" stroke={ink} strokeWidth="2" />
        {[[60, 40], [86, 34], [104, 56], [56, 70], [80, 60], [98, 82], [70, 90]].map(([x, y], k) => (
          <circle key={k} cx={x} cy={y} r="9" fill="#E8968E" />
        ))}
        <circle cx="80" cy="60" r="2.6" fill="#5B2A86" />
        <rect x="67" y="47" width="26" height="26" rx="5" fill="none" stroke="#179E76" strokeWidth="2.5" />
        <rect x="85" y="69" width="26" height="26" rx="5" fill="none" stroke="#9AA0C3" strokeWidth="2" strokeDasharray="4 4" />
      </svg>
    );
  return (
      <svg {...svg}>
        <rect x="36" y="20" width="62" height="62" rx="10" fill="#FBE6DE" stroke="#179E76" strokeWidth="2.5" />
        <circle cx="67" cy="51" r="18" fill="#E8968E" />
        <circle cx="70" cy="48" r="4.5" fill="none" stroke="#5B2A86" strokeWidth="2" />
        <circle cx="104" cy="82" r="20" fill="#179E76" />
        <path d="M95 82 l6 6 l12 -13" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
}

/* ----------------------------------------------------------------------------- content */
const STEPS = [
  ["Photograph the slide", "The phone sits in an adapter on the eyepiece, so every photo lines up the same way."],
  ["MultiScan reads the field", "Each spot to check gets a box. Stain specks and look-alikes are left out."],
  ["The reader checks each box", "Then records the result, as they always have."],
];

const PRINCIPLES = [
  ["The microscopist decides", "MultiScan points the way. Every result is confirmed by a qualified reader before it is used for a patient."],
  ["Proven before it's switched on", "A check goes live only after it performs well on patients it has never seen."],
  ["Honest about certainty", "A percentage appears only where it has been shown to hold. Otherwise, just the finding."],
];

const NUMERALS = ["i", "ii", "iii"];

/* The size of the gap, each figure worded as its source words it. */
const FIGURES = [
  { n: "47%", text: "of the world's population has little or no access to diagnostic tests.",
    source: "Lancet Commission on Diagnostics, 2021", href: "https://doi.org/10.1016/S0140-6736(21)00673-5" },
  { n: "19%", text: "of people in low- and middle-income countries can get even the simplest tests at a primary care clinic.",
    source: "Lancet Commission on Diagnostics, 2021", href: "https://doi.org/10.1016/S0140-6736(21)00673-5" },
  { n: "6.1 million", text: "health workers short across Africa by 2030, up 45% on the 2013 estimate.",
    source: "WHO Regional Office for Africa, 2022", href: "https://www.afro.who.int/news/chronic-staff-shortfalls-stifle-africas-health-systems-who-study" },
];

const SECTIONS = [
  ["problem", "The problem"],
  ["idea", "The idea"],
  ["how", "How it works"],
  ["principles", "Principles"],
];

/* ----------------------------------------------------------------------------- page */
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [current, setCurrent] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  // The phone menu closes on Escape, and if the window widens to the full menu.
  useEffect(() => {
    if (!menuOpen) return;
    const key = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    const wide = window.matchMedia("(min-width: 768px)");
    const grow = () => { if (wide.matches) setMenuOpen(false); };
    window.addEventListener("keydown", key);
    wide.addEventListener("change", grow);
    return () => { window.removeEventListener("keydown", key); wide.removeEventListener("change", grow); };
  }, [menuOpen]);
  // Marks the section under the header in the menu.
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setCurrent(e.target.id); });
    }, { rootMargin: "-45% 0px -50% 0px" });
    SECTIONS.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    const top = () => { if (window.scrollY < 200) setCurrent(""); };
    window.addEventListener("scroll", top, { passive: true });
    return () => { io.disconnect(); window.removeEventListener("scroll", top); };
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip bg-paper font-sans text-ink antialiased selection:bg-mint/40">
      <a href="#top" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-deep focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <header className={`sticky top-0 z-30 border-b bg-paper/90 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 ${scrolled ? "border-ink/10 shadow-[0_10px_30px_-18px_rgba(21,26,59,0.25)]" : "border-transparent"}`}>
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[4.5rem]">
          <a href="#top" className="flex items-center gap-2.5 rounded-lg" aria-label="MultiScan AI home">
            <img src="/logo.png" alt="" width="32" height="32" className="h-8 w-8 rounded-lg" />
            <span className="text-[17px] font-semibold tracking-tight text-deep">multiscan <span className="text-avocado">ai</span></span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-1 rounded-full bg-white/70 p-1 text-sm ring-1 ring-ink/10 md:flex">
            {SECTIONS.map(([id, name]) => (
              <a key={id} href={`#${id}`} aria-current={current === id ? "true" : undefined}
                 className={`rounded-full px-4 py-2 transition-colors ${current === id ? "bg-deep text-white" : "text-ink-muted hover:bg-ink/5 hover:text-deep"}`}>
                {name}
              </a>
            ))}
          </nav>
          <button type="button" onClick={() => setMenuOpen((o) => !o)} aria-expanded={menuOpen} aria-controls="mobile-menu"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/70 text-deep ring-1 ring-ink/10 md:hidden">
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              {menuOpen ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <nav id="mobile-menu" aria-label="Main" className="border-t border-ink/10 bg-paper px-5 pb-5 pt-2 md:hidden">
            {SECTIONS.map(([id, name], i) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}
                 className="flex items-baseline gap-4 border-b border-ink/10 py-4 font-serif text-2xl text-deep">
                <span className="font-serif text-base italic text-avocado">0{i + 1}</span>{name}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="top" tabIndex={-1} className="outline-none">
        {/* hero: the headline beside the microscope, with the field it is reading */}
        <div className="relative">
        <CellPattern />
        <section className="relative mx-auto grid max-w-6xl items-center gap-x-12 gap-y-14 px-5 pb-20 pt-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-x-10 md:pb-24 md:pt-16 lg:gap-x-12 lg:pb-28 lg:pt-20">
          <div>
            <p className="rise flex items-center gap-3 text-sm font-medium text-avocado">
              <span className="h-px w-8 bg-avocado/60" aria-hidden />Screening support for microscopy
            </p>
            <h1 className="mt-6 font-serif text-[clamp(3.6rem,10vw,7.25rem)] leading-[0.92] tracking-[-0.025em] text-deep">
              <span className="rise rise-1 block">See more.</span>
              <span className="rise rise-2 relative inline-block pb-1">
                <em className="text-avocado">Miss less.</em>
                <svg viewBox="0 0 300 20" preserveAspectRatio="none" className="absolute -bottom-1 left-0 h-[0.14em] w-full" aria-hidden>
                  <path className="draw" d="M4 14 C 70 4, 150 4, 296 11" fill="none" stroke="#3DDBAA" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="rise rise-3 mt-9 max-w-[34rem] text-lg leading-relaxed text-ink-muted md:text-[1.2rem]">
              MultiScan reads a phone photo of a slide and points to exactly what needs a closer look, so fewer infections
              slip through and fewer are reported by mistake.
            </p>
            <div className="rise rise-4 mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a href="#how" className="group inline-flex h-12 items-center gap-3 rounded-full bg-deep pl-6 pr-5 font-semibold text-white shadow-[0_10px_24px_-12px_rgba(46,54,103,0.7)] transition hover:bg-night">
                See how it works
                <span className="grid h-7 w-7 place-items-center rounded-full bg-white/10 transition-transform group-hover:translate-x-0.5" aria-hidden>→</span>
              </a>
              <span className="text-sm text-ink-muted">Works with the microscope you already have.</span>
            </div>
          </div>

          <Reveal delay={150} as="figure" className="relative mx-auto w-full max-w-[24rem] pb-20 pl-12 sm:pl-20 md:mr-0 lg:max-w-[28rem]">
            <div className="overflow-hidden rounded-[2rem] bg-night shadow-[0_40px_60px_-30px_rgba(21,26,59,0.55)]">
              <img src="/images/hero-microscope.jpg" alt="Close-up of a microscope's lenses over a lit slide"
                   width="1100" height="1648" fetchPriority="high" className="aspect-[4/5] w-full object-cover" style={{ objectPosition: "50% 40%" }} />
            </div>
            {/* what the microscope sees: the field, read live, with a slowly turning focus ring */}
            <div className="absolute bottom-0 left-0 w-[56%]">
              <div className="relative aspect-square">
                <svg viewBox="0 0 200 200" className="spin-slow absolute -inset-[9%] h-[118%] w-[118%] text-deep" aria-hidden>
                  {Array.from({ length: 90 }, (_, k) => (
                    <line key={k} x1="100" y1="2" x2="100" y2={k % 15 === 0 ? 9 : 5} stroke="currentColor"
                          strokeOpacity={k % 15 === 0 ? 0.55 : 0.25} strokeWidth="0.9" transform={`rotate(${k * 4} 100 100)`} />
                  ))}
                </svg>
                <div className="relative h-full w-full rounded-full bg-paper p-[4%] drop-shadow-[0_24px_30px_rgba(21,26,59,0.3)]"><Field /></div>
              </div>
            </div>
            <figcaption className="absolute bottom-6 right-0 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm shadow-[0_10px_24px_-14px_rgba(21,26,59,0.5)] ring-1 ring-ink/5">
              <span className="h-3 w-3 rounded-[3px] border-2 border-mint" aria-hidden />
              <span><strong className="font-semibold text-deep">Worth a closer look</strong></span>
            </figcaption>
          </Reveal>
        </section>
        </div>

        {/* the problem */}
        <section id="problem" className="scroll-mt-16 border-t border-ink/10 md:scroll-mt-[4.5rem]">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-12 pt-20 md:pb-14 md:pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pt-28">
            <Reveal>
              <Kicker n="01">The problem</Kicker>
              <h2 className="mt-6 max-w-[18ch] font-serif text-[clamp(2.25rem,5vw,3.4rem)] leading-[1.06] tracking-[-0.01em] text-deep">
                In many laboratories, malaria, TB and worms are still found at the microscope, by <em className="text-avocado">one tired eye</em>.
              </h2>
            </Reveal>
            <Reveal delay={120} className="lg:pt-12">
              <dl className="divide-y divide-ink/10 border-y border-ink/10">
                {[
                  ["Light infections", "A few parasites in a whole field are easy to miss on a long day."],
                  ["Look-alikes", "Stain specks and platelets can pass for parasites, and lead to the wrong medicine."],
                  ["Long queues", "Too many slides for too few trained readers."],
                ].map(([t, d]) => (
                  <div key={t} className="grid gap-1 py-5 sm:grid-cols-[9rem_1fr] sm:gap-4">
                    <dt className="font-semibold text-deep">{t}</dt>
                    <dd className="leading-relaxed text-ink-muted">{d}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
          {/* the size of the gap, with sources */}
          <div className="mx-auto max-w-6xl px-5 pb-20 md:pb-24 lg:pb-28">
            <ul className="grid gap-px overflow-hidden rounded-[1.25rem] bg-ink/10 ring-1 ring-ink/10 md:grid-cols-3">
              {FIGURES.map((f, i) => (
                <Reveal as="li" key={f.n} delay={i * 90} className="flex flex-col bg-white p-6 md:p-8">
                  <span className="font-serif text-[clamp(2.75rem,5vw,3.75rem)] leading-none tracking-[-0.02em] text-avocado">{f.n}</span>
                  <p className="mt-4 leading-relaxed text-deep">{f.text}</p>
                  <a href={f.href} target="_blank" rel="noopener noreferrer"
                     className="mt-auto pt-6 text-xs text-ink-faint underline decoration-ink/20 underline-offset-4 transition-colors hover:text-deep">
                    {f.source}
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* the idea: a microscopist at work beside the text, in one panel of equal height */}
        <section id="idea" className="scroll-mt-16 bg-white md:scroll-mt-[4.5rem]">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-24 lg:py-28">
            <Reveal className="grid overflow-hidden rounded-[1.5rem] bg-paper ring-1 ring-ink/5 md:grid-cols-[0.95fr_1.05fr]">
              <img src="/images/microscopist.jpg" alt="A laboratory worker looking through a microscope, with notes beside her"
                   width="1100" height="1769" loading="lazy" className="aspect-[4/3] h-full w-full object-cover md:aspect-auto md:h-[36rem]" style={{ objectPosition: "50% 30%" }} />
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                <Kicker n="02">The idea</Kicker>
                <h2 className="mt-6 font-serif text-[clamp(2.25rem,4.6vw,3.4rem)] leading-[1.05] tracking-[-0.01em] text-deep">
                  Not a replacement. <em className="text-avocado">A second look.</em>
                </h2>
                <p className="mt-6 max-w-[38ch] text-lg leading-relaxed text-ink-muted">
                  The microscopist still reads every slide. MultiScan reads the same field alongside them, so a faint
                  parasite gets two chances to be seen instead of one.
                </p>
                <p className="mt-10 border-t border-ink/10 pt-6 font-serif text-xl italic leading-snug text-deep">
                  A trained eye, and one that never gets tired.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* how it works: one sequence, read left to right (top to bottom on phones) */}
        <section id="how" className="scroll-mt-16 md:scroll-mt-[4.5rem]">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-24 lg:py-28">
            <Reveal>
              <Kicker n="03">How it works</Kicker>
              <h2 className="mt-6 font-serif text-[clamp(2.25rem,5vw,3.4rem)] leading-[1.05] tracking-[-0.01em] text-deep">From slide to <em className="text-avocado">signed-off</em> result.</h2>
            </Reveal>
            <ol className="relative mt-12 grid gap-8 md:mt-14 md:grid-cols-3 md:gap-8">
              <span className="absolute left-0 right-0 top-[6.5rem] hidden h-px bg-[repeating-linear-gradient(90deg,rgba(30,36,68,0.25)_0_6px,transparent_6px_12px)] md:block" aria-hidden />
              {STEPS.map(([title, text], i) => (
                <Reveal as="li" key={title} delay={i * 110} className="relative grid grid-cols-[7rem_1fr] items-start gap-x-5 md:block">
                  <div className="relative aspect-[4/3] w-full rounded-2xl bg-white p-2 md:p-4 shadow-[0_1px_0_rgba(21,26,59,0.06),0_18px_30px_-24px_rgba(21,26,59,0.4)] ring-1 ring-ink/5">
                    <StepArt i={i} />
                    <span className="absolute -left-2 -top-3 grid h-8 w-8 md:h-9 md:w-9 place-items-center rounded-full bg-deep font-serif text-lg italic text-white ring-4 ring-paper">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-deep md:mt-6">{title}</h3>
                    <p className="mt-2 max-w-[34ch] leading-relaxed text-ink-muted">{text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* principles */}
        <section id="principles" className="relative scroll-mt-16 overflow-hidden bg-avocado text-white md:scroll-mt-[4.5rem]">
          <img src="/images/slide-on-stage.jpg" alt="" width="1600" height="1067" loading="lazy" aria-hidden
               className="absolute inset-y-0 right-0 h-full w-full object-cover md:w-[60%]" style={{ objectPosition: "60% 50%" }} />
          <div className="absolute inset-0 bg-avocado/90 md:bg-transparent md:bg-gradient-to-r md:from-avocado md:from-[48%] md:via-avocado/70 md:via-[62%] md:to-avocado/0" aria-hidden />
          <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-24 lg:py-28">
            <Reveal>
              <Kicker n="04" light>What we hold to</Kicker>
              <h2 className="mt-6 max-w-[22ch] font-serif text-[clamp(2.25rem,5vw,3.4rem)] leading-[1.08] tracking-[-0.01em]">
                We would rather hold a check back than show a result <em>we can't stand behind</em>.
              </h2>
            </Reveal>
            <div className="mt-12 max-w-xl">
              {PRINCIPLES.map(([t, d], i) => (
                <Reveal key={t} delay={i * 100} className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-t border-white/30 py-6">
                  <span className="font-serif text-2xl italic leading-none text-white/70">{NUMERALS[i]}.</span>
                  <div>
                    <h3 className="text-xl font-semibold">{t}</h3>
                    <p className="mt-2 max-w-[42ch] leading-relaxed text-white/85">{d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* sign-off: the cells sit on the left and the line on the right, mirroring the section above */}
      <footer className="relative overflow-hidden bg-night text-white">
        <img src="/images/cells-micrograph.jpg" alt="" width="1200" height="1200" loading="lazy" aria-hidden
             className="absolute left-0 top-0 h-full w-full object-cover opacity-30 [mask-image:linear-gradient(to_right,black,transparent_80%)] md:w-1/2 md:opacity-45" />
        <div className="relative mx-auto max-w-6xl px-5 pb-10 pt-20 md:pt-28">
          <Reveal className="md:ml-auto md:max-w-[38rem] md:text-right">
            <p className="font-serif text-[clamp(2.9rem,8vw,5.6rem)] leading-[1] tracking-[-0.02em]">
              A second pair of eyes,<br /><em className="text-mint">on every slide</em>.
            </p>
          </Reveal>
          <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-sm text-white/60 md:flex-row">
            <div className="flex items-center gap-2.5">
              <img src="/logo.png" alt="" width="28" height="28" className="h-7 w-7 rounded-lg opacity-90" />
              <span>© {new Date().getFullYear()} MultiScan AI</span>
            </div>
            <span className="text-center md:text-right">A screening aid, not a diagnosis.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
