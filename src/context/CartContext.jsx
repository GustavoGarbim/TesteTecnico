import React, { createContext, useState, useContext } from 'react';

// crio o Contexto, que vai ser a "caixa" global para o carrinho
const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  // o estado que guarda a lista de itens do carrinho. Começa como uma lista vazia
  const [cartItems, setCartItems] = useState([]);

  // função para adicionar um produto
  const addToCart = (product) => {
    const novoCarrinho = [...cartItems];
    
    let itemJaExiste = false;
    
    for (let i = 0; i < novoCarrinho.length; i++) {
      // se o ID do item no carrinho for igual ao ID do produto que estou adicionando, só aumenta a quantidade dele
      if (novoCarrinho[i].id === product.id) {
        novoCarrinho[i].quantity = novoCarrinho[i].quantity + 1;
        itemJaExiste = true; // avisa que já encontrou o item
        break;
      }
    }
    
    if (!itemJaExiste) {
      novoCarrinho.push({ ...product, quantity: 1 });
    }
    
    setCartItems(novoCarrinho);
    
    alert(`${product.name} foi adicionado ao carrinho!`);
  };

  // Função para remover um produto
  const removeFromCart = (productId) => {
    const novoCarrinho = cartItems.filter(item => item.id !== productId);
    setCartItems(novoCarrinho);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};