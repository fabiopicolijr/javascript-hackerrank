// /^[a-zA-Z]$/ - only returns true for single characters.
const isAlpha = (str) => /^[a-zA-Z]$/.test(str);

// /^[a-zA-Z()]*$/ - also returns true for an empty string
const isAlphaAndEmpty = (str) => /^[a-zA-Z]*$/.test(str);

// /^[a-zA-Z() ]+$/ - also allows spaces
const isAlphaAndSpaces = (str) => /^[a-zA-Z ]+$/.test(str);
