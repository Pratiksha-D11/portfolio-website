import { useState, useEffect, useRef } from "react";

const FULL_NAME = "Pratiksha Deshmukh";

export function FadeIn({ children, delay = 0, style: s = {} }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionDelay = `${delay}s`;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); }
    }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className="fadein-init" style={s}>
      {children}
    </div>
  );
}

export function DrawUnderline({ width = 260, color = "#2a2a2a", style: s = {} }) {
  const ref = useRef(null);
  const [drawn, setDrawn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setDrawn(true);
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const d = `M4 7 Q${width * 0.25} 2 ${width * 0.5} 7 Q${width * 0.75} 12 ${width - 4} 7`;
  return (
    <svg ref={ref} width={width} height="12" viewBox={`0 0 ${width} 12`} style={{ display:"block", marginBottom:"0.6rem", ...s }}>
      <path d={d} stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none"
        className={`draw-path${drawn ? " drawn" : ""}`}/>
    </svg>
  );
}

export function TypewriterName({ dark }) {
  const c = dark ? "#f0ede6" : "#2a2a2a";
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const start = setTimeout(() => {
      const timer = setInterval(() => {
        i++;
        setDisplayed(FULL_NAME.slice(0, i));
        if (i >= FULL_NAME.length) {
          clearInterval(timer);
          setTimeout(() => setDone(true), 600);
        }
      }, 70);
      return () => clearInterval(timer);
    }, 400);
    return () => clearTimeout(start);
  }, []);

  return (
    <h1 style={{
      fontFamily: "'Caveat',cursive",
      fontSize: "clamp(2.4rem,5vw,4rem)",
      fontWeight: 700,
      color: c,
      lineHeight: 1.1,
      marginBottom: "0.3rem",
      minHeight: "1.2em"
    }}>
      {displayed}
      {!done && <span className="cursor-blink" style={{ color: c }} />}
    </h1>
  );
}

export function SectionHeading({ icon, label, dark }) {
  const c = dark ? "#f0ede6" : "#2a2a2a";
  return (
    <div style={{ marginBottom: "1.8rem" }}>
      <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:4 }}>
        {icon && <span style={{ fontSize:"1.4rem" }}>{icon}</span>}
        <h2 style={{ fontFamily:"'Caveat',cursive", fontSize:"2rem", fontWeight:700, color:c }}>{label}</h2>
      </div>
      <DrawUnderline width={label.length * 14 + 40} color={c} />
    </div>
  );
}