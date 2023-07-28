import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import css from './Layout.module.css'

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

const Layout = () => {
  return (
    <div>
      <header className={css.header}>
        <h1>MOVIE APP</h1>
        <nav>
          <ul className={css.navList}>
            <li>
              <StyledLink to="/" >
                Home
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;


