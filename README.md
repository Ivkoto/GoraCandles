# Gora Candles - E-commerce Shop

A modern, responsive e-commerce web application for candles, built with React, TypeScript, and Material-UI. This project features a complete shopping experience with cart functionality, product browsing, and elegant design.

## 🌟 Features

### Core Functionality

- **Product Catalog**: Browse all available candles with detailed product cards
- **Shopping Cart**: Full cart management with persistent storage
- **Trending Products**: Showcase of best-selling and popular items
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **URL-based Navigation**: Bookmarkable pages with browser back/forward support

### Pages

- **Home**: Hero section with trending products showcase
- **Shop**: Complete product catalog with add-to-cart functionality
- **About Us**: Company information and story
- **Contacts**: Contact information and details
- **Cart**: Full cart management with quantity controls, totals, and checkout

### Technical Features

- **TypeScript**: Full type safety throughout the application
- **Material-UI**: Modern, accessible component library
- **Context API**: Global state management for cart functionality
- **Local Storage**: Cart persistence across browser sessions
- **Modular Architecture**: Clean separation of concerns with reusable components

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Ivkoto/GoraCandles.git
   cd GoraCandles/gora-candles-shop
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
src/
├── components/
│   ├── pages/
│   │   ├── about-us/          # About page components
│   │   ├── cart/              # Cart page and components
│   │   ├── contacts/          # Contacts page components
│   │   ├── home-page/         # Home page components
│   │   │   ├── header/        # Navigation header
│   │   │   └── main-content/  # Hero and trending products
│   │   └── shop/              # Shop page components
│   └── shared/
│       ├── footer/            # Call-to-action footer
│       ├── mega-menu/         # Navigation dropdown
│       └── product-card/      # Reusable product card
├── context/
│   └── CartContext.tsx        # Cart state management
├── services/
│   └── productService.ts      # Product data and API simulation
├── types/
│   └── index.ts               # Shared TypeScript types
└── theme.ts                   # Material-UI theme configuration
```

## 🛠️ Available Scripts

### Development

- **`npm start`** - Runs the app in development mode
- **`npm test`** - Launches the test runner
- **`npm run build`** - Builds the app for production

### Production Build

The build folder will contain optimized, minified files ready for deployment.

## 🎨 Design & Technologies

### Frontend Stack

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development experience
- **Material-UI (MUI) v5** - Component library with custom theming
- **Emotion** - CSS-in-JS styling solution

### State Management

- **React Context API** - Global cart state management
- **Local Storage** - Cart persistence across sessions
- **URL Hash Navigation** - Page state persistence on refresh

### Development Tools

- **Create React App** - Project bootstrapping and build tools
- **ESLint** - Code linting and quality assurance
- **TypeScript Compiler** - Static type checking

## 🛒 Cart Features

- **Add to Cart**: Add products from shop and trending sections
- **Quantity Management**: Increase/decrease quantities with intuitive controls
- **Remove Items**: Individual item removal with confirmation
- **Persistent Storage**: Cart contents saved in browser localStorage
- **Price Calculations**: Automatic subtotal, shipping, tax, and total calculations
- **Promo Codes**: Discount code functionality (mock implementation)
- **Responsive Design**: Mobile-optimized cart interface

## 🔧 Configuration

### Theme Customization

The application uses a custom Material-UI theme with Gora Candles branding. You can modify colors, typography, and spacing in `src/theme.ts`.

### Product Data

Product information is managed through `src/services/productService.ts`. This service provides mock data and can be easily replaced with real API calls.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary to Gora Candles.

## 📞 Contact

For questions or support, please contact the development team.

---

_Built with ❤️ for Gora Candles_
