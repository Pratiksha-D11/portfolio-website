import { useBreakpoint } from "./hooks";
import { StarDoodle, SparkDoodle } from "./decorations";
import { DrawUnderline, FadeIn } from "./animations";
import { SKILLS } from "./constants";

export default function Skills({ dark }) {
  const { isMobile } = useBreakpoint();
  const c = dark ? "#f0ede6" : "#2a2a2a";

  return (
    <section id="skills" className="nb-bg" style={{ padding: isMobile?"3rem 1.2rem":"3.5rem 3rem", background: dark?"#1a1a1a":undefined }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <FadeIn>
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:4 }}>
            <StarDoodle size={26} style={{ color: c }}/>
            <h2 style={{ fontFamily:"'Caveat',cursive", fontSize:"2rem", fontWeight:700, color:c }}>Skills</h2>
            <SparkDoodle style={{ marginLeft:6, color: c }}/>
          </div>
          <DrawUnderline width={100} color={c} style={{ marginBottom:"1.6rem" }}/>
        </FadeIn>

        <div style={{ display:"flex", gap:"0.8rem", flexWrap:"wrap" }}>
          {SKILLS.map((s, i) => (
            <FadeIn key={s.name} delay={i * 0.06}>
              <div
                className="skill-pill pill-pop"
                style={{
                 width: isMobile ? 80 : 95,
                  background: dark ? "#2a2a2a" : "#fffef9",
                  borderColor: c,
                  color: c,
                  boxShadow: `2px 2px 0 ${c}`
                }}
              >
                <div style={{ position:"relative" }}>
                  {/* ── SVG icon via URL ── */}
                  <img
                    src={s.icon}
                    alt={s.name}
                    style={{ width:"2rem", height:"2rem", display:"block" }}
                  />
                  {/* tape strip on top */}
                  <div style={{
                    position:"absolute", top:-10, left:"50%",
                    transform:"translateX(-50%)",
                    width:28, height:8,
                    background:"#d4d0c8", opacity:0.7, borderRadius:2
                  }}/>
                </div>
                <span>{s.name}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}