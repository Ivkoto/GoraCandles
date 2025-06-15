export const NAVIGATION_LABELS = {
  SHOP: "Магазин",
  ABOUT: "За нас",
  CONTACTS: "Контакти",
  CUSTOM_ORDERS: "Custom поръчки",
} as const;

export const MENU_CATEGORIES = {
  CANDLES: {
    TITLE: "Свещи",
    ITEMS: {
      AROMATIC: "Ароматни свещи",
      DECORATIVE: "Декоративни свещи",
      SOY: "Соеви свещи",
    },
  },
  ACCESSORIES: {
    TITLE: "Аксесоари",
    ITEMS: {
      CANDLE_HOLDERS: "Свещници",
      WICKS: "Фитили",
      GIFT_PACKAGES: "Подаръчни опаковки",
    },
  },
} as const;

export const CART = {
  TITLE: (count: number) => `Количка (${count} продукта)`,
  EMPTY_MESSAGE: "Количката е празна",
  QUANTITY_LABEL: "Количество:",
  CURRENCY: "лв.",
  TOTAL_LABEL: "Общо:",
  BUTTONS: {
    VIEW_CART: "Виж количка",
    ORDER: "Поръчай",
  },
} as const;

export const ALT_TEXTS = {
  LOGO: "Gora Candles",
} as const;

export const EXTERNAL_LINKS = {
  INSTAGRAM_URL: "https://www.instagram.com/gora_candles/",
} as const;
