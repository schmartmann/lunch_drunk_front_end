import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './stylesheets/nav.scss'

import Emoji from '../components/emoji';

const Navigation = () => (
  <nav className="navigation">
    <ul>
      <li>
        <Link to="/">
          <Emoji symbol="home" label="home"/>
          Home
          <Emoji symbol="home" label="home"/>
        </Link>
      </li>
      <li>
        <Link to="/time_periods">
          <Emoji symbol="sunrise" label="sunrise"/>
          Time
          <Emoji symbol="afternoon" label="afternoon"/>
          Periods
          <Emoji symbol="sunset" label="sunset"/>
        </Link>
      </li>
      <li>
        <Link to="/ingredients">
          <Emoji symbol="tomato" label="sunset"/>
          Ingredients
          <Emoji symbol="bread" label="bread"/>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
