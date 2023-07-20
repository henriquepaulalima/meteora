import { useEffect, useState } from 'react';
import styles from './Product.module.scss';
import { IProduct } from '@/utils/interfaces/IProduct';

export default function Product({ img, title, detail, price }: IProduct) {
  return (
    <div className={styles.product__container}>
      <img src={img} alt={`Imagem do produto ${title}`}
      />
      <div className={styles.product__info}>
        <h3 className={styles.product__info_title}>{title}</h3>
        <p className={styles.product__info_detail}>{detail}</p>
        <p className={styles.product__info_price}>{price}</p>
        <button className={styles.product__info_button}>Ver mais</button>
      </div>
    </div>
  );
}
