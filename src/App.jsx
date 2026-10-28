import { useEffect, useRef, useState } from "react";

/* Fades content up as it scrolls into view (CSS in index.css; off for reduced motion). */
function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
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

/* Small drawn motif for each sample type (drawings, not patient images). */
function Motif({ id }) {
  const common = { viewBox: "0 0 120 120", className: "h-32 w-32", "aria-hidden": true };
  if (id === "blood")
    return (
      <svg {...common}>
        <ellipse cx="46" cy="52" rx="26" ry="24" fill="#E8968E" /><ellipse cx="46" cy="52" rx="10" ry="9" fill="#F8D0C9" />
        <ellipse cx="80" cy="78" rx="24" ry="22" fill="#D57C75" /><ellipse cx="80" cy="78" rx="9" ry="8" fill="#F1B7AF" />
        <circle cx="84" cy="72" r="4" fill="none" stroke="#5B2A86" strokeWidth="2" />
      </svg>
    );
  if (id === "sputum")
    return (
      <svg {...common}>
        {[[30, 40, 25], [62, 34, -20], [48, 70, 60], [80, 64, 10], [70, 92, -40], [36, 92, 30]].map(([x, y, r], i) => (
          <rect key={i} x={x - 11} y={y - 2.5} width="22" height="5" rx="2.5" fill="#C0394B" transform={`rotate(${r} ${x} ${y})`} />
        ))}
      </svg>
    );
  if (id === "stool")
    return (
      <svg {...common}>
        <ellipse cx="60" cy="60" rx="34" ry="28" fill="#C9A36B" /><ellipse cx="60" cy="60" rx="26" ry="20" fill="#E3C48F" />
        <ellipse cx="60" cy="60" rx="16" ry="12" fill="#B8894F" opacity="0.6" />
      </svg>
    );
  return (
    <svg {...common}>
      <ellipse cx="56" cy="62" rx="34" ry="16" fill="#E8D7A0" transform="rotate(-18 56 62)" />
      <ellipse cx="56" cy="62" rx="24" ry="10" fill="#D3BC73" opacity="0.6" transform="rotate(-18 56 62)" />
      <path d="M86 50 L104 42" stroke="#B59A4A" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

/* ----------------------------------------------------------------------------- content */
const SAMPLES = [
  { id: "blood", name: "Blood", bg: "bg-blood-soft", fg: "text-blood", prep: "Thin blood films",
    line: "Red and white cells, and what hides among them." },
  { id: "sputum", name: "Sputum", bg: "bg-sputum-soft", fg: "text-sputum", prep: "Ziehl-Neelsen smears",
    line: "Slender rods that are easy to lose in a busy smear." },
  { id: "stool", name: "Stool", bg: "bg-stool-soft", fg: "text-stool", prep: "Stool smears",
    line: "Eggs among the debris, told apart and named." },
  { id: "urine", name: "Urine", bg: "bg-urine-soft", fg: "text-urine", prep: "Urine filtration",
    line: "Eggs caught on the filter, field by field." },
];

const STEPS = [
  ["Take a photo", "Hold a smartphone to the eyepiece. A blurred or dark photo is caught at once, with a note on how to fix it."],
  ["MultiScan reads the field", "It marks everything worth a closer look, and sets aside the stain specks and cells that only resemble it."],
  ["The reader confirms", "Each mark points to one spot on the slide. The reader looks there and records the result."],
  ["Kept on file", "The result joins the patient's history, under a code rather than a name, ready to share as a report."],
];

const PRINCIPLES = [
  ["The microscopist decides", "MultiScan points the way. Every result is confirmed by a qualified reader before it is used for a patient."],
  ["Proven before it's switched on", "A check goes live only after it performs well on patients it has never seen."],
  ["Honest about certainty", "A percentage appears only where it has been shown to hold. Otherwise, just the finding."],
];

/* ----------------------------------------------------------------------------- page */
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <div className="min-h-screen bg-paper font-sans text-ink antialiased selection:bg-mint/40">
      <header className={`sticky top-0 z-20 border-b bg-paper/85 backdrop-blur transition-shadow ${scrolled ? "border-ink/10 shadow-[0_8px_30px_-12px_rgba(21,26,59,0.18)]" : "border-transparent"}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-2.5" aria-label="MultiScan AI home">
            <img src="/logo.png" alt="" className="h-8 w-8 rounded-lg" />
            <span className="text-[17px] font-semibold tracking-tight text-deep">multiscan <span className="text-avocado">ai</span></span>
          </a>
          <nav className="flex items-center gap-7 text-sm text-ink-muted">
            <a href="#samples" className="hover:text-deep">Samples</a>
            <a href="#how" className="hover:text-deep">How it works</a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 md:grid-cols-[1.15fr_0.85fr] md:pb-28 md:pt-20">
          <div>
            <p className="rise text-sm font-medium text-avocado">Screening support for microscopy</p>
            <h1 className="mt-5 font-serif text-[3.6rem] leading-[0.95] tracking-[-0.02em] text-deep md:text-[6.4rem]">
              <span className="rise rise-1 block">See more.</span>
              <span className="rise rise-2 relative inline-block">
                <em className="text-avocado">Miss less.</em>
                <svg viewBox="0 0 300 20" preserveAspectRatio="none" className="absolute -bottom-2 left-0 h-4 w-full" aria-hidden>
                  <path className="draw" d="M4 14 C 70 4, 150 4, 296 11" fill="none" stroke="#3DDBAA" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="rise rise-3 mt-8 max-w-lg text-lg leading-relaxed text-ink-muted">
              MultiScan reads a phone photo of a slide and points to exactly what needs a closer look, so fewer infections
              slip through and fewer are reported by mistake.
            </p>
            <div className="rise rise-4 mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a href="#how" className="group inline-flex items-center gap-3 rounded-full bg-deep px-7 py-3.5 font-semibold text-white transition hover:bg-night">
                See how it works
                <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
              </a>
              <span className="text-sm text-ink-muted">Works with the microscope you already have.</span>
            </div>
          </div>

          <Reveal delay={150} className="relative mx-auto w-full max-w-[26rem]">
            <div className="aspect-square drop-shadow-[0_30px_40px_rgba(21,26,59,0.25)]"><Field /></div>
            <div className="float absolute -left-2 top-8 rounded-md bg-white px-3 py-2 text-xs shadow-md md:-left-12">
              <span className="font-semibold text-deep">2 marked</span><span className="text-ink-muted"> for a closer look</span>
            </div>
            <div className="float-slow absolute -right-2 bottom-14 rounded-md bg-white px-3 py-2 text-xs shadow-md md:-right-10">
              <span className="font-semibold text-deep">Look-alike</span><span className="text-ink-muted"> set aside</span>
            </div>
          </Reveal>
        </section>

        {/* why */}
        <section className="border-t border-ink/10">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
            <Reveal>
              <h2 className="font-serif text-4xl leading-[1.08] tracking-[-0.01em] text-deep md:text-[3.4rem]">
                In many laboratories, malaria, TB and worms are still found at the microscope, by <em className="text-avocado">one tired eye</em>.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <dl className="divide-y divide-ink/10 border-y border-ink/10">
                {[
                  ["Light infections", "A few parasites in a whole field are easy to miss on a long day."],
                  ["Look-alikes", "Stain specks and platelets can pass for parasites, and lead to the wrong medicine."],
                  ["Long queues", "Too many slides for too few trained readers."],
                ].map(([t, d]) => (
                  <div key={t} className="grid grid-cols-[8.5rem_1fr] gap-4 py-5">
                    <dt className="font-semibold text-deep">{t}</dt>
                    <dd className="leading-relaxed text-ink-muted">{d}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 leading-relaxed text-ink-muted">MultiScan gives every slide a second reader, without changing how the lab works.</p>
            </Reveal>
          </div>
        </section>

        {/* samples */}
        <section id="samples" className="bg-white">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <Reveal className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <h2 className="font-serif text-4xl leading-[1.05] tracking-[-0.01em] text-deep md:text-[3.4rem]">One app, <em>four</em> samples.</h2>
              <p className="max-w-sm leading-relaxed text-ink-muted">Blood comes first. Sputum, stool and urine follow.</p>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {SAMPLES.map((x, i) => (
                <Reveal key={x.id} delay={i * 90}
                        className={`group relative flex min-h-[14rem] flex-col sm:aspect-[4/5] sm:min-h-0 overflow-hidden rounded-[1.6rem] ${x.bg} p-6 transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_50px_-25px_rgba(21,26,59,0.35)]`}>
                  <p className={`text-sm font-semibold ${x.fg}`}>{x.prep}</p>
                  <h3 className="mt-1 font-serif text-5xl tracking-[-0.02em] text-deep">{x.name}</h3>
                  <p className="mt-3 max-w-[15rem] text-sm leading-relaxed text-ink-muted">{x.line}</p>
                  <div className="absolute -bottom-4 -right-4 transition duration-700 ease-out group-hover:-rotate-12 group-hover:scale-125">
                    <Motif id={x.id} />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* how it works */}
        <section id="how" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid gap-14 md:grid-cols-[0.85fr_1.15fr]">
            <Reveal className="md:sticky md:top-28 md:self-start">
              <h2 className="font-serif text-4xl leading-[1.05] tracking-[-0.01em] text-deep md:text-[3.4rem]">From slide to <em>signed-off</em> result.</h2>
              <div className="relative mx-auto mt-10 w-60 md:mx-0">
                <div className="absolute -inset-5 -rotate-3 rounded-[2.6rem] bg-brand-soft" />
                <div className="relative overflow-hidden rounded-[2.2rem] border-[6px] border-deep bg-white shadow-xl">
                  <img src="/app-home.png" alt="The MultiScan app on a phone: choosing a sample type" className="w-full" />
                </div>
              </div>
            </Reveal>
            <ol className="border-t border-ink/10">
              {STEPS.map(([title, text], i) => (
                <Reveal as="li" key={title} delay={i * 80} className="group grid grid-cols-[4.5rem_1fr] gap-4 border-b border-ink/10 py-8">
                  <span className="font-serif text-5xl italic leading-none text-avocado/70 transition group-hover:text-avocado">{i + 1}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-deep">{title}</h3>
                    <p className="mt-2 max-w-md leading-relaxed text-ink-muted">{text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* principles */}
        <section className="relative overflow-hidden bg-avocado text-white">
          <div className="drift pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full border-[28px] border-white/10" />
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <Reveal>
              <h2 className="max-w-3xl font-serif text-4xl leading-[1.08] tracking-[-0.01em] md:text-[3.4rem]">
                We would rather hold a check back than show a result <em>we can't stand behind</em>.
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-10 md:grid-cols-3">
              {PRINCIPLES.map(([t, d], i) => (
                <Reveal key={t} delay={i * 100} className="border-t border-white/30 pt-6">
                  <h3 className="text-xl font-semibold">{t}</h3>
                  <p className="mt-2 leading-relaxed text-white/80">{d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* sign-off */}
      <footer className="bg-night text-white">
        <div className="mx-auto max-w-6xl px-5 pb-10 pt-20 md:pt-28">
          <Reveal>
            <p className="font-serif text-5xl leading-[1] tracking-[-0.02em] md:text-[5.6rem]">
              A second pair of eyes,<br /><em className="text-mint">on every slide</em>.
            </p>
          </Reveal>
          <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-sm text-white/50 md:flex-row">
            <div className="flex items-center gap-2.5">
              <img src="/logo.png" alt="" className="h-7 w-7 rounded-lg opacity-90" />
              <span>© {new Date().getFullYear()} MultiScan AI</span>
            </div>
            <span className="text-center md:text-right">A screening aid, not a diagnosis.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
