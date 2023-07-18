import { useEffect, useState } from 'react';
import styles from './HomeCategories.module.scss';
import { StaticImageData } from 'next/image';
import { homeCategoriesMobileImgs, homeCategoriesTabletImgs, homeCategoriesDesktopImgs } from '@/utils/imageImports';

export default function HomeCategories() {
  const [currentImages, setCurrentImages] = useState<StaticImageData[]>([]);

  function loadImgTitle(index: number) {
    switch (index) {
      case 0:
        return <p className={styles.home_categories__item_title}>Bolsas</p>
      case 1:
        return <p className={styles.home_categories__item_title}>Calçados</p>
      case 2:
        return <p className={styles.home_categories__item_title}>Calças</p>
      case 3:
        return <p className={styles.home_categories__item_title}>Camisetas</p>
      case 4:
        return <p className={styles.home_categories__item_title}>Casacos</p>
      case 5:
        return <p className={styles.home_categories__item_title}>Óculos</p>
    }
  }

  useEffect(() => {
    const screenSize = window.innerWidth;

    if (screenSize < 768) {
      setCurrentImages([
        ...homeCategoriesMobileImgs
      ]);
    } else if (screenSize >= 768 && screenSize < 1024) {
      setCurrentImages([
        ...homeCategoriesTabletImgs
      ]);
    } else if (screenSize >= 1024) {
      setCurrentImages([
        ...homeCategoriesDesktopImgs
      ]);
    }
  }, []);

  return (
    <div className={styles.home_categories__container}>
      <h2 className={styles.home_categories__title}>Busque por categoria:</h2>
      {
        currentImages.map((image, index) => (
          <div className={styles.home_categories__item} key={index}>
            <img
              src={image.src}
              className={styles.home_categories__img}
            />
            <div className={styles.home_categories__item_title_container}>
              {
                loadImgTitle(index)
              }
            </div>
          </div>
        ))
      }
    </div>
  );
}
