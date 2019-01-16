import React from 'react';

const emojiTranslator = {
  'home': '🏠',
  'sunrise': '🌄',
  'afternoon': '🌞',
  'sunset': '🌇',
  'tomato': '🍅',
  'bread': '🍞',
  'fork-and-knife': '🍽️',
  'birthday-cake': '🎂',
  'poultry-leg': '🍗',
  'pot-of-food': '🍲',
  'paella': '🥘',
  'burrito': '🌯',
  'hotdog': '🌭',
  'pizza': '🍕'
};


const Emoji = ( { label, symbol  } ) => {
  return(
    <span
        className="emoji"
        role="img"
        aria-label={ label ? label : '' }
        aria-hidden={ label ? "false" : "true" }
    >
      { emojiTranslator[ symbol ] }
    </span>
  );
};

export default Emoji;
