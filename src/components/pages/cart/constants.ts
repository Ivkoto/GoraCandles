// Page constants
export const PAGE = {
  TITLE: "Shopping Cart",
  ITEM_COUNT: (count: number) => `${count} ${count === 1 ? "item" : "items"}`,
} as const;

// Navigation constants
export const NAVIGATION = {
  CONTINUE_SHOPPING: "Continue Shopping",
} as const;

// Empty cart constants
export const EMPTY_CART = {
  TITLE: "Your cart is empty",
  MESSAGE:
    "Looks like you haven't added anything to your cart yet. Start shopping to fill it up!",
  SHOP_NOW_BUTTON: "Shop Now",
} as const;

// Section titles
export const SECTIONS = {
  CART_ITEMS: "Items in your cart",
  ORDER_SUMMARY: "Order Summary",
} as const;

// Cart item constants
export const CART_ITEM = {
  QUANTITY_LABEL: "Qty:",
  REMOVE_BUTTON: "Remove",
  REMOVE_CONFIRMATION: "Remove this item from your cart?",
  CURRENCY: "лв.",
} as const;

// Cart summary constants
export const CART_SUMMARY = {
  SUBTOTAL: "Subtotal",
  SHIPPING: "Shipping",
  FREE_SHIPPING: "Free",
  SHIPPING_COST: "5.00",
  FREE_SHIPPING_THRESHOLD: 50,
  FREE_SHIPPING_MESSAGE: (remaining: number) =>
    `Add ${remaining.toFixed(2)} лв. more for free shipping`,
  TAX: "Tax",
  TAX_RATE: 0.1, // 10% tax
  TOTAL: "Total",
  CURRENCY: "лв.",
  PROMO_CODE: {
    LABEL: "Promo Code",
    PLACEHOLDER: "Enter promo code",
    APPLY_BUTTON: "Apply",
    SUCCESS_MESSAGE: "Promo code applied successfully!",
    ERROR_MESSAGE: "Invalid promo code",
  },
} as const;

// Checkout constants
export const CHECKOUT = {
  PROCEED_BUTTON: "Proceed to Checkout",
  CONTINUE_SHOPPING_BUTTON: "Continue Shopping",
  SECURE_CHECKOUT: "🔒 Secure Checkout",
} as const;

// Quantity controls
export const QUANTITY = {
  DECREASE: "Decrease quantity",
  INCREASE: "Increase quantity",
  MAX_QUANTITY: 99,
  MIN_QUANTITY: 1,
} as const;
