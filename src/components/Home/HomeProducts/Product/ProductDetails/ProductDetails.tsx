import styles from './ProductDetails.module.scss';
import { IProduct } from "@/utils/interfaces/IProduct";
import checkCircleIcon from '@/assets/imgs/check-circle.png';
import closeIcon from '@/assets/imgs/close-icon.png';
import { useEffect, useState } from 'react';
import formatPrice from '@/utils/formatPrice';

export default function ProductDetails({ img, title, detail, price }: IProduct) {
  const [formatedPrice, setFormatedPrice] = useState('');

  useEffect(() => {
    setFormatedPrice(formatPrice(price));
  }, []);

  return (
    <div className={styles.product_details__container}>
      <div className={styles.product_details__header}>
        <img
          className={styles.product_details__header_icon}
          src={checkCircleIcon.src}
          alt="Ícone do título do header"
        />
        <p>Confira detalhes sobre o produto</p>
        <button>
          <img src={closeIcon.src} alt="Ícone do botão de sair do modal" />
        </button>
      </div>
      <div className={styles.product_details__content}>
        <img
          className={styles.product_details__img}
          src={img}
          alt={`Imagem do produto ${title}`} />
        <div className={styles.product_details__info}>
          <div className={styles.product_details__info_details}>
            <h2>{title}</h2>
            <p className={styles.product_details__info_details_detail}>{detail}</p>
            <p className={styles.product_details__info_details_price}>{formatedPrice}</p>
            <p className={styles.product_details__info_details_seller}>Vendido e entregue por Riachuelo</p>
          </div>
          <div className={styles.product_details__colors}>
            <h3>Cores:</h3>
            <ul>
              <li>
                <span className={styles.product_details__colors_blue}></span>
                <p>Azul claro</p>
              </li>
              <li>
                <span className={styles.product_details__colors_white}></span>
                <p>Offwhite</p>
              </li>
              <li>
                <span className={styles.product_details__colors_black}></span>
                <p>Preto</p>
              </li>
            </ul>
          </div>
          <div className={styles.product_details__sizes}>
            <h3>Tamanhos:</h3>
            <ul>
              <li>
                <input type="checkbox" />
                <p>P</p>
              </li>
              <li>
                <input type="checkbox" />
                <p>PP</p>
              </li>
              <li>
                <input type="checkbox" />
                <p>M</p>
              </li>
              <li>
                <input type="checkbox" />
                <p>G</p>
              </li>
              <li>
                <input type="checkbox" />
                <p>GG</p>
              </li>
            </ul>
          </div>
          <button className={styles.product_details__add_to_bag_btn}>Adicionar à sacola</button>
        </div>
      </div>
    </div>
  );
}
