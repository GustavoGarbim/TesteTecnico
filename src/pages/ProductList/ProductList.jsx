import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import styles from './ProductList.module.css';

function ProductList() {
  const [products, setProducts] = useState([]); // guarda a lista de produtos que vem da API
  const [loading, setLoading] = useState(true); // controla a mensagem de "Carregando..."
  const [error, setError] = useState(null); // guarda qualquer erro que possa acontecer na busca

  // pega a função de adicionar ao carrinho do nosso contexto global
  const { addToCart } = useCart();

// função que busca os dados na API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/products');
        
        if (!response.ok) {
          throw new Error('A resposta da rede não foi boa! Verifique se o json-server está rodando.'); // verifica a URL da "API"
        }

        const data = await response.json();
        setProducts(data); // coloca os produtos recebidos no nosso estado "products"

      } catch (e) {
        setError(e.message); // guarda a mensagem de erro no estado "error"
        console.error("Erro ao buscar produtos: ", e);
      } finally {
        setLoading(false); // para de mostrar a mensagem de "Carregando..."
      }
    };

    fetchProducts();
  }, []); // array vazio, para que a busca aconteça apenas uma vez

  // mostra mensagens diferentes dependendo do status da busca
  if (loading) {
    return <p className={styles.message}>Carregando produtos...</p>;
  }

  if (error) {
    return <p className={styles.messageError}>Erro ao carregar produtos: {error}</p>;
  }

  // se tudo deu bom, exibe a lista de produtos
  return (
    <div>
      <h1 className="page-title">Nossos Produtos</h1>
      <div className={styles.productList}>
        {/* para cada produto na lista, cria um card */}
        {products.map(product => (
          <div key={product.id} className={styles.productCard}>
            {/* link para abrir os detalhes do produto */}
            <Link to={`/produto/${product.id}`}>
              <img src={product.image} alt={product.name} className={styles.productImage} />
              <h2 className={styles.productName}>{product.name}</h2>
            </Link>
            <p className={styles.productPrice}>R$ {product.price.toFixed(2).replace('.',',')}</p>
            <button onClick={() => addToCart(product)} className={styles.addToCartBtn}>
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;