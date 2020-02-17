import React from 'react';
import styles from './header.module.css';

class Header extends React.Component<any, any> {
  render() {
    const {menuOpen, openMenu} = this.props;

    return (
      <header className={`${styles.header} ${menuOpen ? styles.menuOpen : ''}`}>
        <button className={styles.menuButton} type="button" onClick={openMenu}><span>Menu</span></button>
        <span className={styles.logo}>Metropoles.com</span>
      </header>
    );
  }
}

export default Header;
