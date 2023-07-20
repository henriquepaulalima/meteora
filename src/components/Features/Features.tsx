import styles from './Features.module.scss';
import pixIcon from '@/assets/imgs/x-diamond.png';
import tradeIcon from '@/assets/imgs/arrow-repeat.png';
import sustainabilityIcon from '@/assets/imgs/flower1.png';

export default function Features() {
  return (
    <div className={styles.features__container}>
      <h2 className={styles.features__title}>Conheça todas as nossas facilidades</h2>
      <div className={styles.features__items_container}>
        <div className={styles.features__item}>
          <img src={pixIcon.src} className={styles.features__item_img} alt="Ícone do pix" />
          <div className={styles.features__item_info_container}>
            <h3>PAGUE PELO PIX</h3>
            <p>Ganhe 5% OFF em pagamentos via PIX</p>
          </div>
        </div>
        <div className={styles.features__item}>
          <img src={tradeIcon.src} className={styles.features__item_img} alt="Ícone de troca" />
          <div className={styles.features__item_info_container}>
            <h3>TROCA GRÁTIS</h3>
            <p>Fique livre para trocar em até 30 dias.</p>
          </div>
        </div>
        <div className={styles.features__item}>
          <img src={sustainabilityIcon.src} className={styles.features__item_img} alt="Ícone do pix" />
          <div className={styles.features__item_info_container}>
            <h3>SUSTENTABILIDADE</h3>
            <p>Moda responsável, que respeita o meio ambiente.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
