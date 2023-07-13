import styles from './HomeBanner.module.scss';
import mobileBannerImg1 from '@/assets/imgs/Mobile/Banner carousel 1 _ 375.png';
import mobileBannerImg2 from '@/assets/imgs/Mobile/Banner carousel 2 _ 375.png';
import mobileBannerImg3 from '@/assets/imgs/Mobile/Banner carousel 3 _ 375.png';
import tabletBannerImg1 from '@/assets/imgs/Tablet/Banner carousel 1 _ 768.png';
import tabletBannerImg2 from '@/assets/imgs/Tablet/Banner carousel 2 _ 768.png';
import tabletBannerImg3 from '@/assets/imgs/Tablet/Banner carousel 3 _ 768.png';
import desktopBannerImg1 from '@/assets/imgs/Desktop/Banner carousel 1 _ 1440 (1).png';
import desktopBannerImg2 from '@/assets/imgs/Desktop/Banner carousel 2 _ 1440 (1).png';
import desktopBannerImg3 from '@/assets/imgs/Desktop/Banner carousel 3 _ 1440 (1).png';
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
        mobileBannerImg1,
        mobileBannerImg2,
        mobileBannerImg3,
      ]);
    } else if (screenSize >= 768 && screenSize < 1024) {
      setCurrentImages([
        tabletBannerImg1,
        tabletBannerImg2,
        tabletBannerImg3,
      ]);
    } else if (screenSize >= 1024) {
      setCurrentImages([
        desktopBannerImg1,
        desktopBannerImg2,
        desktopBannerImg3,
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
