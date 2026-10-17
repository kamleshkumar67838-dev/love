export interface GroupConfig {
  groupName: string;
  subtitle: string;
  badgeText: string;
  whatsappLink: string;
  telegramLink?: string;
  memberCount: string;
  activeOnline: string;
  buttonText: string;
  announcement: string;
  features: string[];
}

export const DEFAULT_CONFIG: GroupConfig = {
  groupName: "Feroz ID Dealer",
  subtitle: "Official trusted community for instant ID services, 24/7 withdrawals & fast refills.",
  badgeText: "Official Verified Dealer",
  whatsappLink: "https://whatsapp.com/channel/0029Vb979hQ2f3EDVfevsB07",
  telegramLink: "https://t.me/feroz_id_dealer",
  memberCount: "3,250",
  activeOnline: "186",
  buttonText: "JOIN NOW",
  announcement: "⚡ 100% Trusted & Verified ID Dealer. Fast 24/7 instant refills & withdrawals!",
  features: [
    "100% Trusted & Verified ID Dealer",
    "Instant 24/7 Withdrawals & Refills",
    "Safe & Direct WhatsApp Support",
    "Best Rates & Genuine Community"
  ]
};
