export const CONTACTS_TEXT = {
  // Page title
  PAGE_TITLE: "Контакти",

  // Contact items
  CONTACT_ITEMS: {
    PHONE: {
      TITLE: "Телефон",
      DESCRIPTION: "0883 354321 / 0885 986062",
      HREF: "tel:0883354321",
    },
    EMAIL: {
      TITLE: "Имейл",
      DESCRIPTION: "hello@goracandles.com",
      HREF: "mailto:hello@goracandles.com",
    },
    ADDRESS: {
      TITLE: "Адрес",
      DESCRIPTION: "София, ул. Цар Асен 25",
      HREF: "https://maps.app.goo.gl/ck7Z9UzXe3eJpt6L6",
    },
  },

  // Question section
  QUESTION_SECTION: {
    TITLE: "Имате въпрос?",
    DESCRIPTION:
      "Не се колебайте да се свържете с нас по телефона или имейл. Ще се радваме да отговорим на всички ваши въпроси относно нашите продукти.",
  },
} as const;

// Contact items data for Contacts page
export const CONTACTS_DATA = [
  {
    type: "phone",
    title: CONTACTS_TEXT.CONTACT_ITEMS.PHONE.TITLE,
    description: CONTACTS_TEXT.CONTACT_ITEMS.PHONE.DESCRIPTION,
    href: CONTACTS_TEXT.CONTACT_ITEMS.PHONE.HREF,
    target: "_self",
    rel: "",
  },
  {
    type: "email",
    title: CONTACTS_TEXT.CONTACT_ITEMS.EMAIL.TITLE,
    description: CONTACTS_TEXT.CONTACT_ITEMS.EMAIL.DESCRIPTION,
    href: CONTACTS_TEXT.CONTACT_ITEMS.EMAIL.HREF,
    target: "_self",
    rel: "",
  },
  {
    type: "address",
    title: CONTACTS_TEXT.CONTACT_ITEMS.ADDRESS.TITLE,
    description: CONTACTS_TEXT.CONTACT_ITEMS.ADDRESS.DESCRIPTION,
    href: CONTACTS_TEXT.CONTACT_ITEMS.ADDRESS.HREF,
    target: "_blank",
    rel: "noopener noreferrer",
  },
] as const;
