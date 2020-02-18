import React from 'react';
import axios from 'axios';
import styles from './post.module.css';

class Post extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            item: ''
        }
    }

    componentDidMount() {
        const {postId} = this.props.match.params;
        this.getContent(postId);
    }

    async getContent(id: any) {
        const response = await axios.get(`https://www.metropoles.com/wp-json/metropoles/v1/posts/${id}`);
        this.setState({item: response.data});
    }

    render() {
        const item = this.state.item;

        return (
            <div>
                {item.image &&
                    <span className={styles.image}><img src={item.image} alt={item.title} /></span>
                }
                <div className={styles.middle}>
                    <h2 className={styles.title}>{item.title}</h2>
                    <h3 className={styles.subTitle} dangerouslySetInnerHTML={{__html: item.excerpt}} />
                    <div className={styles.authors}>
                        {item && item.authors.map(
                            (name: any, index: any) =>
                                <span key={index}>{name}</span>
                        )}
                    </div>
                    <span className={styles.date}>{item.date}</span>
                    <div className={styles.content} dangerouslySetInnerHTML={{__html: item.content}} />
                </div>
            </div>
        );
    }
}

export default Post;
