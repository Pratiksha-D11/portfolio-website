import { useBreakpoint } from "./hooks";
import { Tape, Paperclip, SparkDoodle } from "./decorations";
import { FadeIn } from "./animations";

export default function CertAchieve({ dark }) {
  const { isMobile, isTablet } = useBreakpoint();
  const c = dark ? "#f0ede6" : "#2a2a2a";
  const cols = isMobile ? "1fr" : isTablet ? "1fr 1fr" : "1fr 1fr 1fr";

  return (
    <section id="certifications" className="nb-bg" style={{ padding: isMobile?"3rem 1.2rem":"3.5rem 3rem", background: dark?"#1a1a1a":undefined }}>
      <div style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:cols, gap:"1.5rem", alignItems:"start" }}>

        {/* Certifications */}
        <FadeIn>
          <div className="sketch-card wiggle-card" style={{ padding:"1.6rem 1.6rem 1.6rem 2rem", position:"relative", background: dark?"#2a2a2a":"#fffef9", borderColor:c, boxShadow:`3px 3px 0 ${c}` }}>
            <Paperclip />
            <div style={{ position:"absolute", left:8, top:20, display:"flex", flexDirection:"column", gap:18 }}>
              {[...Array(5)].map((_,i) => (
                <div key={i} style={{ width:7, height:7, borderRadius:"50%", border:`1.5px solid ${dark?"#555":"#aaa9a0"}`, background: dark?"#1a1a1a":"#f0ede6" }}/>
              ))}
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:"0.8rem" }}>
              <span style={{ fontSize:"1.3rem" }}>🏅</span>
              <h3 style={{ fontFamily:"'Caveat',cursive", fontSize:"1.5rem", fontWeight:700, color:c }}>Certifications</h3>
            </div>
            {[
              "Full Stack Web Development by Tap Academy, 2023"
            ].map((cert,i) => (
              <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:8, marginBottom:"0.6rem" }}>
                <span style={{ color:c, marginTop:2 }}>•</span>
                <span style={{ fontFamily:"'Patrick Hand',cursive", fontSize:"0.95rem", color: dark?"#bbb":"#555", lineHeight:1.6 }}>{cert}</span>
              </div>
            ))}
            <SparkDoodle style={{ position:"absolute", bottom:12, right:12, opacity:0.4 }}/>
          </div>
        </FadeIn>

         {/* Education */}
        <FadeIn delay={0.1}>
          <div className="sketch-card wiggle-card" style={{ padding:"1.6rem 1.6rem 1.6rem 2rem", position:"relative", background: dark?"#2a2a2a":"#fffef9", borderColor:c, boxShadow:`3px 3px 0 ${c}` }}>
            <Tape color={dark?"#555":"#d4d0c8"} rotate={-3}/>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:"1rem" }}>
              <span style={{ fontSize:"1.3rem" }}>📚</span>
              <h3 style={{ fontFamily:"'Caveat',cursive", fontSize:"1.5rem", fontWeight:700, color:c }}>Education</h3>
            </div>
            {[
              {
                degree: "MSC Computer Science",  // ← update this
                college: "Vishwakarma College of Arts Commerce and Science",          // ← update this
                year: "2021 – 2023",                  // ← update this
                icon: "🎓"
              },
              {
                degree: " BSC Computer Science",     // ← update this
                college: "Vishwakarma College of Arts Commerce and Science",          // ← update this
                year: "2018 – 2021",                  // ← update this
                icon: "🎓"
              },
            ].map((edu, i) => (
              <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:10, padding:"0.8rem", background: dark?"#1a1a1a":"#f7f4ee", border:`1.5px solid ${c}`, borderRadius:4, marginBottom:"0.8rem" }}>
                <span style={{ fontSize:"1.2rem" }}>{edu.icon}</span>
                <div>
                  <p style={{ fontFamily:"'Caveat',cursive", fontSize:"1.1rem", fontWeight:700, color:c }}>{edu.degree}</p>
                  <p style={{ fontFamily:"'Patrick Hand',cursive", fontSize:"0.9rem", color: dark?"#bbb":"#666" }}>{edu.college}</p>
                  <p style={{ fontFamily:"'Patrick Hand',cursive", fontSize:"0.85rem", color: dark?"#888":"#999" }}>{edu.year}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Quote sticky note */}
        <FadeIn delay={0.2} style={{ gridColumn: isTablet && !isMobile ? "1 / -1" : undefined }}>
          <div className="dashed-card wiggle-card" style={{ padding:"2rem 1.5rem", textAlign:"center", background: dark?"#2d2a1a":"#fffbdd", borderColor: dark?"#888":"#c8a800" }}>
            <Tape color="#e8d44d"/>
            <p style={{ fontFamily:"'Caveat',cursive", fontSize:"1.5rem", fontWeight:700, color: dark?"#f0e080":"#5a4800", lineHeight:1.6 }}>
              "Code.<br/>Learn.<br/>Build.<br/>Repeat."
            </p>
            <div style={{ marginTop:"0.8rem", fontSize:"1rem", color: dark?"#f0e080":"#c8a800" }}>♡</div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}