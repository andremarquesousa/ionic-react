import React from 'react';
import {Link} from "react-router-dom";
// 'https://www.metropoles.com/wp-json/metropoles/v1/last_news?tag=bsb60-documentario',

class Home extends React.Component<any, any> {
  render() {
    return (
      <div>
        <h2>home</h2>
        <p><Link to="/post/1">Post</Link></p>
      </div>
    );
  }
}

export default Home;
