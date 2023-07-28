import { useEffect, useState } from 'react';
import styles from './Product.module.scss';
import { IProduct } from '@/utils/interfaces/IProduct';
import formatPrice from '@/utils/formatPrice';
import ProductDetails from './ProductDetails/ProductDetails';

export default function Product({ img, title, detail, price }: IProduct) {
  const [formatedPrice, setFormatedPrice] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setFormatedPrice(formatPrice(price));
  }, []);

  return (
    <div className={styles.product__container}>
      <img className={styles.product__img} src={img} alt={`Imagem do produto ${title}`}
      />
      <div className={styles.product__info}>
        <h3 className={styles.product__info_title}>{title}</h3>
        <p className={styles.product__info_detail}>{detail}</p>
        <p className={styles.product__info_price}>{formatedPrice}</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className={styles.product__info_button}
        >
          Ver mais
        </button>
      </div>
      {
        isModalOpen ? <ProductDetails img={img} title={title} detail={detail} price={price} /> : null
      }
    </div>
  );
}
