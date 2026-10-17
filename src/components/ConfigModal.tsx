import React, { useState } from 'react';
import { X, Save, RotateCcw, Link2, Users, FileText, CheckCircle2 } from 'lucide-react';
import { GroupConfig, DEFAULT_CONFIG } from '../types.ts';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: GroupConfig;
  onSave: (newConfig: GroupConfig) => void;
  isHindi: boolean;
}

export const ConfigModal: React.FC<ConfigModalProps> = ({
  isOpen,
  onClose,
  config,
  onSave,
  isHindi,
}) => {
  const [formData, setFormData] = useState<GroupConfig>(config);
  const [showSavedToast, setShowSavedToast] = useState(false);

  if (!isOpen) return null;

  const handleChange = (field: keyof GroupConfig, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFeatureChange = (index: number, value: string) => {
    setFormData((prev) => {
      const updated = [...prev.features];
      updated[index] = value;
      return { ...prev, features: updated };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setShowSavedToast(true);
    setTimeout(() => {
      setShowSavedToast(false);
      onClose();
    }, 900);
  };

  const handleReset = () => {
    setFormData(DEFAULT_CONFIG);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-lg bg-[#0e172a] border border-amber-500/30 rounded-3xl p-6 shadow-2xl text-white max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="pb-4 border-b border-slate-800">
          <h3 className="text-lg font-bold text-amber-400 flex items-center gap-2">
            <Link2 className="w-5 h-5" />
            {isHindi ? 'ग्रुप व लिंक सेटिंग्स' : 'Group & Link Settings'}
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            {isHindi
              ? 'अपना WhatsApp ग्रुप लिंक और विवरण यहाँ कस्टमाइज़ करें'
              : 'Customize your WhatsApp group link and branding details'}
          </p>
        </div>

        {showSavedToast && (
          <div className="my-3 p-3 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 rounded-xl text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{isHindi ? 'सेटिंग्स सफलतापूर्वक सहेज ली गई!' : 'Settings saved successfully!'}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-4 space-y-4 text-sm">
          {/* WhatsApp Link Input */}
          <div>
            <label className="block text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
              {isHindi ? 'WhatsApp ग्रुप लिंक (Invite URL) *' : 'WhatsApp Group Invite Link *'}
            </label>
            <div className="relative">
              <input
                type="url"
                required
                value={formData.whatsappLink}
                onChange={(e) => handleChange('whatsappLink', e.target.value)}
                placeholder="https://chat.whatsapp.com/..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-emerald-500/50 text-white placeholder-slate-500 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-400 font-mono"
              />
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              {isHindi
                ? 'उदाहरण: https://chat.whatsapp.com/AbCdEfGh12345'
                : 'Example: https://chat.whatsapp.com/YourInviteCode'}
            </p>
          </div>

          {/* Group Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
              {isHindi ? 'ग्रुप का नाम' : 'Group Display Name'}
            </label>
            <input
              type="text"
              required
              value={formData.groupName}
              onChange={(e) => handleChange('groupName', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Button Text */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                {isHindi ? 'बटन टेक्स्ट' : 'CTA Button Text'}
              </label>
              <input
                type="text"
                value={formData.buttonText}
                onChange={(e) => handleChange('buttonText', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                {isHindi ? 'बैज टेक्स्ट' : 'Badge Tag'}
              </label>
              <input
                type="text"
                value={formData.badgeText}
                onChange={(e) => handleChange('badgeText', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
          </div>

          {/* Member Counts */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                {isHindi ? 'सदस्य संख्या' : 'Members Count'}
              </label>
              <input
                type="text"
                value={formData.memberCount}
                onChange={(e) => handleChange('memberCount', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                {isHindi ? 'ऑनलाइन सदस्य' : 'Online Active'}
              </label>
              <input
                type="text"
                value={formData.activeOnline}
                onChange={(e) => handleChange('activeOnline', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
          </div>

          {/* Subtitle / Description */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
              {isHindi ? 'विवरण / सबटाइटल' : 'Subtitle / Tagline'}
            </label>
            <textarea
              rows={2}
              value={formData.subtitle}
              onChange={(e) => handleChange('subtitle', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
            />
          </div>

          {/* Announcement Bar */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
              {isHindi ? 'घोषणा / अलर्ट' : 'Announcement Alert'}
            </label>
            <input
              type="text"
              value={formData.announcement}
              onChange={(e) => handleChange('announcement', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Footer Actions */}
          <div className="pt-4 flex items-center justify-between border-t border-slate-800 gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="px-3 py-2 text-xs text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{isHindi ? 'डिफ़ॉल्ट रिसेट' : 'Reset Defaults'}</span>
            </button>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              >
                {isHindi ? 'रद्द करें' : 'Cancel'}
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-amber-500 to-emerald-400 text-slate-950 flex items-center gap-1.5 shadow-md hover:brightness-110 transition-all"
              >
                <Save className="w-3.5 h-3.5" />
                <span>{isHindi ? 'सेव करें' : 'Save Changes'}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
