import { useBreakpoint } from "./hooks";
import { Tape, Paperclip } from "./decorations";
import { FadeIn } from "./animations";

export default function About({ dark }) {
  const { isMobile } = useBreakpoint();
  const c = dark ? "#f0ede6" : "#2a2a2a";

  return (
    <section id="about" className="nb-bg" style={{ padding: isMobile?"3rem 1.2rem":"4rem 3rem", background: dark?"#1a1a1a":undefined }}>
      <div style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns: isMobile?"1fr":"1fr 1fr", gap:"2rem" }}>
        {/* About Me */}
        <FadeIn>
          <div className="sketch-card-lined" style={{padding: "2.2rem 2.2rem 2.2rem 2.8rem", position:"relative", background: dark?"#2a2a2a":"#fffef9", borderColor:c }}>
            <Tape color={dark?"#555":"#d4d0c8"} />
            <div style={{ position:"absolute", left:10, top:20, display:"flex", flexDirection:"column", gap:18 }}>
              {[...Array(7)].map((_,i) => (
                <div key={i} style={{ width:8, height:8, borderRadius:"50%", border:`1.5px solid ${dark?"#555":"#aaa9a0"}`, background: dark?"#1a1a1a":"#f0ede6" }}/>
              ))}
            </div>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"1rem" }}>
              <h2 style={{ fontFamily:"'Caveat',cursive", fontSize:"1.8rem", fontWeight:700, color:c,height: "100%" }}>About Me</h2>
              <span style={{ fontSize:"1.4rem" }}>🙂</span>
            </div>
            <p style={{ fontFamily:"'Patrick Hand',cursive", fontSize:"1.05rem", color: dark?"#ccc":"#444", lineHeight:2, position:"relative", zIndex:1 }}>
             Operations Support Engineer with experience in application support, troubleshooting, SQL, API validation, production support and JavaScript-based development. Currently expanding my expertise in Playwright, React and AI-powered applications. 💡
              </p>
            <div style={{ textAlign:"right", marginTop:"1rem", fontSize:"1.2rem" }}>♡</div>
          </div>
        </FadeIn>

        {/* Quick Info */}
        <FadeIn delay={0.1}>
          <div className="sketch-card" style={{ padding:"1.8rem 1.8rem 1.8rem 2rem", position:"relative", background: dark?"#2a2a2a":"#fffef9", borderColor:c }}>
            <Paperclip />
            <div style={{ position:"absolute", left:10, top:20, display:"flex", flexDirection:"column", gap:22 }}>
              {[...Array(4)].map((_,i) => (
                <div key={i} style={{ width:8, height:8, borderRadius:"50%", border:`1.5px solid ${dark?"#555":"#aaa9a0"}`, background: dark?"#1a1a1a":"#f0ede6" }}/>
              ))}
            </div>
            <h2 style={{ fontFamily:"'Caveat',cursive", fontSize:"1.8rem", fontWeight:700, color:c, marginBottom:"1.2rem", paddingLeft:18 }}>Quick Info</h2>
            {[
              { icon:"🎓", text:"MSC Computer Science , BSC Computer Science" },
              { icon:"📍", text:"Pune, India" },
              { icon:"♡",  text:"Interests: Passionate about Web Development and Software Engineering , Enjoy solving problems and creating intuitive user experiences" },
              { icon:"🎯", text:"Goal: To contribute to real-world projects and grow in the software industry." },
            ].map(({ icon, text }, i) => (
              <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:10, paddingBottom:"0.8rem", marginBottom:"0.8rem", borderBottom: i<3?`1px solid ${dark?"#444":"#d4d0c8"}`:"none", paddingLeft:18 }}>
                <span style={{ fontSize:"1rem", minWidth:20 }}>{icon}</span>
                <span style={{ fontFamily:"'Patrick Hand',cursive", fontSize:"1.05rem", color: dark?"#ccc":"#444", lineHeight:1.6 }}>{text}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
