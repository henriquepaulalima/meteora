import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer__container}>
      <p className={styles.footer__text}>2023 © Desenvolvido por Alura | Projeto fictício sem fins comerciais.</p>
    </footer>
  );
}
