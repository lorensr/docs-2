import * as React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import * as logo from '../img/logo.png';
import GithubIcon from '../icons/github';

export default function Header() {
  return (
    <div className="container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src={logo} alt="Accounts-js logo" height="28" />
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/docs/introduction/">
              Docs
            </Link>
            <Link className="navbar-item" to="/examples/">
              Examples
            </Link>
          </div>
          <div className="navbar-end">
            <a
              className="navbar-item"
              href="https://github.com/accounts-js/accounts"
              target="_blank"
            >
              <GithubIcon />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
