
const nav = document.getElementById('mainNav');
const railFill = document.getElementById('railFill');
const railDot = document.getElementById('railDot');
const sections = Array.from(document.querySelectorAll('[data-theme]'));

function updateOnScroll(){
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = Math.min(100, Math.max(0, (scrollTop/docHeight)*100));
  railFill.style.height = pct + '%';
  railDot.style.top = pct + '%';

  // determine current theme near top of viewport
  let current = 'light';
  const probeY = 90;
  for(const sec of sections){
    const r = sec.getBoundingClientRect();
    if(r.top <= probeY && r.bottom > probeY){
      current = sec.getAttribute('data-theme');
      break;
    }
  }
  if(current === 'dark'){
    nav.classList.add('on-dark');
    railDot.style.background = '#A8493F';
  } else {
    nav.classList.remove('on-dark');
    railDot.style.background = '#C75B39';
  }
}
window.addEventListener('scroll', updateOnScroll, {passive:true});
window.addEventListener('resize', updateOnScroll);
updateOnScroll();

// ---------- icon injection (inline SVG, currentColor-friendly) ----------
const ICONS = {
  'icon-agro': `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 44V20" stroke="#D4A24C" stroke-width="2"/><path d="M24 22C24 22 12 20 12 8C24 8 24 22 24 22Z" stroke="#D4A24C" stroke-width="2" stroke-linejoin="round"/><path d="M24 28C24 28 36 26 36 14C24 14 24 28 24 28Z" stroke="#D4A24C" stroke-width="2" stroke-linejoin="round"/><line x1="10" y1="44" x2="38" y2="44" stroke="#D4A24C" stroke-width="2"/></svg>`,
  'icon-cattle': `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="24" cy="28" rx="14" ry="9" stroke="#D4A24C" stroke-width="2"/><path d="M14 22C12 18 10 16 7 16" stroke="#D4A24C" stroke-width="2" stroke-linecap="round"/><path d="M34 22C36 18 38 16 41 16" stroke="#D4A24C" stroke-width="2" stroke-linecap="round"/><circle cx="19" cy="26" r="1.5" fill="#D4A24C"/><circle cx="29" cy="26" r="1.5" fill="#D4A24C"/><path d="M16 37L13 42M32 37L35 42M22 37L21 42M26 37L27 42" stroke="#D4A24C" stroke-width="2" stroke-linecap="round"/></svg>`,
  'icon-construction': `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 40L18 14L24 28L30 14L40 40" stroke="#D4A24C" stroke-width="2" stroke-linejoin="round"/><line x1="6" y1="40" x2="42" y2="40" stroke="#D4A24C" stroke-width="2"/><line x1="14" y1="40" x2="20" y2="24" stroke="#D4A24C" stroke-width="2"/><line x1="28" y1="24" x2="34" y2="40" stroke="#D4A24C" stroke-width="2"/></svg>`,
  'icon-mining': `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 6V12" stroke="#D4A24C" stroke-width="2" stroke-linecap="round"/><path d="M14 16L34 16L40 42H8L14 16Z" stroke="#D4A24C" stroke-width="2" stroke-linejoin="round"/><path d="M18 24H30M16 32H32" stroke="#D4A24C" stroke-width="2"/></svg>`,
  'icon-textile': `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 8L24 14L32 8L36 16L30 20V42H18V20L12 16L16 8Z" stroke="#D4A24C" stroke-width="2" stroke-linejoin="round"/></svg>`,
  'icon-fiscal': `<svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="11" stroke="#C75B39" stroke-width="2"/><line x1="26" y1="26" x2="36" y2="36" stroke="#C75B39" stroke-width="2" stroke-linecap="round"/><path d="M13 18L17 22L24 14" stroke="#C75B39" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  'icon-law': `<svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="21" y1="6" x2="21" y2="34" stroke="#C75B39" stroke-width="2"/><path d="M8 12L13 22H3L8 12Z" stroke="#C75B39" stroke-width="2" stroke-linejoin="round"/><path d="M34 12L39 22H29L34 12Z" stroke="#C75B39" stroke-width="2" stroke-linejoin="round"/><line x1="6" y1="12" x2="21" y2="9" stroke="#C75B39" stroke-width="2"/><line x1="36" y1="12" x2="21" y2="9" stroke="#C75B39" stroke-width="2"/><line x1="10" y1="36" x2="32" y2="36" stroke="#C75B39" stroke-width="2" stroke-linecap="round"/></svg>`,
  'icon-app': `<svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="11" y="5" width="20" height="32" rx="3" stroke="#C75B39" stroke-width="2"/><line x1="17" y1="30" x2="25" y2="30" stroke="#C75B39" stroke-width="2" stroke-linecap="round"/></svg>`,
  'icon-report': `<svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 4L37 34H5L21 4Z" stroke="#C75B39" stroke-width="2" stroke-linejoin="round"/><line x1="21" y1="16" x2="21" y2="24" stroke="#C75B39" stroke-width="2" stroke-linecap="round"/><circle cx="21" cy="29" r="1.4" fill="#C75B39"/></svg>`,
  'icon-aware': `<svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="21" cy="21" r="15" stroke="#C75B39" stroke-width="2"/><path d="M21 13V22L27 26" stroke="#C75B39" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
};
Object.keys(ICONS).forEach(id => {
  const el = document.getElementById(id);
  if(el) el.innerHTML = ICONS[id];
});

// ---------- simplified Brazil map with region highlights ----------
const mapSvg = `
<svg viewBox="0 0 360 360" width="100%" style="max-width:440px" xmlns="http://www.w3.org/2000/svg">
  <!-- simplified schematic regions, not geographically precise -->
  <g stroke="#1B1E24" stroke-width="1.2">
    <path d="M120 30 L230 20 L260 70 L240 110 L150 120 L100 90 Z" fill="#A8493F" opacity="0.92"/>
    <text x="178" y="72" font-family="JetBrains Mono" font-size="11" fill="#F2EDE4" text-anchor="middle">NORTE</text>

    <path d="M230 20 L320 35 L335 90 L280 130 L260 70 Z" fill="#A8493F" opacity="0.75"/>
    <text x="290" y="75" font-family="JetBrains Mono" font-size="10" fill="#F2EDE4" text-anchor="middle">NORDESTE</text>

    <path d="M150 120 L240 110 L280 130 L260 190 L190 210 L140 170 Z" fill="#D4A24C" opacity="0.85"/>
    <text x="205" y="160" font-family="JetBrains Mono" font-size="10" fill="#1A1D23" text-anchor="middle">CENTRO-OESTE</text>

    <path d="M190 210 L260 190 L290 230 L250 280 L200 270 Z" fill="#D4A24C" opacity="0.95"/>
    <text x="240" y="240" font-family="JetBrains Mono" font-size="9.5" fill="#1A1D23" text-anchor="middle">SUDESTE</text>

    <path d="M140 170 L190 210 L200 270 L160 320 L110 290 L120 220 Z" fill="#3A3F4A" opacity="0.9"/>
    <text x="160" y="255" font-family="JetBrains Mono" font-size="9.5" fill="#F2EDE4" text-anchor="middle">SUL</text>
  </g>
</svg>`;
const mapHolder = document.getElementById('brazil-map');
if(mapHolder) mapHolder.innerHTML = mapSvg;