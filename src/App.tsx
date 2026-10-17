import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  ShieldCheck,
  MessageCircle,
} from 'lucide-react';
import { XnessLogo } from './components/XnessLogo.tsx';
import { JoinModal } from './components/JoinModal.tsx';
import { ConfigModal } from './components/ConfigModal.tsx';
import { GroupConfig, DEFAULT_CONFIG } from './types.ts';

const STORAGE_KEY = 'feroz_id_dealer_config_v1';

export default function App() {
  const [config, setConfig] = useState<GroupConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_CONFIG, ...JSON.parse(saved) };
      }
    } catch {
      // Fallback
    }
    return DEFAULT_CONFIG;
  });

  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
  const [isHindi] = useState(false);

  // Save config changes to localStorage
  const handleSaveConfig = (newConfig: GroupConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newConfig));
    } catch {
      // Ignore storage errors
    }
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.75 },
        colors: ['#25D366', '#fbbf24', '#f59e0b', '#34d399', '#ffffff'],
      });
    } catch {
      // Ignore if canvas is not ready
    }
  };

  const handleJoinClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    triggerConfetti();
    try {
      if (typeof window !== 'undefined' && (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq) {
        (window as unknown as { fbq: (...args: unknown[]) => void }).fbq('track', 'Lead', {
          content_name: config.groupName,
          content_category: 'WhatsApp Join',
        });
      }
    } catch {
      // Ignore tracking errors
    }
  };

  // Render content of the main screen
  const renderMainContent = () => (
    <div className="flex flex-col items-center justify-between min-h-full py-8 px-6 text-center select-none">
      {/* Top Header / Verified pill */}
      <div className="w-full flex items-center justify-between pt-1 pb-4">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-[11px] font-semibold tracking-wide">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>{config.badgeText || (isHindi ? 'सत्यापित डीलर' : 'Official Verified')}</span>
        </div>

        {/* Member Counter */}
        <div className="flex items-center gap-1.5 text-slate-300 text-xs font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-white tabular-nums">{config.memberCount}</span>
          <span className="text-slate-400">{isHindi ? 'सदस्य' : 'members'}</span>
        </div>
      </div>

      {/* Main Center Block: Exactly matching the uploaded screenshot */}
      <div className="my-auto flex flex-col items-center w-full max-w-sm">
        {/* Glowing Circular Golden Emblem */}
        <div className="mb-7 transition-transform hover:scale-105 duration-300">
          <XnessLogo size={220} withGlow={true} />
        </div>

        {/* 3-Line Golden Title matching screenshot style */}
        <div className="space-y-0.5 mb-8">
          <h1
            className="text-4xl sm:text-5xl font-black tracking-tight uppercase leading-[1.08]"
            style={{
              background: 'linear-gradient(180deg, #fffbeb 0%, #fef08a 25%, #fbbf24 60%, #d97706 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 2px 8px rgba(245, 158, 11, 0.35))',
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            <div>Feroz</div>
            <div>ID Dealer</div>
            <div>Official</div>
          </h1>
        </div>

        {/* Primary CTA Button: "🚀 JOIN NOW" pill button matching screenshot */}
        <div className="w-full px-2">
          <a
            href={config.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleJoinClick}
            className="group relative block w-full py-4 px-8 rounded-full font-black text-slate-950 tracking-wider text-lg sm:text-xl uppercase transition-all duration-200 transform hover:scale-[1.03] active:scale-[0.98] cursor-pointer text-center select-none no-underline shadow-lg"
            style={{
              background:
                'linear-gradient(90deg, #f59e0b 0%, #fbbf24 35%, #fde047 65%, #a7f3d0 100%)',
              boxShadow:
                '0 8px 30px rgba(245, 158, 11, 0.5), 0 0 45px rgba(251, 191, 36, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.8), inset 0 -3px 4px rgba(180, 83, 9, 0.3)',
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                🚀
              </span>
              <span>{config.buttonText || (isHindi ? 'जॉइन करें' : 'JOIN NOW')}</span>
            </div>

            {/* Gloss sheen overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-white/25 to-white/40 opacity-70 pointer-events-none" />
          </a>
        </div>
      </div>

      {/* Bottom Features / Trust Indicators */}
      <div className="w-full pt-6 border-t border-slate-800/60 mt-4">
        {/* WhatsApp branding note */}
        <div className="flex items-center justify-center gap-2 text-emerald-400 text-xs font-semibold">
          <MessageCircle className="w-4 h-4 fill-emerald-500 text-emerald-500" />
          <span>{isHindi ? 'आधिकारिक WhatsApp ग्रुप लिंक' : 'Official WhatsApp Community Group'}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050914] text-slate-100 flex flex-col font-sans relative overflow-x-hidden">
      {/* Background radial gradients for midnight depth */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 25%, #0d1e3d 0%, #081126 45%, #040814 100%)',
        }}
      />
      {/* Subtle background golden glow center aura */}
      <div
        className="fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full blur-[120px] opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f59e0b 0%, #b45309 60%, transparent 80%)' }}
      />

      {/* Main Container */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center p-3 sm:p-6 w-full">
        <div className="w-full max-w-md min-h-[660px] bg-[#070e22]/90 border border-slate-800/80 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(245,158,11,0.15)] overflow-hidden backdrop-blur-sm">
          {renderMainContent()}
        </div>
      </main>

      {/* Modals */}
      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
        whatsappLink={config.whatsappLink}
        groupName={config.groupName}
        isHindi={isHindi}
      />

      <ConfigModal
        isOpen={isConfigModalOpen}
        onClose={() => setIsConfigModalOpen(false)}
        config={config}
        onSave={handleSaveConfig}
        isHindi={isHindi}
      />
    </div>
  );
}
