import { useState, useRef } from "react";
import { useBreakpoint } from "./hooks";
import { DrawUnderline, FadeIn } from "./animations";
import emailjs from "@emailjs/browser";

// ── replace these with your actual IDs ──
const SERVICE_ID  = "service_6zfj26s";
const TEMPLATE_ID = "template_p4hwi2i";
const PUBLIC_KEY  = "fsYeVKYro0OaIw7xf";

export default function Contact({ dark }) {
  const { isMobile } = useBreakpoint();
  const c = dark ? "#f0ede6" : "#2a2a2a";
  const formRef = useRef(null);

  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [form, setForm] = useState({ name:"", email:"", msg:"" });

  const handleSend = async () => {
    if (!form.name || !form.email || !form.msg) return;

    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          message:    form.msg,
        },
        PUBLIC_KEY
      );
      setStatus("sent");
      setForm({ name:"", email:"", msg:"" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="nb-bg" style={{ padding: isMobile?"2rem 1.2rem":"2.5rem 3rem", background: dark?"#1a1a1a":undefined }}>
      <div style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns: isMobile?"1fr":"1fr 1fr", gap:"2rem", alignItems:"start" }}>

        {/* Left */}
        <FadeIn>
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:4 }}>
            <span style={{ fontSize:"1.5rem" }}>✈️</span>
            <h2 style={{ fontFamily:"'Caveat',cursive", fontSize:"2rem", fontWeight:700, color:c }}>Contact Me</h2>
          </div>
          <DrawUnderline width={160} color={c} style={{ marginBottom:"1rem" }}/>
          <p style={{ fontFamily:"'Patrick Hand',cursive", fontSize:"1.05rem", color: dark?"#bbb":"#555", lineHeight:1.8, marginBottom:"1.5rem" }}>
            I'm always open to discussing new projects, creative ideas or opportunities. ♡
          </p>
          {[
            { icon:"✉️", text:"dpratiksha741@gmail.com" },
            { icon:"💼", text:"linkedin.com/in/pratiksha-d-754b3021a" },
            { icon:"🐙", text:"https://github.com/Pratiksha-D11/" },
          ].map(({ icon, text }) => (
            <div key={text} style={{ display:"flex", alignItems:"center", gap:10, marginBottom:"0.8rem" }}>
              <span style={{ fontSize:"1.1rem" }}>{icon}</span>
              <span style={{ fontFamily:"'Patrick Hand',cursive", fontSize:"0.9rem", color: dark?"#ccc":"#444", wordBreak:"break-all" }}>{text}</span>
            </div>
          ))}
        </FadeIn>

        {/* Right — form */}
        <FadeIn delay={0.1}>

          {/* Success */}
          {status === "sent" ? (
            <div className="sketch-card" style={{ padding:"2.5rem", textAlign:"center", background: dark?"#2a2a2a":"#fffef9", borderColor:c }}>
              <div style={{ fontSize:"2.5rem", marginBottom:"0.5rem" }}>🎉</div>
              <h3 style={{ fontFamily:"'Caveat',cursive", fontSize:"1.6rem", color:c }}>Message Sent!</h3>
              <p style={{ fontFamily:"'Patrick Hand',cursive", fontSize:"0.9rem", color: dark?"#aaa":"#888", marginTop:"0.4rem" }}>
                I'll get back to you soon ♡
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="btn-sketch"
                style={{ marginTop:"1.2rem", color:c, borderColor:c }}>
                Send Another ↩
              </button>
            </div>

          ) : (
            <div className="sketch-card" style={{ padding:"1.6rem", background: dark?"#2a2a2a":"#fffef9", borderColor:c, boxShadow:`3px 3px 0 ${c}` }}>

              {/* Name */}
              <div style={{ marginBottom:"1rem" }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                  style={{ width:"100%", padding:"10px 14px", fontFamily:"'Patrick Hand',cursive", fontSize:"0.92rem", border:`1.5px solid ${c}`, borderRadius:3, background: dark?"#1a1a1a":"#fffef9", color:c, outline:"none" }}
                />
              </div>

              {/* Email */}
              <div style={{ marginBottom:"1rem" }}>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                  style={{ width:"100%", padding:"10px 14px", fontFamily:"'Patrick Hand',cursive", fontSize:"1rem", border:`1.5px solid ${c}`, borderRadius:3, background: dark?"#1a1a1a":"#fffef9", color:c, outline:"none" }}
                />
              </div>

              {/* Message */}
              <div style={{ marginBottom:"1.2rem" }}>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  value={form.msg}
                  onChange={e => setForm(p => ({ ...p, msg: e.target.value }))}
                  style={{ width:"100%", padding:"10px 14px", fontFamily:"'Patrick Hand',cursive", fontSize:"1rem", border:`1.5px solid ${c}`, borderRadius:3, background: dark?"#1a1a1a":"#fffef9", color:c, outline:"none", resize:"vertical" }}
                />
              </div>

              {/* Error message */}
              {status === "error" && (
                <p style={{ fontFamily:"'Patrick Hand',cursive", fontSize:"0.85rem", color:"#e55", marginBottom:"0.8rem" }}>
                  Something went wrong. Please try again!
                </p>
              )}

              {/* Submit button */}
              <button
                onClick={handleSend}
                disabled={status === "sending"}
                className="btn-solid"
                style={{ width:"100%", justifyContent:"center", borderColor:c, boxShadow:`3px 3px 0 ${dark?"#888":"#555"}`, opacity: status === "sending" ? 0.7 : 1 }}>
                {status === "sending" ? "Sending... ⏳" : "Send Message ✉️"}
              </button>

            </div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}