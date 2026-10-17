import React from 'react';

interface XnessLogoProps {
  size?: number;
  className?: string;
  withGlow?: boolean;
}

export const XnessLogo: React.FC<XnessLogoProps> = ({
  size = 230,
  className = '',
  withGlow = true,
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Outer ambient golden glow */}
      {withGlow && (
        <div
          className="absolute inset-0 rounded-full blur-2xl opacity-60 animate-pulse pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(251, 191, 36, 0.5) 0%, rgba(217, 119, 6, 0.28) 50%, transparent 75%)',
            transform: 'scale(1.22)',
          }}
        />
      )}

      {/* Outer Golden Metallic Border Ring */}
      <div
        className="relative w-full h-full rounded-full p-[5px] shadow-[0_12px_45px_rgba(0,0,0,0.8),0_0_30px_rgba(250,204,21,0.4)]"
        style={{
          background:
            'linear-gradient(135deg, #fef08a 0%, #f59e0b 30%, #b45309 55%, #fef9c3 80%, #d97706 100%)',
        }}
      >
        {/* Inner Ring Layer with fine metallic bevel */}
        <div
          className="w-full h-full rounded-full p-[3px]"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(253,230,138,0.7) 40%, rgba(180,83,9,0.95) 100%)',
          }}
        >
          {/* Main Disc */}
          <div
            className="w-full h-full rounded-full flex flex-col items-center justify-center relative overflow-hidden bg-black"
            style={{
              boxShadow: 'inset 0 4px 14px rgba(255,255,255,0.85), inset 0 -6px 14px rgba(180,83,9,0.3)',
            }}
          >
            {/* Permanent Image Artwork matching user's photo:
               Indian flag tricolor background with Ashoka Chakra,
               masked warrior in samurai hat with red tassels,
               black suit with ornate golden baroque lapels & gold tie */}
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full relative z-10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Clip disc to circle */}
                <clipPath id="avatarCircle">
                  <circle cx="100" cy="100" r="100" />
                </clipPath>

                {/* Saffron gradient */}
                <linearGradient id="saffronGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff7700" />
                  <stop offset="100%" stopColor="#e65100" />
                </linearGradient>

                {/* Green gradient */}
                <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00802b" />
                  <stop offset="100%" stopColor="#004d1a" />
                </linearGradient>

                {/* Gold embroidery gradient */}
                <linearGradient id="goldEmbroidery" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fef08a" />
                  <stop offset="40%" stopColor="#f59e0b" />
                  <stop offset="80%" stopColor="#d97706" />
                  <stop offset="100%" stopColor="#92400e" />
                </linearGradient>

                {/* Hat gradient */}
                <linearGradient id="hatGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#374151" />
                  <stop offset="45%" stopColor="#1f2937" />
                  <stop offset="100%" stopColor="#111827" />
                </linearGradient>

                {/* Suit gradient */}
                <linearGradient id="suitGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1f242d" />
                  <stop offset="100%" stopColor="#0b0e14" />
                </linearGradient>
              </defs>

              <g clipPath="url(#avatarCircle)">
                {/* --- BACKGROUND: Indian Tricolor Flag with Paint Splatters --- */}
                {/* Top Saffron Band */}
                <rect x="0" y="0" width="200" height="70" fill="url(#saffronGrad)" />

                {/* Center White Band */}
                <rect x="0" y="66" width="200" height="66" fill="#f8fafc" />

                {/* Bottom Green Band */}
                <rect x="0" y="130" width="200" height="70" fill="url(#greenGrad)" />

                {/* Paint splatter spray droplets */}
                <circle cx="28" cy="35" r="3" fill="#ff9933" opacity="0.6" />
                <circle cx="45" cy="52" r="2.2" fill="#ff7700" opacity="0.7" />
                <circle cx="165" cy="40" r="2.8" fill="#ffaa44" opacity="0.6" />
                <circle cx="180" cy="58" r="2.2" fill="#ffffff" opacity="0.8" />
                <circle cx="18" cy="85" r="3.2" fill="#00802b" opacity="0.5" />
                <circle cx="178" cy="115" r="2.8" fill="#00802b" opacity="0.6" />
                <circle cx="34" cy="148" r="3.5" fill="#004d1a" opacity="0.7" />
                <circle cx="160" cy="155" r="2.5" fill="#00802b" opacity="0.6" />

                {/* Ashoka Chakra Wheel (Navy Blue 24-spoke emblem on left) */}
                <g transform="translate(54, 98)" opacity="0.95">
                  {/* Outer Ring */}
                  <circle cx="0" cy="0" r="24" stroke="#000080" strokeWidth="2.2" fill="none" />
                  <circle cx="0" cy="0" r="4.5" fill="#000080" />
                  {/* 24 Spokes */}
                  {[...Array(24)].map((_, i) => (
                    <line
                      key={i}
                      x1="0"
                      y1="0"
                      x2={24 * Math.cos((i * 15 * Math.PI) / 180)}
                      y2={24 * Math.sin((i * 15 * Math.PI) / 180)}
                      stroke="#000080"
                      strokeWidth="1.1"
                    />
                  ))}
                </g>

                {/* --- CHARACTER: Masked Samurai in Formal Gold Embroidered Suit --- */}
                {/* Shoulders & Suit */}
                <path
                  d="M 12 200 C 12 155 35 125 72 120 L 100 135 L 128 120 C 165 125 188 155 188 200 Z"
                  fill="url(#suitGrad)"
                />

                {/* White Collared Shirt */}
                <polygon points="100,126 86,110 114,110" fill="#ffffff" />
                <polygon points="100,138 88,114 112,114" fill="#f1f5f9" />

                {/* Golden Silk Necktie */}
                <polygon points="100,128 94,136 100,180 106,136" fill="url(#goldEmbroidery)" />
                {/* Tie knot */}
                <polygon points="95,124 105,124 103,134 97,134" fill="#f59e0b" />

                {/* Suit Lapels with Ornate Gold Baroque Embroidery */}
                {/* Left Lapel */}
                <path
                  d="M 68 122 L 92 165 L 82 178 L 48 136 Z"
                  fill="url(#suitGrad)"
                  stroke="url(#goldEmbroidery)"
                  strokeWidth="1.8"
                />
                {/* Left gold filigree patterns */}
                <path
                  d="M 60 130 Q 72 142 80 160 M 64 138 Q 74 148 76 156"
                  stroke="url(#goldEmbroidery)"
                  strokeWidth="1.5"
                  fill="none"
                />

                {/* Right Lapel */}
                <path
                  d="M 132 122 L 108 165 L 118 178 L 152 136 Z"
                  fill="url(#suitGrad)"
                  stroke="url(#goldEmbroidery)"
                  strokeWidth="1.8"
                />
                {/* Right gold filigree patterns */}
                <path
                  d="M 140 130 Q 128 142 120 160 M 136 138 Q 126 148 124 156"
                  stroke="url(#goldEmbroidery)"
                  strokeWidth="1.5"
                  fill="none"
                />

                {/* Red Pocket Square */}
                <polygon points="152,148 160,138 166,146 158,150" fill="#dc2626" />

                {/* Crossed Arms Fold */}
                <path
                  d="M 40 185 C 65 178 135 178 160 185 L 164 200 L 36 200 Z"
                  fill="#151a22"
                />
                <line x1="65" y1="184" x2="135" y2="184" stroke="url(#goldEmbroidery)" strokeWidth="1" opacity="0.6" />

                {/* Head & Neck */}
                <path d="M 88 96 L 112 96 L 108 116 L 92 116 Z" fill="#1e2430" />

                {/* Black Stealth Mask */}
                <ellipse cx="100" cy="85" rx="26" ry="32" fill="#0b0e14" />

                {/* Mask Skull Facepaint / White X on eye */}
                {/* White "X" over right eye */}
                <line x1="84" y1="72" x2="94" y2="82" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
                <line x1="94" y1="72" x2="84" y2="82" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />

                {/* White skull shadow socket on left eye */}
                <ellipse cx="112" cy="77" rx="6" ry="8" fill="#f8fafc" />
                <ellipse cx="112" cy="77" rx="3.5" ry="5.5" fill="#000000" />

                {/* White skull jaw teeth / drips */}
                <path
                  d="M 90 92 Q 100 88 110 92 L 108 102 Q 100 100 92 102 Z"
                  fill="#f8fafc"
                />
                <line x1="94" y1="92" x2="94" y2="100" stroke="#000000" strokeWidth="1.2" />
                <line x1="98" y1="91" x2="98" y2="101" stroke="#000000" strokeWidth="1.2" />
                <line x1="102" y1="91" x2="102" y2="101" stroke="#000000" strokeWidth="1.2" />
                <line x1="106" y1="92" x2="106" y2="100" stroke="#000000" strokeWidth="1.2" />

                {/* --- Conical Asian/Samurai Hat (Kasa) --- */}
                {/* Broad conical hat shape */}
                <polygon
                  points="100,26 178,68 22,68"
                  fill="url(#hatGrad)"
                  stroke="#4b5563"
                  strokeWidth="1.5"
                />

                {/* Hat slates / texture segments */}
                <line x1="100" y1="26" x2="42" y2="68" stroke="#111827" strokeWidth="1.2" />
                <line x1="100" y1="26" x2="68" y2="68" stroke="#111827" strokeWidth="1.2" />
                <line x1="100" y1="26" x2="100" y2="68" stroke="#111827" strokeWidth="1.5" />
                <line x1="100" y1="26" x2="132" y2="68" stroke="#111827" strokeWidth="1.2" />
                <line x1="100" y1="26" x2="158" y2="68" stroke="#111827" strokeWidth="1.2" />

                {/* Hat top rope knot */}
                <ellipse cx="100" cy="26" rx="9" ry="5" fill="#78350f" stroke="#d97706" strokeWidth="1" />

                {/* Red cord tassels on top */}
                <path d="M 94 25 C 80 18 72 14 66 12" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 106 25 C 120 18 128 14 134 12" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" />

                {/* Hat bottom dark rim & shadow over face */}
                <ellipse cx="100" cy="68" rx="78" ry="8" fill="#0f172a" opacity="0.9" />

                {/* --- Bottom Ornate Golden Crest / Jewel --- */}
                <g transform="translate(100, 192)">
                  <polygon points="0,-10 12,0 0,10 -12,0" fill="#f59e0b" stroke="#fef08a" strokeWidth="1.5" />
                  <polygon points="0,-6 7,0 0,6 -7,0" fill="#ffffff" />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
