"use client";

import styles from './Header.module.scss';
import HeaderLogo from '@/assets/imgs/Mobile/Logo mobile.png';
import menuIcon from '@/assets/imgs/menu-icon.png';
import closeIcon from '@/assets/imgs/close-icon.png';
import { useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

export default function Header() {
  const pathname = usePathname();  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
    } else if (!isMenuOpen) {
      setIsMenuOpen(true);
    }
  }

  return (
    <header className={styles.header__container}>
      <div className={styles.header_left_side__container}>
        <img src={HeaderLogo.src} alt="Logo da Meteora" />
      </div>
      <div className={styles.header_right_side__container}>
        <img
          onClick={handleMenuClick}
          className={styles.open_menu__icon}
          src={menuIcon.src}
          alt="Ícone de abrir menu"
        />
        <div className={classNames({
          [styles.menu__container]: true,
          [styles.open]: isMenuOpen,
        })}>
          <div className={styles.menu_title__container}>
            <img
              onClick={handleMenuClick}
              className={styles.close_menu__icon}
              src={closeIcon.src}
              alt="Ícone de fechar menu"
            />
          </div>
          <ul>
            <li
              className={classNames({ [styles.active]: pathname === '/home' })}
              onClick={handleMenuClick}
            ><Link href='/home'>Home</Link></li>
            <li
              className={classNames({ [styles.active]: pathname === '/stores' })}
              onClick={handleMenuClick}
            ><Link href='/stores'>Nossas lojas</Link></li>
            <li
              className={classNames({ [styles.active]: pathname === '/news' })}
              onClick={handleMenuClick}
            ><Link href='/news'>Novidades</Link></li>
            <li
              className={classNames({ [styles.active]: pathname === '/sales' })}
              onClick={handleMenuClick}
            ><Link href='/sales'>Promoções</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
