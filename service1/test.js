const _ = require('lodash');
function greet(greeting, punctuation) {
  console.log(greeting + ' ' + this.user + punctuation);
}

var object = { 'user': 'fred' , greet};

var bound = _.bind(greet, object, 'hi');
bound('!');
// => 'hi fred!'
let bound1 = _.partial(bound, "hi man");
bound1('!!!');
// Bound with placeholders.
var bound = _.bind(greet, object, _, _);
bound('hi');
console.log('?' + _);
