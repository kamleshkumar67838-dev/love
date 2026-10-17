import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { X, Copy, Check, MessageSquare, ExternalLink, Share2, Smartphone } from 'lucide-react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappLink: string;
  groupName: string;
  isHindi: boolean;
}

export const JoinModal: React.FC<JoinModalProps> = ({
  isOpen,
  onClose,
  whatsappLink,
  groupName,
  isHindi,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(whatsappLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDirectJoin = () => {
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
  };

  const handleShare = () => {
    const text = isHindi
      ? `नमस्ते! कृपया ${groupName} के आधिकारिक WhatsApp ग्रुप में शामिल हों:\n${whatsappLink}`
      : `Hello! Join the official WhatsApp group for ${groupName}:\n${whatsappLink}`;
    const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-md bg-[#0d1629] border border-amber-500/30 rounded-3xl p-6 shadow-2xl text-white overflow-hidden"
        style={{
          boxShadow: '0 20px 60px -15px rgba(0,0,0,0.8), 0 0 35px rgba(245, 158, 11, 0.2)',
        }}
      >
        {/* Top ambient glow */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/60 hover:bg-slate-700/80 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center pt-2 pb-4">
          <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-gradient-to-tr from-[#25D366] to-[#128C7E] flex items-center justify-center shadow-lg shadow-emerald-500/30">
            <MessageSquare className="w-7 h-7 text-white fill-white" />
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">
            {isHindi ? 'WhatsApp ग्रुप जॉइन करें' : 'Join WhatsApp Group'}
          </h3>
          <p className="text-xs text-amber-300/90 mt-1 font-medium">
            {groupName}
          </p>
        </div>

        {/* QR Code Container */}
        <div className="bg-white rounded-2xl p-4 my-2 flex flex-col items-center justify-center shadow-inner max-w-[210px] mx-auto border-2 border-amber-300">
          <QRCodeSVG
            value={whatsappLink}
            size={160}
            level="H"
            includeMargin={false}
          />
          <span className="text-[11px] font-semibold text-slate-800 mt-2 flex items-center gap-1">
            <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
            {isHindi ? 'कैमरे से स्कैन करें' : 'Scan with Camera'}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 space-y-2.5">
          {/* Main Direct Join */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 rounded-xl font-bold text-slate-950 flex items-center justify-center gap-2 transition-all transform active:scale-[0.98] shadow-lg text-center no-underline"
            style={{
              background: 'linear-gradient(90deg, #f59e0b 0%, #fbbf24 40%, #86efac 100%)',
              boxShadow: '0 4px 20px rgba(245, 158, 11, 0.4)',
            }}
          >
            <MessageSquare className="w-5 h-5 fill-slate-950" />
            <span>{isHindi ? 'व्हाट्सएप में खोलें' : 'Open in WhatsApp'}</span>
            <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
          </a>

          {/* Copy Link & Share */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleCopy}
              className="py-2.5 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-xs font-semibold text-slate-200 flex items-center justify-center gap-1.5 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">{isHindi ? 'कॉपी हो गया' : 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>{isHindi ? 'लिंक कॉपी करें' : 'Copy Link'}</span>
                </>
              )}
            </button>

            <button
              onClick={handleShare}
              className="py-2.5 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-xs font-semibold text-slate-200 flex items-center justify-center gap-1.5 transition-colors"
            >
              <Share2 className="w-4 h-4 text-slate-400" />
              <span>{isHindi ? 'शेयर करें' : 'Share Link'}</span>
            </button>
          </div>
        </div>

        {/* Safety Note */}
        <p className="text-[11px] text-center text-slate-400 mt-4">
          {isHindi
            ? '🔒 सुरक्षित व आधिकारिक कम्युनिटी। किसी भी समस्या के लिए एडमिन से संपर्क करें।'
            : '🔒 Official & spam-free community. Contact verified admins for support.'}
        </p>
      </div>
    </div>
  );
};
