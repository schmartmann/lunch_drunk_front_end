import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navigation = () => (
  <nav className="navigation">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/time_periods">Time Periods</Link>
      </li>
      <li>
        <Link to="/ingredients">Ingredients</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
