import React, {Component} from 'react';
import './GoogleControl.css';
import MenuIcon from './grid.svg';

class GoogleControl extends Component {

  render () {
    const { name, email, avatarUrl } = this.props.user; 
    return (
      <div className="GoogleControl">
        <a href={'/gmail?mail=' + email} className="link">Gmail</a>
        <a href={'/gmail?mail=' + email} className="link">Hình ảnh</a>
        <img src={MenuIcon} alt='icon' className="menu-icon" />
        <div className="avatar" style={{backgroundImage: 'url('+avatarUrl+')'}}></div>
      </div>
    )
  }
}

export default GoogleControl;