import React from 'react';
import Card from './card';
import styles from './news.module.css';

class News extends React.Component<any, any> {
  render() {
    const {posts} = this.props;

    return (
      <div className={styles.news}>
        {posts.map(
            (item: any, index: any) =>
                <Card item={item} key={index} />
        )}
      </div>
    );
  }
}

export default News;
