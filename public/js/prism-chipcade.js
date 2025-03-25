Prism.languages.chipcade = {
  comment: /#.*/,

  label: {
    pattern: /^[A-Za-z_][\w]*:/m,
    alias: 'symbol',
  },

  keyword: /\b(if|else|and|or|return|goto|jumpif)\b/,

  boolean: /\b(true|false)\b/,

  function:
    /\b(setFont|setFontSize|drawText|accelerate|collisionWith|notify|notifyR7|cos|sin|random|notifyCollision)\b/,

  variable: /\b(r[0-9]{1,2}|register|s|sprite|l|layer)\b/i,

  constant: {
    pattern: /\b[0-9]+(?:u|s|f)?\b/,
    alias: 'number',
  },

  operator: /\+|\-|\*|\/|%|=|==|!=|<=?|>=?|&|\||\^|~|<<|>>|!|\?/,

  property:
    /\b(x|y|width|height|active|imageGroup|layerIndex|scale|rotation|imageIndex|animationFrom|animationTo|fps|wrapping|rotationOffset|priority|alpha|speed|maxSpeed|friction|stop|halt|collisionGroup|visible|radius|mode)\b/,

  punctuation: /[{}[\];(),.:]/,

  string: {
    pattern: /"[^"]*"/,
    greedy: true,
  },
};
