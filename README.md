# Self Checkout System

A small web app that simulates the self-checkout flow of a store: browse a
catalogue, build a cart, check out and get a receipt with an order number.
The catalogue is a basketball shop with prices in Kenyan shillings.

## Features

- Product catalogue with name search
- Cart with quantity controls, persisted to `localStorage`
- Checkout with an order summary, name/phone validation (Kenyan phone
  format) and payment method (M-Pesa or cash)
- Order receipt with an order number
- Small test suite with Vitest and React Testing Library

## Tech

React 19, React Router 7, Vite, Vitest. Plain CSS, no UI framework.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Scripts

| Command           | What it does                        |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start the dev server                |
| `npm run build`   | Production build into `dist/`       |
| `npm run preview` | Serve the production build locally  |
| `npm test`        | Run the test suite once             |

## Structure

```
src/
  context/CartContext.jsx   # shared cart state, persisted to localStorage
  Components/
    Navbar/                 # top navigation with live cart count
    Home/                   # landing page
    Products/               # catalogue, search, quantity controls
    Checkout/               # order summary, details form, receipt
```

## Notes

This is a frontend demo. No payment is actually processed and nothing is
sent to a server — the order receipt is generated in the browser.
