export const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Patrick+Hand&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: #1c1c1c; overflow-x: hidden; }

  .nb-bg {
    background-color: #f7f4ee;
    background-image:
      linear-gradient(#c8c4bc 1px, transparent 1px),
      linear-gradient(90deg, #c8c4bc 1px, transparent 1px);
    background-size: 28px 28px;
  }

  .sketch-card {
    background: #fffef9;
    border: 1.8px solid #2a2a2a;
    border-radius: 3px;
    box-shadow: 3px 3px 0 #2a2a2a;
    position: relative;
  }
  .sketch-card-lined {
    background-color: #fffef9;
    background-image: linear-gradient(#d4d0c8 1px, transparent 1px);
    background-size: 100% 28px;
    border: 1.8px solid #2a2a2a;
    border-radius: 3px;
    box-shadow: 3px 3px 0 #2a2a2a;
    position: relative;
  }
  .dashed-card {
    background: #fffef9;
    border: 2px dashed #2a2a2a;
    border-radius: 3px;
    position: relative;
  }

  .wiggle-card {
    transition: transform 0.18s ease, box-shadow 0.18s ease;
    transform-origin: center bottom;
    will-change: transform;
  }
  .wiggle-card:hover {
    transform: rotate(-1.5deg) translateY(-4px);
    box-shadow: 6px 8px 0 #2a2a2a !important;
  }
  .wiggle-card:hover .tape-strip {
    transform: translateX(-50%) rotate(-3deg) translateY(-2px) !important;
  }

  .skill-pill {
    border: 1.5px solid #2a2a2a;
    border-radius: 4px;
    background: #fffef9;
    box-shadow: 2px 2px 0 #2a2a2a;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 8px;
    gap: 6px;
    font-family: 'Patrick Hand', cursive;
    font-size: 0.85rem;
    color: #2a2a2a;
    min-width: 70px;
  }
  .pill-pop {
    transition: transform 0.15s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.15s ease;
  }
  .pill-pop:hover {
    transform: translateY(-5px) rotate(2deg) scale(1.06);
    box-shadow: 4px 4px 0 #2a2a2a;
  }

  .btn-sketch {
    font-family: 'Patrick Hand', cursive;
    font-size: 0.9rem;
    background: #fffef9;
    border: 1.8px solid #2a2a2a;
    border-radius: 4px;
    box-shadow: 3px 3px 0 #2a2a2a;
    padding: 8px 18px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    text-decoration: none;
    color: #2a2a2a;
    transition: transform 0.12s, box-shadow 0.12s;
  }
  .btn-sketch:hover { transform: translate(-2px,-2px); box-shadow: 5px 5px 0 #2a2a2a; }
  .btn-sketch:active { transform: translate(1px,1px); box-shadow: 1px 1px 0 #2a2a2a; }

  .btn-solid {
    font-family: 'Patrick Hand', cursive;
    font-size: 0.9rem;
    background: #2a2a2a;
    color: #fffef9;
    border: 1.8px solid #2a2a2a;
    border-radius: 4px;
    box-shadow: 3px 3px 0 #888;
    padding: 8px 18px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    text-decoration: none;
    transition: transform 0.12s, box-shadow 0.12s;
  }
  .btn-solid:hover  { transform: translate(-2px,-2px); box-shadow: 5px 5px 0 #888; }
  .btn-solid:active { transform: translate(1px,1px); box-shadow: 1px 1px 0 #888; }

  .tag {
    font-family: 'Patrick Hand', cursive;
    font-size: 0.78rem;
    border: 1.5px solid #2a2a2a;
    border-radius: 20px;
    padding: 2px 10px;
    background: #f0ede6;
    color: #2a2a2a;
  }

  .nav-link {
    font-family: 'Patrick Hand', cursive;
    font-size: 1rem;
    color: #2a2a2a;
    text-decoration: none;
    padding-bottom: 2px;
    white-space: nowrap;
    position: relative;
  }
  .nav-link::after {
    content:'';
    position: absolute;
    bottom: -2px; left: 0;
    width: 0; height: 2px;
    background: #2a2a2a;
    transition: width 0.22s ease;
  }
  .nav-link:hover::after,
  .nav-link.active::after { width: 100%; }
  .nav-link.active { font-weight: 700; }

  .nav-torn-wrapper {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 200;
  }
  .nav-torn-inner {
    background-color: #f7f4ee;
    background-image:
      linear-gradient(#c8c4bc 1px, transparent 1px),
      linear-gradient(90deg, #c8c4bc 1px, transparent 1px);
    background-size: 28px 28px;
  }
  .nav-torn-edge {
    display: block;
    width: 100%;
    height: 22px;
    margin-top: -1px;
  }

  .mobile-drawer {
    position: fixed;
    top: 0; right: 0;
    height: 100vh;
    width: 72vw; max-width: 280px;
    z-index: 300;
    display: flex; flex-direction: column;
    padding: 5rem 2rem 2rem;
    gap: 1.6rem;
    transform: translateX(100%);
    transition: transform 0.28s ease;
  }
  .mobile-drawer.open { transform: translateX(0); }
  .drawer-overlay {
    position: fixed; inset: 0;
    background: rgba(0,0,0,0.35);
    z-index: 250; opacity: 0;
    pointer-events: none;
    transition: opacity 0.28s;
  }
  .drawer-overlay.open { opacity: 1; pointer-events: all; }

  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
  .cursor-blink {
    display: inline-block;
    width: 3px; height: 1em;
    background: currentColor;
    margin-left: 3px;
    vertical-align: text-bottom;
    animation: blink 0.9s step-end infinite;
  }

  .draw-path {
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
    transition: stroke-dashoffset 1s ease;
  }
  .draw-path.drawn { stroke-dashoffset: 0; }

  .tape-strip {
    transition: transform 0.18s ease;
  }

  .fadein-init {
    opacity: 0;
    transform: translateY(18px);
    transition: opacity 0.55s ease, transform 0.55s ease;
  }
  .fadein-init.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width:639px)  { .hide-mobile { display:none !important; } }
  @media (min-width:640px)  { .show-mobile-only { display:none !important; } }
`;