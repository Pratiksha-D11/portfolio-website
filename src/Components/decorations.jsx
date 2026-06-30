export const Tape = ({ rotate = 0, color = "#d4d0c8" }) => (
  <div className="tape-strip" style={{ position:"absolute", top:-14, left:"50%", transform:`translateX(-50%) rotate(${rotate}deg)`, zIndex:2 }}>
    <svg width="60" height="20" viewBox="0 0 60 20">
      <rect x="0" y="4" width="60" height="12" rx="2" fill={color} opacity="0.7" stroke="#aaa9a0" strokeWidth="0.5"/>
      <line x1="0" y1="10" x2="60" y2="10" stroke="#aaa9a0" strokeWidth="0.3" opacity="0.5"/>
    </svg>
  </div>
);

export const Paperclip = () => (
  <div style={{ position:"absolute", top:-8, right:16, zIndex:2 }}>
    <svg width="20" height="36" viewBox="0 0 20 36">
      <path d="M10 2 C5 2 2 5 2 9 L2 28 C2 32 5 34 9 34 C13 34 16 32 16 28 L16 11 C16 8 14 6 11 6 C8 6 6 8 6 11 L6 26 C6 28 7.5 29 9 29 C10.5 29 12 28 12 26 L12 12"
        stroke="#888" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  </div>
);

export const StarDoodle = ({ size = 20, style: s = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" style={s}>
    <path d="M12 2 L13.5 9 L20 9 L14.5 13.5 L16.5 20 L12 16 L7.5 20 L9.5 13.5 L4 9 L10.5 9 Z"
      stroke="#2a2a2a" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
  </svg>
);

export const SparkDoodle = ({ style: s = {} }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" style={s}>
    {[[9,1,9,5],[9,13,9,17],[1,9,5,9],[13,9,17,9],[3,3,6,6],[12,12,15,15],[15,3,12,6],[3,15,6,12]].map(([x1,y1,x2,y2],i) => (
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#2a2a2a" strokeWidth="1.5" strokeLinecap="round"/>
    ))}
  </svg>
);

export const Hamburger = ({ open, color }) => (
  <svg width="26" height="20" viewBox="0 0 26 20">
    <line x1="0" y1="3"  x2="26" y2="3"  stroke={color} strokeWidth="2.5" strokeLinecap="round"
      style={{ transform: open?"rotate(45deg) translate(4px,4px)":"none", transformOrigin:"13px 3px", transition:"transform 0.22s" }}/>
    <line x1="0" y1="10" x2="26" y2="10" stroke={color} strokeWidth="2.5" strokeLinecap="round"
      style={{ opacity: open?0:1, transition:"opacity 0.22s" }}/>
    <line x1="0" y1="17" x2="26" y2="17" stroke={color} strokeWidth="2.5" strokeLinecap="round"
      style={{ transform: open?"rotate(-45deg) translate(4px,-4px)":"none", transformOrigin:"13px 17px", transition:"transform 0.22s" }}/>
  </svg>
);

export function TornEdge({ dark }) {
  const fill = dark ? "#1a1a1a" : "#f7f4ee";
  const path = "M0 0 L0 14 Q18 4 36 13 Q54 22 72 10 Q90 0 108 12 Q126 22 144 8 Q162 0 180 14 Q198 22 216 8 Q234 0 252 12 Q270 22 288 8 Q306 0 324 14 Q342 22 360 10 Q378 0 396 12 Q414 22 432 8 Q450 0 468 14 Q486 22 504 10 Q522 0 540 12 Q558 22 576 8 Q594 0 612 14 Q630 22 648 8 Q666 0 684 12 Q702 22 720 8 Q738 0 756 14 Q774 22 792 10 Q810 0 828 12 Q846 22 864 8 Q882 0 900 14 Q918 22 936 8 Q954 0 972 12 Q990 22 1008 8 Q1026 0 1044 14 Q1062 22 1080 10 Q1098 0 1116 12 Q1134 22 1152 8 Q1170 0 1188 14 L1200 14 L1200 0 Z";
  return (
    <svg className="nav-torn-edge" viewBox="0 0 1200 22" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d={path} fill={fill}/>
    </svg>
  );
}

export const DevIllustration = () => (
  <img
    src="/Profile-Img.png"
    alt="Pratiksha"
    style={{
      width: "100%",
      maxWidth: "480px",
      objectFit: "contain",
      filter: "drop-shadow(4px 4px 0px rgba(0,0,0,0.15))",
    }}
  />
);