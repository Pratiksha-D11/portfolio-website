import { useState } from "react";
import { useBreakpoint } from "./hooks";
import { SparkDoodle, TornEdge, Hamburger } from "./decorations";

export default function Nav({ dark, setDark }) {
  const { isMobile } = useBreakpoint();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const links = ["Home","About","Skills","Projects","Certifications","Contact"];
  const bg = dark ? "#1a1a1a" : "#f7f4ee";
  const c  = dark ? "#f0ede6" : "#2a2a2a";

  const handleLink = (l) => { setActive(l); setDrawerOpen(false); };

  return (
    <>
      <nav style={{
        position:"fixed", top:0, left:0, right:0, zIndex:200,
        background: bg,
        borderBottom:`1.8px solid ${c}`,
        display:"flex", alignItems:"center", justifyContent:"space-between",
        padding: isMobile ? "0.65rem 1.2rem" : "0.65rem 3rem",
        backgroundImage: dark ? "none" : "linear-gradient(#c8c4bc 1px,transparent 1px),linear-gradient(90deg,#c8c4bc 1px,transparent 1px)",
        backgroundSize:"28px 28px"
      }}>
        {/* Logo */}
        <div style={{ display:"flex", alignItems:"center", gap:5 }}>
         <div style={{ display:"flex", alignItems:"center", gap:5 }}>
  <SparkDoodle style={{ color: c }}/>
  <span style={{ fontFamily:"'Caveat',cursive", fontSize:"1.7rem", fontWeight:700, color:c, letterSpacing:1 }}>PD</span>
  <SparkDoodle style={{ color: c }}/>
</div>
        </div>

        {/* Desktop links */}
        {!isMobile && (
          <div style={{ display:"flex", gap:"1.4rem", alignItems:"center" }}>
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}
                className={`nav-link${active===l?" active":""}`}
                onClick={() => handleLink(l)}
                style={{ color:c }}>
                {l}
              </a>
            ))}
            <button onClick={() => setDark(d=>!d)} style={{ background:"none", border:"none", cursor:"pointer", fontSize:"1.2rem" }}>
              {dark ? "☀️" : "🌙"}
            </button>
          </div>
        )}

        {/* Mobile controls */}
        {isMobile && (
          <div style={{ display:"flex", alignItems:"center", gap:12 }}>
            <button onClick={() => setDark(d=>!d)} style={{ background:"none", border:"none", cursor:"pointer", fontSize:"1.1rem" }}>
              {dark ? "☀️" : "🌙"}
            </button>
            <button onClick={() => setDrawerOpen(o=>!o)} style={{ background:"none", border:"none", cursor:"pointer", padding:4 }}>
              <Hamburger open={drawerOpen} color={c} />
            </button>
          </div>
        )}
      </nav>

      {/* Overlay */}
      <div className={`drawer-overlay${drawerOpen?" open":""}`} onClick={() => setDrawerOpen(false)} />

      {/* Drawer */}
      <div className={`mobile-drawer${drawerOpen?" open":""}`}
        style={{ background: bg, borderLeft:`1.8px solid ${c}`, boxShadow:"-4px 0 20px rgba(0,0,0,0.12)" }}>
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`}
            className={`nav-link${active===l?" active":""}`}
            onClick={() => handleLink(l)}
            style={{ color:c, fontSize:"1.3rem" }}>
            {l}
          </a>
        ))}
      </div>
    </>
  );
}
