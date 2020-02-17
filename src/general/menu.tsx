import React from 'react';
import styles from './menu.module.css';

class Menu extends React.Component {
  render() {
    const menuItems = ['Brasil', 'Distrito Federal', 'Mundo', 'Saúde', 'Vida & Estilo'];

    return (
      <nav className={styles.menu}>
        <span className={styles.logo}>Metrópoles.com</span>
        <ul className={styles.list}>
        {menuItems.map((item, key) =>
          <li className={styles.listItem} key={key}>{item}</li>
        )}
        </ul>
      </nav>
    );
  }
}

export default Menu;
