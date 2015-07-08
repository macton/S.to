var S = require('s');

var to = {
  int    : function( a ) { return parseInt(a); },
  string : function( a ) { return a.toString(); },
  array  : function( a ) { return Array.isArray(a)?a:[a]; },
};

exports = module.exports = to;
