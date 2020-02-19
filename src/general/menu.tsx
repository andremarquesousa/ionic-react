import React from 'react';
import styles from './menu.module.css';
import {Link} from "react-router-dom";
import axios from 'axios';

class Menu extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      menuItems: []
    }
  }

  componentDidMount() {
    this.getMenuItems();
  }

  async getMenuItems() {
    const response = await axios.get('https://www.metropoles.com/wp-json/metropoles/v1/menu'});
    let items : any[] = [];
    let {data} = response;
    data = Object.values(data);
    data.map((item: any) => {
      items.push(item);
    })
    this.setState({menuItems: items});
  }

  render() {
    return (
      <nav className={styles.menu}>
        <span className={styles.logo}><Link to="/">Metrópoles.com</Link></span>
        <ul className={styles.list}>
          {this.state.menuItems.map(
            (item: any, key: any) =>
              <li className={styles.listItem} key={item.id} onClick={this.props.openMenu}>
                <Link to={{
                  pathname: `/categoria/${item.id}`,
                  state: {
                    name: item.title
                  }
                }}>{item.title}</Link>
              </li>
          )}
        </ul>
      </nav>
    );
  }
}

export default Menu;
