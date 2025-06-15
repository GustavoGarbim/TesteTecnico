import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from './Header.module.css';

function Header() {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className={styles.siteHeader}>
      <div className={styles.headerContent}>
        <Link to="/" className={styles.logo}>
          Loja Acenis
        </Link>
        <nav>
          <Link to="/carrinho" className={styles.cartLink}>
            Carrinho ({totalItems})
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;