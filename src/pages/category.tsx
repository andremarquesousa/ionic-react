import React from 'react';
import axios from 'axios';
import styles from './category.module.css';
import News from '../components/news';

class Category extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        const {categoryId} = this.props.match.params;
        this.getPosts(categoryId);
    }

    componentWillUpdate() {
        const {categoryId} = this.props.match.params;
        this.getPosts(categoryId);
    }

    async getPosts(category: any) {
        const response = await axios.get(`https://www.metropoles.com/wp-json/metropoles/v1/last_news?category=${category}`);
        this.setState({posts: response.data});
    }

    render() {
        const { name } = this.props.location.state;
        const { posts } = this.state;

        return (
            <div>
               <h2 className={styles.title}>{name}</h2>
               <News posts={posts} />
            </div>
        );
    }
}

export default Category;
