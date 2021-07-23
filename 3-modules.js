// Common JS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const sayHi = require('./5-utils');
const {mario, kryss} = require('./4-names');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');
 
sayHi('Mateo');
sayHi(mario);
sayHi(kryss);
