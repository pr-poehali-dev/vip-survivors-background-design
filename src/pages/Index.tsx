const BG = 'https://cdn.poehali.dev/projects/05ec720a-0e80-4880-81c8-abc332bb5ce1/files/9d3f0996-8620-4661-9dea-be69ec4f6385.jpg';
const CHAR_LI9 = 'https://cdn.poehali.dev/projects/05ec720a-0e80-4880-81c8-abc332bb5ce1/files/6c498680-7ab5-404a-a37a-699cd8cc7f2e.jpg';
const CHAR_A1R = 'https://cdn.poehali.dev/projects/05ec720a-0e80-4880-81c8-abc332bb5ce1/files/cb0e3a37-502c-4e12-85f9-3dbc692ed4de.jpg';

export default function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden select-none" style={{ fontFamily: 'monospace' }}>

      {/* Фон */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${BG})` }} />
      <div className="absolute inset-0 bg-black/55" />

      {/* Контент */}
      <div className="relative z-10 min-h-screen flex items-end justify-between px-4 md:px-12 pb-0">

        {/* === ЛЕВЫЙ — LI9 === */}
        <div className="flex flex-col items-center w-1/3 self-end">
          <a href="#" className="mb-3 block text-center group">
            <span
              className="font-black tracking-widest uppercase inline-block transition-transform duration-300 group-hover:scale-110"
              style={{
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                color: '#ff6a00',
                textShadow: '0 0 15px #ff6a00, 0 0 40px rgba(255,106,0,0.5)',
                WebkitTextStroke: '1px #ff4400',
              }}
            >
              LI9
            </span>
          </a>
          <img
            src={CHAR_LI9}
            alt="LI9"
            className="w-full max-w-[260px] md:max-w-[320px] object-contain"
            style={{ filter: 'drop-shadow(0 0 24px rgba(255,106,0,0.5))' }}
          />
        </div>

        {/* === ЦЕНТР — НАБОР В КЛАН === */}
        <div className="flex flex-col items-center justify-center w-1/3 pb-20">
          <div className="mb-3 text-center">
            <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.4em' }}>
              — RUST CLAN —
            </span>
          </div>
          <a
            href="#"
            className="group relative inline-block px-8 py-4 overflow-hidden"
            style={{ border: '2px solid #ffd700', boxShadow: '0 0 20px rgba(255,215,0,0.35)' }}
          >
            <span
              className="relative z-10 font-black tracking-widest uppercase transition-colors duration-300 group-hover:text-black"
              style={{
                fontSize: 'clamp(0.9rem, 2.2vw, 1.5rem)',
                color: '#ffd700',
                textShadow: '0 0 10px rgba(255,215,0,0.8)',
                letterSpacing: '0.2em',
              }}
            >
              НАБОР В КЛАН
            </span>
            <div
              className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              style={{ background: '#ffd700' }}
            />
          </a>
          <p style={{ marginTop: '0.75rem', fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.15em' }}>
            НАЖМИ ЧТОБЫ ПОДАТЬ ЗАЯВКУ
          </p>
        </div>

        {/* === ПРАВЫЙ — A1r === */}
        <div className="flex flex-col items-center w-1/3 self-end">
          <a href="#" className="mb-3 block text-center group">
            <span
              className="font-black tracking-widest uppercase inline-block transition-transform duration-300 group-hover:scale-110"
              style={{
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                color: '#00cfff',
                textShadow: '0 0 15px #00cfff, 0 0 40px rgba(0,207,255,0.5)',
                WebkitTextStroke: '1px #0099cc',
              }}
            >
              A1r
            </span>
          </a>
          <img
            src={CHAR_A1R}
            alt="A1r"
            className="w-full max-w-[260px] md:max-w-[320px] object-contain"
            style={{ filter: 'drop-shadow(0 0 24px rgba(0,207,255,0.5))' }}
          />
        </div>
      </div>

      {/* Нижняя полоса */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 z-20"
        style={{ background: 'linear-gradient(90deg, #ff6a00, #ffd700, #00cfff)' }}
      />
    </div>
  );
}