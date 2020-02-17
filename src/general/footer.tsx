import React from 'react';
import styles from './footer.module.css';

class Footer extends React.Component<any, any> {
  render() {
    const {menuOpen} = this.props;

    return (
      <footer className={`${styles.footer} ${menuOpen ? styles.menuOpen : ''}`}>
      </footer>
    );
  }
}

export default Footer;
