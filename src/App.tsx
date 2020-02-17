import React from 'react';
import './general/general.css';
import Header from './general/header';
import Menu from './general/menu';
import Footer from './general/footer';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      menuOpen: false
    };
    this.openMenu = this.openMenu.bind(this)
  }

  openMenu() {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  render() {
    return (
      <div>
        <Header menuOpen={this.state.menuOpen} openMenu={this.openMenu} />
        <Menu />
        <main className={this.state.menuOpen ? 'menu-open' : ''}>
        </main>
        <Footer menuOpen={this.state.menuOpen} />
      </div>
    );
  }
}

export default App;
