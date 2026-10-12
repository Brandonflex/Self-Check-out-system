import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { CartProvider } from '../../context/CartContext';
import Products from './Products';

function renderProducts() {
  return render(
    <MemoryRouter>
      <CartProvider>
        <Products />
      </CartProvider>
    </MemoryRouter>
  );
}

describe('Products', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('lists the catalogue with prices in shillings', () => {
    renderProducts();
    expect(screen.getByText('Basketball Jersey')).toBeInTheDocument();
    expect(screen.getByText('Ksh 12,000')).toBeInTheDocument();
  });

  test('adding a product switches to quantity controls', async () => {
    const user = userEvent.setup();
    renderProducts();

    await user.click(screen.getAllByText('Add to cart')[0]);
    await user.click(screen.getByLabelText('Add one Basketball'));

    expect(screen.getByText('2', { selector: '.qty' })).toBeInTheDocument();
    expect(screen.getAllByText('Add to cart')).toHaveLength(4);
  });

  test('search filters the product list', async () => {
    const user = userEvent.setup();
    renderProducts();

    await user.type(screen.getByPlaceholderText('Search products'), 'rim');

    expect(screen.getByText('10ft Basketball Rim')).toBeInTheDocument();
    expect(screen.queryByText('Basketball Net')).not.toBeInTheDocument();
  });
});
