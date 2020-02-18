import React from 'react';
import News from '../components/news';
import axios from 'axios';

class Home extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        this.getPosts();
    }

    async getPosts() {
        const response = await axios.get('https://www.metropoles.com/wp-json/metropoles/v1/last_news');
        this.setState({posts: response.data});
    }

    render() {
        return (
            <div>
                <News posts={this.state.posts} />
            </div>
        );
    }
}

export default Home;
