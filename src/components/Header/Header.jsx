import React from 'react';
import logoApple from '../../assets/img/logo-apple.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <img alt="logo Apple" className="logo-img" src={logoApple}></img>
      </div>
    </header>
  );
};

export default Header;
