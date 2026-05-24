import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const BG_IMAGE = 'https://cdn.poehali.dev/projects/05ec720a-0e80-4880-81c8-abc332bb5ce1/files/2a8bd49a-e2a9-43a8-882a-622c7eebfe52.jpg';

const Particle = ({ style }: { style: React.CSSProperties }) => (
  <div className="particle" style={style} />
);

export default function Index() {
  const [mode, setMode] = useState<'home' | 'login' | 'register'>('home');
  const [formData, setFormData] = useState({ nickname: '', email: '', password: '' });
  const [particles, setParticles] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    const pts: React.CSSProperties[] = Array.from({ length: 20 }, (_, i) => ({
      left: `${Math.random() * 100}%`,
      background: i % 2 === 0 ? 'var(--neon-green)' : 'var(--neon-purple)',
      animationDuration: `${6 + Math.random() * 10}s`,
      animationDelay: `${Math.random() * 10}s`,
      width: `${2 + Math.random() * 4}px`,
      height: `${2 + Math.random() * 4}px`,
      boxShadow: i % 2 === 0
        ? '0 0 6px var(--neon-green)'
        : '0 0 6px var(--neon-purple)',
    }));
    setParticles(pts);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* BG */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BG_IMAGE})`, opacity: 0.35 }}
      />
      <div className="absolute inset-0 grid-overlay hex-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />

      {/* Scanline */}
      <div className="absolute inset-0 scanline-effect pointer-events-none" />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((style, i) => <Particle key={i} style={style} />)}
      </div>

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          <span className="vip-badge px-3 py-1 text-xs rounded-sm">VIP</span>
          <span className="font-orbitron text-sm tracking-widest text-white/60 uppercase">Community</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {['О нас', 'Участники', 'Контакт'].map((item) => (
            <button key={item} className="font-exo text-sm text-white/50 hover:text-[var(--neon-green)] transition-colors duration-300 tracking-wider uppercase">
              {item}
            </button>
          ))}
        </nav>

      </header>

      {/* Hero */}
      {mode === 'home' && (
        <main className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] px-4 text-center">
          {/* VIP Big Title */}
          <div className="animate-fade-up delay-200 mb-2">
            <span
              className="font-orbitron font-black leading-none block"
              style={{
                fontSize: 'clamp(4rem, 18vw, 14rem)',
                color: 'var(--neon-gold)',
                textShadow: '0 0 20px var(--neon-gold), 0 0 60px rgba(255,215,0,0.6), 0 0 120px rgba(255,215,0,0.3)',
                letterSpacing: '0.1em',
              }}
            >
              VIP
            </span>
          </div>

          {/* Main Title */}
          <h1 className="animate-title-reveal font-orbitron font-black leading-none tracking-widest select-none"
            style={{
              fontSize: 'clamp(3rem, 10vw, 8rem)',
              color: 'var(--neon-green)',
              WebkitTextStroke: '1px var(--neon-green)',
              textShadow: '0 0 20px var(--neon-green), 0 0 50px rgba(0,255,136,0.5), 0 0 100px rgba(0,255,136,0.2)',
              letterSpacing: '0.2em',
            }}
          >
            SURVIVORS
          </h1>

          {/* Divider */}
          <div className="animate-fade-up delay-600 flex items-center gap-4 my-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[var(--neon-green)]" />
            <Icon name="Zap" size={18} className="text-[var(--neon-green)]" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[var(--neon-green)]" />
          </div>

          {/* Tagline */}
          <p className="animate-fade-up delay-600 font-exo text-base md:text-xl text-white/50 max-w-xl leading-relaxed mb-10">
            Вступи в элитное сообщество лучших игроков. Только для избранных — только победители.
          </p>


        </main>
      )}

      {/* Auth Modal */}
      {(mode === 'login' || mode === 'register') && (
        <div className="relative z-10 flex items-center justify-center min-h-[85vh] px-4">
          <div className="glass-card neon-border-green rounded-sm w-full max-w-md p-8 animate-title-reveal">
            {/* Close */}
            <button
              onClick={() => setMode('home')}
              className="absolute top-4 right-4 text-white/40 hover:text-[var(--neon-green)] transition-colors"
            >
              <Icon name="X" size={20} />
            </button>

            {/* Title */}
            <div className="text-center mb-8">
              <span className="vip-badge inline-block px-3 py-1 text-xs rounded-sm mb-4">VIP</span>
              <h2 className="font-orbitron text-2xl font-black text-white tracking-widest uppercase">
                {mode === 'login' ? 'Вход в клан' : 'Регистрация'}
              </h2>
              <div className="mt-2 h-px bg-gradient-to-r from-transparent via-[var(--neon-green)] to-transparent" />
            </div>

            {/* Toggle */}
            <div className="flex rounded-sm overflow-hidden border border-[var(--neon-green)]/30 mb-8">
              {(['login', 'register'] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={`flex-1 py-2 font-orbitron text-xs tracking-widest uppercase transition-all duration-300 ${
                    mode === m
                      ? 'bg-[var(--neon-green)] text-black font-black'
                      : 'text-white/40 hover:text-white/70'
                  }`}
                >
                  {m === 'login' ? 'Войти' : 'Регистрация'}
                </button>
              ))}
            </div>

            {/* Form */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {mode === 'register' && (
                <div>
                  <label className="font-orbitron text-xs text-[var(--neon-green)] tracking-widest uppercase block mb-2">
                    Никнейм
                  </label>
                  <input
                    type="text"
                    placeholder="Твой игровой ник"
                    value={formData.nickname}
                    onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
                    className="input-game w-full px-4 py-3 rounded-sm font-exo text-sm"
                  />
                </div>
              )}
              <div>
                <label className="font-orbitron text-xs text-[var(--neon-green)] tracking-widest uppercase block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input-game w-full px-4 py-3 rounded-sm font-exo text-sm"
                />
              </div>
              <div>
                <label className="font-orbitron text-xs text-[var(--neon-green)] tracking-widest uppercase block mb-2">
                  Пароль
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="input-game w-full px-4 py-3 rounded-sm font-exo text-sm"
                />
              </div>

              <button
                type="submit"
                className="btn-neon-solid w-full font-orbitron text-sm py-4 rounded-sm tracking-widest uppercase mt-6"
              >
                {mode === 'login' ? 'Войти' : 'Вступить в клан'}
              </button>
            </form>

            <p className="text-center mt-6 font-exo text-xs text-white/30">
              {mode === 'login' ? 'Нет аккаунта?' : 'Уже в клане?'}{' '}
              <button
                onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
                className="text-[var(--neon-green)] hover:underline"
              >
                {mode === 'login' ? 'Зарегистрироваться' : 'Войти'}
              </button>
            </p>
          </div>
        </div>
      )}

      {/* Bottom bar */}
      <footer className="absolute bottom-0 left-0 right-0 z-20 px-8 py-4 flex items-center justify-between">
        <div className="h-px flex-1 bg-gradient-to-r from-[var(--neon-green)]/20 to-transparent" />
        <span className="font-orbitron text-xs text-white/20 tracking-widest mx-4 uppercase">Survivors © 2026</span>
        <div className="h-px flex-1 bg-gradient-to-l from-[var(--neon-green)]/20 to-transparent" />
      </footer>
    </div>
  );
}