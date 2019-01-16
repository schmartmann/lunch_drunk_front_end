import React from 'react';

const emojiMap = {
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
  'pizza': '🍕',
  'croissant': '🥐',
  'spoon': '🥄',
  'milk': '🍼',
  'cheese': '🧀',
  'egg': '🥚',
  'bacon': '🥓'
};

const Emoji = ( { label, symbol  } ) => {
  return(
    <span
        className="emoji"
        role="img"
        aria-label={ label ? label : '' }
        aria-hidden={ label ? "false" : "true" }
    >
      { emojiMap[ symbol ] }
    </span>
  );
};

export default Emoji;
