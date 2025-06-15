import React from 'react';
import { useCart } from '../../context/CartContext';
import styles from './CartPage.module.css';

function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0); // calculo para saber o preço total do carrinho

  if (cartItems.length === 0) {
    return <h1 className={`page-title ${styles.emptyCart}`}>Seu carrinho está vazio.</h1>; // caso o carrinho esteja vazio
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.cartList}>
        <h1 className="page-title">Meu Carrinho</h1>
        {cartItems.map(item => (
          <div key={item.id} className={styles.cartItem}>
            <img src={item.image} alt={item.name} className={styles.cartItemImage} />
            <div className={styles.cartItemInfo}>
              <h2>{item.name}</h2>
              <p>Quantidade: {item.quantity}</p>
              <p className={styles.cartItemPrice}>R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</p> {/* formatação do preço em dinheiro */}
            </div>
            <button onClick={() => removeFromCart(item.id)} className={styles.removeBtn}> {/* função de remover produto do carrinho*/}
              Remover
            </button>
          </div>
        ))}
      </div>
      <div className={styles.cartSummary}>
        <h2>Resumo</h2>
        <div className={styles.totalText}>
          <span>Total</span>
          <span>R$ {total.toFixed(2).replace('.', ',')}</span> {/* formatação do preço em dinheiro (total) */}
        </div>
        <button className={styles.checkoutBtn}>Finalizar Compra</button>
      </div>
    </div>
  );
}

export default CartPage;