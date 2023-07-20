import { useEffect, useState } from 'react';
import styles from './HomeProducts.module.scss';
import { productsImgs } from '@/utils/imageImports';
import Product from './Product/Product';
import { IProduct } from '@/utils/interfaces/IProduct';

export default function HomeProducts() {
  const [productList, setProducList] = useState<IProduct[]>([]);

  useEffect(() => {
    productsImgs.forEach((product, index) => {
      if (index == 0) {
        setProducList((oldProductsList) => [
          ...oldProductsList,
          {
            img: product.src,
            title: 'Bolsa coring',
            detail: 'Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!',
            price: 120.00
          }
        ]);
      } else if (index == 1) {
        setProducList((oldProductsList) => [
          ...oldProductsList,
          {
            img: product.src,
            title: 'Calça Alfaiataria',
            detail: 'Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!',
            price: 180.00
          }
        ]);
      } else if (index == 2) {
        setProducList((oldProductsList) => [
          ...oldProductsList,
          {
            img: product.src,
            title: 'Camiseta Conforto',
            detail: 'Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.',
            price: 70.00
          }
        ]);
      } else if (index == 3) {
        setProducList((oldProductsList) => [
          ...oldProductsList,
          {
            img: product.src,
            title: 'Jaqueta Jeans',
            detail: 'Modelo unissex oversized com gola de camurça. Atemporal e autêntica!',
            price: 150.00
          }
        ]);
      } else if (index == 4) {
        setProducList((oldProductsList) => [
          ...oldProductsList,
          {
            img: product.src,
            title: 'Óculos Redondo',
            detail: 'Armação metálica em grafite com lentes arredondadas. Sem erro!',
            price: 120.00
          }
        ]);
      } else if (index == 5) {
        setProducList((oldProductsList) => [
          ...oldProductsList,
          {
            img: product.src,
            title: 'Tênis Chunky',
            detail: 'Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.',
            price: 250.00
          }
        ]);
      }
    });   
  }, []);

  return (
    <section className={styles.home_products__container}>
      <h2 className={styles.home_products__title}>Produtos que estão bombando!</h2>
      <div className={styles.home_products__list}>
        {
          productList.map((product, index) => (
            <Product key={index} img={product.img} title={product.title} detail={product.detail} price={product.price} />
          ))
        }
      </div>
    </section>
  );
}
