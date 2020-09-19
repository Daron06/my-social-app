import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <NavLink to="/">
          <li className="btn">Моя страница</li>
        </NavLink>
        <NavLink to="/news">
          <li className="btn">Новости</li>
        </NavLink>
        <NavLink to="/messages">
          <li className="btn">Сообщения</li>
        </NavLink>
        <NavLink to="/friends">
          <li className="btn ">Друзья</li>
        </NavLink>
        <NavLink to="/сommunities">
          <li className="btn">Сообщества</li>
        </NavLink>
        <NavLink to="/photos">
          <li className="btn">Фотографии</li>
        </NavLink>
        <NavLink to="/music">
          <li className="btn">Музыка</li>
        </NavLink>
        <NavLink to="/games">
          <li className="btn">Игры</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
