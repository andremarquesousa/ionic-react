import React from 'react';
import './general/general.css';
import Header from './general/header';
import Menu from './general/menu';
import Footer from './general/footer';
import Post from './pages/post';
import Home from './pages/home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

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
      <Router>
        <Header menuOpen={this.state.menuOpen} openMenu={this.openMenu} />
        <Menu />
        <main className={this.state.menuOpen ? 'menu-open' : ''}>
          <Switch>
            <Route path="/post/:postId">
              <Post />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
        <Footer menuOpen={this.state.menuOpen} />
      </Router>
    );
  }
}

export default App;
