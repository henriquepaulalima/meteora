import styles from './HomeBanner.module.scss';
import { homeBannerMobileImgs, homeBannerTabletImgs, homeBannerDesktopImgs } from '@/utils/imageImports';
import { useEffect, useState } from 'react';
import { StaticImageData } from 'next/image';
import classNames from 'classnames';

export default function HomeBanner() {
  const [currentImages, setCurrentImages] = useState<StaticImageData[]>([]);
  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
    const screenSize = window.innerWidth;

    if (screenSize < 768) {
      setCurrentImages([
        ...homeBannerMobileImgs
      ]);
    } else if (screenSize >= 768 && screenSize < 1024) {
      setCurrentImages([
        ...homeBannerTabletImgs
      ]);
    } else if (screenSize >= 1024) {
      setCurrentImages([
        ...homeBannerDesktopImgs
      ]);
    }
  }, []);

  return (
    <div className={styles.home_banner__container}>
      {
        currentImages.map((currentImage, index) =>
          <img
            key={index}
            src={currentImage.src}
            className={classNames({
              [styles.home_banner__image]: true,
              [styles.active]: index == activeImg,
            })}
            alt="Imagem do carrossel do banner"
          />
        )
      }
      <div className={styles.home_banner__carousel_controls}>
        <button
          onClick={() => setActiveImg(activeImg - 1)}
          disabled={activeImg <= 0}
        >
          <i className='material-icons'>arrow_left</i>
        </button>
        <button
          onClick={() => setActiveImg(activeImg + 1)}
          disabled={activeImg == currentImages.length - 1}
        >
          <i className='material-icons'>arrow_right</i>
        </button>
      </div>
      <div className={styles.home_banner__carousel_indicators}>
        {
          currentImages.map((image, index) => (
            <i
              key={image.src}
              className={classNames({
                "material-icons": true,
                [styles.home_banner__carousel_indicators_item]: true,
                [styles.active]: index == activeImg,
              })}
              onClick={() => setActiveImg(index)}
            >horizontal_rule</i>
          ))
        }
      </div>
    </div>
  );
}
