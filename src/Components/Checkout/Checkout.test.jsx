import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { CartProvider } from '../../context/CartContext';
import Checkout from './Checkout';

function seedCart(items) {
  localStorage.setItem('cart', JSON.stringify(items));
}

function renderCheckout() {
  return render(
    <MemoryRouter>
      <CartProvider>
        <Checkout />
      </CartProvider>
    </MemoryRouter>
  );
}

describe('Checkout', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('shows an empty state when the cart has no items', () => {
    renderCheckout();
    expect(screen.getByText('Your cart is empty.')).toBeInTheDocument();
  });

  test('blocks the order until the form is valid', async () => {
    const user = userEvent.setup();
    seedCart([{ id: 1, name: 'Basketball', price: 1500, qty: 1 }]);
    renderCheckout();

    await user.click(screen.getByRole('button', { name: /place order/i }));

    expect(screen.getByText('Enter your name.')).toBeInTheDocument();
    expect(
      screen.getByText(/valid kenyan phone number/i)
    ).toBeInTheDocument();
    expect(screen.queryByText('Order placed')).not.toBeInTheDocument();
  });

  test('places an order, shows a receipt and clears the cart', async () => {
    const user = userEvent.setup();
    seedCart([
      { id: 1, name: 'Basketball', price: 1500, qty: 2 },
      { id: 5, name: 'Basketball Net', price: 1000, qty: 1 },
    ]);
    renderCheckout();

    await user.type(screen.getByLabelText('Name'), 'Daino Otieno');
    await user.type(screen.getByLabelText('Phone number'), '0712 345 678');
    await user.click(screen.getByRole('button', { name: /place order/i }));

    expect(screen.getByText('Order placed')).toBeInTheDocument();
    expect(screen.getByText(/order sc-/i)).toBeInTheDocument();
    expect(screen.getByText('Ksh 4,000')).toBeInTheDocument();
    expect(JSON.parse(localStorage.getItem('cart'))).toEqual([]);
  });
});
