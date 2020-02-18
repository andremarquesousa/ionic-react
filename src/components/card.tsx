import React from 'react';
import styles from './card.module.css';
import {Link} from "react-router-dom";

class Card extends React.Component<any, any> {
  render() {
    const {item} = this.props;

    return (
        <div className={styles.card}>
            <Link to={`/post/${item.id}`}>
                <h3 className={styles.title}>{item.title}</h3>
                {item.image &&
                    <span className={styles.image}><img src={item.image} alt={item.title} /></span>
                }
                <p className={styles.category}>{item.category} <span className={styles.date}>{item.date_string}</span></p>
            </Link>
        </div>
    );
  }
}

export default Card;
