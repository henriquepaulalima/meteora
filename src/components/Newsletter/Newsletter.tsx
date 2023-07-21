import styles from './Newsletter.module.scss';

export default function Newsletter() {
  return (
    <div className={styles.newsletter__container}>
      <div className={styles.newsletter__form}>
        <p className={styles.newsletter__text}>Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!</p>
        <div className={styles.newsletter__input_container}>
          <input className={styles.newsletter__input} type="email" placeholder='Digite seu email' />
          <button className={styles.newsletter__button}>Enviar</button>
        </div>
      </div>
    </div>
  );
}
