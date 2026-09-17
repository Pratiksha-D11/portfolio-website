import { useBreakpoint } from "./hooks";
import { StarDoodle, SparkDoodle, DevIllustration } from "./decorations";
import { TypewriterName, DrawUnderline, FadeIn } from "./animations";

/* ── social links — update these ── */
const SOCIAL_LINKS = [
  "https://www.linkedin.com/in/pratiksha-d-754b3021a",   // LinkedIn
  "https://github.com/Pratiksha-D11/",             // GitHub
  "mailto:dpratiksha741@gmail.com"                         // Email
];

export default function Hero({ dark }) {
  const { isMobile, isTablet } = useBreakpoint();
  const c   = dark ? "#f0ede6" : "#2a2a2a";
  const sub = dark ? "#aaa"    : "#555";

  return (
    <section id="home" className="nb-bg" style={{
      paddingTop: isMobile ? "5rem" : "6.5rem",
      paddingBottom: "2rem",
      background: dark ? "#1a1a1a" : undefined,
      minHeight: "70vh",
      display: "flex", alignItems: "center"
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        padding: isMobile ? "1.5rem 1.2rem" : "0 3rem",
        display: "grid",
        gridTemplateColumns: isTablet ? "1fr" : "1fr 1fr",
        gap: "2rem",
        alignItems: "center",
        width: "100%"
      }}>
        {/* Text */}
        <div>
          <div style={{ display:"inline-flex", alignItems:"center", gap:6, border:`1.8px solid ${c}`, borderRadius:30, padding:"4px 16px", marginBottom:"0.8rem", background: dark?"#2a2a2a":"#fffef9" }}>
            <span style={{ fontFamily:"'Patrick Hand',cursive", fontSize:"1rem", color:c }}>Hi, I'm</span>
          </div>

          <h1 style={{ fontFamily:"'Caveat',cursive", fontSize: isMobile?"2.4rem":"clamp(2.8rem,5vw,4rem)", fontWeight:700, color:c, lineHeight:1.1, marginBottom:"0.3rem" }}>
            Pratiksha Deshmukh
          </h1>

          <svg width="260" height="10" viewBox="0 0 260 10" style={{ display:"block", marginBottom:"1rem" }}>
            <path d="M2 7 Q33 2 65 7 Q98 12 130 7 Q162 2 195 7 Q228 12 258 7" stroke={c} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          </svg>

          <div style={{ display:"inline-block", background:c, color: dark?"#1a1a1a":"#f7f4ee", padding:"5px 18px", borderRadius:3, fontFamily:"'Patrick Hand',cursive", fontSize:"0.95rem", fontWeight:600, marginBottom:"1rem" }}>
            Operations Support Engineer
          </div>

          <p style={{ fontFamily:"'Patrick Hand',cursive", fontSize:"1.05rem", color:sub, lineHeight:1.8, marginBottom:"1.5rem", maxWidth:400 }}>
          Application Support • Production Support • QA Automation
             </p>

          {/* Buttons */}
          <div style={{ display:"flex", gap:"0.8rem", marginBottom:"1.2rem", flexWrap:"wrap" }}>
            <a href="#" className="btn-sketch" style={{ color:c, borderColor:c, background: dark?"#2a2a2a":"#fffef9" }}>
              ⬇ Download Resume
            </a>
            <a href={SOCIAL_LINKS[1]} target="_blank" rel="noreferrer" className="btn-sketch" style={{ color:c, borderColor:c, background: dark?"#2a2a2a":"#fffef9" }}>
              <svg width="15" height="15" viewBox="0 0 16 16" fill={c}><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
              View GitHub
            </a>
          </div>

          {/* Social icons */}
          <div style={{ display:"flex", gap:"0.8rem" }}>
            {[
              <svg width="14" height="14" viewBox="0 0 24 24" fill={c}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>,
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>,
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            ].map((icon, i) => (
              <a key={i}
                href={SOCIAL_LINKS[i]}
                target="_blank"
                rel="noreferrer"
                style={{ width:34, height:34, border:`1.8px solid ${c}`, borderRadius:6, display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none", background: dark?"#2a2a2a":"#fffef9", boxShadow:`2px 2px 0 ${c}` }}>
                {icon}
              </a>
            ))}
          </div>

          <svg width="30" height="40" viewBox="0 0 30 40" style={{ marginTop:"1.5rem", opacity:0.4 }}>
            <path d="M15 2 Q18 20 15 35 M8 28 Q15 36 22 28" stroke={c} strokeWidth="2" fill="none" strokeLinecap="round"/>
          </svg>
        </div>

        {/* Illustration */}
        {!isTablet && (
          <div style={{ display:"flex", justifyContent:"center", alignItems:"center", position:"relative" }}>
            <StarDoodle style={{ position:"absolute", top:10, left:20, opacity:0.5 }} size={26}/>
            <SparkDoodle style={{ position:"absolute", top:28, right:10 }}/>
            <StarDoodle style={{ position:"absolute", bottom:20, right:30, opacity:0.4 }} size={20}/>
            <DevIllustration />
          </div>
        )}
        {isTablet && !isMobile && (
          <div style={{ display:"flex", justifyContent:"center" }}>
            <DevIllustration />
          </div>
        )}
      </div>
    </section>
  );
}