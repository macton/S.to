var S = require('s');

S.to = require('../s.to');

try {
 s;
}
catch ( err ) {
  console.log( 'Error as string: ' + S.to.string( err ) );
}
