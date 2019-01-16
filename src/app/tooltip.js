import './tooltip.scss';

import React, { Component } from 'react';

const Tooltip = ( { hover, text } ) => {
  return(
    <div className={ `tooltip ${ hover ? 'visible' : 'hidden' }` }>
      <span className="text">
        { text }
      </span>
    </div>
  );
};

export default Tooltip;
