import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import styles from './ProductDetail.module.css';

function ProductDetail() {
  const { id } = useParams(); // guarda o id do produto
  const { addToCart } = useCart(); // guarda o produto no carrinho
  const [product, setProduct] = useState(null); // pega as propriedades do produto

  useEffect(() => {
    fetch(`http://localhost:3001/products/${id}`) // buscando o produto pelo ID
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error("Falha ao buscar produto:", err));
  }, [id]);

  if (!product) {
    return <div className={styles.message}>Produto não encontrado</div>; // mensagem caso o produto não seja encontrado
  }

  return (
    <div className="container">
        <div className={styles.productDetail}>
            <img src={product.image} alt={product.name} className={styles.productDetailImage} />
            <div className={styles.productDetailInfo}>
                <h1>{product.name}</h1>
                <p className={styles.productDetailDescription}>{product.description}</p>
                <p className={styles.productDetailPrice}>R$ {product.price.toFixed(2).replace('.', ',')}</p>
                <button onClick={() => addToCart(product)} className={styles.addToCartBtn}>
                    Adicionar ao Carrinho
                </button>
                {/* link para voltar pra loja */}
                <Link to="/" className={styles.backLink}>&larr; Voltar para a loja</Link>
            </div>
        </div>
    </div>
  );
}

export default ProductDetail;