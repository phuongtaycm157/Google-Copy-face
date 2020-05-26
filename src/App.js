import React from 'react';

import './App.css';
import GoogleControl from './components/GoogleControl';
import GoogleMainSearch from './components/GoogleMainSearch';
import GoogleFooterService from './components/GoogleFooterService';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: 'Nguyễn Phương Tây',
        email: 'tay@gmail.com', 
        avatarUrl: 'https://cdn.glitch.com/d408507d-49c6-4771-ad43-408bf2b66c1a%2Favatar.jpg?v=1590485011175'
      }
    }
  }
  render(){
    const { user } = this.state;
    return (
      <div className="App">
        <header>
          <GoogleControl user={user} />
        </header>
        <section>
          <GoogleMainSearch />
        </section>
        <footer>
          <GoogleFooterService />
        </footer>
      </div>
    );
  }
}

export default App;
