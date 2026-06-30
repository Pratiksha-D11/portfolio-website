import { useBreakpoint } from "./hooks";
import { Tape } from "./decorations";
import { DrawUnderline, FadeIn } from "./animations";
import { PROJECTS } from "./constants";

function ProjectCard({ title, icon, desc, tags, demo, github, dark, delay }) {
  const c = dark ? "#f0ede6" : "#2a2a2a";
  return (
    <FadeIn delay={delay}>
      <div className="sketch-card-lined wiggle-card" style={{ padding:"1.4rem 1.4rem 1.4rem 2rem", position:"relative", height:"100%", display:"flex", flexDirection:"column", background: dark?"#2a2a2a":"#fffef9", borderColor:c, boxShadow:`3px 3px 0 ${c}` }}>
        <Tape color={dark?"#555":"#d4d0c8"} />
        <div style={{ position:"absolute", left:8, top:20, display:"flex", flexDirection:"column", gap:16 }}>
          {[...Array(6)].map((_,i) => (
            <div key={i} style={{ width:7, height:7, borderRadius:"50%", border:`1.5px solid ${dark?"#555":"#aaa9a0"}`, background: dark?"#1a1a1a":"#f0ede6" }}/>
          ))}
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:"0.6rem", position:"relative", zIndex:1 }}>
          <span style={{ fontSize:"1.2rem" }}>{icon}</span>
          <h3 style={{ fontFamily:"'Caveat',cursive", fontSize:"1.4rem", fontWeight:700, color:c }}>{title}</h3>
        </div>
        <p style={{ fontFamily:"'Patrick Hand',cursive", fontSize:"0.88rem", color: dark?"#bbb":"#555", lineHeight:1.7, marginBottom:"0.8rem", flex:1, position:"relative", zIndex:1 }}>{desc}</p>
        <div style={{ display:"flex", gap:"0.4rem", flexWrap:"wrap", marginBottom:"0.8rem", position:"relative", zIndex:1 }}>
          {tags.map(t => (
            <span key={t} className="tag" style={{ borderColor:c, color:c, background: dark?"#3a3a3a":"#f0ede6" }}>{t}</span>
          ))}
        </div>
        <div style={{ display:"flex", gap:"1.5rem", position:"relative", zIndex:1 }}>
          <a href={demo}   style={{ fontFamily:"'Patrick Hand',cursive", fontSize:"0.85rem", color:c, textDecoration:"none", borderBottom:`1.5px solid ${c}` }}>Live Demo ↗</a>
          <a href={github} style={{ fontFamily:"'Patrick Hand',cursive", fontSize:"0.85rem", color:c, textDecoration:"none", borderBottom:`1.5px solid ${c}` }}>GitHub ↗</a>
        </div>
      </div>
    </FadeIn>
  );
}

export default function Projects({ dark }) {
  const { isMobile, isTablet } = useBreakpoint();
  const c = dark ? "#f0ede6" : "#2a2a2a";
  return (
    <section id="projects" className="nb-bg" style={{ padding: isMobile?"3rem 1.2rem":"3.5rem 3rem", background: dark?"#1a1a1a":undefined }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <FadeIn>
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:4 }}>
            <span style={{ fontSize:"1.4rem" }}>💻</span>
            <h2 style={{ fontFamily:"'Caveat',cursive", fontSize:"2rem", fontWeight:700, color:c }}>Projects</h2>
          </div>
          <DrawUnderline width={120} color={c} style={{ marginBottom:"1.6rem" }}/>
        </FadeIn>
        <div style={{ display:"grid", gridTemplateColumns: isMobile?"1fr":isTablet?"1fr 1fr":"repeat(3,1fr)", gap:"1.4rem" }}>
          {PROJECTS.map((p,i) => (
            <ProjectCard key={p.title} {...p} dark={dark} delay={i*0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}